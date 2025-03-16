import { FormEvent, MouseEvent } from 'react'

export default function SearchForm({
  handleSearch,
  handleReset,
}: {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void
  handleReset: (event: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <form onSubmit={handleSearch}>
      <div style={{ alignItems: 'end', display: 'flex', flexDirection: 'row' }}>
        <div style={{ alignItems: 'middle', display: 'flex', flexDirection: 'column' }}>
          <label id="searchLabel" htmlFor="searchTerm" style={{color: '#bbbbbb', fontWeight: 'bold' }}>
            Search Country
          </label>
          <input
            autoFocus
            id="searchTerm"
            name="searchTerm"
            style={{
              borderRadius: '0.188rem',
              border: '0.1rem solid #bbbbbb',
              padding: '0.5rem'
            }}
          />
        </div>
        <button
          id="submitButton"
          type="submit"
          style={{
            backgroundColor: 'dodgerblue',
            borderColor: 'dodgerblue',
            borderRadius: '0.188rem',
            color: '#eeeeee',
            padding: '0.5rem',
            marginLeft: '0.5rem'
          }}
        >
          Search
        </button>
        <button
          id="resetButton"
          type="reset"
          onClick={handleReset}
          style={{
            backgroundColor: 'transparent',
            borderColor: 'dodgerblue',
            borderRadius: '0.188rem',
            color: 'dodgerblue',
            padding: '0.5rem',
            marginLeft: '0.5rem'
          }}
        >
          Clear
        </button>
      </div>
    </form>
  )
}
