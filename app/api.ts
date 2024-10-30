import Papa from "papaparse";

type Datos = {
  nombre: string;
  CUIT: string;
};

const api = {
  datos: {
    fetch: async () => {
      const url = process.env.GOOGLE_SHEET_URL;
      if (!url) {
        console.error("Google Sheet URL is not defined");
        return [];
      }

      const res = await fetch(url);

      const data = await res.text();
      const parsed = await new Promise<Datos[]>((resolve, reject) => {
        Papa.parse<Datos>(data, {
          header: true,
          complete: (result) => resolve(result.data),
          error: reject,
        });
      });

      console.log(parsed);
      return parsed;
    },
  },
};

export default api;