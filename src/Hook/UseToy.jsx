import { useQuery } from "@tanstack/react-query";

const useToy = () => {
	const {
		data: toy = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ["menu"],
		queryFn: async () => {
			const res = await fetch("https://y-gamma-woad.vercel.app/toys");
			return res.json();
		},
	});

	return [toy, loading, refetch];
};

export default useToy;
