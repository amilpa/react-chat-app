
import React,{ useState , useRef , useEffect } from 'react'

import { db } from '../App'

import { useCollectionData } from 'react-firebase-hooks/firestore'

import { collection , query , limit , orderBy , addDoc , serverTimestamp } from 'firebase/firestore'


import { auth } from '../App'

const ChatSection = () => {

	const [input, setInput] = useState('')

	const messagesRef = collection(db , 'messages')

	const data = query(messagesRef , orderBy('createdAt') ,limit(20))

	const dummy = useRef()

	const [messages] = useCollectionData(data , { idField : 'id'})

	const handleSend = async(event) => {
		event.preventDefault()

		setInput('')

		const { uid , photoURL ,displayName } = auth.currentUser;

		await addDoc(messagesRef,{
			text:input , 
			createdAt : serverTimestamp(),
			uid,
			photoURL,
			displayName
		})

		dummy.current.scrollIntoView({ behavior : 'smooth' })
	}

	useEffect(()=>{
		dummy.current.scrollIntoView({ behavior : 'smooth' })
	})

	return (
		<div className='flex flex-col justify-between bg-[white] rounded-xl p-2 h-[500px] w-[500px] shadow-2xl shadow-gray-600'>
			<div className='flex justify-between items-center text-xl font-medium bg-[#4560c7] text-white pl-3 py-3 rounded-xl tracking-wide'>Welcome { auth.currentUser.displayName } <img src={auth.currentUser.photoURL} alt="true" className='w-[40px] rounded-full mr-3 border-2'/></div>
			<div className='h-full overflow-y-scroll py-3 no-scrollbar px-1 py-3'>
				{ messages ? messages.map(msg => {

					const messageClass = msg.uid == auth.currentUser.uid ? 'ml-auto bg-[#4560c7] text-white rounded-l-xl rounded-br-xl' : 'bg-[#f4f5fa] text-black rounded-r-xl rounded-bl-xl'

					return (<div key={ msg.createdAt } className={`flex items-center gap-5 mt-2 w-max py-1 px-3 ${messageClass}`}>
								<img src={ msg.photoURL } alt="sed" className='w-[30px] h-[30px] rounded-full'/>
								<div>
									<p className='text-xs'>{ msg.displayName }</p>
									<p>{ msg.text }</p>
								</div>
						   </div>) 
				}): ('') }
				<div ref = { dummy }></div>
			</div>
			<form className='w-full flex'>
				<input type="text" placeholder="Enter text" value={ input } onChange={(event)=> setInput(event.target.value)} className='border-[1px] border-black rounded-l-xl flex-1 py-2 pl-3 bg-[#f6f8fd]'/>
				<button type='submit' onClick={handleSend} className='border-[1px] border-black px-4 rounded-r-xl bg-[#4560c7] font-medium text-white'>Send</button>
			</form>
		</div>
	)
}

export default ChatSection
