import {login_service} from "../services/auth_services"



export const login_provider = async (body, updateSignInSuccess, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup) => {

    updateLoadingPopup(true);

    try {

        let response = await login_service(body);

        if (response.status === 200 || response.status === 201) {

            updateLoadingPopup(false);

            updateSignInSuccess(true)

            setTimeout(() => {

                updateSignInSuccess(false)

            }, 2000)
            

            navigate("/dashboard");

        } else {

            updateLoadingPopup(false)
            updateErrorText(response.data["responseMessage"]);

            updateErrorPopup(true)
            setTimeout(() => {
                updateErrorPopup(false)
            }, 2000)
        }

    } catch (err) {

        updateLoadingPopup(false);

        const errorMessage = err.response.data["responseMessage"];

        updateErrorText(errorMessage);

        console.log("Error :", errorMessage);

        updateErrorPopup(true);

        setTimeout(() => {
            updateErrorPopup(false);
        }, 2000);
    }
}

// export const login_provider = async (body, dispatch, navigate, updateLoadingPopup, updateErrorText, updateErrorPopup) => {
//   updateLoadingPopup(true);

//   try {
//     let response = await login_service(body);

//     if (response.status === 200 || response.status === 201) {
//       updateLoadingPopup(false);

//       dispatch(login(response.data)); // ✅ Update Redux user state

//       // Navigates automatically when useEffect detects user
//     } else {
//       updateLoadingPopup(false);
//       updateErrorText(response.data["responseMessage"]);
//       updateErrorPopup(true);
//       setTimeout(() => updateErrorPopup(false), 2000);
//     }
//   } catch (err) {
//     updateLoadingPopup(false);
//     const errorMessage = err?.response?.data?.["responseMessage"] || "Login failed.";
//     updateErrorText(errorMessage);
//     updateErrorPopup(true);
//     setTimeout(() => updateErrorPopup(false), 2000);
//   }
// };
