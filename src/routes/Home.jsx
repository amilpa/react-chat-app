import React from 'react'

import Signin from '../Components/Buttons/Signin'

const Home = () => {

	return (
		<div className='min-h-screen grid place-items-center'>
			<div className='bg-white w-max h-max p-3 rounded-xl text-center text-3xl px-[40px] shadow-2xl shadow-gray-600'>
				Feeling alone?
				<br/>
				Care for a chat?
				<Signin/>
			</div>
		</div>
	)
}

export default Home
