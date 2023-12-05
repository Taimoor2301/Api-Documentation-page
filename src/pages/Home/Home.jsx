import { Link } from "react-router-dom";
import heroImage from "/img/hero-img.png";
import clients from "../../../public/img/clients";
import { BsInfoSquare } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiServiceLine, RiCustomerService2Line } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
	return (
		<div className='min-h-screen w-full bg-gray-100 font-poppins py-5'>
			{/* homepage  */}
			<Layout className='grid grid-cols-2'>
				<div className='col-span-1 flex flex-col justify-center gap-5 lg:pl-10'>
					<h1 className='text-5xl font-bold text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa.</h1>
					<p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero.</p>
					<Link
						className='text-xl border-2 border-gray-600 rounded-xl py-3 max-w-sm flex items-center justify-center font-bold text-gray-600 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all'
						to='/docs'>
						Get Started
					</Link>
				</div>

				<div className='col-span-1 flex items-center justify-center'>
					<img
						src={heroImage}
						className='max-w-full h-auto'
						alt=''
					/>
				</div>
			</Layout>

			<Layout className='my-6'>
				<h1 className='text-2xl font-bold text-gray-700 flex flex-col items-center justify-center gap-3 py-10'>
					<VscWorkspaceTrusted className='text-purple-500 text-7xl' />
					Trusted by
				</h1>
				<div className='flex justify-evenly gap-2 items-center flex-wrap'>
					{clients.map((img) => (
						<ClientImage
							key={img}
							img={img}
						/>
					))}
				</div>
			</Layout>

			<Layout>
				<h1 className='text-2xl font-bold text-gray-700 flex flex-col items-center justify-center gap-3 py-6'>
					<BsInfoSquare className='text-purple-500 text-7xl' />
					About us
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10 text-center'>
					<div className='tracking-wider col-span-1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusantium sunt inventore est dicta. Animi rerum, possimus fugiat quos
						magni beatae recusandae consequuntur expedita excepturi quasi! Similique, molestiae? Tempore, eaque.
					</div>
					<div className='tracking-wider col-span-1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusantium sunt inventore est dicta. Animi rerum, possimus fugiat quos
						magni beatae recusandae consequuntur expedita excepturi quasi! Similique, molestiae? Tempore, eaque.
					</div>
				</div>
			</Layout>
			<Layout className={"my-5"}>
				<h1 className='text-2xl font-bold text-gray-700 flex flex-col items-center justify-center gap-3 py-6'>
					<RiServiceLine className='text-purple-500 text-7xl' />
					Services
				</h1>

				<div className='flex gap-6'>
					<Service />
					<Service />
					<Service />
				</div>
			</Layout>
			<Layout className={"my-5"}>
				<h1 className='text-2xl font-bold text-gray-700 flex flex-col items-center justify-center gap-3 py-6'>
					<IoPricetagsOutline className='text-purple-500 text-7xl' />
					Pricing
				</h1>

				<div className='flex gap-6 justify-evenly'>
					{priceTemplate.map((i) => (
						<PriceCard
							key={i.name}
							{...i}
						/>
					))}
				</div>
			</Layout>
		</div>
	);
}

const Layout = ({ children, className }) => (
	<div className={`max-w-7xl shadow bg-white rounded-xl p-5 mx-auto ${className} overflow-hidden pt-20`}>{children}</div>
);

const ClientImage = ({ img }) => {
	return (
		<div className='flex items-center justify-center w-36'>
			<img
				className='max-w-full h-auto'
				src={img}
				alt=''
			/>
		</div>
	);
};

const Service = ({ Icon, title, des }) => {
	return (
		<div className='border border-gray-300 hover:border-purple-500 p-5 py-10 rounded-xl flex flex-col items-center gap-3 text-center hover:translate-y-[-6px] hover:shadow transition-all cursor-pointer'>
			<RiCustomerService2Line className='text-4xl text-purple-500' />
			<h1 className='font-bold text-xl text-gray-700'>Lorem ipsum dolor sit.</h1>
			<p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic nobis non ex sunt harum esse?</p>
		</div>
	);
};

const PriceCard = ({ price, plan, link, services, name }) => {
	return (
		<div className='flex flex-col gap-3 py-10 rounded-md border border-gray-300 hover:border-purple-500 transition-all px-10 flex-1 max-w-sm'>
			<span className='font-semibold text-2xl text-purple-500 my-5'>{name}</span>
			<span className='text-6xl text-gray-700 font-bold'>${price}</span>

			<div className='text-xl my-5'>
				{services.map((s) => (
					<div
						key={s}
						className='flex gap-2 items-center'>
						{s.included ? <FcCheckmark /> : <RxCross2 className='text-gray-400' />}
						<span className={`${s.included ? "text-gray-700" : "text-gray-400 line-through"}`}>{s.name}</span>
					</div>
				))}
			</div>

			<Link
				className='rounded-xl py-2 text-center border-2 border-gray-700 text-gray-700 font-semibold hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-all my-10'
				to={link}>
				Get Started
			</Link>
		</div>
	);
};

const priceTemplate = [
	{
		name: "Free Plan",
		price: 0,
		link: "/",
		services: [
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: false },
			{ name: "this is a service", included: false },
		],
		plan: "Monthly",
	},
	{
		name: "Basic Plan",
		price: 0,
		link: "/",
		services: [
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: false },
		],
		plan: "Monthly",
	},
	{
		name: "Pro Plan",
		price: 0,
		link: "/",
		services: [
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
			{ name: "this is a service", included: true },
		],
		plan: "Monthly",
	},
];
