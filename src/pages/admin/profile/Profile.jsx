import React, { useCallback, useEffect, useState } from 'react'
import Style from './Profile.module.css'
import profile_img from '../../../assets/images/profile_img.png'
import edit from '../../../assets/svg/edit.svg'
import white_edit from '../../../assets/svg/white_edit.svg'
import capture_two from '../../../assets/svg/capture_two.svg'
import Input from '../../../components/SignUp_input/Input'
import Button from '../../../components/button/Button'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'
import { getEmail } from '../api_detaills/constant/local_storage'
import { getprofileProvider, updatePicture_Provider, updateProfile_Provider } from '../api_detaills/provider/user_provider'
import { useParams } from 'react-router-dom';




const Profile = () => {


    // Hook to manage error text and popup state
    const { updateErrorText, updateErrorPopup, updateLoadingPopup, updateProfilePopup } = PopupContextHook()


    // Toggle edit state
    const editFun = () => {
        setEditState(!editState)
    }

    // Retrieve email from local storage
    const email = getEmail()

    // State to manage edit mode and image URL
    const [editState, setEditState] = useState(false)

    const [imgUrl, setImgUrl] = useState({ profilePicture: '' });

    // State to manage profile update fields
    const [profileUpdate, setProfileUpdate] = useState({
        fullname: "",
        phone_number: "",
    })

    const [profile, setProfile] = useState({
        details: {}
    })


    useEffect(() => {

        getprofileProvider({

            updateProfile: (data) => {

                setProfile({

                    details: data.details
                })
            },
            email,
            updateErrorPopup,
            updateErrorText,
        })

    }, [])

    console.log(profile);

    const { details } = profile



    const MAX_FILE_SIZE_MB = 1.5;
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;


    useEffect(() => {

        return () => {
            // Cleanup the object URL when the component unmounts
            if (imgUrl.profilePicture) URL.revokeObjectURL(imgUrl.profilePicture);
        };
    }, [imgUrl.profilePicture]);



    const handleFile = useCallback((e) => {

        const file = e.target.files[0];

        if (!file) {
            console.error('No file selected');
            return;
        }

        if (file.size > MAX_FILE_SIZE_BYTES) {
            alert(`File size exceeds ${MAX_FILE_SIZE_MB} MB. Please select a smaller file.`);
            return;
        }

        const url = URL.createObjectURL(file);
        setImgUrl((prevState) => ({ ...prevState, profilePicture: url }));
        changePicture(file);

    }, []);


    const changePicture = (file) => {
        const body = new FormData();
        body.append('profilePicture', file); // Match the key name from Postman

        updatePicture_Provider(email, body,updateLoadingPopup, updateErrorPopup, updateErrorText );

    };


    // Handle input changes for profile update

    const HandleChange = (e) => {

        const { value, name } = e.target

        setProfileUpdate((prev) => ({
            ...prev,
            [name]: value

        }))
    }


    // Handle form submission
    const HandleSubmit = (e) => {

        e.preventDefault(e)

        let email = details.email


        let body = profileUpdate

        updateProfile_Provider(email, body, updateErrorPopup, updateErrorText, updateLoadingPopup, updateProfilePopup)

    }


    //Conditionally rendering profiles logics based on id


  const { id } = useParams<{ id: string }>('');
  const [dynamicProfile, setDynamicProfile] = useState<any>(null);
    
  useEffect(() => {
    const profileData = profiles.find(p => p.id === parseInt(id || '', 10));
    setProfile(profileData);
  }, [id]);

//   if (!profile) {
//     return <div>Loading...</div>;
//   }

    return (
        <div id={Style.Profile_mainDiv}>

            <div id={Style.Profile_wrapperDiv}>

                <div id={Style.profile_detailsDiv}>

                    {/* Profile details section */}

                    <div id={Style.Profile_firstline}>

                        <img src={profile_img} alt="" />
                        <p id={Style.nameText}>{details.fullname}</p>
                        <p id={Style.positionText}>Super Admin</p>
                        <p id={Style.status}><div id={Style.statusDiv}></div> Online</p>

                    </div>

                    {/* Account creation and last login info */}

                    <div className={Style.log_InfoDiv}>

                        <p className={Style.loggedText}>Date of Creation</p>
                        <p className={Style.dateText}>24- Oct-2024</p>

                    </div>

                    <div className={Style.log_InfoDiv}>
                        <p className={Style.loggedText}>Last Login</p>
                        <p className={Style.dateText}>24- Oct-2024</p>
                    </div>

                    <div id={Style.lastlineDiv}>
                        <p className={Style.loggedText}>Status</p>
                        <p id={Style.activeText}>{details.status}</p>
                    </div>
                </div>

                <div id={Style.settings_Div}>

                    {/* Account settings button */}

                    <div id={Style.accountDiv}>
                        <button id={Style.accountText}>Account Settings</button>
                    </div>

                    <div id={Style.setting_img_EditDiv}>

                        {/* Display profile image */}

                        {imgUrl ? <img id={Style.profile_img} src={imgUrl.profilePicture} alt="" /> : <img id={Style.profile_img} src={profile_img} alt="" />}

                        {/* Edit button */}

                        <div onClick={() => editFun()}>
                            {editState ? <p id={Style.editText} style={{ color: "#FFFFFF", backgroundColor: "#0E093C" }}><img src={white_edit} alt="" /> Edit</p> : <p id={Style.editText} style={{ color: "#464646" }}><img src={edit} alt="" /> Edit</p>}
                        </div>
                    </div>

                    {/* Image upload section when in edit mode */}

                    {
                        editState &&

                        <div id={Style.imageUpload}>

                            <label htmlFor="input_file"><img src={capture_two} alt="" />Change Cover</label>
                            <input type="file" id="input_file" name="imgURL" onChange={handleFile} />
                        </div>
                    }

                    {/* Display user information or edit form based on edit state */}

                    {
                        !editState &&

                        <div id={Style.infoDetails_Div}>

                            <div id={Style.settings_informations}>
                                <div>
                                    <p className={Style.settings_headerText}>Full Name</p>
                                    <p className={Style.settings_detailsText}>{details.fullname}</p>
                                </div>

                            </div>

                            <div id={Style.settings_informations}>

                                <div>
                                    <p className={Style.settings_headerText}>Email address</p>
                                    <p className={Style.settings_detailsText}>{details.email}</p>
                                </div>

                                <div>
                                    <p className={Style.settings_headerText}>Phone</p>
                                    <p className={Style.settings_detailsText}>{details.phone_number}</p>
                                </div>

                            </div>

                        </div>
                    }

                    {/* Edit form when in edit mode */}

                    {
                        editState &&

                        <form action="" onSubmit={HandleSubmit}>

                            <div id={Style.Input_mainDiv}>

                                <Input
                                    type={"text"}
                                    placeholder={"Type your full name"}
                                    label={"Full Name"}
                                    name={"fullname"}
                                    value={profileUpdate.fullname}
                                    onChange={HandleChange}
                                />

                                <Input
                                    type={"tel"}
                                    placeholder={"Type your phone number"}
                                    label={"Phone"}
                                    name={"phone_number"}
                                    value={profileUpdate.phone_number}
                                    onChange={HandleChange}
                                />

                            </div>

                            <Button
                                type={"submit"}
                                text={"Upload Profile"}
                            />


                        </form>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile