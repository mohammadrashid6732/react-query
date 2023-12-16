/** @format */

import { useQuery } from '@tanstack/react-query';

function DataList() {
	const result = useQuery({
		queryKey: ['Posts'],
		queryFn: async () => {
			const data = await fetch('http://127.0.0.1:8000/ads/advertises/');
			return data.json();
		},
	});

	console.log(result);
	if (result.isPending) {
		<h1>loading ....</h1>;
	}
	return (
		<div>
			<ul>
				{result.data?.map((e) => (
					<li key={e.id}>{e.title}</li>
				))}
			</ul>
		</div>
	);
}

export default DataList;
