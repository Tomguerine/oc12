// Mapping between nutritional keys and their display information.
// The icons are simple emojis so the component works without any
// additional dependencies or assets.
import './KeyDataCard.css';

export const KEY_INFO = {
  calorieCount: {
    label: 'Calories',
    unit: 'kCal',
    icon: '🔥',
    bgColor: '#FFE6E6',
  },
  proteinCount: {
    label: 'Protéines',
    unit: 'g',
    icon: '🍗',
    bgColor: '#E6F4FF',
  },
  carbohydrateCount: {
    label: 'Glucides',
    unit: 'g',
    icon: '🍎',
    bgColor: '#FFF9DB',
  },
  lipidCount: {
    label: 'Lipides',
    unit: 'g',
    icon: '🍔',
    bgColor: '#FFEAF4',
  },
};

import React from 'react';
import './KeyDataCard.css';

/**
 * Composant carte nutritionnelle avec icône et fond coloré.
 * @param {string} label - Libellé (Calories, Protéines, etc.)
 * @param {string|number} value - Valeur numérique affichée
 * @param {string} unit - Unité (g, kCal)
 * @param {string} icon - Emoji à afficher
 * @param {string} bgColor - Couleur de fond du carré icône
 */
export default function KeyDataCard({ label, value, unit, icon, bgColor }) {
  return (
    <div className="key-data-card">
<<<<<<< HEAD
      <div className="key-data-card__icon" style={{ backgroundColor: bgColor }}>
        <span className="key-data-card__emoji">{icon}</span>
      </div>
      <div className="key-data-card__content">
        <p className="key-data-card__value">{value}{unit}</p>
        <p className="key-data-card__label">{label}</p>
=======
      <div className="key-data-card-icon" style={{ backgroundColor: bgColor }}>
        <span>{icon}</span>
      </div>
      <div>
        <div className="key-data-card-value">
          {value}
          {unit}
        </div>
        <div className="key-data-card-label">{label}</div>
>>>>>>> 9eaeadd35b6767896a9c07538ba783c8aff27289
      </div>
    </div>
  );
}
