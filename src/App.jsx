import { BrowserRouter, Route, Routes } from "react-router-dom"
import DataFetching from "./assets/components/DataFetching"
import CardDetails from "./assets/components/CardDetails"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  // Create a client
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DataFetching />} />
            <Route path="/CardDetail/:id" element={<CardDetails />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
