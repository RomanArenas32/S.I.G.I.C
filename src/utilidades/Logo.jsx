import logoIC from '../assets/logo-sin-fondo.png';

export const Logo = ({ estilos }) => {
    return (
        <img src={logoIC} alt="logo" className={estilos} />
    )
}
