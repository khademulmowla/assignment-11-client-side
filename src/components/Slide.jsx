/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ image, text, text2 }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-800/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {text}
                    </h1>
                    <p className='text-xl text-gray-300'>{text2}</p>
                    <br />
                    <Link
                        to='/artifacts'
                        className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
                    >
                        Let's Track
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
