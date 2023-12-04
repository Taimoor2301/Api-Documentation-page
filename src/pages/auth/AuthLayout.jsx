import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
	return (
		<main className='pt-10 flex flex-col justify-center items-center gap-5 px-5 lg:px-0'>
			<div className='flex flex-col gap-5 px-6 bg-white md:min-w-[30rem] min-w-[95%] md:border md:shadow rounded-2xl font-poppins py-8'>
				<Outlet />
			</div>
		</main>
	);
}
