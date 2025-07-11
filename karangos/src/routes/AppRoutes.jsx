import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepages'

import CustomersList from '../pages/customers/CustomersList'
import CustomersForm from '../pages/customers/CustomersForm'

import CarsList from '../pages/cars/CarsList'
import CarsForm from '../pages/cars/CarsForm'

import About from '../pages/About'

export default function AppRoutes() {
  return <Routes>
    <Route path="/" element={ <Homepage /> } />

    <Route path="/customers" element={ <CustomersList /> } />
    <Route path="/customers/new" element={ <CustomersForm /> } />
    <Route path="/customers/:id" element={ <CustomersForm /> } />
    
    <Route path="/cars" element={ <CarsList /> } />
    <Route path="/cars/new" element={ <CarsForm /> } />
    <Route path="/cars/:id" element={ <CarsForm /> } />
    
    <Route path="/about" element={ <About /> } />

  </Routes>
}