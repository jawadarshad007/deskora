import { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).formatToParts(now)
  const getPart = (type) => parts.find((part) => part.type === type)?.value
  const dateTime = `${getPart('weekday').toLowerCase()} ${getPart('month').toLowerCase()} ${getPart('day')} ${getPart('hour')}:${getPart('minute')} ${getPart('dayPeriod')}`

  return (
    <div>{dateTime}</div>
  )
}

export default DateTime