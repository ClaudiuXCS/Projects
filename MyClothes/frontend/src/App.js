
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BackgroundLogin,
  ShapeDashboard
} from "./components/Styles";
import {
  NavItems
} from './components/Styles-Sidebar';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import  Dashboard from "./pages/Dashboard";
import { Admin, Homee} from "./pages/Myclothes";
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";
import Category from "./pages/Category";
import ItemType from "./pages/ItemType";
import AddClothes from "./pages/AddClothes";
import SeasonOccasion from "./pages/SeasonsOccasion";
import Clothes from "./pages/Clothes";
import AddOutfit from './pages/AddOutfit';
import Outfits from './pages/Outfits';
import SideBar from './pages/SideBar'

import './App.css';

function App({ checked }) {
  return (
    <Router>
      {checked && (
           <Switch>
           <BasicRoute path="/signup">
           <BackgroundLogin>  <Signup />        </BackgroundLogin>
           </BasicRoute>

           <BasicRoute path="/login">
           <BackgroundLogin>  <Login />        </BackgroundLogin>
           </BasicRoute>

           <ShapeDashboard> <NavItems/> <SideBar/> 
           <AuthRoute path="/home">
           <Route path='/home' exact component={Homee} />
            <Route path='/home/outfit-weather' exact component={Dashboard}/>
           <Dashboard />  
           </AuthRoute>

           <AuthRoute path="/clothes"> 
            <Route path='/clothes' exact component={Clothes}/>
            <Route path='/clothes/add-clothes' exact component={AddClothes}/>
           </AuthRoute>
 
           <AuthRoute path="/outfits" >
           <Route path='/outfits' exact component={Outfits}/>
            <Route path='/outfits/add-outfits' exact component={AddOutfit}/>
           </AuthRoute> 

           <AuthRoute path="/admin" >
            <Route path='/admin' exact component={Admin} />
            <Route path='/admin/category' exact component={Category} />
            <Route path='/admin/itemtype' exact component={ItemType} />
            <Route path='/admin/others' exact component={SeasonOccasion} />
           </AuthRoute> 
           
           <AuthRoute path="/logout" >
          <Logout /> 
           </AuthRoute>
           </ShapeDashboard>

           <Route path="/">
           <BackgroundLogin> <Login /></BackgroundLogin>
           </Route>
         </Switch>
      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);


