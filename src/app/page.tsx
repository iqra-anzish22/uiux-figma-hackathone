
import Hero from "./components/hero";
import Center from "./components/center";
import Product from "./components/product";
import Slideimage from "./components/slideimage";
import Collage from "./components/comallge";
import ProductCards from "./products/page";

export default function Home() {
  return (
   <div>
    
  <Hero/>
  
  <Center/>
  
  <Product/>
  
  <Slideimage/>
<ProductCards/>
  <Collage/>
   </div>
  );
}
