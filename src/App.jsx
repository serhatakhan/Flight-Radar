import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView"
import ListView from './pages/ListView';
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

const App = () => {
  // harita görünümü aktif mi? olduğunun state'ini tut (2 ihtimalli bir durum olduğundan boolean tutmak daha mantıklı)
  const [isMapView, setIsMapView] = useState(true)

  // detayı gösterilecek elemanın (uçuşun) id'si için state tut, MapView'da ve ListView'da kullanılacağı için prop olarak yolla(Detay butonuna basılınca detay sayfası açılması için)
  const [detailId, setDetailId] = useState(null)

  const dispatch = useDispatch()

  // kullanıcı girdiği an uçuş verilerini al
  useEffect(()=>{
    dispatch(getFlights())

    setInterval(()=> {
      dispatch(getFlights())
    }, 10000000)
  }, [])

  return (
    <div>
      <Header />

      <div className="view-buttons">
        <button onClick={()=> setIsMapView(true)} className={isMapView ? "active" : "" }>Harita</button>
        <button onClick={()=> setIsMapView(false)} className={!isMapView ? "active" : ""} >Liste</button>
      </div>

      {/* hangi görünümün ekrana basılacağını belirle */}
      { isMapView ? <MapView setDetailId={setDetailId} /> : <ListView setDetailId={setDetailId} /> }

      {/* detailId değeri varsa ekrana Modal bileşeni bas */}
      {detailId && <Modal detailId={detailId} close={()=> setDetailId(null)} /> }
      {/* detailId ile Modal'ın hangi eleman için açıldığını bileceğiz,
          close fonk ile de değeri null'a çekince Modal'ı kapatacağız.*/}
    </div>
  )
}

export default App