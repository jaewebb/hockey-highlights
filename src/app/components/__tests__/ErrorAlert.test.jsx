import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ErrorAlert from '../ErrorAlert'

test('loads the error alert', async () => {
  const error = 'There was an error.'
  render(<ErrorAlert error={error} />)

  const alert = screen.getByTestId('error-alert')

  expect(alert).toBeInTheDocument()
  expect(alert).toHaveTextContent(error)
})
