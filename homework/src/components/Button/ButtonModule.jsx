/**
 * INSTRUCTIONS:
 *
 * 1. Extract the <button> element into its own component called `Button`.
 * 2. Move the `Button` component into a new file called `Button.jsx` in a new folder called `Button`.
 * 3. Import the `Button` component into this file.
 * 4. Get the styles from the button in the `RestaurantView.css` file and move them to
 * the `Button.module.css` file, inside the same folder as the `Button.jsx` file.
 * 5. implement the css module in the `Button` component.
 */

import styles from './ButtonModule.module.css'

function ButtonModule({ onClick, children, isSelected }) {
    return (<button className={isSelected ? `${styles.button} selected` : styles.button} onClick={onClick}>{children}</button>);
  }

export default ButtonModule;