import React from 'react'
import ContentEditable from 'react-contenteditable'

export function generateNodeComponentHOC(
  ContentComponent: any
): React.ComponentType<any> {
  return class NodeComponent extends React.Component<{ id: string }, {}> {
    render() {
      return <div>{ContentComponent}</div>
    }
  }
}

export function ContentComponent({ HTMLContent }: { HTMLContent: string }) {
  function handleChanges(e: any) {}
  return <ContentEditable html={HTMLContent} onChange={handleChanges} />
}
