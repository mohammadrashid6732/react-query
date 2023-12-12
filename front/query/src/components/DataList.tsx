/** @format */

import { useQuery } from '@tanstack/react-query';

function DataList() {
	const result = useQuery({
		queryKey: ['Posts'],
		queryFn: async () => {
			const data = await fetch('https://jsonplaceholder.typicode.com/posts');
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
