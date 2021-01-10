import React from 'react'
import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faLink,
  faUnderline
} from '@fortawesome/free-solid-svg-icons'
import styles from './document.m.scss'

export function generateNodeComponentHOC(
  ContentComponent: any
): React.ComponentType<any> {
  return class NodeComponent extends React.Component<{ id: string }, {}> {
    render() {
      return <div className={styles.node}>{ContentComponent}</div>
    }
  }
}

type props = {
  HTMLContent: string
  id: string
  update: any
}

export function ContentComponent({ HTMLContent, id, update }: props) {
  function handleChanges(e: any) {}

  function handleBlur(e: any) {
    update({
      id,
      content: e.target.innerHTML
    })
  }

  function handleFocus(e: any) {}

  function handleButtonClick(e: any) {}

  return (
    <div>
      <div className={styles.node_menu}>
        <button onClick={handleButtonClick} className={styles.button}>
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button onClick={handleButtonClick} className={styles.button}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button onClick={handleButtonClick} className={styles.button}>
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button onClick={handleButtonClick} className={styles.button}>
          <FontAwesomeIcon icon={faLink} />
        </button>
      </div>

      <ContentEditable
        html={HTMLContent}
        onBlur={handleBlur}
        onChange={handleChanges}
        onFocus={handleFocus}
      />
    </div>
  )
}
