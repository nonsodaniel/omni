import { useEffect, useState } from "react";
import { getLocation } from "../utils/helpers";
import MyMapComponent from "../utils/Map";
import MapErrorBoundary from "../utils/MapErrorBoundary";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [lat, setLat] = useState("");
    const [lng, setLong] = useState("");
    const showPosition = (position) => {
      if (position) {
        let { latitude, longitude } = position.coords;
        setLat(latitude);
        setLong(longitude);
      }
    };
    const deleteContact = ({target}) =>{
      let newData = data.filter(_data => +_data.id !== +target.id);
      setData(newData)
      localStorage.setItem("contacts", JSON.stringify(newData));
    }
    useEffect(() => {
      showPosition();
      getLocation(showPosition);
      let localData = JSON.parse(localStorage.getItem("contacts"));
      localData && localData.length !== 0 ? setData(localData) : setData([]);
    }, []);
  return (
    <div className="main-content">
      <DashboardHeader />
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((_data, index) => {
                let { id, name, email, phone, address, lat, long } = _data;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                    <td>{lat}</td>
                    <td >{long}</td>
                    <td id={id} className='pointer' onClick={deleteContact}>
                      <span id={id}>
                      <svg id={id}
                    
                     

                                               xmlns="http://www.w3.org/2000/svg"

                                               width="14px"

                                               height="14px"
                       
                        viewBox="0 0 24 24"
                       
                        fill="none"
                       
                        stroke="currentColor"
                      
                         strokeWidth="2"

                                               strokeLinecap="round"

                                               strokeLinejoin="round"

                                               className="mr-50 feather feather-trash"
                      
                      >
                        
                        <polyline points="3 6 5 6 21 6"></polyline>
                        
                        <path id={id} d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      
                      </svg>
                    
                      </span>
                     
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="text-center">Contact details is empty</tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="map-box">
        <MapErrorBoundary>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            position={lat && lng ? { lat, lng } : { lat: 6.5244, lng: 3.3792 }}
          />
        </MapErrorBoundary>
      </div>
    </div>
  );
};

export default Dashboard;
