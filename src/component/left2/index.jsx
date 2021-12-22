import React from 'react';
import styles from './styles.module.less';
import Title from '../title';
import Charts from './charts.jsx';


const Left2 = () => {
  return (
    <div className={styles.container}>
      <Title value="区县项目落地情况" />
      <div style={{ width: '100%', height: 250, marginTop: 20 }}>
        <Charts />
      </div>
    </div>
  )
}

export default Left2;