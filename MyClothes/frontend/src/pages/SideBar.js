
  

  import { connect } from "react-redux";
  
  // React router
  import { useHistory } from "react-router-dom";
import { SidebarAdmin, SidebarBasic } from "../components/Styles-Sidebar";
  
  const SideBar = ({ user }) => {
    const history = useHistory();
    console.log("acesta este: " + user);
    if(user === "11d9b5e5-3ff9-4523-ba05-3d0a43708f2f") {
    return (
      <div>
       <SidebarAdmin/>
      </div>
    );
  } else {
    return (
      <div>
       <SidebarBasic/>
      </div>
    );
  }
  };
  
  const mapStateToProps = ({ session }) => ({
    user: session.user,
  });
  
  export default connect(mapStateToProps)(SideBar);
  