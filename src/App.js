import React, { Component } from 'react';
import { ScaleViewContainer, ScaleViewItem } from 'tgg-large-screen';
import './App.css';
import styles from './App.module.less';
import titleImg from './assets/title.png';
import l1 from './assets/l1.png';
import l2 from './assets/l2.png';
import Map from './component/map';
import Left1 from './component/left1';
import Left2 from './component/left2';
import Left3 from './component/left3';
import Right1 from './component/right1';
import Right2 from './component/right2';
import Right3 from './component/right3';
import Bottom from './component/bottom';

class App extends Component {
  render() {
    return (
      <ScaleViewContainer
        className="bigContainer"
        config={{
          width: 1920, // (必选)容器宽度；如 1920，
          height: 1080, // (必选)容器高度；如 1080，
          scaleType: 'FULL_SCREEN',
        }}
      >
        <ScaleViewItem config={{
          style: { left: 0, top: 0, width: '100%', height: '100%' },
          mode: 'fixed'
        }}>
          <Map />
        </ScaleViewItem>
        <ScaleViewItem
          config={{
            id: 'headerChart',
            style: { left: 0, top: 0, width: '100%', height: 100 },
            transition: {
              anim: 'slide',
              from: 'top',
              timeout: 300,
              delay: 100
            },
            contentStyle: { background: 'rgba(255, 255, 255, 0)' },
            mode: 'adaptWidth'
          }}
        >
          <div className={styles.headerBox}>
            <div className={styles.time}>2021 年 10 月 31 日 16:54:23</div>
            <div className={styles.titleBox}>
              <img className={styles.title} src={titleImg} alt="default" />
            </div>
            <div className={styles.rightBox}>
              <img className={styles.location} src={l1} alt="default" />
              <div className={styles.text}>首页驾驶舱</div>
              <img className={styles.la} src={l2} alt="default" />
            </div>
          </div>
        </ScaleViewItem>
        <ScaleViewItem
          config={{
            id: 'leftChart',
            style: { left: 0, top: 0, bottom: 0, width: 400, marginTop: 20 },
            transition: {
              anim: 'slide',
              from: 'left',
              timeout: 300,
              delay: 100,
            },
            contentStyle: { background: 'rgba(255, 255, 255, 0.1)' },
            relations: {
              layoutBelow: 'headerChart',
              // layoutAbove: 'bottomChart'
            },
            mode: 'scaleXFix',
          }}
        >
          <Left1 />
          <Left2 />
          <Left3 />
        </ScaleViewItem>
        <ScaleViewItem
          config={{
            id: 'rightChart',
            style: { right: 0, top: 0, bottom: 0, width: 400, marginTop: 20 },
            transition: {
              anim: 'slide',
              from: 'right',
              timeout: 300,
              delay: 100,
            },
            contentStyle: { background: 'rgba(255, 255, 255, 0.1)' },
            relations: {
              layoutBelow: 'headerChart',
              // toRightOf: 'bottomChart',
            },
            mode: 'scaleXFix',
          }}
        >
          <Right1 />
          <Right2 />
          <Right3 />
        </ScaleViewItem>
        <ScaleViewItem
          config={{
            id: 'bottomChart',
            style: { bottom: 0, left: 0, right: 0, height: '160px' },
            transition: {
              anim: 'slide',
              from: 'bottom',
              timeout: 250
            },
            mode: 'scaleYFix',
            contentStyle: { background: 'rgba(255, 255, 255, 0.1)' },
            relations: {
              toRightOf: 'leftChart',
              toLeftOf: 'rightChart',
            }
          }}
        >
          <Bottom />
        </ScaleViewItem>
      </ScaleViewContainer>
    );
  }
}

export default App;