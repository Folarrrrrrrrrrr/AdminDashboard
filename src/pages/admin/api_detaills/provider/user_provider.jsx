import {
  dashboard_Service,
  getAllUsersService,
  getprofileService,
  getRegCountriesService,
  getSuspendedUsersService,
  getUserDetailsService,
  suspendUserService,
  TransactionSummaryService,
  updatePicture_Service,
  updateProfile_Service,
} from "../services/user_services";

export const getAllUsersProvider = async ({
  updateUsers,
  updateErrorPopup,
  updateErrorText,
}) => {
  try {
    let response = await getAllUsersService();

    if (response.status == 200 || response.status == 201) {
      updateUsers(response.data["responseBody"]);
    } else {
      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

    
      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateErrorText(
      err.response ? err.response.data.responseMessage : "Failed to fetch Users"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const getUserDetailsProvider = async ({
  updateUserDetails,
  phone,
  updateErrorText,
  updateErrorPopup,
}) => {
  try {
    let response = await getUserDetailsService(phone);

    if (response.status == 200 || response.status == 201) {
      updateUserDetails(response.data["responseBody"]);
    } else {
      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (error) {
    updateErrorText(
      error.response
        ? error.response.data.responseMessage
        : "Failed to load user details"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const getSuspendedUsersProvider = async ({
  updateSuspended,
  updateErrorText,
  updateErrorPopup,
}) => {
  try {
    let response = await getSuspendedUsersService();

    if (response.status == 200 || response.status == 201) {
      updateSuspended(response.data["responseBody"]);
    } else {
      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateErrorText(
      err.response
        ? err.response.data.responseMessage
        : "Failed to fetch Suspended Users"
    );
    console.log("Error :", err);
    updateErrorPopup(true);
    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const postSuspendProvider = async (
  body,
  updateLoadingPopup,
  updateSuspendUserSuccess,
  updateSuspendUserPopup,
  updateErrorPopup,
  updateErrorText
) => {
  try {
    updateLoadingPopup(true);

    const response = await suspendUserService(body);

    if (response.status == 200 || response.status == 201) {
      updateLoadingPopup(false);

      updateSuspendUserPopup(false);

      updateSuspendUserSuccess(true);
    } else {
      updateLoadingPopup(false);

      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateLoadingPopup(false);

    updateErrorText(
      err.response ? err.response.data.responseMessage : "An error occurred"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const getRegCountriesProvider = async ({
  updateCountries,
  updateErrorText,
  updateErrorPopup,
}) => {
  try {
    let response = await getRegCountriesService();

    if (response.status == 200 || response.status == 201) {
      updateCountries(response.data["responseBody"]);
      console.log(response);
    } else {
      updateLoadingPopup(false);

      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateErrorText(
      err.response
        ? err.response.data.responseMessage
        : "Failed to fetch registered countries"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const getprofileProvider = async ({
  email,
  updateProfile,
  updateErrorPopup,
  updateErrorText,
}) => {
  try {
    let response = await getprofileService(email);

    if (response.status == 200 || response.status == 201) {
      updateProfile(response.data["responseBody"]);
    } else {
      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (error) {
    updateErrorText(
      error.response
        ? error.response.data.responseMessage
        : "failed to fetch profile data"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const updateProfile_Provider = async (
  email,
  body,
  updateLoadingPopup,
  updateErrorPopup,
  updateErrorText,
  updateProfilePopup
) => {
  console.log("Email being passed:", email); // Check the value of email
  try {
    updateLoadingPopup(true);

    const response = await updateProfile_Service(email, body);

    if (response.status == 200 || response.status == 201) {
      updateLoadingPopup(false);

      updateProfilePopup(true);
    } else {
      updateLoadingPopup(false);
      updateErrorText(response.data["responseMessage"]);

      console.log("Error :", err);

      updateErrorPopup(true);
      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateLoadingPopup(false);

    updateErrorText(err.response.data["responseMessage"]);

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const dashboardProvider = async ({
  updateDashboard,
  updateErrorText,
  updateErrorPopup,
}) => {
  try {
    let response = await dashboard_Service();

    if (response.status == 200 || response.status == 201) {
      updateDashboard(response.data["responseBody"]);
    } else {
      updateLoadingPopup(false);

      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);
      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (error) {
    updateLoadingPopup(false);

    updateErrorText(error.responseMessage);

    updateErrorPopup(true);
    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);

    console.log("Error :", error);
  }
};

export const updatePicture_Provider = async (
  email,
  body,
  updateLoadingPopup,
  updateErrorPopup,
  updateErrorText,
  updateProfilePopup
) => {
  console.log("Email being passed:", email); // Check the value of email

  try {
    updateLoadingPopup(true);

    const response = await updatePicture_Service(email, body);

    if (response.status == 200 || response.status == 201) {
      updateLoadingPopup(false);
    } else {
      updateLoadingPopup(false);
      updateErrorText(response.data["responseMessage"]);

      console.log("Error :", err);

      updateErrorPopup(true);
      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateLoadingPopup(false);

    console.log("Error :", err);
    updateErrorText(
      err.response
        ? err.response.data["responseMessage"]
        : "An unexpected error occurred"
    );
    updateErrorPopup(true);
    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};

export const transactionSummaryProvider = async ({
  updateTransaction,
  updateErrorText,
  updateErrorPopup,
}) => {
  try {
    let response = await TransactionSummaryService();

    if (response.status == 200 || response.status == 201) {
      updateTransaction(response.data["responseBody"]);
    } else {
      updateErrorText(response.data["responseMessage"]);

      updateErrorPopup(true);

      setTimeout(() => {
        updateErrorPopup(false);
      }, 2000);
    }
  } catch (err) {
    updateErrorText(
      err.response ? err.response.data.responseMessage : "An error occurred"
    );

    updateErrorPopup(true);

    setTimeout(() => {
      updateErrorPopup(false);
    }, 2000);
  }
};
