import { FormEvent, MouseEvent } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SearchForm({
  handleSearch,
  handleReset,
}: {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void
  handleReset: (event: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center flex-row">
        <div className="flex items-center flex-column">
          <TextField
            id="searchTerm"
            name="searchTerm"
            label="Search Country"
            size="small"
            variant="outlined"
            autoFocus
          />
        </div>
        <Button
          sx={{ mx: '0.5rem' }}
          id="submitButton"
          type="submit"
          variant="contained"
        >
          Search
        </Button>
        <Button
          sx={{ mr: '0.5rem' }}
          id="resetButton"
          type="reset"
          variant="outlined"
          onClick={handleReset}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}
