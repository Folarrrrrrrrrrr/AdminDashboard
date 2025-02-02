import React, { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip , Marker,  Popup} from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import Style from './Map.module.css'
import Redpin from '../../assets/images/redPin.png'
import Yellowpin from '../../assets/images/yellowPin.png'
import Bluepin from '../../assets/images/bluePin.png'
import Blackpin from '../../assets/images/pin-red.png'
import ThickRedPin from '../../assets/images/red64.png'
import ThickGreenPin from '../../assets/images/green64.png'
import ThickBluePin from '../../assets/images/blue64.png'
// import pinSvg from '.'

const RevenuePerformanceMap= () => {

    const [mapData, setMapData] = useState('revenue')
    const performanceThresholds = {
      bad: 20000,
      average: 40000,
    };
    // const revenueIcon = new L.Icon({
    //   iconUrl: revenueIconImg,
    //   iconSize: [32, 32],
    //   iconAnchor: [16, 32],
    //   popupAnchor: [0, -32],
    // });
    
    const RevenueLocationData = [
      { name: "New York", lat: 40.7128, lng: -74.0060, revenue: 50000 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194, revenue: 30000 },
      { name: "Chicago", lat: 41.8781, lng: -87.6298, revenue: 15000 },
      { name: "Accra", lat: 5.5593, lng: 0.1974, revenue: 85000 },
      { name: "Lagos", lat: 6.5244, lng: 3.3792, revenue: 85000 },
      { name: "Johannesburg", lat: 26.2056, lng: 28.0337, revenue: 85000 },
      { name: "London", lat: 51.5072, lng: 0.1276, revenue: 85000 },
      { name: "Bloomington", lat: 39.1653, lng: 86.5264, revenue: 85000 },
      { name: "Indiana", lat: 39.1653, lng: -86.5264, revenue: 85000 },
      { name: "Tokyo", lat: 35.6895, lng: 139.6917, revenue: 120000 },
      { name: "Berlin", lat: 52.5200, lng: 13.4050, revenue: 75000 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093, revenue: 90000 },
      { name: "Paris", lat: 48.8566, lng: 2.3522, revenue: 70000 },
      { name: "Toronto", lat: 43.6510, lng: -79.3470, revenue: 68000 },
      { name: "Dubai", lat: 25.276987, lng: 55.296249, revenue: 95000 },
      { name: "Mumbai", lat: 19.0760, lng: 72.8777, revenue: 64000 },
      { name: "Moscow", lat: 55.7558, lng: 37.6173, revenue: 70000 },
      { name: "Cape Town", lat: -33.9249, lng: 18.4241, revenue: 56000 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198, revenue: 98000 },
      { name: "Hong Kong", lat: 22.3193, lng: 114.1694, revenue: 85000 },
      { name: "Seoul", lat: 37.5665, lng: 126.9780, revenue: 77000 },
      { name: "Madrid", lat: 40.4168, lng: -3.7038, revenue: 72000 },
      { name: "Jakarta", lat: -6.2088, lng: 106.8456, revenue: 51000 },
      { name: "Istanbul", lat: 41.0082, lng: 28.9784, revenue: 68000 },
      { name: "Vienna", lat: 48.2082, lng: 16.3738, revenue: 58000 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437, revenue: 89000 },
      { name: "Houston", lat: 29.7604, lng: -95.3698, revenue: 60000 },
      { name: "Las Vegas", lat: 36.1699, lng: -115.1398, revenue: 75000 },
      { name: "Miami", lat: 25.7617, lng: -80.1918, revenue: 69000 },
      { name: "Boston", lat: 42.3601, lng: -71.0589, revenue: 71000 },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, revenue: 62000 },
      { name: "San Diego", lat: 32.7157, lng: -117.1611, revenue: 64000 },
      { name: "Phoenix", lat: 33.4484, lng: -112.0740, revenue: 58000 },
      { name: "Dallas", lat: 32.7767, lng: -96.7970, revenue: 65000 },
      { name: "San Antonio", lat: 29.4241, lng: -98.4936, revenue: 59000 },
      { name: "Austin", lat: 30.2672, lng: -97.7431, revenue: 61000 },
      { name: "Orlando", lat: 28.5383, lng: -81.3792, revenue: 71000 },
      { name: "Detroit", lat: 42.3314, lng: -83.0458, revenue: 57000 },
      { name: "Salt Lake City", lat: 40.7608, lng: -111.8910, revenue: 53000 },
      { name: "Charlotte", lat: 35.2271, lng: -80.8431, revenue: 59000 },
      { name: "St. Louis", lat: 38.6270, lng: -90.1994, revenue: 57000 },
      { name: "Pittsburgh", lat: 40.4406, lng: -79.9959, revenue: 59000 },
      { name: "Nairobi", lat: -1.2864, lng: 36.8172, revenue: 51000 },
      { name: "Cairo", lat: 30.0444, lng: 31.2357, revenue: 58000 },
      { name: "Bangkok", lat: 13.7563, lng: 100.5018, revenue: 68000 },
      { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, revenue: 67000 },
      { name: "Warsaw", lat: 52.2297, lng: 21.0122, revenue: 70000 },
      { name: "Copenhagen", lat: 55.6761, lng: 12.5683, revenue: 72000 },
      { name: "Oslo", lat: 59.9139, lng: 10.7522, revenue: 68000 },
      { name: "Stockholm", lat: 59.3293, lng: 18.0686, revenue: 71000 },
      { name: "Helsinki", lat: 60.1695, lng: 24.9354, revenue: 63000 },
      { name: "Rome", lat: 41.9028, lng: 12.4964, revenue: 75000 },
      { name: "Athens", lat: 37.9838, lng: 23.7275, revenue: 67000 },
      { name: "Brussels", lat: 50.8503, lng: 4.3517, revenue: 74000 },
      { name: "Amsterdam", lat: 52.3676, lng: 4.9041, revenue: 77000 },
      { name: "Zurich", lat: 47.3769, lng: 8.5417, revenue: 81000 },
      { name: "Dublin", lat: 53.3498, lng: -6.2603, revenue: 76000 },
      { name: "Edinburgh", lat: 55.9533, lng: -3.1883, revenue: 70000 },
      { name: "Glasgow", lat: 55.8642, lng: -4.2518, revenue: 72000 },
      { name: "Reykjavik", lat: 64.1355, lng: -21.8954, revenue: 67000 },
      { name: "Havana", lat: 23.1136, lng: -82.3666, revenue: 63000 },
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, revenue: 70000 },
      { name: "Bogotá", lat: 4.7110, lng: -74.0721, revenue: 66000 },
      { name: "Lima", lat: -12.0464, lng: -77.0428, revenue: 64000 },
      { name: "Santiago", lat: -33.4489, lng: -70.6693, revenue: 67000 },
    ];
     
    const SportBetsLocationData = [
      { name: "Lagos", lat: 20.7128, lng: -74.0060, revenue: 50000 },
      { name: "Johannesburg", lat: 17.7749, lng: -122.4194, revenue: 30000 },
      { name: "Chicago", lat: 41.8781, lng: -87.6298, revenue: 15000 },
      { name: "Accra", lat: 5.5593, lng: 0.1974, revenue: 25000 },
      { name: "New York", lat: 40.7128, lng: -74.0060, revenue: 70000 },
      { name: "London", lat: 51.5072, lng: -0.1276, revenue: 60000 },
      { name: "Tokyo", lat: 35.6895, lng: 139.6917, revenue: 80000 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093, revenue: 45000 },
      { name: "Berlin", lat: 52.5200, lng: 13.4050, revenue: 50000 },
      { name: "Paris", lat: 48.8566, lng: 2.3522, revenue: 55000 },
      { name: "Toronto", lat: 43.6510, lng: -79.3470, revenue: 40000 },
      { name: "Dubai", lat: 25.276987, lng: 55.296249, revenue: 75000 },
      { name: "Mumbai", lat: 19.0760, lng: 72.8777, revenue: 30000 },
      { name: "Beijing", lat: 39.9042, lng: 116.4074, revenue: 70000 },
      { name: "Moscow", lat: 55.7558, lng: 37.6173, revenue: 60000 },
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, revenue: 35000 },
      { name: "Cape Town", lat: -33.9249, lng: 18.4241, revenue: 40000 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198, revenue: 85000 },
      { name: "Hong Kong", lat: 22.3193, lng: 114.1694, revenue: 82000 },
      { name: "Seoul", lat: 37.5665, lng: 126.9780, revenue: 48000 },
      { name: "Bangkok", lat: 13.7563, lng: 100.5018, revenue: 42000 },
      { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, revenue: 37000 },
      { name: "Madrid", lat: 40.4168, lng: -3.7038, revenue: 53000 },
      { name: "Nairobi", lat: -1.2864, lng: 36.8172, revenue: 36000 },
      { name: "Cairo", lat: 30.0444, lng: 31.2357, revenue: 33000 },
      { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, revenue: 46000 },
      { name: "Jakarta", lat: -6.2088, lng: 106.8456, revenue: 32000 },
      { name: "Melbourne", lat: -37.8136, lng: 144.9631, revenue: 38000 },
      { name: "Istanbul", lat: 41.0082, lng: 28.9784, revenue: 44000 },
      { name: "Vienna", lat: 48.2082, lng: 16.3738, revenue: 35000 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437, revenue: 61000 },
      { name: "Houston", lat: 29.7604, lng: -95.3698, revenue: 28000 },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194, revenue: 59000 },
      { name: "Phoenix", lat: 33.4484, lng: -112.0740, revenue: 34000 },
      { name: "Las Vegas", lat: 36.1699, lng: -115.1398, revenue: 52000 },
      { name: "Atlanta", lat: 33.7490, lng: -84.3880, revenue: 45000 },
      { name: "Miami", lat: 25.7617, lng: -80.1918, revenue: 47000 },
      { name: "San Diego", lat: 32.7157, lng: -117.1611, revenue: 42000 },
      { name: "Boston", lat: 42.3601, lng: -71.0589, revenue: 50000 },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, revenue: 40000 },
      { name: "Denver", lat: 39.7392, lng: -104.9903, revenue: 36000 },
      { name: "Austin", lat: 30.2672, lng: -97.7431, revenue: 39000 },
      { name: "Dallas", lat: 32.7767, lng: -96.7970, revenue: 42000 },
      { name: "Philadelphia", lat: 39.9526, lng: -75.1652, revenue: 39000 },
      { name: "Washington, D.C.", lat: 38.9072, lng: -77.0369, revenue: 48000 },
      { name: "Portland", lat: 45.5152, lng: -122.6784, revenue: 33000 },
      { name: "Minneapolis", lat: 44.9778, lng: -93.2650, revenue: 36000 },
      { name: "Orlando", lat: 28.5383, lng: -81.3792, revenue: 43000 },
      { name: "Detroit", lat: 42.3314, lng: -83.0458, revenue: 29000 },
      { name: "Salt Lake City", lat: 40.7608, lng: -111.8910, revenue: 31000 },
      { name: "San Antonio", lat: 29.4241, lng: -98.4936, revenue: 32000 },
      { name: "Charlotte", lat: 35.2271, lng: -80.8431, revenue: 37000 },
      { name: "St. Louis", lat: 38.6270, lng: -90.1994, revenue: 30000 },
      { name: "Pittsburgh", lat: 40.4406, lng: -79.9959, revenue: 35000 },
      { name: "Baltimore", lat: 39.2904, lng: -76.6122, revenue: 33000 },
      { name: "Oslo", lat: 59.9139, lng: 10.7522, revenue: 45000 },
      { name: "Stockholm", lat: 59.3293, lng: 18.0686, revenue: 48000 },
      { name: "Helsinki", lat: 60.1695, lng: 24.9354, revenue: 37000 },
      { name: "Copenhagen", lat: 55.6761, lng: 12.5683, revenue: 39000 },
      { name: "Warsaw", lat: 52.2297, lng: 21.0122, revenue: 41000 },
    ];
    
    const DiceBetsLocationData = [
      { name: "Lagos", lat: 20.7128, lng: -74.0060, revenue: 50000 },
      { name: "Johannesburg", lat: 17.7749, lng: -122.4194, revenue: 30000 },
      { name: "Chicago", lat: 41.8781, lng: -87.6298, revenue: 15000 },
      { name: "Accra", lat: 5.5593, lng: 0.1974, revenue: 25000 },
      { name: "New York", lat: 40.7128, lng: -74.0060, revenue: 70000 },
      { name: "Tokyo", lat: 35.6895, lng: 139.6917, revenue: 85000 },
      { name: "Berlin", lat: 52.5200, lng: 13.4050, revenue: 50000 },
      { name: "Sydney", lat: -33.8688, lng: 151.2093, revenue: 47000 },
      { name: "Paris", lat: 48.8566, lng: 2.3522, revenue: 55000 },
      { name: "Toronto", lat: 43.6510, lng: -79.3470, revenue: 40000 },
      { name: "Dubai", lat: 25.276987, lng: 55.296249, revenue: 75000 },
      { name: "Mumbai", lat: 19.0760, lng: 72.8777, revenue: 31000 },
      { name: "Moscow", lat: 55.7558, lng: 37.6173, revenue: 62000 },
      { name: "Cape Town", lat: -33.9249, lng: 18.4241, revenue: 42000 },
      { name: "Singapore", lat: 1.3521, lng: 103.8198, revenue: 86000 },
      { name: "Hong Kong", lat: 22.3193, lng: 114.1694, revenue: 80000 },
      { name: "Seoul", lat: 37.5665, lng: 126.9780, revenue: 50000 },
      { name: "Madrid", lat: 40.4168, lng: -3.7038, revenue: 56000 },
      { name: "Jakarta", lat: -6.2088, lng: 106.8456, revenue: 33000 },
      { name: "Istanbul", lat: 41.0082, lng: 28.9784, revenue: 46000 },
      { name: "Vienna", lat: 48.2082, lng: 16.3738, revenue: 38000 },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437, revenue: 60000 },
      { name: "Houston", lat: 29.7604, lng: -95.3698, revenue: 29000 },
      { name: "Las Vegas", lat: 36.1699, lng: -115.1398, revenue: 52000 },
      { name: "Miami", lat: 25.7617, lng: -80.1918, revenue: 47000 },
      { name: "Boston", lat: 42.3601, lng: -71.0589, revenue: 51000 },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, revenue: 39000 },
      { name: "San Diego", lat: 32.7157, lng: -117.1611, revenue: 42000 },
      { name: "Phoenix", lat: 33.4484, lng: -112.0740, revenue: 35000 },
      { name: "Dallas", lat: 32.7767, lng: -96.7970, revenue: 43000 },
      { name: "San Antonio", lat: 29.4241, lng: -98.4936, revenue: 31000 },
      { name: "Austin", lat: 30.2672, lng: -97.7431, revenue: 40000 },
      { name: "Orlando", lat: 28.5383, lng: -81.3792, revenue: 45000 },
      { name: "Detroit", lat: 42.3314, lng: -83.0458, revenue: 30000 },
      { name: "Salt Lake City", lat: 40.7608, lng: -111.8910, revenue: 32000 },
      { name: "Charlotte", lat: 35.2271, lng: -80.8431, revenue: 38000 },
      { name: "St. Louis", lat: 38.6270, lng: -90.1994, revenue: 30000 },
      { name: "Pittsburgh", lat: 40.4406, lng: -79.9959, revenue: 36000 },
      { name: "Nairobi", lat: -1.2864, lng: 36.8172, revenue: 34000 },
      { name: "Cairo", lat: 30.0444, lng: 31.2357, revenue: 32000 },
      { name: "Bangkok", lat: 13.7563, lng: 100.5018, revenue: 43000 },
      { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, revenue: 47000 },
      { name: "Portland", lat: 45.5152, lng: -122.6784, revenue: 33000 },
      { name: "Minneapolis", lat: 44.9778, lng: -93.2650, revenue: 38000 },
      { name: "Warsaw", lat: 52.2297, lng: 21.0122, revenue: 40000 },
      { name: "Copenhagen", lat: 55.6761, lng: 12.5683, revenue: 39000 },
      { name: "Oslo", lat: 59.9139, lng: 10.7522, revenue: 45000 },
      { name: "Stockholm", lat: 59.3293, lng: 18.0686, revenue: 49000 },
      { name: "Helsinki", lat: 60.1695, lng: 24.9354, revenue: 38000 },
      { name: "Rome", lat: 41.9028, lng: 12.4964, revenue: 55000 },
      { name: "Athens", lat: 37.9838, lng: 23.7275, revenue: 42000 },
      { name: "Brussels", lat: 50.8503, lng: 4.3517, revenue: 46000 },
      { name: "Amsterdam", lat: 52.3676, lng: 4.9041, revenue: 47000 },
      { name: "Zurich", lat: 47.3769, lng: 8.5417, revenue: 50000 },
      { name: "Dublin", lat: 53.3498, lng: -6.2603, revenue: 43000 },
      { name: "Edinburgh", lat: 55.9533, lng: -3.1883, revenue: 44000 },
      { name: "Glasgow", lat: 55.8642, lng: -4.2518, revenue: 42000 },
      { name: "Reykjavik", lat: 64.1355, lng: -21.8954, revenue: 38000 },
      { name: "Havana", lat: 23.1136, lng: -82.3666, revenue: 37000 },
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, revenue: 40000 },
      { name: "Bogotá", lat: 4.7110, lng: -74.0721, revenue: 37000 },
      { name: "Lima", lat: -12.0464, lng: -77.0428, revenue: 35000 },
      { name: "Santiago", lat: -33.4489, lng: -70.6693, revenue: 38000 },
    ];
    
    
     const getMarkerColorRevenue = (revenue) => {
      if (revenue < performanceThresholds.bad) return "red";
      if (revenue < performanceThresholds.average) return "yellow";
      return "green";
    };
    

     const getMarkerColorBets = (bets) => {
      if (bets < performanceThresholds.bad) return 'red' ;
      if (bets < performanceThresholds.average) return "yellow";
      return "green";
    };
// Create a colored marker based on revenue
  const createColoredIcon = (color) => {
  return L.icon({
    iconUrl: color === 'red' ? ThickRedPin: color==='green' ? ThickGreenPin: ThickBluePin ,
    color:color,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [30, 25],
  });
};

  // L.marker([lat, lng], { bounceOnAdd: true }).addTo(map);

    const [activeButton, setActiveButton] = useState(1);
    const ToggleButtons = () => {
      }

    const toggleMap=(id)=>{
      id === 1? setMapData('revenue'): id===2? setMapData('SportBet'): setMapData('DiceBet')
      // id === 1? setActiveButton(id): id===2? setActiveButton(id): setActiveButton(id)
      setActiveButton(id); // Set the clicked button as active

    }


  return (
    <>
    <MapContainer 
      style={{ height:"100vh", width: "100%" }} 
      center={[20, 0]} 
      zoom={4}
      minZoom={1}          // Minimum zoom level to prevent zooming out too far
      // maxZoom={24}         // Optional: Maximum zoom level
      worldCopyJump={false}  // Prevents map from repeating
      maxBounds={[[90, -180], [-90, 180]]}  // Locks the map within the world bounds
      zoomControl={false}
      scrollWheelZoom={true}  // Optional: Disable scroll zoom for better UX
     > 
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        mapData === 'revenue' ? RevenueLocationData.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          radius={10} // Adjust marker size as needed
        //   pathOptions={{
        //     color: getMarkerColorRevenue(loc.revenue),
        //     fillColor: getMarkerColorRevenue(loc.revenue),
        //     fillOpacity: 0.2,
        //   }
        // }
          // color={getMarkerColorRevenue(loc.revenue)}
          // icon={getMarkerColorRevenue(loc.revenue)}
          icon={createColoredIcon(getMarkerColorRevenue(loc.revenue))}
        >
          <Tooltip>
            <strong>{loc.name}</strong>
            <br />
            Revenue: ${loc.revenue.toLocaleString()}
          </Tooltip>
        </Marker>
      )): mapData=== 'SportBet' ? SportBetsLocationData.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          radius={10} // Adjust marker size as needed
          pathOptions={{
            color: getMarkerColorBets(loc.revenue),
            fillColor: getMarkerColorBets(loc.revenue),
            fillOpacity: 0.6,
          }
        }
        icon={createColoredIcon(getMarkerColorBets(loc.revenue))}
        >
          <Tooltip>
            <strong>{loc.name}</strong>
            <br />
            Revenue: ${loc.revenue.toLocaleString()}
          </Tooltip>
        </Marker>
      )) : mapData=== 'DiceBet' ? DiceBetsLocationData.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          radius={10} // Adjust marker size as needed
          pathOptions={{
            color: getMarkerColorBets(loc.revenue),
            fillColor: getMarkerColorBets(loc.revenue),
            fillOpacity: 0.2,
          }
        }
        icon={createColoredIcon(getMarkerColorBets(loc.revenue))}
        >
          <Tooltip>
            <strong>{loc.name}</strong>
            <br />
            Revenue: ${loc.revenue.toLocaleString()}
          </Tooltip>
        </Marker>
      )) : null
      } 
    </MapContainer>
    <div id={Style.mapLegend}>
      <div id={Style.colorCodes}>
        <div id={Style.colorText} ><img id={Style.pinIcons} src={ThickRedPin} alt="" />  Poor  </div>
        <div id={Style.colorText} > <img id={Style.pinIcons} src={ThickGreenPin} alt="" />  Good  </div>
      <div id={Style.colorText} > <img id={Style.pinIcons} src={ThickBluePin} alt="" />  fair  </div>
      </div>
      <div id={Style.toggleContainer}>
        {/* <button onClick={()=>tooggleMap(1)}>Reveues</button>
        <button onClick={()=>tooggleMap(2)}>Dice Bets</button>
        <button onClick={()=>tooggleMap(3)}>Sport Bets</button> */}
        <button
          className={activeButton === 1 ?  Style.activeButton  : Style.button}
          onClick={() => toggleMap(1)}
        >Reveues</button>
        <button
          className={activeButton === 2 ?  Style.activeButton  : Style.button}
          onClick={() => toggleMap(2)}
        >Dice Bets</button>
        <button
          className={activeButton === 3 ?  Style.activeButton  : Style.button}
          onClick={() => toggleMap(3)}
        >Sport Bets</button>
      </div>
    </div>
    </>
  );
};

export default RevenuePerformanceMap;


// <div style={styles.toggleContainer}>
// <button
//   id={activeButton === 1 ? { Style.button, ...styles.activeButton } : styles.button}
//   onClick={() => toggleMap(1)}
// >
//   Revenues
// </button>
// <button
//   style={activeButton === 2 ? { ...styles.button, ...styles.activeButton } : styles.button}
//   onClick={() => toggleMap(2)}
// >
//   Dice Bets
// </button>
// <button
//   style={activeButton === 3 ? { ...styles.button, ...styles.activeButton } : styles.button}
//   onClick={() => toggleMap(3)}
// >
//   Sport Bets
// </button>
// </div>