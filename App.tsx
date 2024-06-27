/**
 * Example of loading additional scrolling items and adding more items to the list
 * when within some threshold.
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ItemList from './src/ItemList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ItemList threshold={5} initialSize={10} />
    </SafeAreaView>
  );
}

export default App;
