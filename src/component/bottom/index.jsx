import React from 'react';
import styles from './styles.module.less';
import di from '../../assets/di.png';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.png';

const Bottom = () => {
  const data = [
    { url: i1, name: '生命健康' },
    { url: i2, name: '半导体' },
    { url: i3, name: '智能设备' },
    { url: i4, name: '时尚产业' },
    { url: i5, name: '数字经济' }
  ]
  return (
    <div className={styles.container}>
      {
        data.map((item, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.iconBox}>
              <img className={styles.img1} src={item.url} alt="icon" />
              <img className={styles.img2} src={di} alt="di" />
            </div>
            <div className={styles.text}>{item.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Bottom;