import { Controller, useForm } from 'react-hook-form'
import { TEditProfile } from '../../config/types/forms'
import Input from '../../components/ui/input'
import { LockIcon, PhoneIcon, UserFillIcon } from '../ui/icon'

export type TProps = {
  firstName: string
  lastName: string
  phone: string
}

const EditProfileForm = ({ firstName, lastName, phone }: TProps) => {
  const { control, handleSubmit } = useForm<TEditProfile>()

  return (
    <form className='form'>
      <div className='form__row'>
        <Controller
          control={control}
          name='firstName'
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
          name='lastName'
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
      <div className='form__row' style={{ flexWrap: 'wrap' }}>
        <Controller
          control={control}
          name='password'
          defaultValue=''
          render={({ field, fieldState }) => (
            <Input
              name='password'
              placeholder='Contraseña'
              type='password'
              icon={<LockIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='confirmPassword'
          defaultValue=''
          render={({ field, fieldState }) => (
            <Input
              name='confirmPassword'
              placeholder='Confirma tu contraseña'
              type='password'
              icon={<LockIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </form>
  )
}

export default EditProfileForm
