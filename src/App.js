import React, { Component } from 'react';
import { ScaleViewContainer, ScaleViewItem } from 'tgg-large-screen';
import './App.css';
import Map from './component/map';
import Left1 from './component/left1';
import Left2 from './component/left2';
import Left3 from './component/left3';
import Right1 from './component/right1';
import Right2 from './component/right2';
import Right3 from './component/right3';
import Bottom from './component/bottom';
import Header from './component/header';
import Config from './config';

class App extends Component {
  render() {
    return (
      <ScaleViewContainer
        className="bigContainer"
        config={Config.container}
      >
        <ScaleViewItem config={Config.map}>
          <Map />
        </ScaleViewItem>
        <ScaleViewItem
          config={Config.topChart}
        >
          <Header />
        </ScaleViewItem>
        <ScaleViewItem
          config={Config.leftChart}
        >
          <Left1 />
          <Left2 />
          <Left3 />
        </ScaleViewItem>
        <ScaleViewItem
          config={Config.rightChart}
        >
          <Right1 />
          <Right2 />
          <Right3 />
        </ScaleViewItem>
        <ScaleViewItem
          config={Config.bottomChart}
        >
          <Bottom />
        </ScaleViewItem>
      </ScaleViewContainer>
    );
  }
}

export default App;