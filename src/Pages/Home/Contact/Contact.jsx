import { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [recipient, setRecipient] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:3000/sendEmail", {
				to: recipient,
				subject,
				message,
			});
			setStatus(response.data.message);
		} catch (error) {
			console.error(error);
			setStatus("Error sending email");
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
				<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="text-sm font-medium text-gray-700">
							Recipient
						</label>
						<input
							type="email"
							className="input input-bordered w-full"
							placeholder="Input Your Email"
							value={recipient}
							onChange={(e) => setRecipient(e.target.value)}
						/>
					</div>
					<div>
						<label className="text-sm font-medium text-gray-700">Subject</label>
						<input
							type="text"
							className="input input-bordered w-full"
							placeholder="Subject"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
					</div>
					<div>
						<label className="text-sm font-medium text-gray-700">Message</label>
						<textarea
							rows="4"
							className="textarea textarea-bordered w-full"
							placeholder="Message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary w-full">
						Send Email
					</button>
				</form>
				{status && <p className="mt-4 text-center text-red-500">{status}</p>}
			</div>
		</div>
	);
};

export default Contact;
