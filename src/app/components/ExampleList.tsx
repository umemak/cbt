import * as React from 'react'
import ExampleListItem from './ExampleListItem'
import { Example } from '../interfaces'

type Props = {
  items: Example[]
}

const ExampleList: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ExampleListItem data={item} />
      </li>
    ))}
  </ul>
)

export default ExampleList
