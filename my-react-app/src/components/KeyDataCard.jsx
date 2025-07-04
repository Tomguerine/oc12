export default function KeyDataCard({ label, value }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', margin: '0.5rem' }}>
      <strong>{value}</strong>
      <p>{label}</p>
    </div>
  );
}
