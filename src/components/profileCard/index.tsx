import { Profile } from '../../config/types/user'
import Card from '../ui/card'
import { CarIcon, EmailIcon, PhoneIcon } from '../ui/icon'

import './index.scss'

export type ProfileCardProps = {
  user: Profile
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Card>
      <>
        <div className='profile-card' style={{ padding: '1rem 0' }}>
          <div>
            <img
              style={{ marginRight: '1rem' }}
              className='driver-image'
              src={user.image ?? '/assets/male-avatar.svg'}
              alt='CampusCab banner'
            />
          </div>
          <div className='details'>
            <h4>{user.name}</h4>
            <div className='details__row'>
              <EmailIcon style={{ width: '20px' }} /> {user.email}
            </div>
            <div className='details__row'>
              <PhoneIcon style={{ width: '20px' }} /> {user.phone}
            </div>
            <div className='details__row'>
              <CarIcon style={{ width: '20px' }} /> {user.carsRegistered.length}{' '}
              autos registrados
            </div>
          </div>
        </div>
      </>
    </Card>
  )
}

export default ProfileCard
