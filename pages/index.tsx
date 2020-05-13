/** @format */

import React from 'react'
import C001 from '../src/components/c001'
import { IData as IDataC001 } from '../src/components/c001/interface'

export default () => {
  const data: IDataC001 = {
    title: 'Welcome!',
    list: [
      {
        message: 'A template for nextjs + ant-design + styled-components + typescript + jest + enzyme',
      },
    ],
  }
  return (
    <div>
      <C001 data={data} />
    </div>
  )
}
