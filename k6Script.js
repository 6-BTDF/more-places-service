import { sleep, check } from 'k6';
import http from 'k6/http';

const getRandom = () => Math.floor(Math.random() * 10000000 + 1);

export const options = {
  stages: [
    { duration: '15s', target: 1000 },
    { duration: '15s', target: 1200 },
    { duration: '1m', target: 1500 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
  },
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};

export default function main() {
  const response = http.get(`http://localhost:3004/api/${getRandom}/morePlaces`);
  check(response, {
    'status equals 200': (response) => response.status.toString() === '200',
  });
  sleep(1);
}
