import http from "k6/http";
import { check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

export const option = {
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('quantidade de chamadas')
const myGauge = new Gauge('Tempo bloqueado');
const myRate = new Rate('taxa req 200');
const myTrend = new Trend('Taxa de espera')

export default function(){
   const req = http.get('http://test.k6.io');
//contador
  chamadas.add(1);
//medidor
  myGauge.add(req.timings.blocked);
//tadxa
  myRate.add(req.status === 200);
//tendencia
  myTrend.add(req.timings.waiting);
}