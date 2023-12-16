// /** @format */

// import { useQuery } from '@tanstack/react-query';

// function DataList() {
// 	const result = useQuery({
// 		queryKey: ['Posts'],
// 		queryFn: async () => {
// 			const data = await fetch('http://127.0.0.1:8000/ads/advertises/');
// 			return data.json();
// 		},
// 	});

// 	return (
// 		<div>
// 			<h1>{result.fetchStatus}</h1>
// 			<ul>
// 				{result.data?.map((e) => (
// 					<li key={e.id}>{e.title}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default DataList;
