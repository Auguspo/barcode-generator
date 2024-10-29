import React from "react";
import BarcodeGenerator from "./BarcodeGenerator";

const Modal = ({ isOpen, onClose, barcodeValue }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-0">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-lg font-bold">Código de Barras Generado</h2>
                <div className="mt-4">
                    <h3 className="text-md">Código: {barcodeValue}</h3>
                    <BarcodeGenerator value={barcodeValue} />
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Cerrar
                </button>
            </div>
            <div className="fixed inset-0 bg-black opacity-50" />
        </div>
    );
};

export default Modal;
