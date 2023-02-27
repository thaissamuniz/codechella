import MenuItem from "../MenuItem"

const Menu = () => {
    const menuItens = ['A expêriencia', 'Mapa de Setores', 'Informações', 'Ingresso']
    return (
        menuItens.map(item => <ul><MenuItem itemName={item} /></ul>)
    )
}

export default Menu