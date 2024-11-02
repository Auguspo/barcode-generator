"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
const comprobantes = [
  { value: "001", name: "FACTURAS A" },
  { value: "002", name: "NOTAS DE DEBITO A" },
  { value: "003", name: "NOTAS DE CREDITO A" },
  { value: "004", name: "RECIBOS A" },
  { value: "005", name: "NOTAS DE VENTA AL CONTADO A" },
  { value: "006", name: "FACTURAS B" },
  { value: "007", name: "NOTAS DE DEBITO B" },
  { value: "008", name: "NOTAS DE CREDITO B" },
  { value: "009", name: "RECIBOS B" },
  { value: "010", name: "NOTAS DE VENTA AL CONTADO B" },
  { value: "011", name: "FACTURAS C" },
  { value: "012", name: "NOTAS DE DEBITO C" },
  { value: "013", name: "NOTAS DE CREDITO C" },
  { value: "015", name: "RECIBOS C" },
  { value: "016", name: "NOTAS DE VENTA AL CONTADO C" },
  { value: "017", name: "LIQUIDACION DE SERVICIOS PUBLICOS CLASE A" },
  { value: "018", name: "LIQUIDACION DE SERVICIOS PUBLICOS CLASE B" },
  { value: "019", name: "FACTURAS DE EXPORTACION" },
  { value: "020", name: "NOTAS DE DEBITO POR OPERACIONES CON EL EXTERIOR" },
  { value: "021", name: "NOTAS DE CREDITO POR OPERACIONES CON EL EXTERIOR" },
  {
    value: "022",
    name: "FACTURAS - PERMISO EXPORTACION SIMPLIFICADO - DTO. 855/97",
  },
  {
    value: "023",
    name: "COMPROBANTES “A” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO",
  },
  {
    value: "024",
    name: "COMPROBANTES “A” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO",
  },
  {
    value: "025",
    name: "COMPROBANTES “B” DE COMPRA PRIMARIA PARA EL SECTOR PESQUERO MARITIMO",
  },
  {
    value: "026",
    name: "COMPROBANTES “B” DE CONSIGNACION PRIMARIA PARA EL SECTOR PESQUERO MARITIMO",
  },
  { value: "027", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A" },
  { value: "028", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B" },
  { value: "029", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C" },
  { value: "030", name: "COMPROBANTES DE COMPRA DE BIENES USADOS" },
  { value: "031", name: "MANDATO - CONSIGNACION" },
  { value: "032", name: "COMPROBANTES PARA RECICLAR MATERIALES" },
  { value: "033", name: "LIQUIDACION PRIMARIA DE GRANOS" },
  {
    value: "034",
    name: "COMPROBANTES A DEL APARTADO A  INCISO F)  R.G. N°  1415",
  },
  {
    value: "035",
    name: "COMPROBANTES B DEL ANEXO I, APARTADO A, INC. F), R.G. N° 1415",
  },
  {
    value: "036",
    name: "COMPROBANTES C DEL Anexo I, Apartado A, INC.F), R.G. N° 1415",
  },
  {
    value: "037",
    name: "NOTAS DE DEBITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415",
  },
  {
    value: "038",
    name: "NOTAS DE CREDITO O DOCUMENTO EQUIVALENTE QUE CUMPLAN CON LA R.G. N° 1415",
  },
  { value: "039", name: "OTROS COMPROBANTES A QUE CUMPLEN CON LA R G  1415" },
  {
    value: "040",
    name: "OTROS COMPROBANTES B QUE CUMPLAN CON LA R.G. N° 1415",
  },
  {
    value: "041",
    name: "OTROS COMPROBANTES C QUE CUMPLAN CON LA R.G. N° 1415",
  },
  {
    value: "043",
    name: "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B",
  },
  {
    value: "044",
    name: "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C",
  },
  {
    value: "045",
    name: "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A",
  },
  {
    value: "046",
    name: "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE B",
  },
  {
    value: "047",
    name: "NOTA DE DEBITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE C",
  },
  {
    value: "048",
    name: "NOTA DE CREDITO LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE A",
  },
  {
    value: "049",
    name: "COMPROBANTES DE COMPRA DE BIENES NO REGISTRABLES A CONSUMIDORES FINALES",
  },
  { value: "050", name: "RECIBO FACTURA A  REGIMEN DE FACTURA DE CREDITO" },
  { value: "051", name: "FACTURAS M" },
  { value: "052", name: "NOTAS DE DEBITO M" },
  { value: "053", name: "NOTAS DE CREDITO M" },
  { value: "054", name: "RECIBOS M" },
  { value: "055", name: "NOTAS DE VENTA AL CONTADO M" },
  {
    value: "056",
    name: "COMPROBANTES M DEL ANEXO I  APARTADO A  INC F) R.G. N° 1415",
  },
  {
    value: "057",
    name: "OTROS COMPROBANTES M QUE CUMPLAN CON LA R.G. N° 1415",
  },
  { value: "058", name: "CUENTAS DE VENTA Y LIQUIDO PRODUCTO M" },
  { value: "059", name: "LIQUIDACIONES M" },
  { value: "060", name: "CUENTAS DE VENTA Y LIQUIDO PRODUCTO A" },
  { value: "061", name: "CUENTAS DE VENTA Y LIQUIDO PRODUCTO B" },
  { value: "063", name: "LIQUIDACIONES A" },
  { value: "064", name: "LIQUIDACIONES B" },
  { value: "066", name: "DESPACHO DE IMPORTACION" },
  { value: "068", name: "LIQUIDACION C" },
  { value: "070", name: "RECIBOS FACTURA DE CREDITO" },
  {
    value: "080",
    name: "INFORME DIARIO DE CIERRE (ZETA) - CONTROLADORES FISCALES",
  },
  { value: "081", name: "TIQUE FACTURA A" },
  { value: "082", name: "TIQUE FACTURA B" },
  { value: "083", name: "TIQUE" },
  { value: "088", name: "REMITO ELECTRONICO" },
  { value: "089", name: "RESUMEN DE DATOS" },
  {
    value: "090",
    name: "OTROS COMPROBANTES - DOCUMENTOS EXCEPTUADOS - NOTAS DE CREDITO",
  },
  { value: "091", name: "REMITOS R" },
  {
    value: "099",
    name: "OTROS COMPROBANTES QUE NO CUMPLEN O ESTÁN EXCEPTUADOS DE LA R.G. 1415 Y SUS MODIF",
  },
  // { value: "0110", name: "TIQUE NOTA DE CREDITO" },
  // { value: "0111", name: "TIQUE FACTURA C" },
  // { value: "0112", name: "TIQUE NOTA DE CREDITO A" },
  // { value: "0113", name: "TIQUE NOTA DE CREDITO B" },
  // { value: "0114", name: "TIQUE NOTA DE CREDITO C" },
  // { value: "0115", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE D" },
  // { value: "0116", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE E" },
  // { value: "0117", name: "LIQUIDACION UNICA COMERCIAL IMPOSITIVA CLASE F" },
  // { value: "0118", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO B" },
  // { value: "0119", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO C" },
  // { value: "0120", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO D" },
  // { value: "0121", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO E" },
  // { value: "0122", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO F" },
  // { value: "0123", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO G" },
  // { value: "0124", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO H" },
  // { value: "0125", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO I" },
  // { value: "0126", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO J" },
  // { value: "0127", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO K" },
  // { value: "0128", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO L" },
  // { value: "0129", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO M" },
  // { value: "0130", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO N" },
  // { value: "0131", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO O" },
  // { value: "0132", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO P" },
  // { value: "0133", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO Q" },
  // { value: "0134", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO R" },
  // { value: "0135", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO S" },
  // { value: "0136", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO T" },
  // { value: "0137", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO U" },
  // { value: "0138", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO V" },
  // { value: "0139", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO W" },
  // { value: "0140", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO X" },
  // { value: "0141", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO Y" },
  // { value: "0142", name: "COMPROBANTE DE VENTA Y LIQUIDO PRODUCTO Z" },
];

const BarcodePage = () => {
  const [inputs, setInputs] = useState({
    cuit: "",
    cai: "",
    fechaVencimiento: "",
    puntoVenta: "",
    tipoComprobante: "",
  });

  const [barcodeValue, setBarcodeValue] = useState("");

  // const [isClientListOpen, setClientListOpen] = useState(false);
  // const [isModalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Validar longitud exacta para cada campo

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const generarCodigo = (e) => {
    e.preventDefault();
    const { cuit, cai, fechaVencimiento, puntoVenta, tipoComprobante } = inputs;

    if (cuit.length !== 11) {
      alert("El CUIT debe tener exactamente 11 caracteres.");
      return; // No permite cambios si no cumple la longitud
    }

    if (cai.length !== 14) {
      alert("El CAI debe tener exactamente 14 caracteres.");
      return; // No permite cambios si no cumple la longitud
    }

    if (puntoVenta.length !== 4) {
      alert("El Punto de Venta debe tener exactamente 4 caracteres.");
      return; // No permite cambios si no cumple la longitud
    }

    try {
      if (
        !cuit ||
        !cai ||
        !fechaVencimiento ||
        !puntoVenta ||
        !tipoComprobante
      ) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
      }

      const fechaParts = inputs.fechaVencimiento.split("/"); // Divide la fecha en partes
      const fechaVencimientoFormatted = `${fechaParts[2]}${fechaParts[1]}${fechaParts[0]}`; // Formato AAAAMMDD

      const cuitStr = cuit.toString().replace(/[^0-9]/g, "");
      const caiStr = cai.toString().replace(/[^0-9]/g, "");
      const puntoVentaStr = puntoVenta.toString().replace(/[^0-9]/g, "");
      const codigo =
        cuitStr +
        tipoComprobante +
        puntoVentaStr +
        caiStr +
        fechaVencimientoFormatted;

      const codigoVerificador = obtenerCodigoVerificador(codigo);
      if (isNaN(codigoVerificador)) {
        alert("Código generado no válido.");
        return;
      }

      setBarcodeValue(codigo + codigoVerificador);
    } catch (error) {
      console.error("Error al generar el código:", error);
      alert(
        "Ocurrió un error al generar el código de barras. Por favor, inténtelo de nuevo.",
      );
    }
  };

  function obtenerCodigoVerificador(codigo) {
    let sumaImpares = 0;
    let sumaPares = 0;

    for (let i = 0; i < codigo.length; i++) {
      if (i % 2 === 0) {
        sumaImpares += parseInt(codigo[i]);
      } else {
        sumaPares += parseInt(codigo[i]);
      }
    }

    const sumaTotal = sumaImpares * 3 + sumaPares;
    const digitoVerificador = (10 - (sumaTotal % 10)) % 10; // Asegúrate de que el dígito sea entre 0 y 9
    return digitoVerificador;
  }

  // const handleClientSelect = (client) => {
  //   setInputs((prev) => ({
  //     ...prev,
  //     cuit: client.CUIT || "",
  //   }));

  // };

  return (
    <div className='flex h-screen bg-gray-200 justify-center items-center relative'>
      <div className='w-full max-w-lg flex flex-col justify-center items-center p-8 shadow-lg rounded-lg bg-white'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          Generador de Códigos de Barras
        </h1>
        <form onSubmit={generarCodigo} className='w-full'>
          <div className='mb-4'>
            <label
              htmlFor='cuit'
              className='block text-sm font-medium text-gray-700'
            >
              CUIT
            </label>
            <input
              type='text'
              name='cuit'
              id='cuit'
              placeholder='CUIT'
              value={inputs.cuit}
              onChange={handleInputChange}
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              minLength={11}
              maxLength={11}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='cai'
              className='block text-sm font-medium text-gray-700'
            >
              CAI
            </label>
            <input
              type='number'
              name='cai'
              id='cai'
              placeholder='CAI'
              value={inputs.cai}
              onChange={handleInputChange}
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              minLength={14}
              maxLength={14}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='fechaVencimiento'
              className='block text-sm font-medium text-gray-700'
            >
              Fecha de Vencimiento
            </label>
            <input
              type='text'
              name='fechaVencimiento'
              id='fechaVencimiento'
              value={inputs.fechaVencimiento}
              onChange={(e) => {
                const { value } = e.target;
                // Eliminar cualquier carácter que no sea un número
                const numericValue = value.replace(/\D/g, "");

                // Agregar barras en las posiciones correctas
                let formattedValue = numericValue;
                if (numericValue.length >= 3) {
                  formattedValue =
                    numericValue.slice(0, 2) + "/" + numericValue.slice(2);
                }
                if (numericValue.length >= 5) {
                  formattedValue =
                    formattedValue.slice(0, 5) + "/" + formattedValue.slice(5);
                }

                // Actualiza el estado con el valor formateado
                setInputs((prev) => ({
                  ...prev,
                  fechaVencimiento: formattedValue,
                }));
              }}
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              placeholder='DD/MM/AAAA'
              minLength={10}
              maxLength={10}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='puntoVenta'
              className='block text-sm font-medium text-gray-700'
            >
              Punto de Venta
            </label>
            <input
              type='number'
              name='puntoVenta'
              id='puntoVenta'
              placeholder='Punto de Venta'
              value={inputs.puntoVenta}
              onChange={handleInputChange}
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
              minLength={4}
              maxLength={4}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='tipoComprobante'
              className='block text-sm font-medium text-gray-700'
            >
              Tipo de Comprobante
            </label>
            <select
              name='tipoComprobante'
              id='tipoComprobante'
              value={inputs.tipoComprobante}
              onChange={handleInputChange}
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            >
              <option value=''>Seleccione un tipo de comprobante</option>
              {comprobantes.map((comprobante) => (
                <option key={comprobante.value} value={comprobante.value}>
                  {comprobante.value + " " + comprobante.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
          >
            Generar Código
          </button>
        </form>

        {barcodeValue && (
          <div className='fixed inset-0 flex items-center justify-center '>
            <div className='p-4 border border-gray-300 rounded-lg bg-white shadow-md'>
              <Modal
                isOpen={true}
                onClose={() => setBarcodeValue(null)}
                barcodeValue={barcodeValue}
                cuit={inputs.cuit}
              />
            </div>
          </div>
        )}
      </div>

      {/*{!barcodeValue && <button
    onClick={() => {
      setClientListOpen(true);
      setModalOpen(false);
    }}
    className="absolute top-9 right-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition duration-200"
  >
    Mostrar Clientes
  </button>}

  {isClientListOpen && !isModalOpen && (
    <ClientList
     
      isOpen={isClientListOpen}
      onClose={() => setClientListOpen(false)}
      onSelectClient={handleClientSelect}
    />
  )} */}
    </div>
  );
};
export default BarcodePage;
