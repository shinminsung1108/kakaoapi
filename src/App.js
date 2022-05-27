import React from 'react';
import './App.css'

export default function Navibutton() {
  const Navi = () => {
    Kakao.isInitialized();
    Kakao.Navi.start({
      name: '민성이집',
      x: 127.099766772087,
      y: 37.2017555955945,
      coordType: 'wgs84',
    })
  }
  return(
    <div>
      <h1>맞짱뜰사람 컴온</h1>
      <a href='' onClick={Navi}>민성이집 가는법</a>
    </div>
  );
}