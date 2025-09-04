import { CarProps, FilterProps } from "@/types";

// Calculează prețul de închiriere pe zi
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // $/zi
  const mileageFactor = 0.1; // $ per mile
  const ageFactor = 0.05; // $ per an

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};

// Actualizează URL-ul cu un parametru de căutare
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  return `${window.location.pathname}?${searchParams.toString()}`;
};

// Șterge un parametru din URL
export const deleteSearchParams = (type: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(type.toLowerCase());
  return `${window.location.pathname}?${searchParams.toString()}`;
};

// Fetch de mașini de la API
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    { headers }
  );

  const data = await response.json();
  console.log("API response:", data); // vezi ce vine de la API
  return data;
}

// Generează URL pentru imaginea mașinii
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', "hrjavascript-mastery"); // cheia publică pentru teste
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  if (angle) url.searchParams.append('angle', angle);

  return url.toString();
}
