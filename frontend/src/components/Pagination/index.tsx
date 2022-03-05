import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

type Props = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
}

const Pagination = ( {pageCount,range, onChange} : Props ) => {
  return (

    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-anactive"
      previousClassName="arrow-previous"
      previousLabel={<div className='pagination-arrow-container'> <ArrowIcon /></div>}
      nextClassName="arrow-next"
      nextLabel={<div className='pagination-arrow-container'> <ArrowIcon /></div>}

      onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
    />
    
  );
};
export default Pagination;
