import React from "react";
import BarcodeGenerator from "./BarcodeGenerator";

const Modal = ({ isOpen, onClose, barcodeValue }) => {
    if (!isOpen) return null; // No renderizar si no está abierto

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" />
            <div className="bg-white p-6 rounded shadow-md max-w-lg w-full mx-4 z-0">
                <h2 className="text-lg font-bold">Código de Barras Generado</h2>
                <div className="mt-4">
                    <h3 className="text-md">Código: {barcodeValue}</h3>
                    <BarcodeGenerator value={barcodeValue} onClose={onClose} />
                </div>
                <div className="mt-4 flex justify-between">
                  
                   
                </div>
            </div>
        </div>
    );
};

export default Modal;
