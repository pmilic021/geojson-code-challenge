import React from 'react';
import { FeatureCollection, GeometryObject, Feature } from 'geojson';
import GeometryObjectPreview from './geometry-object-preview';
import { GeometryProperties } from '../shared/models';

interface FeatureCollectionTableProps {
  collection: FeatureCollection<GeometryObject, GeometryProperties>;
}

function FeatureCollectionPreview({ collection }: FeatureCollectionTableProps) {
  return (
    <div className="App">
      {collection.features.map(
        (
          feature: Feature<GeometryObject, GeometryProperties>,
          index: number
        ) => (
          <div key={`feature-${index}`}>
            <h3>ID: {feature.id}</h3>
            <hr />
            <h3>Properties:</h3>
            {renderProperties(feature.properties)}
            <hr />
            <h3>Geometry:</h3>
            <GeometryObjectPreview geometry={feature.geometry} />
          </div>
        )
      )}
      {collection.features.length === 0 && <div>Empty dataset</div>}
    </div>
  );
}

const renderProperties = (properties: GeometryProperties) =>
  Object.keys(properties).map((key, index) => (
    <div key={`property-${index}`}>
      <i>
        <b>{key}: </b>
      </i>
      <span>{properties[key]}</span>
    </div>
  ));

export default FeatureCollectionPreview;
