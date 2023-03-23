
import React from 'react'

import { auth } from '../../App'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const Signout = () => {

	const handleClick = () => {
		auth.signOut()
	}

	return (
		<div className='fixed top-4 left-3'>
			<button onClick={ handleClick }><AiOutlineArrowLeft className='text-white text-3xl font-semibold'/></button>
		</div>
	)
}

export default Signout
