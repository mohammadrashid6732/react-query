/** @format */

import { Adverties } from '../repo/repo';
import AdsCard from './AdsCard';

function AddList({ addList }: { addList: Adverties[]}) {
	return (
		<div>
			{addList.map((a) => (
				<AdsCard key={a.id} ads={a} />
			))}
		</div>
	);
}

export default AddList;
