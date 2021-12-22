import React from 'react';
import styles from './styles.module.less';
import Title from '../title';
import Charts from './charts.jsx';


const Right1 = () => {
  return (
    <div className={styles.container}>
      <Title value="风险监测" />
      <div style={{ width: '100%', height: 250 }}>
        <Charts />
      </div>
    </div>
  )
}

export default Right1;