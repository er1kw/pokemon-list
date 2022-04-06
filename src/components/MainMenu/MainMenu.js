import { ListOlIcon } from '../ListOlIcon/ListOlIcon';
import { ListColumnsIcon } from '../ListColumnsIcon/ListColumnsIcon';
import { NavLink } from 'react-router-dom';
import styles from './MainMenu.module.scss';

function MainMenu(props) {
  let menuLinksStyles = styles.MenuLinks,
      menuContainerClasses = '',
      menuListStyles = styles.MenuList;

  if (props.media === 'desktop') {
    menuLinksStyles = props.styles.MenuLinks;
    menuContainerClasses = 'd-flex flex-wrap justify-content-center overflow-auto';
    menuListStyles = props.styles.MenuList;
  }

  return (
    <>
      <ul
        className={
          `navbar-nav navbar-nav-scroll text-break
          ${menuContainerClasses}
          ${menuListStyles}`
        }
      >
        <li className="nav-item">
          <NavLink
            className={`nav-link text-start ${menuLinksStyles}`}
            aria-current="page"
            to="/pokemonList"
          >
            <ListOlIcon /> Pokemon List
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink
            className={`nav-link text-start ${menuLinksStyles}`}
            to="/myPokemonList"
          >
            <ListColumnsIcon /> My Pokemon List
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export { MainMenu };
