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

/**
 * Display a user key nutritional data card.
 *
 * @param {object} props
 * @param {string} props.label - Human friendly label
 * @param {number|string} props.value - Value to display
 * @param {string} [props.unit] - Unit appended to the value
 * @param {string} [props.icon] - Icon representing the data
 */
export default function KeyDataCard({ label, value, unit, icon, bgColor }) {
  return (
    <div className="key-data-card">
      <div className="key-data-card-icon" style={{ backgroundColor: bgColor }}>
        <span>{icon}</span>
      </div>
      <div>
        <div className="key-data-card-value">
          {value}
          {unit}
        </div>
        <div className="key-data-card-label">{label}</div>
      </div>
    </div>
  );
}
