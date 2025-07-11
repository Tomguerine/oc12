// Mapping between nutritional keys and their display information.
// The icons are simple emojis so the component works without any
// additional dependencies or assets.
export const KEY_INFO = {
  calorieCount: {
    label: 'Calories',
    unit: 'kCal',
    icon: '🔥',
  },
  proteinCount: {
    label: 'Protéines',
    unit: 'g',
    icon: '🥚',
  },
  carbohydrateCount: {
    label: 'Glucides',
    unit: 'g',
    icon: '🍞',
  },
  lipidCount: {
    label: 'Lipides',
    unit: 'g',
    icon: '🧈',
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
export default function KeyDataCard({ label, value, unit, icon }) {
  return (
    <div
      style={{
        border: '1px solid #eee',
        padding: '1rem',
        margin: '0.5rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{icon}</span>
      <div>
        <strong>{value}
          {unit}
        </strong>
        <p>{label}</p>
      </div>
    </div>
  );
}
