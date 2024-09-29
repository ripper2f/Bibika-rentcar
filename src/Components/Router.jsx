import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Screens/Home/Home";
import About from "../Components/Screens/About/About";
import Contacts from "../Components/Screens/Contacts";
import Rent from "../Components/Screens/Rent/Rent";
import Sdat from "../Components/Screens/Sdat";
import Profile from "../Components/Screens/Profile/Profile";
import Faq from "../Components/Screens/FAQ/Faq";
import Arenda from "../Components/Screens/FAQ/Arenda";
import Sdati from "../Components/Screens/FAQ/Sdati";
import Payment from "../Components/Screens/FAQ/Payment";
import GIBDD from "../Components/Screens/FAQ/GIBDD";
import Reg from "../Components/Screens/FAQ/Reg";
import CarsInfo from "../Components/Screens/Rent/CarsInfo";
import AddCar from "../Components/Screens/Profile/AddCar";
import NF from "../Components/Screens/NF";
import News from "../Components/Screens/News/News";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/rent" element={<Rent />} />
        <Route path=":id" element={<CarsInfo />} />

        <Route path="/sdat" element={<Sdat />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/addcar" element={<AddCar />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/faq/arenda" element={<Arenda />} />
        <Route path="/faq/sdati" element={<Sdati />} />
        <Route path="/faq/payment" element={<Payment />} />
        <Route path="/faq/gibdd" element={<GIBDD />} />
        <Route path="/faq/reg" element={<Reg />} />

        <Route path="*" element={<NF />} />
      </Routes>
    </BrowserRouter>
  );
}
