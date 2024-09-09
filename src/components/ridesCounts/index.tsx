import Card from '../ui/card'
import {
  CarIcon,
  DriverIcon,
  MoneyBagWhiteIcon,
  PeopleIcon,
  StarIconFilled
} from '../ui/icon'
import './index.scss'

type TProps = {
  role: 'driver' | 'passanger'
  trips: number
  rate: number
  money?: number
}

const RidesCount = ({ role, trips, money, rate}: TProps) => {
  return (
    <Card>
      <div className='rides-card'>
        <div className='rides-counts'>
          {role == 'driver' && <DriverIcon style={{ width: '70px' }} />}
          {role == 'passanger' && <PeopleIcon style={{ width: '70px' }} />}
          <div className='rides-counts__info'>
            <div>
              <CarIcon style={{ width: '20px' }} /> {trips} viajes hechos
            </div>
            <div>
              <StarIconFilled style={{ width: '20px' }} /> {rate} / 5
            </div>
          </div>
        </div>
        {role == 'driver' && (
          <div className='rides-amounts'>
            <div className='rides-amounts__money'>
              <MoneyBagWhiteIcon />{`$${money} generados`} 
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default RidesCount
