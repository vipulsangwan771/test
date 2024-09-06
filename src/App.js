
import './App.css';
import Main from './Component/Main';
import Nav from './Component/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabb from './Component/Tabb';
import Footer from './Component/Footer';
// import CustomSlider from './Component/CustomSlider';
// import Markslider from './Component/Markslider';
import TextSlider from './Component/TextSlider';
import IMgSlid from './Component/IMgSlid';
// import SubMain from './Component/SubMain';


function App() {
  return (
    <>
     <Nav />
     <Main />
     {/* <CustomSlider/> */}
     {/* <Markslider/> */}
     <TextSlider/>
     <IMgSlid/>
     {/* <SubMain/> */}
     <Tabb/>
     <Footer/>
    </>
  );
}

export default App;
