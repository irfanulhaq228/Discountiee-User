import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme/ThemeProvider';
import AppNavigation from './navigations/AppNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './store/store';

//Ignore all log notifications
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}