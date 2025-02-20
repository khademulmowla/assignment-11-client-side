import { useContext } from 'react';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaList, FaPlus, FaUser, FaHeart, FaSignOutAlt, FaInfo } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className='navbar bg-[#ac9a1a] text-white shadow-sm container px-4 mx-auto'>
            {/* Left side - Mobile Dropdown */}
            <div className="flex-1 lg:hidden flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#ac9a1a] rounded-box z-[1] mt-3 p-2 shadow">
                        <li>
                            <Link to='/'><FaHome className="inline mr-2" />Home</Link>
                        </li>
                        <li>
                            <Link to='/artifacts'><FaList className="inline mr-2" />All Artifacts</Link>
                        </li>
                        <li>
                            <Link to='/add-artifact'><FaPlus className="inline mr-2" />Add Artifact</Link>
                        </li>
                        <li>
                            <Link to='/aboutus'><FaInfo className="inline mr-2" />About Us</Link>
                        </li>
                        {!user && (
                            <li>
                                <Link to='/login'><FaUser className="inline mr-2" />Login</Link>
                            </li>
                        )}
                        {user && (
                            <>
                                <li>
                                    <Link to='/liked-artifacts'><FaHeart className="inline mr-2" />Liked Artifacts</Link>
                                </li>
                                <li>
                                    <Link to='/my-artifacts'><FaUser className="inline mr-2" />My Artifacts</Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="text-white">
                                        <FaSignOutAlt className="inline mr-2" />Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Dark Mode Toggle for Mobile */}
                <div className="ml-2">
                    <DarkModeToggle />
                </div>
            </div>

            {/* Right side - Logo for Mobile */}
            <div className='lg:flex-1 lg:pl-2 flex justify-end lg:justify-start'>
                <Link to='/' className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>Artifacts</span>
                </Link>
            </div>

            {/* Right side - Navigation and User Dropdown for Desktop */}
            <div className='flex-none pr-2 hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/'><FaHome className="inline" />Home</Link>
                    </li>
                    <li>
                        <Link to='/artifacts'><FaList className="inline" />All Artifacts</Link>
                    </li>
                    <li>
                        <Link to='/add-artifact'><FaPlus className="inline" />Add Artifact</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'><FaInfo className="inline" />About Us</Link>
                    </li>
                    {!user && (
                        <li>
                            <Link to='/login'><FaUser className="inline" />Login</Link>
                        </li>
                    )}
                </ul>

                {/* Dark Mode Toggle for Desktop */}
                <div className="ml-4">
                    <DarkModeToggle />
                </div>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ac9a1a] rounded-box w-52'
                        >
                            <li>
                                <Link to='/liked-artifacts'><FaHeart className="inline" />Liked Artifacts</Link>
                            </li>
                            <li>
                                <Link to='/my-artifacts'><FaUser className="inline" />My Artifacts</Link>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={handleLogOut}
                                    className='bg-gray-800 hover:bg-gray-500 block text-center'
                                >
                                    <FaSignOutAlt className="inline mr-2" />Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;