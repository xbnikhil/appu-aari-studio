/**
 * Reusable button component.
 * Two variants: primary (charcoal) and secondary (outline).
 * Sharp corners (0px border radius), flat minimal style.
 */

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
