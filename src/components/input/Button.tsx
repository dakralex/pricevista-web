import {MouseEventHandler, ReactElement} from 'react';
import './Button.css';

type ButtonProps = {
  onClick?: MouseEventHandler;
  children: ReactElement | string;
}

export const Button = ({
  onClick,
  children,
}: ButtonProps) => {
  return <button className="pv-button" onClick={onClick}>
    {children}
  </button>;
};