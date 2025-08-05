import Input from './Input';
import Button from './Button';
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className={props.className}>
      <h1>My Navbar</h1>
      <Input type="text" placeholder="Search..." />
      <Button onClick={() => alert('Button clicked!')} children="Buscar" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}