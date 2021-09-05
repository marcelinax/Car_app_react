import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'}>
						<MainScreen/>
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
