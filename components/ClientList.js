import React, { useState, useEffect } from "react";
import api from "@/app/api";

const ClientList = ({ isOpen, onClose, onSelectClient }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await api.datos.fetch();
        setClients(data);
    
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const handleClientSelect = (client) => {
    onSelectClient(client);
    onClose(); // Close the client list after selection
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } sm:w-1/3 md:w-1/4`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Lista de Clientes</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          &times;
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border-b">ID</th>
              <th className="border-b">Nombre</th>
              <th className="border-b">CUIT</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index} onClick={() => handleClientSelect(client)}>
                <td className="border-b p-2 text-center">{index}</td>
                <td className="border-b p-2 text-center">{client.nombre}</td>
                <td className="border-b p-2 text-center">{client.CUIT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;
