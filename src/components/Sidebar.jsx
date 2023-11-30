import React, { useEffect, useState } from "react";
import { data } from "../data";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Sidebar() {
	const [openSidebar, setOpensidebar] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = openSidebar ? "hidden" : "auto";
	}, [openSidebar]);

	return (
		<>
			<div className='text-3xl pl-3 pb-2 py-5 sticky top-0 bg-white/80 backdrop-blur-md w-screen lg:hidden'>
				<FaBars onClick={() => setOpensidebar(true)} />
			</div>

			<div
				className={`${
					openSidebar ? "w-full" : "w-0"
				} lg:w-full transition-all duration-500 overflow-hidden lg:relative absolute inset-0 lg:col-span-2 border h-screen bg-gray-50 font-poppins`}>
				<h1 className='text-2xl py-5 px-5 font-semibold text-gray-700 flex justify-between'>
					Topics <ImCross className='lg:hidden' onClick={() => setOpensidebar(false)} />{" "}
				</h1>

				<div className='flex flex-col gap-4 p-5 overflow-y-auto max-h-full scroll py-5'>
					{data.map((t) => (
						<TopicName {...t} key={t.id} setOpensidebar={setOpensidebar} />
					))}
				</div>
			</div>
		</>
	);
}

const TopicName = ({ title, id, setOpensidebar }) => {
	return (
		<a
			className='hover:text-white lg:p-3 py-2 hover:bg-purple-500 duration-300 transition-all hover:translate-x-2 lg:rounded-lg border-b-2 min-w-max'
			href={`#${id}`}
			onClick={() => setOpensidebar(false)}>
			{title}
		</a>
	);
};
