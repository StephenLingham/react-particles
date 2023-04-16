import { useEffect, useState } from "react";
import RainbowRing from "./RainbowRing";
import styles from "./css/ParticleGenerator.module.css";

const ParticleGenerator = () => {
  useEffect(() => {
    setInterval(updateParticles, 33.3)
  }, []);

  const [particles, setParticles] = useState([]);

  const updateParticles = () => {

  };

  const handleClick = (event) => {
    let xPos = event.clientX - 50;
    let yPos = event.clientY - 50;

    let particleToAdd = <RainbowRing xPos={xPos} yPos={yPos} xVel={5} yVel={10} />;

    let newParticles = [...particles]

    newParticles.push(particleToAdd);

    setParticles(newParticles);
  };

  return (
  <div id="particleGenerator" className={styles.particleGenerator} onClick={handleClick}>
    {particles}
  </div>
  );
}

export default ParticleGenerator;
