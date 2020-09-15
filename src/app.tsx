import React, { useState } from 'react';
import './app.css';
import { AABB, getMapDataByBB } from './openstreetmap.service';
import { FeatureCollection, GeometryObject } from 'geojson';
import FeatureCollectionTable from './geojson/feature-collection-table';

function App() {
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection<
    GeometryObject
  > | null>(null);

  const [aabb, setAabb] = useState<AABB>({
    minLat: 10,
    maxLat: 10.1,
    minLng: 10,
    maxLng: 10.1,
  });

  const handleAabbChange = (key: keyof AABB) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const parsedValue = Number.parseFloat(event.target.value);
    if (!isNaN(parsedValue)) {
      setAabb({
        ...aabb,
        [key]: parsedValue,
      });
    } else {
      alert('Allowed are only numerals and comma sign');
    }
  };

  const getGeoData = () => {
    getMapDataByBB(aabb).then(
      (result) => {
        console.log('got featureCollection: ', result);
        setFeatureCollection(result);
      },
      (error) => {
        console.error(error);
        alert(error);
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>GeoJSON Code Challenge</p>
        <h5>
          Pick an AABB area =&gt;
          <label>
            MinLat:
            <input
              value={aabb.minLat}
              type="number"
              onChange={handleAabbChange('minLat')}
            />
          </label>
          <label>
            MaxLat:
            <input
              value={aabb.maxLat}
              type="number"
              onChange={handleAabbChange('maxLat')}
            />
          </label>
          <label>
            MinLng:
            <input
              value={aabb.minLng}
              type="number"
              onChange={handleAabbChange('minLng')}
            />
          </label>
          <label>
            MaxLng:
            <input
              value={aabb.maxLng}
              type="number"
              onChange={handleAabbChange('maxLng')}
            />
          </label>
          <input type="submit" onClick={getGeoData} />
        </h5>
      </header>
      {featureCollection === null ? (
        <h6>No Data</h6>
      ) : (
        <FeatureCollectionTable collection={featureCollection} />
      )}
    </div>
  );
}

export default App;
