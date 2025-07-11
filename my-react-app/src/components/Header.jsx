export default function Header({ firstName }) {
  return (
    <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
      <h1>SportSee</h1>
      <h2>Bonjour {firstName}</h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}
