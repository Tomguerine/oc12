import './Header.css';

export default function Header({ firstName }) {
  return (
    <header className="header">
      <h1>SportSee</h1>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
      <div className="welcome">
        <h2>Bonjour {firstName}</h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </header>
  );
}
