import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Banner from './Components/Banner/Banner'
import Header from './Foundation/Header/Header'
import Menu from './Components/Menu/Menu'
import Timeline from './Components/Timeline/Timeline'
import Start from './Components/Start/Start'
import Show from './Components/Show/Show'
import Footer from './Foundation/Footer'

import { toggleSidenav } from './Foundation/Header/actions/header-actions'
import { setTimelineInformation } from './Components/Timeline/actions/timeline-actions.js'

import './Cv.css';

const Cv = props => {
  const [key, setKey] = React.useState(null)
  const active = props.status.menu.menu.fields.menuInformation.navs.find(nav => nav.active)
  const timeline = props.timeline.fields.timelineInformation
  useEffect(() => {
    setKey(active.reload)
  })

  return (
    <>
      <div className="container">
        <Menu />
        <Header />
        <Banner />
        {active.key === 'sta' && 
          <Start />
        }
        {active.key === 'com' &&
          <Show /> 
        }
        {active.key === 'exp' && 
          <Timeline 
            key={key} 
            props={props}
            compKey={'exp'} 
            value={timeline.wrkValues}
            height={1595}
          />
        }
        {active.key === 'edu' && 
          <Timeline 
            key={key} 
            props={props}
            compKey={'edu'}
            value={timeline.ecnValues}
            height={1300} 
          />
        }
      </div>
      <Footer key={key} />
    </>  
  );
}


const mapStateToProps = state => ({
  status: state,
  timeline: state.timeline.timeline
})
export default connect(mapStateToProps, {
  toggleSidenav, setTimelineInformation
}) (Cv)
