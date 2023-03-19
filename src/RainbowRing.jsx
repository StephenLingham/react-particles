import styles from './css/RainbowRing.module.css';

const RainbowRing = ({xPos, yPos}) => {
  let style = {
    top: `${yPos}px`,
    left: `${xPos}px`
  }

  return (
    <div className={styles.rainbowRing} style={style} >
    </div>
  )
}

export default RainbowRing;
