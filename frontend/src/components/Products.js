import React, { useEffect, useState} from 'react';
import Axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';

import List from "./Products/List";
import "./Products.css"
import Pagination from './Systems/Pagination';

const Products = () => {
  const [products, setProducts] = useState([])
  const [first, setFirst] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    const [pageNumberLimit, setPageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const [model, setModel] = useState(false);
    const [tempImgPath, setTempImgPath] = useState('');

    const getImg = (imgSrc) => {
      setTempImgPath(imgSrc);
      setModel(true);
    }
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = first.slice(indexOfFirstPost, indexOfLastPost)
  
    // Change page
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)
    const handleNextBtn = () => {
      setCurrentPage(currentPage+1);
  
      if(currentPage+1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
    const handlePreviousBtn = () => {
      setCurrentPage(currentPage-1);
  
      if ((currentPage - 1)% pageNumberLimit == 0){
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };

  useEffect(() => {
      Axios.get("http://localhost:3001/api/products")
      .then((response) => {
          setProducts(response.data)
          setFirst(response.data)
      })
  }, [])
  
return (
  <><div className={model ? "model open" : "model"}>
    <img src={tempImgPath} alt='' />
    <CloseIcon onClick={() => setModel(false)} />
  </div>
  <div className='products'>
      <div className='products_panelList-wrap'>
        <div className='products_list-wrap'>
          <div className='list-wrap'>
            {products.map((product, index) => {
              return (
                <div className='listItem-wrap' key={index} onClick={() => getImg(product.image_path)}>
                  <>
                    <img src={product.image_path} alt="product_image" /><div className="split_wrap">
                      <div className='split' />
                      <div className='split__button_s' />
                      <div className='split__button_ss' />
                      <div className='split__button_sss' />
                    </div><header>
                      <h4>{product.brand}</h4>
                      <span>{product.type}</span>
                    </header><footer>
                      <p>
                        {product.description}
                      </p>
                      <p>{product.price} den.</p>
                      <p>{product.status}</p>
                    </footer>
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              handlePreviousBtn={handlePreviousBtn}
              handleNextBtn={handleNextBtn}
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={first.length}
              paginate={paginate} />
    </div>
</>
)
}


export default Products