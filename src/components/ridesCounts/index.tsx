import Card from '../ui/card'
import {
  CarIcon,
  CommentsIcon,
  CommissionIcon,
  DriverIcon,
  MoneyBagWhiteIcon,
  PeopleIcon,
  StarIconFilled
} from '../ui/icon'
import './index.scss'

type TProps = {
  role: 'driver' | 'passanger'
  data: {
    amount: number
    stars: number
    comments: string[]
  }
  amounts?:{
    money: number
    commissions: number
  }
}

const RidesCount = ({ role, data, amounts}: TProps) => {
  return (
    <Card>
      <div className='rides-card'>
        <div className='rides-counts'>
          {role == 'driver' && <DriverIcon style={{ width: '70px' }} />}
          {role == 'passanger' && <PeopleIcon style={{ width: '70px' }} />}
          <div className='rides-counts__info'>
            <div>
              <CarIcon style={{ width: '20px' }} /> {data.amount} viajes hechos
            </div>
            <div>
              <CommentsIcon style={{ width: '20px' }} /> {data.comments.length}{' '}
              calificaciones
            </div>
            <div>
              <StarIconFilled style={{ width: '20px' }} /> {data.stars} / 5
            </div>
          </div>
        </div>
        {role == 'driver' && (
          <div className='rides-amounts'>
            <div className='rides-amounts__money'>
              <MoneyBagWhiteIcon />{`$${amounts?.money} generados`} 
            </div>
            <div className='rides-amounts__commissions'>
              <CommissionIcon /> {`Comisión $${amounts?.money}`} 
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

export default RidesCount
