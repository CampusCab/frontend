import { Vehicle } from '../../config/types/trips'
import { Controller, useForm } from 'react-hook-form'
import Input from '../ui/input'
import { InfoIcon, LicenceIcon, PeopleIcon } from '../ui/icon'
import './index.scss'

export type TProps = {
  licence: string
  model: string
  max_passengers: number
}

const EditVehicleForm = ({ licence, max_passengers, model }: TProps) => {
  const { control, handleSubmit } = useForm<Vehicle>()

  return (
    <form className='form'>
      <div className='form__row'>
        <Controller
          control={control}
          name='license'
          defaultValue={licence}
          render={({ field, fieldState }) => (
            <Input
              name='licence'
              placeholder='Placa'
              type='text'
              icon={<InfoIcon style={{ width: '20px' }} />}
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
          name='model'
          defaultValue={model}
          render={({ field, fieldState }) => (
            <Input
              name='model'
              placeholder='Modelo'
              type='text'
              icon={<LicenceIcon style={{ width: '20px' }} />}
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
          name='max_passengers'
          defaultValue={max_passengers}
          render={({ field, fieldState }) => (
            <Input
              name='passengers'
              placeholder='Pasajeros máximos'
              type='number'
              icon={<PeopleIcon style={{ width: '20px' }} />}
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

export default EditVehicleForm
