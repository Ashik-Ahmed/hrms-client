import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import LeaveApply from './components/LeaveApply/LeaveApply';
import ConveyanceSubmit from './components/ConveyanceSubmit/ConveyanceSubmit';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import AddEmployee from './components/Dashboard/AddEmployee/AddEmployee';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import MyConveyance from './components/Dashboard/MyConveyance/MyConveyance';
import MyLeave from './components/Dashboard/MyLeave/MyLeave';
import ManageEmployee from './components/Dashboard/ManageEmployee/ManageEmployee';
import ManageLeaves from './components/Dashboard/ManageLeaves/ManageLeaves';
import Signup from './components/Login/Signup';
import UpdateEmployee from './components/Dashboard/UpdateEmployee/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/leave-apply' element={<LeaveApply />}></Route>
        <Route path='/conveyance-submit' element={<ConveyanceSubmit />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>

          <Route index element={<MyProfile />}></Route>
          <Route path='update-employee' element={<UpdateEmployee />}></Route>
          <Route path='manage-employee' element={<ManageEmployee />}></Route>
          <Route path='manage-leaves' element={<ManageLeaves />}></Route>
          <Route path='my-conveyance' element={<MyConveyance />}></Route>
          <Route path='my-leave' element={<MyLeave />}></Route>

        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
