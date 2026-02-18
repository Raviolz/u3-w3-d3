import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./redux/store"
import { Provider } from "react-redux"
import Favorites from "./components/Favorites"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:company" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
