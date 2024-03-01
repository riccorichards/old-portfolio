import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <h2>{"< RiccoRichards />"}</h2>
        <div className="logo-underline" />
        <p>
          n+<span style={{ color: "aqua" }}>1</span>
        </p>
      </div>
    </div>
  );
};

export default Logo;
