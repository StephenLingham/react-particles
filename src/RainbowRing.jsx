import { useState, useEffect } from 'react';
import styles from './css/RainbowRing.module.css';

const RainbowRing = ({xPos, yPos, xVel, yVel}) => {
  useEffect(() => {
    setInterval(update, 1000) //33.3)
  }, []);

  const [xPosition, setxPosition] = useState(xPos);
  const [yPosition, setyPosition] = useState(yPos);
  const [xVelocity, setxVelocity] = useState(xVel);
  const [yVelocity, setyVelocity] = useState(yVel);
  const [gravity, setGravity] = useState(-1);

  const update = () => {
    console.log("gravity: " + gravity);

    let newyVelocity = yVelocity + gravity;
    console.log("newyVelocity: " + newyVelocity);
    setyVelocity(newyVelocity);
    console.log("yVelocity: " + yVelocity);

    let newxPosition = xPosition + xVelocity;
    console.log("newxPosition: " + newxPosition);
    setxPosition(newxPosition);
    console.log("xPosition: " + xPosition);

    let newyPosition = yPosition + yVelocity;
    console.log("newyPosition: " + newyPosition);
    setyPosition(newyPosition);
    console.log("yPosition: " + yPosition);
    
    console.log("called update on rainbow ring");
  }

  let style = {
    top: `${yPosition}px`,
    left: `${xPosition}px`
  }

  return (
    <div className={styles.rainbowRing} style={style} >
    </div>
  )
}

export default RainbowRing;
