import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './app/context/auth';
import Route from './app/route';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
