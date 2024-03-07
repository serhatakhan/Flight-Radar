import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ListView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  // gösterilecek ilk elemanın state'i(0. elemandan gösterilmeye başlanacak)
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına gösterilecek eleman sayısı(biz ekledik bu kısmı)
  const itemsPerPage = 10

  // son gösterilecek elemanı belirle
  const endOffset = itemOffset + itemsPerPage;

  // belirlenen aralıktaki elemanları slice yardımıyla al
  const currentItems = flightState.flights.slice(itemOffset, endOffset);

  // max sayfa sayısını belirle (elimizdeki eleman sayısı/sayfa başı eleman), ceil ile de yukarı yuvarla
  const pageCount = Math.ceil(flightState.flights.length / itemsPerPage);

  // her yeni sayfa seçildiğinde çalış
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flightState.flights.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="px-4 py-3 list-bg">
      <table className="table table-dark table-hover table-striped table-responsive mt-1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Detay</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.code}</td>
              <td>{item.lat}</td>
              <td>{item.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(item.id)}
                  className="btn btn-sm btn-danger"
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        previousLabel="<"
        nextLabel=">"
        className="pagination"
      />
    </div>
  );
};

export default ListView;
