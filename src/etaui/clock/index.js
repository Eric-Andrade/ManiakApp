import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ETASimpleText} from '@etaui';

const ETAClock = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let datetime = `${day}/${month}/${year} ${hour}:${min} ${
    hour >= 12 ? 'p.m.' : 'a.m.'
  }`;

  return (
    <View style={styles.container}>
      <ETASimpleText size={12} weight="400" color={'#333'} align="center">
        {datetime}{' '}
      </ETASimpleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1000,
  },
});

export default ETAClock;
