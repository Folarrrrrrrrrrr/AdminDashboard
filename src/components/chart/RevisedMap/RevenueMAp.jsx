import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import "./MapStyles.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { id: 1, name: "New York", coordinates: [-74.006, 40.7128], revenue: 50000 },
  { id: 2, name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 30000 },
  { id: 3, name: "Chicago", coordinates: [-87.6298, 41.8781], revenue: 15000 },
  { id: 4, name: "Accra", coordinates: [0.1974, 5.5593], revenue: 25000 },
  { id: 5, name: "Lagos", coordinates: [3.3792, 6.5244], revenue: 40000 },
];

const WorldMapWithDarkMode = () => {
  const [zoom, setZoom] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const handleZoomChange = (newZoom) => setZoom(newZoom);

  const handleMapClick = () => setSelectedMarker(null);

  return (
    <div className={`map-container ${darkMode ? "dark" : ""}`} onClick={handleMapClick}>
      {/* Dark Mode Toggle Button */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <ComposableMap projectionConfig={{ scale: 200 }}>
        <ZoomableGroup zoom={zoom} onMoveEnd={({ zoom }) => handleZoomChange(zoom)}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: darkMode ? "#2B2B2B" : "#D6D6DA", outline: "none" },
                    hover: { fill: "#F53", outline: "none" },
                    pressed: { fill: "#E42", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinates={marker.coordinates}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMarker(marker);
              }}
            >
              <circle r={6} fill={darkMode ? "#FFD700" : "#007BFF"} stroke="#fff" strokeWidth={1} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Floating Info Card */}
      {selectedMarker && (
        <div className={`info-card ${darkMode ? "dark" : ""}`}>
          <h3>{selectedMarker.name}</h3>
          <p><strong>Revenue:</strong> ${selectedMarker.revenue.toLocaleString()}</p>
          <button onClick={() => setSelectedMarker(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default WorldMapWithDarkMode;   