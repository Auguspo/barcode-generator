import React from 'react';

const ScrollableClientList = ({ clients }) => {
    return (
        <div className="client-list">
            {clients.map((client) => (
                <div key={client.id} className="client-item">
                    <h4>{client.name}</h4>
                    <p>{client.details}</p>
                </div>
            ))}
        </div>
    );
};

export default ScrollableClientList;
