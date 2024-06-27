import React from 'react';
import Card from './Card';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

interface ItemProps {
  title: string;
  index: number;
}

const Item: React.FC<ItemProps> = ({title, index}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Card index={index}>
      {
        <View>
          <Text
            style={[styles.title, isDarkMode ? styles.darkText : undefined]}>
            {title}
          </Text>
        </View>
      }
    </Card>
  );
};

export default Item;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    height: 150,
    justifyContent: 'center',
  },
  darkText: {
    color: 'white',
  },
});
