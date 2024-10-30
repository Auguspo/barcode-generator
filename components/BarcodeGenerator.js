import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeGenerator = ({ value, onClose }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (value && svgRef.current) {
            JsBarcode(svgRef.current, value, {
                format: "ITF",
                width: 2,
                height: 50,
                displayValue: true,
            });
        }
    }, [value]);

    const downloadBarcode = () => {
        const svgElement = svgRef.current;
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        // Crear una imagen
        const img = new Image();
        
        // Establecer el tamaño del canvas igual al tamaño del SVG
        img.onload = () => {
            // Ajustar el tamaño del canvas
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngData;
            link.download = "barcode.png";
            link.click();
        };

        // Convertir el SVG a base64
        img.src = "data:image/svg+xml;base64," + btoa(svgData);
    };

    return (
        <div>
            <svg ref={svgRef} id="barcode-svg" className="w-full h-auto" />
            <div className="mt-4 flex justify-between">
                <button
                    onClick={onClose} // Cerrar modal
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Cerrar
                </button>
                <button
                    onClick={downloadBarcode} // Descargar código de barras
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    Descargar
                </button>
            </div>
        </div>
    );
};

export default BarcodeGenerator;
