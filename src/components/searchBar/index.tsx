import { SearchIcon } from '../ui/icon'
import { Input } from '../ui/input'

type SearchBarProps = {
  onChange: (e: string) => void
  value: string
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <>
      <Input
        name='search'
        type='text'
        placeholder='¿A dónde quieres ir?'
        variant='rounded'
        icon={<SearchIcon />}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  )
}

export default SearchBar
