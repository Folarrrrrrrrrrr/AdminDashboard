import React from 'react'
import { login_url, getUserDetails, getSuspendedUsers, transactionSummary,
    getFreezedUsers, suspendUser, getRegCountries, profile } from "../constant/url_path"
import axios from 'axios';
import { setToken, setEmail, getToken} from '../constant/local_storage';



export const login_service = async (body) => {
    console.log("Login Initiated")

    const response = await axios.post(login_url, body);

    if (response.status == 200 || response.status == 201) {


                //Assuming the token is in response.data.token
                if (response.data["responseBody"]) {

                    setToken(response.data["responseBody"].accessToken);
        
                    // Store the email in local storage
                    if (body.email) {
                        setEmail(body.email);
                    }
                } else {
                    console.warn('Token not found in response');
                }
                console.log(response.data["responseBody"].accessToken);

        return response;

    } else {

        // updateErrorText(response.data["responseMessage"])
        console.log("Login failed", response.data)
  
    }

    return response;
};

// Modify other service functions to include the token in the request header
 export const authAxios = axios.create({

    headers: {
        Authorization: `Bearer ${getToken()}`
    }
});


// export const getUserDetailsService = async (phone) => {

//     const response = await axios.get(`${getUserDetails}/${phone}`);


//     console.log(response);
    
//     return response;
// };

// export const getSuspendedUsersService = async () => {

//     console.log("Player Initiated")

//     const response = await axios.get(getSuspendedUsers);

//     console.log(response);
    
//     return response;
// };


// export const suspendUserService = async (body) => {

//     const response = await axios.post(suspendUser, body);

//     console.log(response);
    

//     return response;
// };

// export const getRegCountriesService = async ()=>{

//     const response = await axios.get(getRegCountries)

//     console.log(response);


//     return response
    
// }

// export const getprofileService = async (email) => {

//     const response = await axios.get(`${profile}/${email}`);


//     console.log(response);
    
//     return response;
// };



// export const TransactionSummaryService = async () => {

//     const response = await axios.get(transactionSummary);


//     console.log(response);
    
//     return response;
// };