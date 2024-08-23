import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './app/context/auth';
import Route from './app/route';

function App(): React.JSX.Element {
  //42AD4D
  return (
    <AuthProvider>
      <NavigationContainer
        linking={{
          prefixes: ['miniticket://app'],
          config: {
            screens: {
              detail: 'detail/:postId',
            },
          },
        }}>
        <Route />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
