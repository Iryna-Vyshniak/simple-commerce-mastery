const Container = ({ children, className }) => {
  const containerClasses = `max-container ${className || ''}`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
