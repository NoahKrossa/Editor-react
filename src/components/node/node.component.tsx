import React from 'react'

import ToobarComponent from '../toobar/toolbar.component'

/** Style module */
import styles from './node.m.scss'
/****************************************************************************/

/**
 * Implement HOC to generate nodeComponent, this receives a ContentComponent
 * and returns NodeComponent
 * @param ContentComponent
 */
export function generateNodeComponentHOC(
  ContentComponent: any
): React.ComponentType<any> {
  return class NodeComponent extends React.Component<{ id: string }, {}> {
    render() {
      return (
        <div className={styles.node}>
          <ToobarComponent />
          {ContentComponent}
        </div>
      )
    }
  }
}
/****************************************************************************/
