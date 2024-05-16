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

export type DriverCardProps = {
  item: TripInfo
  children?: React.ReactNode
  onClick?: () => void
}

const DriverCard = ({ item, children, onClick }: DriverCardProps) => {
  return (
    <Card onClick={onClick}>
      <>
        <div className='trip' style={{ padding: '1rem 0' }}>
          <div>
            <img style={{ marginRight: '1rem'}}
              className='driver-image'
              src={item.driver.image ?? '/assets/male-avatar.svg'}
              alt='CampusCab banner'
            />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <StarIconFilled style={{ width: '1rem' }} />{' '}
              <p style={{fontSize: '0.8rem'}}>{item.driver.stars} / 5.0</p>
            </div>
          </div>
          <div className='details'>
            <h4>
              {item.driver.firstName} {item.driver.lastName}
            </h4>
            <div className='details__places'>
              <span> <OriginIcon style={{ width: '24px' }} /> {item.origin} </span>
              <span style={{fontSize: '16px'}}>&#10132;</span>
              <span> <DestinationIcon style={{ width: '24px' }} /> {item.destination} </span>
            </div>
            <div className='details__hour'>
              <ClockIcon style={{ width: '20px' }} /> <p>{item.hour}</p> -
              <PeopleIcon style={{ width: '20px' }} />
              <p>
                {item.availableSeats}/{item.maxSeats} Pasajeros
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
