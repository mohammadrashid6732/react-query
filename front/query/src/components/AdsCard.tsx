/** @format */

import { Adverties } from '../repo/repo';

function AdsCard({ ads }: { ads: Adverties }) {
	return <div>{ads.title}</div>;
}

export default AdsCard;
