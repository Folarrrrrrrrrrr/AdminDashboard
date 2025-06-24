import React, { useState } from 'react';
import Style from './AddNew_Agent.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addStaffReducer } from "../../api_detaills/GlobalStates/AddStaff";
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext';
import PostAPIModal from '../../../../components/postAPIModal/PostAPIModal';

const AddNew_Agent = () => {
  const dispatch = useDispatch();
  const { updateSignUpPopup } = PopupContextHook();
  const {showSuccessPopup,setShowSuccessPopup} = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone_number: '',
    country: 'Nigeria',
    fullAddress: '',
    password: '',
  });

  const { ResolutionSubmissionLoading, ResolutionSubmissionError, ResolutionSubmissionSuccess } = useSelector((state) => state.AddStaff);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStaffReducer(form)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        updateSignUpPopup(true);
        // Optionally reset form
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone_number: '',
          country: 'Nigeria',
          fullAddress: '',
          password: '',
        });
      }
    });
    setShowSuccessPopup(true)
  };

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <div className={Style.profilePicture}>
          <div className={Style.avatar}></div>
          <button type="button" className={Style.addPhotoBtn}>+</button>
        </div>

        <div className={Style.inputGroup}>
          <label>First Name</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Your First Name" required />
        </div>

        <div className={Style.inputGroup}>
          <label>Last Name</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Your Last Name" required />
        </div>

        <div className={Style.inputGroup}>
          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example @ your email" required />
        </div>

        <div className={Style.inputGroup}>
          <label>Phone Number</label>
          <div className={Style.phoneInput}>
            <span className={Style.flag}>🇳🇬</span>
            <input type="tel" name="phone_number" value={form.phone_number} onChange={handleChange} placeholder="1234 5678 9901" required />
          </div>
        </div>

        <div className={Style.inputGroup}>
          <label>Home Address</label>
          <input name="fullAddress" value={form.fullAddress} onChange={handleChange} placeholder="Your Address" required />
        </div>

        <div className={Style.inputGroup}>
          <label>Country</label>
          <input name="country" value={form.country} onChange={handleChange} placeholder="Country" required />
        </div>

        <div className={Style.inputGroup}>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Create Password" required />
        </div>

        <button className={Style.submitBtn} type="submit" disabled={ResolutionSubmissionLoading}>
          {ResolutionSubmissionLoading ? 'Saving...' : 'Update Profile'}
        </button>
        <button className={Style.cancelBtn} type="button">Cancel</button>

        {/* {ResolutionSubmissionError && <p className={Style.error}>{ResolutionSubmissionError}</p>} */}
        {ResolutionSubmissionError &&   
          <PostAPIModal
            failedPost ={ResolutionSubmissionError}
            reportHeader="Failed to Create"
            message={ResolutionSubmissionError}
            actionText="Cancel"
            actionTxtTwo="Create another user"
          />
        }
        {/* {ResolutionSubmissionSuccess && <p className={Style.success}>{ResolutionSubmissionSuccess}</p>} */}
        {ResolutionSubmissionSuccess  && 
          <PostAPIModal
            successPost ={ResolutionSubmissionSuccess}
            reportHeader="User Successfully Created"
            message={ResolutionSubmissionSuccess}
            actionText="Done"
            actionTxtTwo="Create another admin"
          />
        }
      </form>
    </div>
  );
};

export default AddNew_Agent;
