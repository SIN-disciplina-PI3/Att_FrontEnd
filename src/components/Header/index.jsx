import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Por Hannah Sales</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/ods">ODS</Link>
                <Link to="/minhapagina">Minha pagina</Link>
            </nav>
        </header>
    )    
}

export default Header