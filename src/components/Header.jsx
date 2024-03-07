import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img src="/plane-logo.png" alt="logo" />
        <h3>Flight Radar</h3>
      </div>

      <p>
        {flightState.isLoading
          ? "Uçuşlar Yükleniyor.."
          : flightState.isError
          ? "Üzgünüz Bir Hata Oluştu :/"
          : flightState.flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;
