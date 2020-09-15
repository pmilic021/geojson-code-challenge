import React from 'react';
import {
  GeometryObject,
  Point,
  MultiPoint,
  LineString,
  Position,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection,
} from 'geojson';
import {
  isGeometryCollection,
  isLineString,
  isMultiLineString,
  isMultiPoint,
  isMultiPolygon,
  isPoint,
  isPolygon,
} from '../shared/utils';

interface GeometryObjectTableProps {
  geometry: GeometryObject;
}

function GeometryObjectTable({ geometry }: GeometryObjectTableProps) {
  return isPoint(geometry)
    ? renderPoint(geometry)
    : isMultiPoint(geometry)
    ? renderMultiPoint(geometry)
    : isLineString(geometry)
    ? renderLineString(geometry)
    : isMultiLineString(geometry)
    ? renderMultiLineString(geometry)
    : isPolygon(geometry)
    ? renderPolygon(geometry)
    : isMultiPolygon(geometry)
    ? renderMultiPolygon(geometry)
    : isGeometryCollection(geometry)
    ? renderGeometryCollection(geometry)
    : null;
}

const renderGeometryCollection = (collection: GeometryCollection) => (
  <div>
    GeometryCollection: [
    {collection.geometries.map((geometry: GeometryObject, i: number) => (
      <React.Fragment key={`geometry-collection-${i}`}>
        <GeometryObjectTable geometry={geometry} />
        <br />
      </React.Fragment>
    ))}
    ]
  </div>
);

const renderPosition = (position: Position) => position.join(', ');

const renderPoint = (point: Point) => (
  <div>Point: [{renderPosition(point.coordinates)}]</div>
);

const renderMultiPoint = (multiPoint: MultiPoint) => (
  <div>
    MultiPoint: [
    {multiPoint.coordinates.map((position: Position, i: number) => (
      <React.Fragment key={`multi-point-${i}`}>
        [{renderPosition(position)}],
      </React.Fragment>
    ))}
    ]
  </div>
);

const renderLineString = (multiPoint: LineString) => (
  <div>
    LineString: [
    {multiPoint.coordinates.map((position: Position, i: number) => (
      <React.Fragment key={`line-string-${i}`}>
        [{renderPosition(position)}],
      </React.Fragment>
    ))}
    ]
  </div>
);

const renderMultiLineString = (multiLineString: MultiLineString) => (
  <div>
    MultiLineString: [
    {multiLineString.coordinates.map((positions: Position[], i: number) => (
      <React.Fragment key={`multi-line-string-${i}`}>
        [
        {positions.map((position, j: number) => (
          <React.Fragment key={`multi-line-string-${i}-${j}`}>
            [{renderPosition(position)}],
          </React.Fragment>
        ))}
        ],
      </React.Fragment>
    ))}
    ]
  </div>
);

const renderPolygon = (polygon: Polygon) => (
  <div>
    Polygon: [
    {polygon.coordinates.map((positions: Position[], i: number) => (
      <React.Fragment key={`polygon-${i}`}>
        [
        {positions.map((position: Position, j: number) => (
          <React.Fragment key={`polygin-${i}-${j}`}>
            [{renderPosition(position)}],
          </React.Fragment>
        ))}
        ],
      </React.Fragment>
    ))}
    ]
  </div>
);

const renderMultiPolygon = (multiPolygon: MultiPolygon) => (
  <div>
    MultiPolygon: [
    {multiPolygon.coordinates.map((positions: Position[][], i: number) => (
      <React.Fragment key={`multi-polygon-${i}`}>
        [
        {positions.map((innerPositions: Position[], j: number) => (
          <React.Fragment key={`multi-polygon-${i}-${j}`}>
            [
            {innerPositions.map((position: Position, z: number) => (
              <React.Fragment key={`multi-polygon-${i}-${j}-${z}`}>
                [{renderPosition(position)}],
              </React.Fragment>
            ))}
            ],
          </React.Fragment>
        ))}
        ],
      </React.Fragment>
    ))}
    ]
  </div>
);

export default GeometryObjectTable;
