import React from 'react';
import styles from './styles.module.less';
import Title from '../title';
import Charts from './charts.jsx';


const Left3 = () => {
  return (
    <div className={styles.container}>
      <Title value="区县资金到位情况" />
      <div style={{ width: '100%', height: 250, marginTop: 20 }}>
        <Charts />
      </div>
    </div>
  )
}

export default Left3;