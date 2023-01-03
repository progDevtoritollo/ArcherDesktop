import { DatePicker } from 'antd';
import { Link } from "react-router-dom"

const Dashboard = () => {
	return <div>
		<h1>Dashboard</h1>
		<Link to="/test">Dashboard</Link>

		<DatePicker />;
	</div >;
};

export default Dashboard;