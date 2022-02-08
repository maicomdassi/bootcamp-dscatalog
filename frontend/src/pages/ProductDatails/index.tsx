import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import ProductPrice from 'components/ProductPrice';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';
import ProductInfoLoader from './ProductInfoLoader';
import ProductDatailsLoader from './ProductsDatailsLoader';
import './styles.css';
type UrlParms = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<UrlParms>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="product-datails-conatiner">
      <div className="base-card product-datails-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? <ProductInfoLoader/> :
              <>              
                <div className="img-container">
                  <img src={product?.imgUrl} alt={product?.name} />
                </div>
                <div className="name-price-container">
                  <h1>{product?.name}</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            }
          </div>
          <div className="col-xl-6">
            { isLoading ? <ProductDatailsLoader/> :
              <div className="description-container">
                <h2>Descrição do Produto</h2>
                <p>{product?.description}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
