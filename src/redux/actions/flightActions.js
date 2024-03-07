import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flights/getFlights", async ()=>{

    // 1) api isteği at
    const res = await axios.request(options)

    // 2) Gelen Veriyi Formatla - dizi içinde dizi geliyor
    // bu dizi içindeki dizileri, nesnelere çevireceğiz. (genel olarak bir diziyi objeye çevirmek istesek Object.fromEntries() doğru olurdu. biz dizi içindeki dizileri nesnelere çevireceğiz.)
    // elimizdeki diziyi formatlayıp nesneler içeren bir dizi yapacağız yani -> map(), aşağıdaki her bir item bizim bir uçuşumuz.
    const formatted = res.data.aircraft.map((item)=> ({
        id: item[0],
        code: item[1],
        lat: item[2],
        lng: item[3],
    }))

    // 3) aksiyonun payloadı olarak formatlanan veriyi ekle
    return formatted
})