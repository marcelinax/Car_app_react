import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import Settings from './components/Settings';
import SettingsAc from './components/SettingsAc';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path={'/'}>
						<MainScreen/>
					</Route>
					<Route path={'/settings'}>
						<Settings/>
					</Route>
					<Route path={'/settings-ac'}>
						<SettingsAc/>
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
