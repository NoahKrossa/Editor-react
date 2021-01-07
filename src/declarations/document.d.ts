export declare type NodeType = {
  id: string
  content: string
}
export declare type DocumentPropsType = {
  nodeList: NodeType[]
}
export declare type NodeComponentPropsType = {
  id: string
  removeNode: (id: string) => void
}
export declare type ContentComponentPropsType = {
  HTMLContent: string
}
