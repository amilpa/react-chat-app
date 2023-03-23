
import './App.css'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { Routes,Route } from 'react-router-dom'

import Home from './routes/Home'
import Chatroom from './routes/Chatroom'

import { useAuthState } from 'react-firebase-hooks/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTHDOMAIN ,
	projectId:import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
	appId:import.meta.env.VITE_APPID
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

function App() {

	const [user] = useAuthState(auth)

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={ user ? <Chatroom/> : <Home/>}/>
			</Routes>
		</div>
	)
}

export default App 
