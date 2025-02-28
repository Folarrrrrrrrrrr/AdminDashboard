import {
  dashboard,
  getRegCountries,
  getSuspendedUsers,
  getUserDetails,
  getUsers,
  profile,
  suspendUser,
  transactionSummary,
  updatePicture,
  updateProfile,
} from "../constant/url_path";


import axios from "axios";

import { authAxios } from "./auth_services";

export const getAllUsersService = async () => {
  const response = await authAxios.get(getUsers);

  return response;
};

export const getUserDetailsService = async (phone) => {
  const response = await authAxios.get(`${getUserDetails}/${phone}`);

  // console.log(response);

  return response;
};

export const getSuspendedUsersService = async () => {
  console.log("Player Initiated");

  const response = await authAxios.get(getSuspendedUsers);

  console.log(response.responseBody);

  return response;
};

export const suspendUserService = async (body) => {
  const response = await authAxios.post(suspendUser, body);

  // console.log(response);

  return response;
};

export const getRegCountriesService = async () => {
  const response = await authAxios.get(getRegCountries);

  // console.log(response);

  return response;
};

export const getprofileService = async (email) => {
  const response = await axios.get(`${profile}/${email}`);

  // console.log(response);

  return response;
};

export const updateProfile_Service = async (email, body) => {
  const response = await axios.put(`${updateProfile}/${email}`, body);

  // console.log(response);

  return response;
};

export const dashboard_Service = async () => {
  const response = await authAxios.get(dashboard);

  // console.log(response);

  return response;
};

export const updatePicture_Service = async (email, body) => {
  const response = await axios.put(`${updatePicture}/${email}`, body);

  // console.log(response);

  return response;
};

export const TransactionSummaryService = async () => {
  const response = await axios.get(transactionSummary);

  // console.log(response);

  return response;
};
