import React from 'react';
import styles from './styles.module.less';
import Title from '../title';
import Charts from './charts.jsx';


const Left1 = () => {
  return (
    <div className={styles.container}>
      <Title value="全国招商进度" />
      <div className={styles.textBox}>
        <div className={styles.t1}>新引进项目总数: </div>
        <div className={styles.t2}>427</div>
        <div className={styles.t3}>个</div>
      </div>
      <div style={{ width: '100%', height: 200 }}>
        <Charts />
      </div>
    </div>
  )
}

export default Left1;