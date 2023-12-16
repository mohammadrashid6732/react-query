/** @format */

import { Adverties } from '../repo/repo';
import AdsCard from './AdsCard';

function AddList({ adsList }: { adsList: Adverties[]}) {
	return (
		<div>
			{adsList.map((a) => (
				<AdsCard key={a.id} ads={a} />
			))}
		</div>
	);
}

export default AddList;
