import { track, identify, Identify } from '@amplitude/analytics-browser'

export const trackAmplitudeEvent = (
  event,
  data,
) => {
  track(event, data)
}

const identifyObj = new Identify()
export const identifyAmplitudeProp = (
  prop,
  value,
) => {
  identifyObj.set(prop, value)
  identify(identifyObj)
}
