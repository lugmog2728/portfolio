import React from "react";

const Copyright = ({ name, firstname, year }) => {
  return (
    <div className="bg-darkblue flex justify-center py-4">
      <p className="text-white text-sm">
        Made with <span style={{ color: 'red' }}>❤</span> by {firstname} {name} - ©{year} {firstname} {name}. Tous droits réservés.
      </p>
    </div>
  );
};

export default Copyright;

