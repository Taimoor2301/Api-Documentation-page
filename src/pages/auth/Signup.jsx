import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser, FaArrowRight } from "react-icons/fa";

const Signup = () => {
	return (
		<main className='pt-10 flex flex-col justify-center items-center gap-5'>
			<form action='' className='flex flex-col gap-5 px-6 bg-white md:min-w-[30rem] min-w-[95%] border shadow rounded-2xl font-poppins py-6'>
				<div className='text-center py-3 flex flex-col items-center gap-3'>
					<IoLogIn className='text-purple-500 text-6xl' />
					<span className='text-5xl font-bold'>Wellcome</span>
					<span className='text-sm text-gray-500'>Create an Account!</span>
				</div>
				<div className='flex flex-col gap-1'>
					<label className='text-md flex items-center justify-between' htmlFor='username'>
						Username <FaUser className='text-2xl text-purple-500' />
					</label>
					<input className='py-3.5 px-4 border-b-2 focus:outline-none' type='username' name='username' id='username' placeholder='username' />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='text-md flex items-center justify-between' htmlFor='email'>
						Email <IoMdMail className='text-2xl text-purple-500' />
					</label>
					<input className='py-3.5 px-4 border-b-2 focus:outline-none' type='email' name='email' id='email' placeholder='email' />
				</div>
				<div className='flex flex-col gap-1'>
					<label className='text-md flex items-center justify-between' htmlFor='password'>
						Password <RiLockPasswordFill className='text-2xl text-purple-500' />
					</label>
					<input className='py-3.5 px-4 border-b-2 focus:outline-none' type='password' name='password' id='password' placeholder='password' />
				</div>

				<button
					type='submit'
					className='bg-purple-500 text-white font-medium tracking-wide text-lg py-2 rounded-lg px-10 hover:bg-purple-600 transition-all flex justify-center items-center gap-2 group'>
					Create <FaArrowRight className='group-hover:translate-x-2 transition-all' />
				</button>
			</form>

			<div>
				Already have an account?{" "}
				<Link className='text-gray-800 font-medium' to='/signup'>
					Sign in
				</Link>
			</div>
		</main>
	);
};

export default Signup;