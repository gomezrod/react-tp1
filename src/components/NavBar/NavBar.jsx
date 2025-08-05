import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './NavBar.css'

export default function Navbar(props) {
  return (
    <nav className={props.className}>
        <div className='navTop'>
            <h1 className='logo'>{props.title}</h1>
            <Input type="text" placeholder="Buscar..." />
              <Button className='boton-buscar' onClick={() => alert('Búsqueda realizada')} children="🔎" />
        </div>
        <div className='navBottom'>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </nav>
  );
}