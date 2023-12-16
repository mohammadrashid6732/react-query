/** @format */

import { useState } from 'react';
import './App.css';
import AdsContainer from './components/AdsContainer';
function App() {
	const [flag, setFlag] = useState(true);
	return (
		<>
			{flag && (
				<>
					<AdsContainer />
				</>
			)}
			<button onClick={() => setFlag(!flag)}>change state</button>
		</>
	);
}

export default App;
