import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <h1
          className="lg:text-4xl text-center text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 font-atkinson text-white "
        >
          
            Ciné<span className='text-pink'>pop</span>
        
        </h1>
     
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;