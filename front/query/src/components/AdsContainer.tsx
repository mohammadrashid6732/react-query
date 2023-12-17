/** @format */

import { useState } from 'react';
import useAds from '../repo/useAds';
import AddList from './AddList';

function AdsContainer() {
	const [ filter, setFilter ] = useState('all');

	const { data } = useAds(filter);
	if (data) {
		return(
		<>
			<span onClick={() => setFilter('all')}>all</span> |
			<span onClick={() => setFilter('buy')}>buy</span> |
			<span onClick={() => setFilter('sell')}>sell</span> |
			<AddList addList={data} />
		</>
		)
	}
	return <h1>loading...</h1>;
}

export default AdsContainer;
