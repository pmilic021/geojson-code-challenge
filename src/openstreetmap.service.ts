import osmtogeojson from 'osmtogeojson';
import { FeatureCollection, GeometryObject } from 'geojson';

export interface AABB {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

export function getMapDataByBB({
  minLat,
  maxLat,
  minLng,
  maxLng,
}: AABB): Promise<FeatureCollection<GeometryObject>> {
  return fetch(
    `https://www.openstreetmap.org/api/0.6/map?bbox=${minLng},${minLat},${maxLng},${maxLat}`
  )
    .then(async (result) => {
      if (result.ok) return result.text();
      else throw await result.text();
    })
    .then((result) => osmtogeojson(parseXml(result)));
}

function parseXml(xmlStr: string): Document {
  return new window.DOMParser().parseFromString(xmlStr, 'text/xml');
}
