import React from "react";

const Blog = () => {
	return (
		<div className="bg-gray-200 min-h-screen flex items-center justify-center">
			<div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-bold mb-4">Questions and Answers</h1>

				<div className="my-4">
					<h2 className="text-lg font-bold mb-2">
						1. What is an access token and refresh token?
					</h2>
					<p>
						An access token is a credential used for authentication and
						authorization, while a refresh token is a long-lived token used to
						obtain new access tokens.
					</p>
				</div>

				<div className="my-4">
					<h2 className="text-lg font-bold mb-2">
						2. Compare SQL and NoSQL databases.
					</h2>
					<p>
						SQL databases are structured, relational databases with predefined
						schemas, while NoSQL databases offer flexibility and various data
						models.
					</p>
				</div>

				<div className="my-4">
					<h2 className="text-lg font-bold mb-2">
						3. What is Express.js and Nest.js?
					</h2>
					<p>
						Express.js is a minimalist web application framework, while Nest.js
						is a TypeScript-based framework built on top of Express.js.
					</p>
				</div>

				<div className="my-4">
					<h2 className="text-lg font-bold mb-2">
						4. What is MongoDB aggregate?
					</h2>
					<p>
						MongoDB aggregate is a framework for performing data aggregation
						operations on documents in a collection.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
