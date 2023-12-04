import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";

import { FaUnlockAlt, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
export default function ForgetPassword() {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const sendCode = () => {
		// send varification code
		navigate("/auth/verifycode");
	};
	return (
		<>
			<div className='text-center py-3 flex flex-col items-center gap-1'>
				<FaUnlockAlt className='text-purple-500 text-6xl' />
				<span className='md:text-5xl text-xl font-bold'>Reset Your Password</span>
				<span className='text-sm text-gray-500'>Enter Your Email</span>
			</div>

			<div className='flex flex-col gap-1 mt-10 mb-5'>
				<label
					className='text-md flex items-center justify-between'
					htmlFor='email'>
					Email <IoMdMail className='text-2xl text-purple-500' />
				</label>
				<input
					className='py-3.5 px-4 border-b-2 focus:outline-none'
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id='email'
					placeholder='email'
				/>
			</div>
			<p className='text-sm font-poppins text-gray-500'>We'll send verification code to this email</p>
			<button
				onClick={sendCode}
				type='button'
				className='bg-purple-500 text-white font-medium tracking-wide text-lg py-2 rounded-lg px-10 hover:bg-purple-600 transition-all flex justify-center items-center gap-2 group'>
				Submit <FaArrowRight className='group-hover:translate-x-2 transition-all' />
			</button>
		</>
	);
}
