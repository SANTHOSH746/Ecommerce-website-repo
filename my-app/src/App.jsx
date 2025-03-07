mport './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { Signup } from './Components/Signup';
import { Home } from './page/Home';
import { ProductForm } from './Components/Productform';
import { Productcardseller } from './Components/productcardforseller';
import Cart from './page/cart';
import Profile from './Components/profile';
import AddressForm from './Components/AddressForm'; // Import Address Form
import SelectAddress from './Components/SelectAddress'; // Import Select Address

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/my-product" element={<Productcardseller />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-address" element={<AddressForm />} /> {/* New Route */}
        <Route path="/select-address" element={<SelectAddress />} /> {/* Added Select Address Page */}
      </Routes>
    </>
  );
}

export default App;
