import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Image from './Image.js';
import Recipe from './recipie.js';
import Ingridients from './Ingridients.js';
import Footer from './Footer.js';

const chocolatePizza = {
  header: 'Chocolate Pizza',
  src: 'https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/choco-pizza.png?raw=true',
  alt: 'chocopizza'
}

const footerIntro = {
  name: 'Vanessa Stevenson',
  src: 'https://github.com/alchemycodelab/alchemy-bootcamp-i-january-2019/blob/master/curriculum/week-02/class-09/LAB-10/LAB-10a-chocolate-pizza/lab-assets/van-pic.png?raw=true',
  paragraph: 'Food enthusiast, photography fan. Add a pinch of raw foodism and that\s pretty much who I am'
}


function App() {
  return (
    <>
      <Header />
      <Image header={chocolatePizza.header} src={chocolatePizza.src}
        alt={chocolatePizza.alt} />
      <Recipe />
      <Ingridients />
      <Footer name={footerIntro.name} src={footerIntro.src} paragraph={footerIntro.paragraph}
      />

    </>


  );
}

export default App;
