import React from "react";

const Error = () => {
	return (
		<div className="bg-gray-900 text-white flex items-center justify-center h-screen">
			<div className="text-center">
				<img
					src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_640.png"
					alt="404 Image"
					className="mx-auto mb-8"
					style="max-width: 400px"
				/>
				<h1 className="text-5xl font-bold mb-4">404</h1>
				<p className="text-2xl">Oops! Page not found.</p>
				<a
					href="/"
					className="mt-4 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded"
				>
					Back to Home
				</a>
			</div>
		</div>
	);
};

export default Error;
