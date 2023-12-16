/** @format */

import useAds from '../repo/useAds';
import AddList from './AddList';

function AdsContainer() {
	const { data } = useAds();
	if (data) {
		return <AddList adsList={data} />;
	}
	return <h1>loading...</h1>;
}

export default AdsContainer;
