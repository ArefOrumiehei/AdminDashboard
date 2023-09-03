import { useParams } from 'react-router-dom';

//Data
import { singleProductData } from '../js/singleData';

//Components
import Single from '../components/Single';


const Product = () => {
  const { id } = useParams();

  const productData = singleProductData.find(item => item.id === parseInt(id));

  if (productData) {
    return (
      <div className='product'>
        <Single key={productData.id} {...productData} />
      </div>
    );
  } else {
    return <p>The desired product was not found. :(</p>;
  }
};

export default Product;

