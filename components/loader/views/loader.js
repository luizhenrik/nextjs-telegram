import React, { useEffect, useContext } from 'react'
import { Router } from 'next/router'
import { GeneralContext } from '../../../contexts/general'
import { LoaderStyle } from '../styles/loader.module'

export default function Loader() {
  const { loading, setLoading } = useContext(GeneralContext)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }

    const end = () => {
      setLoading(false)
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
      <>
      {loading
        ? (
        <LoaderStyle>
            <div className={'loader__area'}>
                <div className={'loader__area-item'}></div>
                <div className={'loader__area-item'}></div>
                <div className={'loader__area-item'}></div>
                <div className={'loader__area-item'}></div>
            </div>
        </LoaderStyle>
          )
        : ('')
    }
    </>
  )
}
