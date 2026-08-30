import React from 'react';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, helperText, fullWidth = false, style, className, id, ...props }, ref) => {
    const fieldId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${fieldId}-error` : undefined;
    const helperId = helperText ? `${fieldId}-helper` : undefined;

    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: fullWidth ? '100%' : 'auto',
    };

    const labelStyle: React.CSSProperties = {
      fontSize: '14px',
      fontWeight: 500,
      color: '#374151',
    };

    const inputStyle: React.CSSProperties = {
      padding: '8px 12px',
      border: `2px solid ${error ? '#ef4444' : '#d1d5db'}`,
      borderRadius: '6px',
      fontSize: '14px',
      width: fullWidth ? '100%' : 'auto',
      outline: 'none',
      transition: 'border-color 0.2s',
      cursor: props.disabled ? 'not-allowed' : 'text',
      opacity: props.disabled ? 0.5 : 1,
      ...style,
    };

    const errorStyle: React.CSSProperties = {
      fontSize: '14px',
      color: '#dc2626',
    };

    const helperStyle: React.CSSProperties = {
      fontSize: '14px',
      color: '#6b7280',
    };

    return (
      <div style={containerStyle} className={className}>
        {label && (
          <label
            htmlFor={fieldId}
            style={labelStyle}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={cn(errorId, helperId)}
          style={inputStyle}
          {...props}
        />
        {error && (
          <p id={errorId} style={errorStyle}>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} style={helperStyle}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
