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
                    <td>{long}</td>
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
