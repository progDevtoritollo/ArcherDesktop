import { Toaster } from 'react-hot-toast';

import { withProviders } from './providers';
import { Routing } from 'pages';
import './index.scss';

const App = () => {
	return (
		<>
			<Toaster />

			<Routing />
		</>
	);
};

export default withProviders(App);
