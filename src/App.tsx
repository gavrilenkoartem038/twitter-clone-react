import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
