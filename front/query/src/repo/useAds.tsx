/** @format */

import { useQuery } from '@tanstack/react-query';

function useAds(adsType: string) {
	const { data, isPending } = useQuery({
		queryKey: ['Ads', adsType],
		queryFn: async function ({ queryKey }) {
			let url = 'http://127.0.0.1:8000/admin/ads/advertise/';
			if (queryKey[1] !== 'all') {
				url += '?ad_type=' + queryKey[1];
			}
			const result = await fetch(url);
			return result.json();
		},
	});
	return { data, isPending };
}
export default useAds;
