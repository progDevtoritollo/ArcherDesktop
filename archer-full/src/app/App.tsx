import { withProviders } from "./providers";
import { Routing } from "pages";
import "./index.scss"
import { render } from "@testing-library/react";

const App = () => {

	return (
		<>
			<h1>App</h1>
			<Routing />
		</>);

}

export default withProviders(App);
// export default App;
