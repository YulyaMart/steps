import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';

export default function Form({ onAdd }) {
  const [form, setForm] = useState({ date: "", distance: "" });

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const training = {
      id: nanoid(),
      date: form.date,
      distance: Number(form.distance),
    };

    onAdd(training);
    setForm({ date: "", distance: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-elem">
        <label className="input-description" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          className="form-input date-input"
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-elem">
        <label className="input-description" htmlFor="distance">
          Пройдено км
        </label>
        <input 
          placeholder="Добавьте расстояние"
          className="form-input"
          type="number"
          id="distance"
          name="distance"
          step="0.1"
          value={form.distance}
          onChange={handleChange}
          required
        />
      </div>
      <button className="btn add-btn" type="submit">
        OК
      </button>
    </form>
  );
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
