import "./styles.scss";

export const SiteHeader = ({}) => {
	return (
    <header className="site-header">
      <div className="content">
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
            <h1>
              Beautiful hand-crafted SVG icons, by the coders of SafeGuru.
            </h1>
          </div>
          <div className="main-docs">
            <span>Documentation</span>
            <span>Get cuztom-iconz</span>
          </div>
        </div>
      </div>
    </header>
  );
}