import KeyDataCard from './components/KeyDataCard.jsx';

export default function App() {
  const demoData = [
    { label: 'Calories', value: 1930, unit: 'kCal', icon: '🔥', bgColor: '#FFE6E6' },
    { label: 'Protéines', value: 155, unit: 'g', icon: '🍗', bgColor: '#E6F4FF' },
    { label: 'Glucides', value: 290, unit: 'g', icon: '🍎', bgColor: '#FFF9DB' },
    { label: 'Lipides', value: 50, unit: 'g', icon: '🍔', bgColor: '#FFEAF4' },
  ];

  return (
    <div className="demo-container">
      {demoData.map((card) => (
        <KeyDataCard
          key={card.label}
          label={card.label}
          value={card.value}
          unit={card.unit}
          icon={card.icon}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
}
