import React from 'react';
import { render } from '@testing-library/react';
import FeatureCollectionPreview from '../components/feature-collection-preview';
import { FeatureCollection, GeometryObject } from 'geojson';
import { GeometryProperties } from '../shared/models';
import { matcher } from './utils';

test('renders correctly for multiPoint', async () => {
  const collection: FeatureCollection<GeometryObject, GeometryProperties> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'MultiPoint',
          coordinates: [
            [1, 2],
            [3, 4],
          ],
        },
        properties: {},
        id: '007',
      },
    ],
  };

  const utils = render(<FeatureCollectionPreview collection={collection} />);

  expect(utils.getByText('ID: 007')).toBeInTheDocument();
  expect(utils.getByText('MultiPoint: [[1, 2],[3, 4],]')).toBeInTheDocument();
});

test('renders correctly for nested geometryCollection', async () => {
  const collection: FeatureCollection<GeometryObject, GeometryProperties> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'GeometryCollection',
          geometries: [
            {
              type: 'GeometryCollection',
              geometries: [
                {
                  type: 'Point',
                  coordinates: [9, 8],
                },
              ],
            },
            {
              type: 'LineString',
              coordinates: [
                [1, 2],
                [3, 4],
              ],
            },
          ],
        },
        properties: {},
        id: '156',
      },
    ],
  };

  const utils = render(<FeatureCollectionPreview collection={collection} />);

  expect(
    utils.getByText(
      matcher(
        'GeometryCollection: [GeometryCollection: [Point: [9, 8]]LineString: [[1, 2],[3, 4],]]'
      )
    )
  ).toBeInTheDocument();
});
