/** @jsx h */

import h from '../../../helpers/h'

export default [
  {
    type: 'remove_text',
    path: [0, 0],
    offset: 1,
    text: 'or',
    marks: [],
  },
]

export const input = (
  <value>
    <document>
      <paragraph>
        w<cursor />ord
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        w<cursor />d
      </paragraph>
    </document>
  </value>
)
