import logoIC from '../assets/logo-sin-fondo.png';

export const Logo = ({ estilos }) => {
    const { width } = estilos;
    return (
        <img src={logoIC} alt="logo" className={width} />
    )
}
