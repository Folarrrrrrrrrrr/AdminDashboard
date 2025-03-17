import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

function MyMapComponent() {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  const markersData = [
    { id: 1, lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { id: 2, lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
  ];

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={{ lat: 37.7749, lng: -122.4194 }}
    >
      {markersData.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            setActiveMarker(marker.id);
            setShowInfoWindow(true);
          }}
          onMouseOut={() => {
            setShowInfoWindow(false);
          }}
        >
         {activeMarker === marker.id && (
           <InfoWindow
              onCloseClick={() => {
                setActiveMarker(null);
                setShowInfoWindow(false);
              }}
            >
            <div>{marker.name}</div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default MyMapComponent;