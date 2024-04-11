import React from "react";
import PropTypes from "prop-types";

export default function Table({ walking, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {walking.map((o) => (
          <tr key={o.id}>
            <td>{new Date(o.date).toLocaleDateString()}</td>
            <td>{o.distance}</td>
            <td>
              <button className="btn delete-btn" onClick={() => onDelete(o.id)}>
              ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  walking: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
