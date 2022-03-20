import './Button.css'

const Button = ({ children, ...rest}) => (
  <button className="action-button" {...rest}>
    {children}
  </button>
)

export default Button