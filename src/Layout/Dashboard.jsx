// import { NavLink, Outlet } from "react-router-dom";
// import useAuthHook from "../Hook/UseAuthHook";
// const Dashboard = () => {
// 	const { user } = useAuthHook();

// 	return (
// 		<div className="drawer lg:drawer-open">
// 			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
// 			<div className="drawer-content flex flex-col items-center justify-center">
// 				<Outlet></Outlet>
// 				<label
// 					htmlFor="my-drawer-2"
// 					className="btn btn-primary drawer-button lg:hidden"
// 				>
// 					Open drawer
// 				</label>
// 			</div>
// 			<div className="drawer-side">
// 				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
// 				<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
// 					{/* Sidebar content here */}
// 					{user && (
// 						<>
// 							<li>
// 								<NavLink to="/dashboard/manageClass">Manage Class</NavLink>
// 							</li>
// 							<li>
// 								<NavLink to="/dashboard/manageUser">Manage User</NavLink>
// 							</li>
// 						</>
// 					)}

// 					<div className="divider"></div>
// 					<li>
// 						<NavLink to="/">Home</NavLink>{" "}
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
