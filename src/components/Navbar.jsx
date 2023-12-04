import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<div className='shadow sticky top-0 bg-white z-[99999]'>
			<div className='pl-5 py-4 lg:hidden'>
				<MdOutlineMenuOpen
					onClick={() => setNavOpen(!navOpen)}
					className='lg:hidden text-4xl text-gray-800'
				/>
			</div>
			<div className={`overflow-hidden transition-all duration-500 ${navOpen ? "max-h-screen" : "max-h-0"} lg:max-h-[100px]`}>
				<nav
					className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 font-poppins text-base font-medium py-5 text-gray-700`}>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/'>
						Home
					</NavLink>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/docs'>
						Docs
					</NavLink>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/auth/login'>
						Login
					</NavLink>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/help'>
						Help
					</NavLink>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/privacy'>
						Privacy
					</NavLink>
					<NavLink
						onClick={() => setNavOpen(!navOpen)}
						to='/dashboard'>
						Dashboard
					</NavLink>
				</nav>
			</div>
		</div>
	);
}
