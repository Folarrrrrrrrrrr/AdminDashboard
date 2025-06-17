import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

// ✅ Automatically uses __mocks__/leaflet.js
vi.mock('leaflet')

// Component
import YearlyRevenue from '../Dashboard'

// Mock useSelector and useDispatch from react-redux
vi.mock('react-redux', async () => {
  const actual = await vi.importActual('react-redux')
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: () => vi.fn(),
  }
})

import { useSelector } from 'react-redux'

const mockStore = configureMockStore()

// Mock Redux state
const mockReduxState = {
  RevenueReducer: {
    Revenue: {
      yearlyRevenue: [
        { month: '2024-Jan', total: '1000' },
        { month: '2024-Feb', total: '1500' },
      ],
      RevenueLoading: false,
      RevenueError: null,
    },
  },
}

describe('YearlyRevenue Component', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => callback(mockReduxState))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('renders the revenue title and "See More" link', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <YearlyRevenue />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText(/yearly revenue/i)).toBeInTheDocument()

    const seeMoreLink = screen.getByText(/see more/i)
    expect(seeMoreLink.closest('a')).toHaveAttribute('href', '/revenue')
  })

  test('renders the chart SVG element', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <YearlyRevenue />
        </MemoryRouter>
      </Provider>
    )

    const chartSvg = document.querySelector('svg')
    expect(chartSvg).toBeInTheDocument()
  })

  test('renders formatted month labels from Redux data', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <YearlyRevenue />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByText('Jan')).toBeInTheDocument()
    expect(screen.getByText('Feb')).toBeInTheDocument()
  })
})
