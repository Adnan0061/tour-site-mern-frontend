import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Register from './Pages/Register/Register';
import Login from './Pages/Register/Login';
import AuthProvider from './context/AuthProvider';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import TourDetails from './Pages/TourDetails/TourDetails';
// import Booking from './Pages/Booking/Booking';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddTour from './Pages/AddTour/AddTour';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import UpdateOrder from './Pages/UpdateOrder/UpdateOrder';
import NotFound from '../src/Pages/NotFound/NotFound'


function App() {

  return (
    <div className="App">
       <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/tour/:id'>
            <TourDetails></TourDetails>
          </PrivateRoute>
          <PrivateRoute path='/my-orders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/manage-all-order'>
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path='/update-order/:id'>
            <UpdateOrder></UpdateOrder>
          </PrivateRoute>
          <PrivateRoute path='/add-tour'>
            <AddTour></AddTour>
          </PrivateRoute>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/Login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
