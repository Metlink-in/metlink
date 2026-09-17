export const inp: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  padding: '10px 14px',
  color: '#fff',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

export const textarea: React.CSSProperties = {
  ...inp,
  resize: 'vertical',
  minHeight: 80,
};

export const label: React.CSSProperties = {
  color: 'rgba(255,255,255,0.55)',
  fontSize: 12,
  fontWeight: 500,
  display: 'block',
  marginBottom: 5,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

export const card: React.CSSProperties = {
  background: '#0D1B2E',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 14,
  padding: '24px',
  marginTop: 20,
};

export const row: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  marginBottom: 16,
};

export const field: React.CSSProperties = {
  marginBottom: 16,
};
