import React from 'react'

import Signout from '../Components/Buttons/Signout'

import ChatSection from '../Components/ChatSection'

const Chatroom = () => {

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<ChatSection/>
			<Signout/>
		</div>
	)
}

export default Chatroom
