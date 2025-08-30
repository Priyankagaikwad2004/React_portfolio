const SectionTitle = ({ children }) => {
  return (
    <h2 className="section-title">
      {children}
      <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
    </h2>
  );
};

export default SectionTitle;