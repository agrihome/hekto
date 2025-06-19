import "./Button.scss";

export default function Button({ children, className }) {

  const classes = className ?  'button ' + className : 'button';

  return <button className={classes}>{children}</button>;
}
