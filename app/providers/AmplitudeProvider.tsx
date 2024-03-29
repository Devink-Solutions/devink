'use client'

import { init } from '@amplitude/analytics-browser'
import { PropsWithChildren, useEffect } from 'react'

export default function AmplitudeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY!, {
      defaultTracking: true,
    })
  }, [])

  return children
}
