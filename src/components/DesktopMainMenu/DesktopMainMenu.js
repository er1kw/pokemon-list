import { MainMenu } from '../MainMenu/MainMenu';
import styles from './DesktopMainMenu.module.scss';

function DesktopMainMenu() {
  return <MainMenu media="desktop" styles={styles} />;
}

export { DesktopMainMenu };
