import ReactPaginate from "react-paginate";
import "./SearchBar.css";

function Pagination({pageCount,onPageChange}){

return(

<ReactPaginate

breakLabel="..."

nextLabel="Next >"

previousLabel="< Prev"

pageCount={pageCount}

onPageChange={onPageChange}

containerClassName="pagination"

activeClassName="active"

pageRangeDisplayed={3}

/>

);

}

export default Pagination;