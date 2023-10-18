import styles from './index.less'

const WaterMark = () => {

  return (
    <div className={styles['water-mark']}>
      <div className={styles['water-mark-icon']}></div>
      <div className={styles['water-mark-content']}>我的家🏡</div>
    </div>
  )

}

export default WaterMark