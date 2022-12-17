import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { Navbar } from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import { ProductPage } from './Pages/ProductPage';
import { Header } from './components/Header';
import { Cart } from './components/Cart';

function App() {
  const [productArray, setProductArray] = useState<any []>([]);
  const [modal, setModal] = useState(false);

  const styles = {
    filter: modal ? "brightness(.2)" : "brightness(1)",
    backgroundColor: modal ? "rgba(0, 0, 0, 0.8)" : "transparent",
    height: "100vh"
  }
  
  return (
    <>
    {modal && <Modal setModal={setModal}/>}
    <div style={styles}>
     <Navbar />
     <div className="App">
      <Header productArray={productArray}/>
      <Routes>
        <Route path="/" element={<ProductPage setProductArray={setProductArray} productArray={productArray} />} />
        <Route path="/cart" element={<Cart productArray={productArray} setModal={setModal}/>} />
      </Routes>
     </div>
    </div>
    </>
  );
}

export default App;
