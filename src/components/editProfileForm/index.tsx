import { Control, Controller } from 'react-hook-form'
import Input from '../../components/ui/input'
import { PhoneIcon, UserFillIcon } from '../ui/icon'
import { TEditProfile } from '../../config/types/forms'

export type TProps = {
  firstName: string
  lastName: string
  phone: string
  control: Control<TEditProfile>
}

const EditProfileForm = ({ firstName, lastName, phone, control }: TProps) => {
  return (
    <>
      <div className='form__row'>
        <Controller
          control={control}
          name='first_name'
          defaultValue={firstName}
          render={({ field, fieldState }) => (
            <Input
              name='firstName'
              placeholder='Nombres'
              type='text'
              icon={<UserFillIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='last_name'
          defaultValue={lastName}
          render={({ field, fieldState }) => (
            <Input
              name='firstName'
              placeholder='Apellidos'
              type='text'
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className='form__row'>
        <Controller
          control={control}
          name='phone'
          defaultValue={phone}
          render={({ field, fieldState }) => (
            <Input
              name='phone'
              placeholder='Telefono'
              type='number'
              icon={<PhoneIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </>
  )
}

export default EditProfileForm
