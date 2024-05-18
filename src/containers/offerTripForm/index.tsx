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

const vehicles: Vehicle[] = [
  {
    id: 'ABC - 123',
    brand: 'Toyota',
    model: 'Corolla',
    seats: 4,
    type: 'car',
    year: 2018
  },
  {
    id: 'DEF - 45A',
    brand: 'Honda',
    model: 'CB 190R',
    seats: 1,
    type: 'bike',
    year: 2020
  }
]

const options = ['Option 1', 'Option 2', 'Option 3']

const OfferTripForm = () => {
  const [hasSelection, setHasSelection] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const form = useForm<TOfferTrip>()

  const handleSelectVehicle = (vehicle: Vehicle) => {
    form.setValue('vehicle', vehicle)
    setHasSelection(true)
  }

  const handleContinue = () => {
    setShowDetails(true)
  }

  const handleSelect = (value: string, field: keyof TOfferTrip) => {
    form.setValue(field, value)
  }

  const renderVehicleList = (
    <VehicleCardList
      data={vehicles}
      onClick={(vehicle) => handleSelectVehicle(vehicle)}
      hasSelection={hasSelection}
      onContinue={handleContinue}
    />
  )

  const renderForm = (
    <form>
      <Controller
        name='origin'
        control={form.control}
        render={({ field, fieldState }) => (
          <Select
            options={options}
            value={field.value}
            placeholder='Ingresa origen del viaje'
            icon={<OriginGreyIcon />}
            onChange={(e) => handleSelect(e.target.value, 'origin')}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='destination'
        control={form.control}
        render={({ field, fieldState }) => (
          <Select
            options={options}
            value={field.value}
            placeholder='Ingresa destino del viaje'
            icon={<DestinationGreyIcon />}
            onChange={(e) => handleSelect(e.target.value, 'destination')}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name='hour'
        control={form.control}
        render={({ field, fieldState }) => (
          <div style={{ display: 'flex' }}>
            <ClockGreyIcon style={{ marginRight: '10px' }} />
            <Input
              name='hour'
              type='text'
              variant='rounded'
              value={field.value}
              errorMessage={fieldState.error?.message}
              placeholder='Ingresa la hora de inicio'
            />
          </div>
        )}
      />
      <Controller
        name='description'
        control={form.control}
        render={({ field, fieldState }) => (
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <TextArea
              name='description'
              value={field.value}
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
        variant='inverse'
        style={{ minWidth: '200px', margin: '2rem auto' }}
      >
        Publicar
      </Button>
    </form>
  )

  return (
    <section className='offer-trip'>
      <h3>
        {showDetails
          ? 'Completa la información del viaje'
          : 'Selecciona el vehículo que usarás'}
      </h3>
      {showDetails ? renderForm : renderVehicleList}
    </section>
  )
}

export default OfferTripForm
