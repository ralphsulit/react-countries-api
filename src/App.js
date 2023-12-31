import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import CardDetails from './components/card-details/card-details.component';

import './App.css';

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path='/country/:cca3' element={<CardDetails />} />
        </Route>
      </Routes>
    </Fragment>
  )
};