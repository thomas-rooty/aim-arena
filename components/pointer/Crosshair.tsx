import styles from './Crosshair.module.css';

interface CrosshairProps {
  size: number;
  color: string;
  thickness: number;
}

const Crosshair = ({ size, color, thickness }: CrosshairProps) => {
  let crosshairVert = {
    position: 'absolute',
    width: size + 'px',
    height: thickness + 'px',
    backgroundColor: color,
    left: ((-size / 2) + 1) + 'px',
  } as React.CSSProperties;

  let crosshairHoriz = {
    position: 'absolute',
    width: thickness + 'px',
    height: size + 'px',
    backgroundColor: color,
    top: ((-size / 2) + 1) + 'px',
  } as React.CSSProperties;

  return (
    <div id={styles.crosshair}>
      <div style={crosshairVert}></div>
      <div style={crosshairHoriz}></div>
    </div>
  );
};

export default Crosshair;
