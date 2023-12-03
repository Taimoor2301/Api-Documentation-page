import React from "react";
import { IoMdMail } from "react-icons/io";

import { FaUnlockAlt, FaArrowRight } from "react-icons/fa";
export default function ForgetPassword() {
	return (
		<main className='pt-10 flex flex-col justify-center items-center gap-5'>
			<div className='flex flex-col gap-5 px-6 bg-white md:min-w-[30rem] min-w-[95%] border shadow rounded-2xl font-poppins py-8'>
				<div className='text-center py-3 flex flex-col items-center gap-3'>
					<FaUnlockAlt className='text-purple-500 text-6xl' />
					<span className='text-5xl font-bold'>Reset Your Password</span>
					<span className='text-sm text-gray-500'>Enter Your Email</span>
				</div>

				<div className='flex flex-col gap-1 my-10'>
					<label
						className='text-md flex items-center justify-between'
						htmlFor='email'>
						Email <IoMdMail className='text-2xl text-purple-500' />
					</label>
					<input
						className='py-3.5 px-4 border-b-2 focus:outline-none'
						type='email'
						name='email'
						id='email'
						placeholder='email'
					/>
				</div>
				<button
					type='submit'
					className='bg-purple-500 text-white font-medium tracking-wide text-lg py-2 rounded-lg px-10 hover:bg-purple-600 transition-all flex justify-center items-center gap-2 group'>
					Submit <FaArrowRight className='group-hover:translate-x-2 transition-all' />
				</button>
			</div>
		</main>
	);
}
