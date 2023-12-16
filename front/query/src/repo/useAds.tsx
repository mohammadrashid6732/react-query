import { useQuery } from "@tanstack/react-query";


function useAds() {
	const {data} = useQuery({
		queryKey: ['Ads'],
		queryFn: async () => {
			const data = await fetch('http://127.0.0.1:8000/ads/advertises/');
			return data.json();
		},
	})
	return{data};
}

export default useAds;