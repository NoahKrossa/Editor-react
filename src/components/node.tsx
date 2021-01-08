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

type props = {
  HTMLContent: string
  id: string
  update: any
}

export function ContentComponent({ HTMLContent, id, update }: props) {
  function handleChanges(e: any) {}
  function updateNodeState(e: any) {
    update({
      id,
      content: e.target.innerHTML
    })
  }
  return (
    <ContentEditable
      html={HTMLContent}
      onBlur={updateNodeState}
      onChange={handleChanges}
    />
  )
}
