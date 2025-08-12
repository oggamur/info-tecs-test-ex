import './loading-screen.css';

interface LoadingScreenProps {
  size?: number;
  color?: string;
  bgColor?: string;
}

const LoadingScreen = ({
  size = 40,
  color = '#3b82f6',
  bgColor = '#e5e7eb',
}: LoadingScreenProps) => {
  const borderWidth = size * 0.1;

  const spinnerStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${borderWidth}px solid ${bgColor}`,
    borderTop: `${borderWidth}px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="loading-screen">
      <div className="loading-screen__spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default LoadingScreen;
