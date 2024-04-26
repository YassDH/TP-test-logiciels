import { render, screen, act } from '@testing-library/react'
import App from '../src/App'
import { describe, it, expect } from 'vitest'

describe('App', () => {
    it('renders the App component', () => {
      render(<App />)    
    });

    it('increments the count when the button is clicked', async () => {
      render(<App />)
      const button = screen.getByRole('button')
      const initialCount = await screen.findByText('count is 0')
      expect(initialCount).toBeInTheDocument()
      await act(async () => {
          button.click();
      });  
      expect(button.innerHTML).toBe('count is 1');
      await act(async () => {
          button.click();
      });  
      expect(button.innerHTML).toBe('count is 2');
    })

    it('fetches articles from the API and show them in the screen', async () => {
        render(<App />)
        const articles = await screen.findByText('Articles')
        expect(articles).toBeInTheDocument()
        
        const error = screen.queryByText('Error fetching data')
        expect(error).not.toBeInTheDocument()        
    })

    it('displays an error message when the API call fails', async () => {
        render(<App url="https://yahoo-weather5.p.rapidapi.com/weather" />)
        const error = await screen.findByText('Error fetching data')
        expect(error).toBeInTheDocument()

        const articles = screen.queryByText('Articles')
        expect(articles).not.toBeInTheDocument()
    })
})