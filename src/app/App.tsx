import { withProviders } from "./providers";
import { Routing } from "pages";
import { Link } from "react-router-dom"
import "./index.scss"

const App = () => {

	return (
		<div className="wrapper">
			<h1>Header</h1>
			<Routing />
			<div><Link to="/dashboard">Dashboard</Link></div>
			<h1>Footer</h1>
		</div>);
}

export default withProviders(App);