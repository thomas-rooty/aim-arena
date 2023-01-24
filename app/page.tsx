import styles from './page.module.css'
import Scene from "@/app/scene";
import Crosshair from "@/components/pointer/Crosshair";

const Home = () => {
  return (
    <div className={styles.canvas}>
      <Crosshair
        size={50}
        color="red"
        thickness={2}
      />
      <Scene />
    </div>
  )
}

export default Home
