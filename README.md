# Flight Radar

Proje, uçakların gerçek zamanlı olarak izlenebileceği bir uçak takip uygulamasıdır. React kullanılarak geliştirilmiş olup, kullanıcıların hem harita üzerinde hem de liste halinde uçakları takip etmelerini sağlar.

## Özellikler

`**Harita Görünümü:**` Uçakların konumları, harita üzerinde görsel olarak işaretlenir. Leaflet kütüphanesi kullanılarak harita görüntülenir.

`**Liste Görünümü:**` Uçakların detayları, liste halinde kullanıcılara sunulur.

`**Uçak Detayları:**` Kullanıcılar, uçakların detaylarına ulaşabilir ve detay butonuna tıklayarak daha fazla bilgiye erişebilirler.

`**Sayfalama:**` Liste görünümünde sayfalama özelliği bulunur, böylece kullanıcılar sayfa sayfa uçakları görebilirler.

## Kullanılan Teknolojiler

* **React:** Kullanıcı arayüzü geliştirmek için React kullanıldı.

* **React-Leaflet:** Harita görüntülemek için Leaflet kütüphanesi React entegrasyonu kullanıldı.

* **Redux Toolkit:** Uygulama durumu yönetimi için Redux Toolkit kullanıldı. Redux Toolkit, Redux için önerilen bir dizi aracı içerir ve karmaşık durumları yönetmeyi kolaylaştırır.

* **Redux Toolkit Thunk:** Asenkron işlemleri yönetmek için Redux Thunk kullanıldı. Bu sayede uygulama, API çağrıları gibi asenkron işlemleri kolayca gerçekleştirebilir.

* **React Paginate:** Tüm uçuşların tek sayfada gösterilmesi yerine sayfalara bölünerek listelenmesinde kullanılmıştır. Bu sayede düşük donanmlı cihazlarda olası performans kayıplarının önüne geçilmiştir

* **Moment:** Unix formatında gelen veri düzenlendikten sonra, kullanıcıya daha anlaşılır gösterilmek için kullanıldı.

* **Axios:** Veri tabanından uçuş verilerini uygulamaya çekmek için kullanıldı. API: https://rapidapi.com/apidojo/api/flight-radar1

## Ekran Gifi
