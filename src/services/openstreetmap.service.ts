import osmtogeojson from '../shared/hack';
import { FeatureCollection, GeometryObject } from 'geojson';
import { AABB, GeometryProperties } from '../shared/models';
import { DOMParser } from 'xmldom';

export function getMapDataByBB({
  minLat,
  maxLat,
  minLng,
  maxLng,
}: AABB): Promise<FeatureCollection<GeometryObject, GeometryProperties>> {
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
  return new DOMParser().parseFromString(xmlStr, 'text/xml');
}
