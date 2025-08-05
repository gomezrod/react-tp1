import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
    return (
        <>
        <NavBar className={'navegacion'} title={'Lashee'}/>
        <CartWidget/>
        <ItemListContainer greeting={'¡Bienvenido a Lashee!'}/>
        </>
    )
}

export default App
