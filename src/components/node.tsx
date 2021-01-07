import React from 'react'

export function generateNodeComponentHOC(
  ContentComponent: any
): React.ComponentType<any> {
  return class NodeComponent extends React.Component<{ id: string }, {}> {
    render() {
      return <div>{ContentComponent}</div>
    }
  }
}
