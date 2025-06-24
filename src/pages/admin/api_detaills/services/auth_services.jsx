import React from 'react'
import { login_url, getUserDetails, getSuspendedUsers, transactionSummary,
    getFreezedUsers, suspendUser, getRegCountries, profile } from "../constant/url_path"
import axios from 'axios';
import { setToken, setEmail, getToken,getRefreshToken, setRefreshToken, clearTokens} from '../constant/local_storage';
import { base_url } from '../constant/url_path';

export const login_service = async (body) => {
    console.log("Login Initiated");

    try {
        const response = await axios.post(login_url, body);

        if (response.status === 200 || response.status === 201) {
            const responseBody = response.data.responseBody;
            
            if (responseBody) {
                const { accessToken, refreshToken } = responseBody;
                
                // Store tokens securely
                setToken(accessToken);
                setRefreshToken(refreshToken);

                // Store email in local storage for persistence
                if (body.email) {
                    setEmail(body.email);
                }

                console.log("Access Token:", accessToken);
                console.log("Refresh Token:", refreshToken);
            } else {
                console.warn("Tokens not found in response");
            }

            return response;
        } else {
            console.log("Login failed", response.data);
        }
    } catch (error) {
        console.error("Login error:", error);
    }

    return null;
};


export const refreshToken_service = async () => {
    try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) return null;

        const response = await axios.post("https://your-api.com/auth/refresh", {
            refreshToken,
        });

        if (response.status === 200) {
            const { accessToken, refreshToken: newRefreshToken } = response.data;
            setToken(accessToken);
            setRefreshToken(newRefreshToken); // Store the new refresh token
            return accessToken;
        } else {
            console.log("Refresh token failed", response.data);
            clearTokens();
            return null;
        }
    } catch (error) {
        console.error("Token refresh error:", error);
        clearTokens();
        return null;
    }
};



// Modify other service functions to include the token in the request header
 export const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});

const axiosInstance = axios.create({
    baseURL: base_url
});

// Request interceptor - Attach token to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor - Refresh token on 401 error
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newAccessToken = await refreshToken_service();

            if (newAccessToken) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } else {
                console.log("Session expired, logging out.");
                clearTokens();
                window.location.href = "/login"; // Redirect to login
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;


