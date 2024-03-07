export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "35.480658",
    bl_lng: "25.73472",
    tr_lat: "42.527912",
    tr_lng: "44.865926",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "2d33ced34dmshe921208dae0eedap10a7f8jsn7a8e9f31b93b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": "2d33ced34dmshe921208dae0eedap10a7f8jsn7a8e9f31b93b",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
