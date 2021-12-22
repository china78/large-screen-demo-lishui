import React from 'react';
import styles from './styles.module.less';
import Title from '../title';
import Charts1 from './charts1.jsx';


const Right1 = () => {
  return (
    <div className={styles.container}>
      <Title value="产业分布" />
      <div className={styles.title}>新引进大项目数量分布</div>
      <div style={{ width: '100%', height: 200 }}>
        <Charts1 />
      </div>
    </div>
  )
}

export default Right1;