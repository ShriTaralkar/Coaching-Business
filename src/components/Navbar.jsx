import React, { useState } from 'react';
import { Link } from 'gatsby';
import { HiMenu } from '@react-icons/all-files/hi/HiMenu';
import { CgClose } from '@react-icons/all-files/cg/CgClose';

function Navbar() {

	const [isOpen, setOpen] = useState(false);

	return (
		<nav className="p-4 fixed top-0 w-full flex flex-col md:flex-row justify-center md:justify-between items-center bg-blue-950 text-white">
			<Link to="#" className="font-bold text-2xl text-yellow-400">LOGO</Link>
			{!isOpen && <button onClick={() => setOpen(!isOpen)} className="absolute right-5 top-5 md:hidden flex items-center text-xl cursor-pointer transition-all duration-500 hover:scale-125"><HiMenu /></button>}
			{isOpen && <button onClick={() => setOpen(!isOpen)} className=" absolute right-5 top-5 md:hidden flex items-center text-xl cursor-pointer transition-all duration-500 hover:scale-125"><CgClose /></button>}
			<ul className="nav-links hidden items-center justify-between md:flex">
				<li className="nav-link px-2 cursor-pointer"><Link>Home</Link></li>
				<li className="nav-link px-2 cursor-pointer"><Link>Projects</Link></li>
				<li className="nav-link px-2 cursor-pointer"><Link>Blogs</Link></li>
				<li className="nav-link px-2 cursor-pointer"><Link>About Us</Link></li>
				<li className="nav-link px-2 cursor-pointer"><Link>Contact</Link></li>
				<li className="navButton p-2 capitalize bg-yellow-500 border rounded-full text-black font-bold cursor-pointer"><Link>Get a demo </Link></li>
			</ul>
			{isOpen && <ul className="nav-links flex flex-col items-center justify-between md:hidden">
				<li className="nav-link p-2 md:px-2 cursor-pointer"><Link>Home</Link></li>
				<li className="nav-link p-2 md:px-2 cursor-pointer"><Link>Projects</Link></li>
				<li className="nav-link p-2 md:px-2 cursor-pointer"><Link>Blogs</Link></li>
				<li className="nav-link p-2 md:px-2 cursor-pointer"><Link>About Us</Link></li>
				<li className="nav-link p-2 md:px-2 cursor-pointer"><Link>Contact</Link></li>
				<li className="navButton p-2 md:px-2 cursor pointer capitalize bg-yellow-500 border rounded-full text-black font-bold cursor-pointer"><Link>Get a demo </Link></li>
			</ul>}
		</nav>
	)
}

export default Navbar