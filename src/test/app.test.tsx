import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../app';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  emptyResponse,
  multiLineResponse,
  singlePointResponse,
  multiPolygonResponse,
  polygonResponse,
  lineStringResponse,
} from './mocks';

const server = setupServer(
  rest.get(
    'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,101,11',
    (req, res, ctx) => res(ctx.status(200), ctx.text(''))
  )
);

function setup() {
  const utils = render(<App />);
  const minLatInput = utils.getByLabelText(/MinLat/i);
  const maxLatInput = utils.getByLabelText(/MaxLat/i);
  const minLngInput = utils.getByLabelText(/MinLng/i);
  const maxLngInput = utils.getByLabelText(/MaxLng/i);
  return { minLatInput, maxLatInput, minLngInput, maxLngInput, utils };
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders error message on error', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,101,11',
      (req, res, ctx) => res(ctx.status(400), ctx.text('The error message'))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 10 } });
  await fireEvent.change(maxLatInput, { target: { value: 11 } });
  await fireEvent.change(minLngInput, { target: { value: 10 } });
  await fireEvent.change(maxLngInput, { target: { value: 101 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  const alert = await utils.findByRole('alert');
  expect(alert).toHaveTextContent('The error message');
});

test('renders "Empty dataset" on empty reponse', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=0,0,0,0',
      (req, res, ctx) => res(ctx.xml(emptyResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 0 } });
  await fireEvent.change(maxLatInput, { target: { value: 0 } });
  await fireEvent.change(minLngInput, { target: { value: 0 } });
  await fireEvent.change(maxLngInput, { target: { value: 0 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // verify that the message is shown
  const message = await utils.findByText(/Empty dataset/i);
  expect(message).toBeInTheDocument();
});

test('renders correctly Point and properties', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=0,0,0.25,0.25',
      (req, res, ctx) => res(ctx.xml(singlePointResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 0 } });
  await fireEvent.change(maxLatInput, { target: { value: 0.25 } });
  await fireEvent.change(minLngInput, { target: { value: 0 } });
  await fireEvent.change(maxLngInput, { target: { value: 0.25 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // wait for data to load
  await utils.findByText('ID: node/3815077900');
  // verify that point data is shown
  expect(utils.getByText('Point: [0, 0]')).toBeInTheDocument();
  // verify some of the properties are shown
  expect(utils.getByText(matcher('version: 81'))).toBeInTheDocument();
  expect(utils.getByText(matcher('user: Piskvor'))).toBeInTheDocument();
  expect(utils.getByText(matcher('alt_name: Atlas Buoy'))).toBeInTheDocument();
});

test('renders correctly lineString dataset', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,10.1,10.1',
      (req, res, ctx) => res(ctx.xml(lineStringResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 10 } });
  await fireEvent.change(maxLatInput, { target: { value: 10.1 } });
  await fireEvent.change(minLngInput, { target: { value: 10 } });
  await fireEvent.change(maxLngInput, { target: { value: 10.1 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // wait for data to load
  await utils.findByText('ID: way/1');
  // verify that certain lineString data is shown
  expect(
    utils.getByText(matcher('LineString: [[1, 1],[2, 2],]'))
  ).toBeInTheDocument();
});

test('renders correctly multiLine dataset', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,10.1,10.1',
      (req, res, ctx) => res(ctx.xml(multiLineResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 10 } });
  await fireEvent.change(maxLatInput, { target: { value: 10.1 } });
  await fireEvent.change(minLngInput, { target: { value: 10 } });
  await fireEvent.change(maxLngInput, { target: { value: 10.1 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // wait for data to load
  await utils.findByText('ID: relation/8452839');
  // verify that certain multiLineString data is shown
  expect(
    utils.getByText(
      'MultiLineString: [[[41.5623696, 41.5446134],[41.5619073, 41.5445053],[41.5613649, 41.5443963],[41.5609845, 41.5443145],[41.5607402, 41.5442762],[41.5606015, 41.5442416],[41.5604947, 41.5441949],[41.5603478, 41.5441148],[41.5601742, 41.5440079],[41.5599165, 41.5438183],[41.5597538, 41.5436749],[41.5595711, 41.5434699],[41.5593653, 41.5433135],[41.5590686, 41.5431372],[41.5586722, 41.5429392],[41.5576251, 41.5423179],[41.5567339, 41.5418443],[41.5559116, 41.5414177],[41.555298, 41.5411752],[41.5543742, 41.5408495],[41.5540907, 41.5407379],[41.5538291, 41.5406051],[41.5536474, 41.5404461],[41.5535143, 41.5402691],[41.5533923, 41.5400408],[41.5531145, 41.5394612],[41.5526859, 41.5385657],[41.5522871, 41.5376889],[41.5518903, 41.5369487],[41.5514219, 41.536126],[41.5512156, 41.535792],[41.5509811, 41.5354671],[41.5507116, 41.5351571],[41.5504893, 41.5348877],[41.5502004, 41.5345846],[41.5499927, 41.5343311],[41.5498697, 41.5341661],[41.5498027, 41.5340131],[41.549767, 41.5338209],[41.5497268, 41.5335711],[41.5497813, 41.533222],[41.5498475, 41.5328622],[41.5497322, 41.532499],[41.5495603, 41.532174],[41.5493841, 41.5318894],[41.5492577, 41.5315896],[41.5491909, 41.5312407],[41.549119, 41.5302855],[41.5490779, 41.5295195],[41.5489707, 41.5287526],[41.5489208, 41.5280635],[41.5489281, 41.5272969],[41.5489372, 41.5265936],[41.5489782, 41.5255394],[41.548957, 41.5250197],[41.5489369, 41.5247416],[41.5488806, 41.5244424],[41.5488317, 41.5240643],[41.5487425, 41.5236225],[41.548463, 41.5221154],[41.5484515, 41.5220088],[41.5484452, 41.5219404],[41.5484317, 41.5218421],[41.5483918, 41.5216719],[41.5483503, 41.521522],[41.5483254, 41.5214504],[41.5482923, 41.5213235],[41.5482698, 41.5212166],[41.5482437, 41.5209958],[41.548222, 41.5208518],[41.5482034, 41.5206879],[41.5481819, 41.5206339],[41.5480832, 41.520525],[41.5479973, 41.5204392],],[[41.5483503, 41.521522],[41.5487635, 41.5214692],[41.5487094, 41.5215118],[41.5486185, 41.5215948],[41.5485594, 41.5216724],[41.5484317, 41.5218421],],[[41.5482911, 41.5203548],[41.5483161, 41.5203853],[41.5483627, 41.5204314],[41.5485567, 41.5205314],[41.548963, 41.5205802],[41.5490109, 41.520591],[41.5490674, 41.5206189],[41.5491169, 41.5206564],[41.5491452, 41.5207077],[41.549161, 41.5207977],[41.5491853, 41.520936],[41.5492209, 41.5211529],[41.5492359, 41.521244],[41.5492098, 41.5212835],[41.5491669, 41.521318],[41.5487635, 41.5214692],],]'
    )
  ).toBeInTheDocument();
});

test('renders correctly polygon dataset', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,10.1,10.1',
      (req, res, ctx) => res(ctx.xml(polygonResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 10 } });
  await fireEvent.change(maxLatInput, { target: { value: 10.1 } });
  await fireEvent.change(minLngInput, { target: { value: 10 } });
  await fireEvent.change(maxLngInput, { target: { value: 10.1 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // wait for data to load
  await utils.findByText('ID: way/1');
  // verify that certain multiLineString data is shown
  expect(
    utils.getByText('Polygon: [[[0, 0],[1, 0],[1, 1],[0, 0],],]')
  ).toBeInTheDocument();
});

test('renders correctly multiPolygon dataset', async () => {
  server.use(
    rest.get(
      'https://www.openstreetmap.org/api/0.6/map?bbox=10,10,10.1,10.1',
      (req, res, ctx) => res(ctx.xml(multiPolygonResponse))
    )
  );

  const { utils, minLatInput, maxLatInput, minLngInput, maxLngInput } = setup();

  await fireEvent.change(minLatInput, { target: { value: 10 } });
  await fireEvent.change(maxLatInput, { target: { value: 10.1 } });
  await fireEvent.change(minLngInput, { target: { value: 10 } });
  await fireEvent.change(maxLngInput, { target: { value: 10.1 } });
  await fireEvent.click(utils.getByText(/Get Data/i));

  // wait for data to load
  await utils.findByText('ID: relation/1');
  // verify that certain multiLineString data is shown
  expect(
    utils.getByText(
      'MultiPolygon: [[[[1.1, 1.1],[1.2, 1.1],[1.2, 1.2],[1.1, 1.1],],],[[[0, 0],[1, 0],[1, 1],[0, 1],[0, 0],],],]'
    )
  ).toBeInTheDocument();
});

// Text is broken by multiple elements so we have to use custom matcher
const matcher = (targetString: string) => (
  content: string,
  node: HTMLElement
) => {
  return node.textContent === targetString;
};
