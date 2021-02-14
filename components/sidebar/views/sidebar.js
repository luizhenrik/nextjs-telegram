
import React, { useContext } from 'react'

import { GeneralContext } from '../../../contexts/general'
import { Sidebarstyle } from '../styles/sidebar.module'

function Sidebar() {
  const { sidebarOpen, set_sidebarOpen } = useContext(GeneralContext)

  const handlerSidebarOpen = () => {
    set_sidebarOpen(!sidebarOpen)
  }

  return (
        <>
            <Sidebarstyle data-open={sidebarOpen}>
                <div className={'sidebar__overlay'} onClick={handlerSidebarOpen}></div>
                <div className={'sidebar__content'}>
                    <div className={'sidebar__header'}></div>
                    <div className={'sidebar__main'}></div>
                    <div className={'sidebar__footer'}></div>
                </div>
            </Sidebarstyle>
        </>
  )
}

export default Sidebar
