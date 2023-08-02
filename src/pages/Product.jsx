import { useParams } from 'react-router-dom';
import { singleProductData } from '../js/singleData';
import Single from '../components/Single';
import '../styles/Product.scss';


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
    return <p>محصول مورد نظر یافت نشد</p>;
  }
};

export default Product;

