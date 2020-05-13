/** @format */
import { shallow } from 'enzyme'
import React from 'react'

import App from '../../../src/components/c001'

describe('With Enzyme', () => {
  it('App shows "A simple example repo"', () => {
    const data = {
      title: 'Welcome!',
      list: [
        {
          message: 'A template for nextjs + ant-design + styled-components + typescript + jest + enzyme',
        },
      ],
    }
    const app = shallow(<App data={data} />)
    expect(app.find('p').text()).toEqual(
      'A template for nextjs + ant-design + styled-components + typescript + jest + enzyme',
    )
  })
})
