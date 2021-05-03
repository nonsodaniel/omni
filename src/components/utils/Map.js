import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 6.5244, lng: 3.3792 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 6.5244, lng: 3.3792 }} />
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;
