/**
 * @prettier
 * @flow
 * */

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import type { Event } from './Utils';

type Props = {
  onTimeSelected: (Date) => void,
  initTime: Date,
  itemTextColor?: string,
};

type State = {
  chosenTime: Date,
};

export default class DatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { chosenTime: props.initTime || new Date() };
  }

  setTime = (_: Event, newDate: Date) => {
    this.setState({ chosenTime: newDate });
    const { onTimeSelected } = this.props;
    if (onTimeSelected && newDate) {
      onTimeSelected(newDate);
    }
  };

  render() {
    const {
      props: { itemTextColor },
      state: { chosenTime },
    } = this;

    return (
      <DateTimePicker
        mode='time'
        style={styles.picker}
        value={chosenTime}
        onChange={this.setTime}
        textColor={itemTextColor}
        {...this.props}
      />
    );
  }
}

let styles = StyleSheet.create({
  picker: {
    width: Dimensions.get('screen').width,
  },
});
