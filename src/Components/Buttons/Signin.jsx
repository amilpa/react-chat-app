
import React from 'react'

import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth';

import {auth} from '../../App.jsx'

import { AiOutlineGoogle } from 'react-icons/ai';

const Signin = () => {

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth , provider)
	}

	return (
		<div>
			<button onClick={ signInWithGoogle } className='bg-[#4560c7] text-white py-1 px-3 text-lg flex items-center gap-1 mx-auto mt-3'><AiOutlineGoogle className='inline'/>Sign in</button>
		</div>
	)
}

export default Signin
