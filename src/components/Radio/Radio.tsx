import React from 'react';

export interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | undefined>(undefined);

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  children,
  style,
  className,
}) => {
  const groupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    ...style,
  };

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div style={groupStyle} className={className} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export interface RadioItemProps {
  value: string;
  label: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const RadioItem: React.FC<RadioItemProps> = ({ value, label, disabled = false, style, className }) => {
  const context = React.useContext(RadioGroupContext);
  
  if (!context) {
    throw new Error('RadioItem must be used within a RadioGroup');
  }

  const { name, value: selectedValue, onChange } = context;
  const isChecked = value === selectedValue;

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const inputStyle: React.CSSProperties = {
    width: '16px',
    height: '16px',
    accentColor: '#2563eb',
  };

  const textStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#374151',
  };

  return (
    <label style={labelStyle} className={className}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={inputStyle}
      />
      <span style={textStyle}>{label}</span>
    </label>
  );
};
