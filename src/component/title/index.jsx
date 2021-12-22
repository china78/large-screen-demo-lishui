import React from 'react';
import styles from './styles.module.less';
const Title = ({ value }) => {
  return (
    <div className={styles.container}>
      {value}
    </div>
  )
}

export default Title;