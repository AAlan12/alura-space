import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'

export function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo do Alura Space" />
            <div>
                <input type="text" placeholder="O que você procura?" />
                <img src={Search} alt="Ícone de lupa" />
            </div>
        </header>
    )
}