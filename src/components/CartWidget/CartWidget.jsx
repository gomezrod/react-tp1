import './CartWidget.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';

export default function CartWidget() {

      const [count, setCount] = useState(0)
    
      const clickUp = () => {
        setCount(count + 1)
      }
    
      const clickDown = () => {
        setCount(count<=0? 0 : count - 1)
      }
    
    return (
        <div className="cart-widget">
            <span>🛒</span>
            <span>{count}</span>
            <Button className='boton-counter' onClick={clickDown}
                  children="-"
                />
            
            <Button className='boton-counter' onClick={clickUp}
                    children="+"
                />
        </div>
    );
}