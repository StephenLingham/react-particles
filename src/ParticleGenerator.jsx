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

  const handleClick = () => {

    let xPos = Math.random() * window.innerWidth;
    let yPos = Math.random() * window.innerHeight;

    let particleToAdd = <RainbowRing xPos={xPos} yPos={yPos} />;

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