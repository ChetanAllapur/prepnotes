import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('PrepNotes web app', () => {
  it('renders the starter screen', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /get started/i }),
    ).toBeInTheDocument()
  })
})
