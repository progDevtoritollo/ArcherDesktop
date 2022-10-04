import { withProviders } from "./providers";
import { Routing } from "pages";
import { Link } from "react-router-dom"
import "./index.scss"

const App = () => {

	return (
		<>
			{/* <Header/> */}
			<div><Link to="/test2">Test2</Link></div>
			<h1>Header</h1>
			<Routing />
			{/* Footer */}
		</>);
}

export default withProviders(App);
// export default App;
