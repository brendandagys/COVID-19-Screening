import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { initializeStore } from '../state/store'

const AppProvider: FC = ({ children }) => {
  const store = initializeStore()
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  )
}

const customRender = (ui: ReactElement, options: RenderOptions) => {
  render(ui, { wrapper: AppProvider, ...options })
}

// Re-export everything
export * from '@testing-library/react'

// Over-ride render method
export { customRender as render }
