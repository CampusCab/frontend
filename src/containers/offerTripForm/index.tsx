import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import VehicleCardList from '../vehicleCardList'
import { Vehicle } from '../../config/types/trips'
import { TOfferTrip } from '../../config/types/forms'
import Select from '../../components/ui/select'
import {
  ClockGreyIcon,
  DestinationGreyIcon,
  OriginGreyIcon
} from '../../components/ui/icon'
import Input from '../../components/ui/input'
import TextArea from '../../components/ui/textArea'
import Button from '../../components/ui/button'
import useFetchMutation from '../../hooks/useFetchMutation'
import { CREATE_TRIPS } from '../../services/trips/createTrip'
import { UseAuth } from '../../hooks/useAuth'

const options = [
  'Campus El Volador',
  'Campus Del Río',
  'Campus Robledo',
  'Otro'
]

export type TProps = {
  data: Vehicle[]
  isLoading: boolean
  setHasActiveTrip: () => void
}

const OfferTripForm = ({ data, isLoading, setHasActiveTrip }: TProps) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>()
  const [showDetails, setShowDetails] = useState(false)
  const { control, setValue, handleSubmit } = useForm<TOfferTrip>()
  const { getTokens } = UseAuth()
  const userInfo = JSON.parse(localStorage.getItem('user')  || '{}')

  const { fetchService } = useFetchMutation({
    ...CREATE_TRIPS,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setValue('vehicle', vehicle.id!)
    setSelectedVehicle(vehicle)
  }

  const handleContinue = () => {
    setShowDetails(true)
  }

  const handleSelect = (value: string, field: keyof TOfferTrip) => {
    setValue(field, value)
  }

  const onSubmit = async (data: TOfferTrip) => {
    await fetchService({
      vehicle: data.vehicle,
      destination: data.destination === 'Otro' ? data.otherDestination : data.destination,
      origin: data.origin === 'Otro' ? data.otherOrigin : data.origin,
      start_time: data.start_time,
      description: data?.description
    }).then(() => {
      localStorage.setItem('user', JSON.stringify({ ...userInfo, currently_driver: true }))
      setHasActiveTrip()
    })
  }

  const renderVehicleList = !isLoading && (
    <VehicleCardList
      data={data}
      onClick={(vehicle) => handleSelectVehicle(vehicle)}
      selectedVehicle={selectedVehicle}
      onContinue={handleContinue}
    />
  )

  const renderForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='origin'
        control={control}
        rules={{
          required: 'Origen es requerido',
          validate: (value) =>
            value === 'Otro' && control._formValues.destination === 'Otro'
              ? 'Origen o destino debe ser un campus'
              : true
        }}
        render={({ field, fieldState }) => (
          <>
            <Select
              options={options}
              value={field.value}
              placeholder='Ingresa origen del viaje'
              icon={<OriginGreyIcon />}
              onChange={(e) => handleSelect(e.target.value, 'origin')}
              errorMessage={fieldState.error?.message}
            />
            {field.value === 'Otro' && (
              <Controller
                name='otherOrigin'
                control={control}
                render={({ field }) => (
                  <Input
                    type='text'
                    variant='rounded'
                    placeholder='Ingresa el origen del viaje'
                    {...field}
                  />
                )}
              />
            )}
          </>
        )}
      />
      <Controller
        name='destination'
        control={control}
        rules={{
          required: 'Origen es requerido',
          validate: (value) =>
            value === 'Otro' && control._formValues.origin === 'Otro'
              ? 'Origen o destino debe ser un campus'
              : true
        }}
        render={({ field, fieldState }) => (
          <>
            <Select
              options={options}
              value={field.value}
              placeholder='Ingresa destino del viaje'
              icon={<DestinationGreyIcon />}
              onChange={(e) => {
                handleSelect(e.target.value, 'destination')
              }}
              errorMessage={fieldState.error?.message}
            />
            {field.value === 'Otro' && (
              <Controller
              name='otherDestination'
              control={control}
              render={({ field }) => (
                <Input
                  type='text'
                  variant='rounded'
                  placeholder='Ingresa el destino del viaje'
                  {...field}
                />
              )}
            />
            )}
          </>
        )}
      />
      <Controller
        name='start_time'
        control={control}
        rules={{ required: 'Hora es requerida' }}
        render={({ field, fieldState }) => (
          <div style={{ display: 'flex' }}>
            <ClockGreyIcon style={{ marginRight: '10px' }} />
            <Input
              type='datetime-local'
              variant='rounded'
              errorMessage={fieldState.error?.message}
              placeholder='Ingresa la hora de inicio'
              {...field}
            />
          </div>
        )}
      />
      <Controller
        name='description'
        control={control}
        render={({ field, fieldState }) => (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TextArea
              name='description'
              value={field.value!}
              onChange={field.onChange}
              variant='rounded'
              label='Ingresa indicaciones extra (Opcional):'
              errorMessage={fieldState.error?.message}
              placeholder='Descripcion...'
              
            />
          </div>
        )}
      />
      <Button
        type='submit'
        variant='primary'
        style={{ minWidth: '200px', margin: '2rem auto' }}
      >
        Publicar
      </Button>
    </form>
  )

  return (
    <>
      <section className='offer-trip'>
        <h3>
          {showDetails
            ? 'Completa la información del viaje'
            : 'Selecciona el vehículo que usarás'}
        </h3>
        {showDetails ? renderForm : renderVehicleList}
      </section>
    </>
  )
}

export default OfferTripForm
