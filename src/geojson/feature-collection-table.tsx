import React from 'react';
import { FeatureCollection, GeometryObject, Feature } from 'geojson';
import GeometryObjectTable from './geometry-object-table';

interface FeatureCollectionTableProps {
  collection: FeatureCollection<GeometryObject>;
}

function FeatureCollectionTable({ collection }: FeatureCollectionTableProps) {
  return (
    <div className="App">
      {collection.features.map(
        (feature: Feature<GeometryObject>, index: number) => (
          <div key={`feature-${index}`}>
            <h3>ID: {feature.id}</h3>
            <hr />
            <h3>Properties:</h3>
            {renderProperties(feature.properties)}
            <hr />
            <h3>Geometry:</h3>
            <GeometryObjectTable geometry={feature.geometry} />
          </div>
        )
      )}
      {collection.features.length === 0 && <div>Empty dataset</div>}
    </div>
  );
}

const renderProperties = (properties: any) =>
  Object.keys(properties).map((key, index) => (
    <div key={`property-${index}`}>
      <i>
        <b>{key}: </b>
      </i>
      <span>{properties[key].toString()}</span>
    </div>
  ));

export default FeatureCollectionTable;
