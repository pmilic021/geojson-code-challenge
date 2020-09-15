import React, { useState } from 'react';
import './app.css';
import { getMapDataByBB } from './services/openstreetmap.service';
import { FeatureCollection, GeometryObject } from 'geojson';
import FeatureCollectionTable from './components/feature-collection-table';
import { AABB, GeometryProperties } from './shared/models';
import { formatNumber, isValidAabb, parseNumber } from './shared/utils';

function App() {
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection<
    GeometryObject,
    GeometryProperties
  > | null>(null);

  const [aabb, setAabb] = useState<AABB>({});

  const [error, setError] = useState<String | null>(null);

  const handleAabbChange = (key: keyof AABB) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError(null);

    const parsedValue = parseNumber(event.target.value);

    // `Number.isFinite` is used to filter out `NaN`
    if (parsedValue === undefined || Number.isFinite(parsedValue)) {
      setAabb({
        ...aabb,
        [key]: parsedValue,
      });
    } else {
      setError('Only numbers are allowed');
    }
  };

  const getGeoData = () => {
    getMapDataByBB(aabb).then(
      (result) => {
        setFeatureCollection(result);
        setError(null);
      },
      (error) => {
        console.error(error);
        setError(error);
      }
    );
  };

  const handleSubmit = () => {
    if (isValidAabb(aabb)) {
      getGeoData();
    } else {
      setError('AABB data are not valid');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <p>GeoJSON Code Challenge</p>
        <h5>
          Pick an AABB area =&gt;
          <label>
            MinLat:
            <input
              value={formatNumber(aabb.minLat)}
              type="number"
              onChange={handleAabbChange('minLat')}
            />
          </label>
          <label>
            MaxLat:
            <input
              value={formatNumber(aabb.maxLat)}
              type="number"
              onChange={handleAabbChange('maxLat')}
            />
          </label>
          <label>
            MinLng:
            <input
              value={formatNumber(aabb.minLng)}
              type="number"
              onChange={handleAabbChange('minLng')}
            />
          </label>
          <label>
            MaxLng:
            <input
              value={formatNumber(aabb.maxLng)}
              type="number"
              onChange={handleAabbChange('maxLng')}
            />
          </label>
          <input type="submit" onClick={handleSubmit} />
        </h5>
      </header>
      {error && <h6 className="error">{error}</h6>}
      {featureCollection === null ? (
        <h6>No Data</h6>
      ) : (
        <FeatureCollectionTable collection={featureCollection} />
      )}
    </div>
  );
}

export default App;
