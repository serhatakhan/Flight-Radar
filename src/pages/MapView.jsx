// react leaflet kullanmak için onu css'ini import ettik
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { clearPath } from "../redux/slices/flightSlice";
import { icon } from "leaflet";
// iconu değiştirmek için lefalet'ten icon'u import ettik


// haritanın gelmesi için haritanın classına yükseklik verdik. clasını da ögeyi incele diyerek bulduk
const MapView = ( {setDetailId} ) => {
  const flightState = useSelector((store)=> store.flightReducer)

  const dispatch = useDispatch()

  // marker için uçak iconu oluştur
  const planeIcon = icon({
    iconUrl: "/plane-icon.png",
    iconSize: [30,30]
  })

  return (
    <MapContainer center={[38.948771, 35.425597]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* uçuş verisi kadar ekrana imleç bas */}
      {flightState.flights.map((item)=> (
          <Marker icon={planeIcon} key={item.id} position={[item.lat, item.lng]}>
            <Popup>
              <div className="d-flex flex-column gap-2">
                <span>Kod: {item.code}</span>
                <button onClick={()=> setDetailId(item.id)} className="btn btn-sm btn-warning w-100">Detay</button>

                {/* ekranda rota varsa temizle butonu koy */}
                {flightState.path.length > 0 && (
                  <button onClick={()=> dispatch(clearPath())}>Rotayı Temizle</button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* uçağın rotasını bas */}
        <Polyline positions={flightState?.path} />
     
    </MapContainer>
  );
};

export default MapView;



/* Harita Açıklama:
* center={[]}, koordinatlar
* scrollWheelZoom={true}, fare topuyla zoom yapılsın mı
* <TileLayer>, haritanın kendisi &copy kısmından sonraki alana kendi haritalarımı ekleyebiliyoruz
* <Marker>, haritadaki imleç
* <Popup>, Marker'ın içine tanımlanınca, marker'lara tıklanınca üstlerinde açılan yazı
*/
