import React from 'react';
import styles from './styles.module.less';
import Title from '../title';


const Right1 = () => {
  const list = [
    '中共丽水市委人才科技领导小组领导小组',
    '关于做好第四届进博会招商引资组织引资组织',
    '丽水市乡村振兴指挥部办公室丽水市乡水市乡',
    '丽水市人民政府办公室关于修改《丽水组织',
    '水市人民政府办公室关于支持企业息',
    '关于印发《丽水市领军型创新创新创新创',
  ]
  return (
    <div className={styles.container}>
      <Title value="产业资讯" />
      <div className={styles.textBox}>
        {
          list.map((item, key) => (
            <div className={`${key % 2 === 0 ? styles.item : styles.ji} item`}>{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Right1;