'use client'

/* eslint-disable import/no-mutable-exports */
import { useEffect } from 'react'
import { init } from '@amplitude/analytics-browser'

const useAmplitudeInit = () => {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    })
  }, [])
}

export default useAmplitudeInit
