/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Pagination.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, handleNextBtn, handlePreviousBtn, maxPageNumberLimit, minPageNumberLimit }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='pagination-wrap'>
            <ul className='pagination'>
                <div className='whiteDivBtns'>
                {pageNumbers.map((number) => {
                    if (number < maxPageNumberLimit+1 && number > minPageNumberLimit){
                        return (
                            <>
                            <li key={number} id={number} className='page__item'>
                                <button onClick={() => paginate(number)} className={currentPage == number ? 'page__link pageNumberActive' : 'page__link'}>
                                    {number}
                                </button>
                            </li>
                            </>
                        )
                    }else {
                        return null
                    }
            
                })}
                </div>
            </ul>
                <li className='page__item1'>
                    <button disabled={currentPage == pageNumbers[0] ? true : false} onClick={() => handlePreviousBtn()} className='page-link'>
                        <a className='prev-next-btn' style={{color: 'black'}} >
                            <PlayArrowIcon style={{transform: 'rotate(180deg)'}}/>
                        </a>
                    </button>
                </li>
                <li className='page__item2'>
                    <button disabled={currentPage == pageNumbers[maxPageNumberLimit] ? true : false} onClick={() => handleNextBtn()} className='page-link'>
                        <a className='prev-next-btn' style={{color: 'black'}}>
                            <PlayArrowIcon />
                        </a>
                    </button>
                </li>
        </nav>
      )
}

export default Pagination