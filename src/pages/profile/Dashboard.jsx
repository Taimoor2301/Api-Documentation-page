import React, { useEffect, useState } from "react";
import ProfileTab from "./Tabs/ProfileTab";
import ListingTab from "./Tabs/ListingTab";
import HistoryTab from "./Tabs/HistoryTab";
import WalletTab from "./Tabs/WalletTab";
import { GrEdit } from "react-icons/gr";

const Profile = () => {
	const [activeTab, setActiveTab] = useState("Profile");
	const [profileImageUrl, setProfileImageUrl] = useState(
		"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
	);

	const [coverImageUrl, setCoverImageUrl] = useState(
		"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww"
	);

	const [profileImage, setProfileImage] = useState(null);
	const [coverIamge, setCoverImage] = useState(null);

	useEffect(() => {
		if (profileImage) {
			const url = URL.createObjectURL(profileImage);
			setProfileImageUrl(url);
		}
	}, [profileImage]);

	useEffect(() => {
		if (coverIamge) {
			const url = URL.createObjectURL(coverIamge);
			setCoverImageUrl(url);
		}
	}, [coverIamge]);

	return (
		<div className='lg:py-10 py-5'>
			<div className='max-w-7xl mx-auto px-5 lg:px-0'>
				{/* images  */}
				<div className='h-[20rem] p-2 relative group/cover'>
					<img
						className='w-full h-full object-cover rounded-2xl '
						src={coverImageUrl}
					/>

					<label
						htmlFor='coverImage'
						className='absolute z-[1000] bg-purple-500/70 backdrop-blur-sm transition-all duration-300 flex justify-center items-center text-white font-poppins cursor-pointer lg:text-2xl top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover/cover:opacity-100 h-14 aspect-square rounded-full hover:scale-125 hover:bg-purple-500'>
						<GrEdit />
						<input
							type='file'
							className='absolute hidden'
							id='coverImage'
							onChange={(e) => setCoverImage(e.target.files[0])}
						/>
					</label>

					<div className='aspect-square rounded-full h-[8rem] lg:h-[15rem] absolute lg:top-[50%] bottom-[-4rem] lg:left-[75%] left-[50%] translate-x-[-50%] lg:translate-x-0 border-white border-4 shadow-md overflow-hidden group transition-all duration-500'>
						<img
							className='w-full h-full object-cover object-center'
							src={profileImageUrl}
							alt=''
						/>
						<label
							htmlFor='profilePic'
							className='absolute inset-0 z-[1000] bg-purple-500/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center text-white font-poppins cursor-pointer text-xs lg:text-lg'>
							<GrEdit />
						</label>
						<input
							type='file'
							className='absolute hidden'
							id='profilePic'
							onChange={(e) => setProfileImage(e.target.files[0])}
						/>
					</div>
				</div>

				{/* buttons  */}

				<div className='bg-white rounded-xl mt-20 border p-1 lg:py-5'>
					<div className='flex justify-center items-center'>
						{buttons.map((button, i) => (
							<TabButton
								key={i}
								{...button}
								active={activeTab}
								onclick={setActiveTab}
							/>
						))}
					</div>

					<div className='py-10 px-1'>{buttons.map((b, i) => (b.name === activeTab ? <b.el key={i} /> : null))}</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

const buttons = [
	{ name: "Profile", el: ProfileTab },
	{ name: "Listing", el: ListingTab },
	{ name: "History", el: HistoryTab },
	{ name: "Wallet", el: WalletTab },
];

function TabButton({ name, active, onclick }) {
	return (
		<button
			onClick={() => onclick(name)}
			className={`${
				active === name && "bg-purple-500 text-white"
			} font-poppins md:text-lg text-xs rounded-lg font-medium transition-all duration-500 py-2 px-5`}>
			{name}
		</button>
	);
}
