import React from 'react'

/**
 * Using Fontaewesome to render button icons
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faLink,
  faUnderline
} from '@fortawesome/free-solid-svg-icons'
/*****************************************************************/

/** Style module */
import styles from './toolbar.m.scss'
/*****************************************************************/

export default function ToolbarComponent() {
  function handleButtonClick(e: any) {
    const { name } = e.target
  }

  return (
    <div className={styles.node_menu}>
      <button
        onClick={handleButtonClick}
        name="bold"
        className={`${styles.button}`}
      >
        <FontAwesomeIcon className={styles.button_icon} icon={faBold} />
      </button>
      <button
        onClick={handleButtonClick}
        name="italic"
        className={styles.button}
      >
        <FontAwesomeIcon className={styles.button_icon} icon={faItalic} />
      </button>
      <button
        onClick={handleButtonClick}
        name="underline"
        className={styles.button}
      >
        <FontAwesomeIcon className={styles.button_icon} icon={faUnderline} />
      </button>
      <button onClick={handleButtonClick} name="link" className={styles.button}>
        <FontAwesomeIcon className={styles.button_icon} icon={faLink} />
      </button>
    </div>
  )
}
