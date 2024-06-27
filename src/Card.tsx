import React from 'react';
import {StyleSheet, View} from 'react-native';

const OPACITIES = [1, 0.8, 0.5] as const; // Used to change the opacity of the card based on the card's index in the array.
const BACKGROUND_COLOR = '#059669';

const Card: React.FC<{children?: React.ReactNode; index?: number}> = ({
  children,
  index,
}) => {
  const opacity = index ? OPACITIES[index % OPACITIES.length] : OPACITIES[0];
  return (
    <View
      style={[styles.container, {backgroundColor: BACKGROUND_COLOR, opacity}]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 25,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
});
