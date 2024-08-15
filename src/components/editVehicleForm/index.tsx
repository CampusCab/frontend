import { Vehicle } from '../../config/types/trips'
import { Controller, useForm } from 'react-hook-form'
import Input from '../ui/input'
import { InfoIcon, LicenceIcon, PeopleIcon } from '../ui/icon'
import './index.scss'
import Button from '../ui/button'
import { UseAuth } from '../../hooks/useAuth'
import { UPDATE_VEHICLE_SERVICE } from '../../services/vehicles/updateVehicle'
import Loader from '../ui/loader'
import useFetchMutation from '../../hooks/useFetchMutation'
import { CREATE_VEHICLE_SERVICE } from '../../services/vehicles/createVehicle'
import { usePopUp } from '../ui/popUp'

export type TProps = {
  id?: number
  licence?: string
  model?: string
  max_passengers?: number
  onClose: () => void
  refetch: () => void
}

const EditVehicleForm = ({
  id,
  licence,
  max_passengers,
  model,
  onClose,
  refetch
}: TProps) => {
  const { control, handleSubmit } = useForm<Vehicle>({
    defaultValues: {
      id
    }
  })
  const { getTokens } = UseAuth()
  const { addPopUp } = usePopUp()

  const { fetchService, isLoading } = useFetchMutation({
    ...UPDATE_VEHICLE_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const { fetchService: createService, isLoading: createLoading } =
    useFetchMutation({
      ...CREATE_VEHICLE_SERVICE,
      headers: {
        Authorization: `Bearer ${getTokens()?.access_token}`
      }
    })

  const onSubmit = async (data: Vehicle) => {
    if (!data.id) {
      await createService({
        license: data.license,
        model: data.model,
        max_passengers: data.max_passengers,
        vehicle_type: 'car'
      })
        .then((res) => {
          if (res) {
            addPopUp('success', 'Vehículo creado con éxito')
            refetch()
          } else {
            addPopUp('danger', 'Error al crear el vehículo')
          }
        })
        .catch(() => addPopUp('danger', 'Error al crear el vehículo'))
    } else {
      fetchService(
        {
          license: data.license,
          model: data.model,
          max_passengers: data.max_passengers
        },
        String(data.id)
      )
        .then((res) => {
          if (res) {
            addPopUp('success', 'Vehículo creado con éxito')
            refetch()
          } else {
            addPopUp('danger', 'Error al crear el vehículo')
          }
        })
        .catch(() => addPopUp('danger', 'Error al editar el vehículo'))
    }
    onClose()
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit((data) => onSubmit(data))}>
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
        <Button className='cancel-button' type='submit' variant='primary'>
          Guardar
        </Button>
      </form>
      {isLoading && createLoading && <Loader />}
    </>
  )
}

export default EditVehicleForm
