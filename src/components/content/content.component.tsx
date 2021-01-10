import React from 'react'
/**
 * This components helps to edit inner html of each document node,
 * avoiding use of dangerouslySetInnerHTML
 * */
import ContentEditable from 'react-contenteditable'
/*****************************************************************/

/** Style module */
import styles from './content.m.scss'
/*****************************************************************/

/**
 * ContentComponent is just a rendder prop component.
 * Get data from the container and use ContentEditable to render it,
 * also recive a update function to update node content from redux
 * state.
 */
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
      <ContentEditable
        html={HTMLContent}
        onBlur={handleBlur}
        onChange={handleChanges}
        onFocus={handleFocus}
      />
    </div>
  )
}
