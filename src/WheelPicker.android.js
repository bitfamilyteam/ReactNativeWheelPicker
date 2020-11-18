/**
 * @prettier
 * @flow
 * */

import React from 'react';
import { requireNativeComponent } from 'react-native';

const WheelPickerView = requireNativeComponent('WheelPicker', null);

type Props = {
  data: Array<string>,
  isCyclic?: boolean,
  selectedItemTextColor?: string,
  selectedItemTextSize?: number,
  indicatorWidth?: number,
  hideIndicator?: boolean,
  indicatorColor?: string,
  itemTextColor?: string,
  itemTextSize?: number,
  selectedItem?: number,
  backgroundColor?: string,
  onItemSelected?: (index: number) => void
};

export default class WheelPicker extends React.Component<Props> {
  onItemSelected = (event: any) => {
    if (this.props.onItemSelected) {
      this.props.onItemSelected(event.nativeEvent.position);
    }
  };

  render() {
    const { itemTextColor, selectedItemTextColor = itemTextColor, display, ...restProps } = this.props;
    return (
      <WheelPickerView {...restProps} selectedItemTextColor={selectedItemTextColor} onChange={this.onItemSelected} />
    );
  }
}
