import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
	return (
		<div className='bg-gray-100'>
			<main className='py-10 flex flex-col max-w-7xl mx-auto rounded-xl justify-center items-center gap-5 px-5 lg:px-0 bg-white'>
				<div className='flex flex-col gap-5 px-6 bg-white md:min-w-[30rem] min-w-[95%] md:border-[2px] border-purple-500 rounded-2xl font-poppins py-8'>
					<Outlet />
				</div>
			</main>
		</div>
	);
}
