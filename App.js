import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import RouteProvider from './providers/routes/RouteProvider';
import CardView from './views/posts/CardView';

export default function App() {
  return (
    <NativeBaseProvider>
      <RouteProvider>
        <View >
          <CardView />
        </View>
      </RouteProvider>
    </NativeBaseProvider>
  );
}
