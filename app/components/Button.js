import "./Button.scss";

export default function Button({ children, className, ...props }) {

  const classes = className ?  'button ' + className : 'button';

  return <button className={classes}  {...props}>{children}</button>;
}
