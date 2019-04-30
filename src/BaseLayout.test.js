import React from 'react'
import {NavLink} from 'react-router-dom'

import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {BaseLayout,Header} from './BaseLayout'

configure({ adapter : new Adapter() })

describe('<Header />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should display three <NavLink /> when authenticated', () => {
    wrapper.setProps({isAuthenticated:true})
    expect(wrapper.find(NavLink)).toHaveLength(5)
  })

  it('should display four <NavLink /> when not authenticated', () => {
    expect(wrapper.find(NavLink)).toHaveLength(4)
  })
})
