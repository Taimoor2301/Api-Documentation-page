import { GrLocation } from "react-icons/gr";
import { FaBed, FaBath, FaParking } from "react-icons/fa";
import { GiSwitzerland } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import { FaEye, FaAddressBook, FaPercentage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import file2 from "./eg.pdf";

export default function Detail() {
	return (
		<>
			<div className='bg-gray-100'>
				<main className='max-w-7xl mx-auto lg:py-10 py-3 font-poppins grid grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='bg-white rounded-xl flex flex-col gap-3 p-4 col-span-2'>
						<div className='rounded-xl overflow-hidden h-[20rem]'>
							<img
								className='w-full h-full object-cover object-center'
								src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww'
								alt=''
							/>
						</div>

						<div className='flex justify-between items-center gap-5 text-gray-700'>
							<h1 className='text-2xl md:text-3xl font-bold'>Document Name</h1>
							<span className='p-2 rounded-md bg-purple-500 text-white text-sm'>Commercial</span>
						</div>

						<div className='flex gap-2 items-center font-bold text-xs md:text-sm tracking-wider text-gray-700'>
							<GrLocation className='text-2xl text-purple-500' />
							<span>Lattitude : 1234567</span>
							<span>Longitude : 1234567</span>
						</div>

						<div className='flex items-center gap-4 border-b-2 pb-6 text-gray-700 flex-wrap'>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaBed className='text-2xl text-purple-500' /> 4 Bed
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaBath className='text-2xl text-purple-500' /> 4 Bath
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<FaParking className='text-2xl text-purple-500' /> 4 Parking
							</span>
							<span className='flex items-center gap-2 text-sm font-semibold'>
								<GiSwitzerland className='text-2xl text-purple-500' /> 400 sq feet
							</span>
						</div>

						<div className='flex gap-2 flex-col border-b-2 pb-5'>
							<h1 className='font-bold text-xl text-gray-800'>Property Deatils</h1>
							<p className='text-sm text-gray-600 lg:max-w-[80%]'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus dolore, a blanditiis nisi minima deserunt officia
								quaerat soluta commodi sequi iusto cumque assumenda aliquam corrupti aut quam porro laborum.
							</p>
						</div>

						<h1 className='text-gray-800 font-bold text-xl'>Owner Deatils</h1>
						<div className='flex flex-col lg:flex-row gap-5 flex-wrap text-gray-700 items-start lg:items-center'>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<IoPerson className='text-purple-500' />
								Taimoor
							</span>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<FaAddressBook className='text-purple-500' />
								Rawalpindi, Pakistan
							</span>
							<span className='flex items-center justify-center gap-2 text-lg font-semibold'>
								<FaPercentage className='text-purple-500' />
								60% Owneship
							</span>
						</div>
					</div>

					{/* 2nd column  */}

					<div className='col-span-full lg:col-span-1 rounded-xl p-4 bg-white flex flex-col gap-6'>
						<div className='flex flex-col gap-2 rounded-lg border border-purple-500 px-3 py-5 max-w-sm'>
							<span className='text-xl text-gray-700 font-bold flex justify-between gap-5 flex-col-reverse'>
								Appraisal <IoMdDocument className='text-purple-500 text-6xl' />
							</span>

							<p className='text-md bg-gray-100 p-1 rounded-lg text-sm mb-4'>click to view file</p>

							<a
								// download={file1}
								download='file2.pdf'
								href={file2}
								className='border-2 border-purple-500 text-gray-700
						hover:text-white hover:bg-purple-500 transition-all py-2 rounded-xl font-bold flex justify-center items-center gap-2'>
								View <FaEye />
							</a>
						</div>
						<div className='flex flex-col gap-2 rounded-lg border border-purple-500 px-3 py-5 max-w-sm'>
							<span className='text-xl text-gray-700 font-bold flex justify-between gap-5 flex-col-reverse'>
								Deed of Ownership <IoMdDocument className='text-purple-500 text-6xl' />
							</span>

							<p className='text-md bg-gray-100 p-1 rounded-lg text-sm mb-4'>click to view file</p>

							<a
								href={file2}
								download='file.pdf'
								className='border-2 border-purple-500 text-gray-700
						hover:text-white hover:bg-purple-500 transition-all py-2 rounded-xl font-bold flex justify-center items-center gap-2'>
								View <FaEye />
							</a>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
