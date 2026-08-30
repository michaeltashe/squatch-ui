import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const getVariantStyles = (variant: string): React.CSSProperties => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#2563eb',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#4b5563',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#374151',
      border: '2px solid #d1d5db',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
    },
  };

  return { ...baseStyles, ...variantStyles[variant] };
};

const getSizeStyles = (size: string): React.CSSProperties => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: '6px 12px',
      fontSize: '14px',
    },
    md: {
      padding: '8px 16px',
      fontSize: '16px',
    },
    lg: {
      padding: '12px 24px',
      fontSize: '18px',
    },
  };

  return sizeStyles[size];
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', style, className, children, ...props }, ref) => {
    const combinedStyle: React.CSSProperties = {
      ...getVariantStyles(variant),
      ...getSizeStyles(size),
      ...style,
    };

    return (
      <button
        ref={ref}
        style={combinedStyle}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
