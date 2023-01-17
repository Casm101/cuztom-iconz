import "./styles.scss";

export const SiteHeader = ({}) => {
	return (
    <header className="site-header">
      <div className="header-top">
        <span className="logo">Cuztom Icons</span>
        <span className="social">Share</span>
      </div>
      <div className="header-main">
        <div className="main-info">
          <span>123 icons</span>
          <span>·</span>
          <span>OGL license</span>
          <span>·</span>
          <span>
            Made 4 <i>React</i>
          </span>
        </div>
        <div className="main-title">
          Beautiful hand-crafted SVG icons, by the makers of SafeGuru.
        </div>
        <div className="main-docs">
          <span>Documentation</span>
          <span>Get cuztom-iconz</span>
        </div>
      </div>
    </header>
  );
}