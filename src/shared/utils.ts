import {
  GeometryObject,
  Point,
  MultiPoint,
  LineString,
  MultiLineString,
  Polygon,
  MultiPolygon,
  GeometryCollection,
} from 'geojson';
import { AABB } from './models';

export function isPoint(geometry: GeometryObject): geometry is Point {
  return geometry.type === 'Point';
}

export function isMultiPoint(geometry: GeometryObject): geometry is MultiPoint {
  return geometry.type === 'MultiPoint';
}

export function isLineString(geometry: GeometryObject): geometry is LineString {
  return geometry.type === 'LineString';
}

export function isMultiLineString(
  geometry: GeometryObject
): geometry is MultiLineString {
  return geometry.type === 'MultiLineString';
}

export function isPolygon(geometry: GeometryObject): geometry is Polygon {
  return geometry.type === 'Polygon';
}

export function isMultiPolygon(
  geometry: GeometryObject
): geometry is MultiPolygon {
  return geometry.type === 'MultiPolygon';
}

export function isGeometryCollection(
  geometry: GeometryObject
): geometry is GeometryCollection {
  return geometry.type === 'GeometryCollection';
}

export function isValidAabb(aabb: AABB) {
  return (
    Number.isFinite(aabb.maxLat) &&
    Number.isFinite(aabb.minLat) &&
    Number.isFinite(aabb.maxLng) &&
    Number.isFinite(aabb.minLng)
  );
}

export function formatNumber(value?: number) {
  return value !== undefined ? value : '';
}

export function parseNumber(value: string) {
  return value === '' ? undefined : Number.parseFloat(value);
}
