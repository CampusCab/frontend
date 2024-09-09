import './index.scss'

import React from 'react'
import Card from '../ui/card'
import {
  ClockIcon,
  DestinationIcon,
  OriginIcon,
  PeopleIcon,
  StarIconFilled
} from '../ui/icon'
import { TripInfo } from '../../config/types/trips'

export type DriverInfo = {
  rating_driver: number
  first_name: string
  last_name: string
}

export type DriverCardProps = {
  user?: DriverInfo
  trip: TripInfo
  children?: React.ReactNode
  onClick?: () => void
}

const DriverCard = ({ user, trip, children, onClick }: DriverCardProps) => {
  return (
    <Card>
      <>
        <div className='trip' style={{ padding: '1rem 0' }} onClick={onClick}>
          <div>
            <img
              style={{ marginRight: '1rem' }}
              className='driver-image'
              src={'/assets/male-avatar.svg'}
              alt='CampusCab banner'
            />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <StarIconFilled style={{ width: '1rem' }} />{' '}
              <p style={{ fontSize: '0.8rem' }}>
                {user?.rating_driver && user.rating_driver !== 0 ? user?.rating_driver.toPrecision(2) : 5} / 5
              </p>
            </div>
          </div>
          <div className='details'>
            <h4>
              {user?.first_name} {user?.last_name}
            </h4>
            <div className='details__places'>
              <span>
                {' '}
                <OriginIcon style={{ width: '24px' }} /> {trip.origin}{' '}
              </span>
              <span style={{ fontSize: '16px' }}>&#10132;</span>
              <span>
                {' '}
                <DestinationIcon style={{ width: '24px' }} /> {trip.destination}{' '}
              </span>
            </div>
            <div className='details__hour'>
              <ClockIcon style={{ width: '20px' }} />
              <p>{new Date(trip.start_time).toLocaleString()}</p>
            </div>
            <div className='details__hour'>
              <PeopleIcon style={{ width: '20px' }} />
              <p>
                {trip.offers?.reduce(
                  (aux, value) => (value.accepted ? aux + 1 : aux),
                  0
                )}
                /{trip.capacity} Pasajeros
              </p>
            </div>
          </div>
        </div>
        {children}
      </>
    </Card>
  )
}

export default DriverCard
