import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const VerifyForm = ({ isVerified, onVerification }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: ''
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    toast.success("Verified");
    
    // Call the callback function to update isVerified in the parent component
    onVerification();
  };

  return (
    <div className=' h-full flex text-xl'>
      <form
        action=""
        onSubmit={submitHandler}
        className='w-1/2 m-auto h-1/2 bg-white flex flex-col p-4 justify-center align-center shadow-lg border border-lg text-xl mb-4'
      >
        <div className="flex gap-x-4 ">
          <label htmlFor="" className="w-full">
            <p className="text-[1rem] text-gray-600 mb-1 leading-[1.375rem]">
              Enter Certificate Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="address"
              onChange={changeHandler}
              placeholder="Enter the Address"
              value={formData.address}
              className="bg-gray-200 border border-gray-400 rounded-[0.75rem] w-full p-[12px] text-gray-600"
            />
          </label>
        </div>

        {/* button */}
        <button className="bg-green-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium hover:bg-green-600 text-white w-full">
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyForm;
