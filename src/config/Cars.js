//Cloth
import LeatherImg from '../assets/img/salon/leather.webp';
import ClothImg from '../assets/img/salon/cloth.webp';

// 5 series
import model5gray from '../assets/img/bmw-5-series/bmw-5-gray.jpg';
import model5blue from '../assets/img/bmw-5-series/bmw-5-blue.jpg';
import model5metalic from '../assets/img/bmw-5-series/bmw-5-metalic.jpg';

// x1 series
import modelX1metalic from '../assets/img/bmw-x1-series/bmw-x1-metalic.jpg';
import modelX1white from '../assets/img/bmw-x1-series/bmw-x1-white.jpg';
import modelX1blue from '../assets/img/bmw-x1-series/bmw-x1-blue.jpg';
import modelX1orange from '../assets/img/bmw-x1-series/bmw-x1-orange.jpg';

//7 series
import model7black from '../assets/img/bmw-7-series/bmw-7-black.jpg';
import model7pure from '../assets/img/bmw-7-series/bmw-7-pure.jpg';
import model7grayblue from '../assets/img/bmw-7-series/bmw-7-gray-blue.jpg';

//x3 serie
import modelx3darkblue from '../assets/img/bmw-x3-series/bmw-x3-dark-blue.jpg';
import modelx3blue from '../assets/img/bmw-x3-series/bmw-x3-blue.jpg';

const CARS = [
  {
    id: 120,
    name: 'BMW 5 Series',
    transmission: 'automatic',
    colors: [
      {
        colorName: 'black',
        price: 0,
        default: true,
        img: model5gray,
      },
      {
        colorName: 'blue',
        price: 3000,
        default: false,
        img: model5blue,
      },
      {
        colorName: 'metalic',
        price: 2000,
        default: false,
        img: model5metalic,
      },
    ],
    salons: [
      {
        type: 'cloth',
        img: ClothImg,
        price: 0,
      },
      {
        type: 'leather',
        img: LeatherImg,
        price: 2000,
      },
    ],
    fuel: [
      {
        type: 'petrol',
        price: 0,
      },
      {
        type: 'diesel',
        price: 2000,
      },
      {
        type: 'hybrid',
        price: 3500,
      },
    ],
    engine: [
      {
        volume: '2.0',
        price: 0,
      },
      {
        volume: '2.5',
        price: 2000,
      },
      {
        volume: '3.0',
        price: 3500,
      },
    ],
    popular: true,
    price: 50000,
  },
  {
    id: 121,
    name: 'BMW X1 Series',
    transmission: 'automatic',
    colors: [
      {
        colorName: 'metalic',
        price: 1000,
        default: false,
        img: modelX1metalic,
      },
      {
        colorName: 'white',
        price: 3000,
        default: true,
        img: modelX1white,
      },
      {
        colorName: 'blue',
        price: 2000,
        default: false,
        img: modelX1blue,
      },
      {
        colorName: 'orange',
        price: 2500,
        default: false,
        img: modelX1orange,
      },
    ],
    salons: [
      {
        type: 'cloth',
        img: ClothImg,
        price: 0,
      },
      {
        type: 'leather',
        img: LeatherImg,
        price: 2000,
      },
    ],
    fuel: [
      {
        type: 'petrol',
        price: 0,
      },
      {
        type: 'diesel',
        price: 2000,
      },
      {
        type: 'hybrid',
        price: 3500,
      },
    ],
    engine: [
      {
        volume: '2.0',
        price: 0,
      },
      {
        volume: '2.5',
        price: 2000,
      },
      {
        volume: '3.0',
        price: 3500,
      },
    ],
    popular: true,
    price: 55000,
  },
  {
    id: 122,
    name: 'BMW 7 Series',
    transmission: 'automatic',
    colors: [
      {
        colorName: 'black',
        price: 1000,
        default: false,
        img: model7black,
      },
      {
        colorName: 'pure',
        price: 2000,
        default: false,
        img: model7pure,
      },
      {
        colorName: 'gray-blue',
        price: 3000,
        default: true,
        img: model7grayblue,
      },
    ],
    salons: [
      {
        type: 'cloth',
        img: ClothImg,
        price: 0,
      },
      {
        type: 'leather',
        img: LeatherImg,
        price: 2000,
      },
    ],
    fuel: [
      {
        type: 'petrol',
        price: 0,
      },
      {
        type: 'diesel',
        price: 2000,
      },
      {
        type: 'hybrid',
        price: 3500,
      },
    ],
    engine: [
      {
        volume: '2.0',
        price: 0,
      },
      {
        volume: '2.5',
        price: 2000,
      },
      {
        volume: '3.0',
        price: 3500,
      },
    ],
    popular: true,
    price: 75000,
  },
  {
    id: 123,
    name: 'BMW X3 Series',
    transmission: 'automatic',
    colors: [
      {
        colorName: 'dark-blue',
        price: 3000,
        default: true,
        img: modelx3darkblue,
      },
      {
        colorName: 'blue',
        price: 2000,
        default: false,
        img: modelx3blue,
      },
    ],
    salons: [
      {
        type: 'cloth',
        img: ClothImg,
        price: 0,
      },
      {
        type: 'leather',
        img: LeatherImg,
        price: 2000,
      },
    ],
    fuel: [
      {
        type: 'petrol',
        price: 0,
      },
      {
        type: 'diesel',
        price: 2000,
      },
      {
        type: 'hybrid',
        price: 3500,
      },
    ],
    engine: [
      {
        volume: '2.0',
        price: 0,
      },
      {
        volume: '2.5',
        price: 2000,
      },
      {
        volume: '3.0',
        price: 3500,
      },
    ],
    popular: true,
    price: 75000,
  },
];

export default CARS;
