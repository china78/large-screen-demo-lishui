import React from 'react';
import styles from './styles.module.less';
import titleImg from '../../assets/title.png';
import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';

const Header = () => {
  return (
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
  )
}

export default Header;