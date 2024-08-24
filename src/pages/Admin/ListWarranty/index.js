// src/pages/Admin/ListWarranty/index.js
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../../../Firebase/firebase';

const ListWarranty = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(database, 'locketGoldRequests');

    const handleData = (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available");
      }
    };

    onValue(dataRef, handleData);

    return () => {
      // Cleanup
    };
  }, []);

  const renderTableRows = () => {
    return Object.entries(data).map(([key, value]) => (
      <tr key={key} className="hover:bg-gray-100">
        <td className="border border-gray-300 px-4 py-2">{key}</td>
        <td className="border border-gray-300 px-4 py-2">{value.icloud}</td>
        <td className="border border-gray-300 px-4 py-2">{value.name}</td>
        <td className="border border-gray-300 px-4 py-2">{value.phone}</td>
        <td className="border border-gray-300 px-4 py-2">{value.status}</td>
        <td className="border border-gray-300 px-4 py-2">{value.timestamp}</td>
      </tr>
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Locket Gold Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">iCloud</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListWarranty;