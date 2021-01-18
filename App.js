import React, {Component, useRef} from 'react';
import {Text, Dimensions, ScrollView} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import * as PathHelper from './PathHelper';

const {width} = Dimensions.get('screen');

export default function App() {
  let month = 10;
  let totalDays = month * 30;

  let leaderLineProperty = {
    lineWidth: width - 180,
    radius: 50,
  };

  let startProcessing = () => {
    path = PathHelper.getPath(month, PathHelper.LeaderPathProperty);
    pathSegmentArray = PathHelper.getPathProperty(path, totalDays, 20);
    area = PathHelper.calculateProgressArea(totalDays, pathSegmentArray);
  };

  startProcessing();

  return (
    <ScrollView style={{flex: 1}}>
      <Svg style={{width: '100%', height: month * 100 + 120}}>
        <Path
          d={area}
          fill="red"
          stroke="black"
          strokeWidth={1}
          fillRule="evenodd"
        />
      </Svg>
    </ScrollView>
  );
}
