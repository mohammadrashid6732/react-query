/** @format */

import { useState } from 'react';
import './App.css';
import DataList from './components/DataList';

function App() {
	const [flag, setFlag] = useState(true);
	return (
		<>
			{flag && (
				<>
					<DataList />
					<DataList />
					<DataList />
				</>
			)}
			<span onClick={() => setFlag((flag) => !flag)}>changer</span>
		</>
	);
}
export default App;
