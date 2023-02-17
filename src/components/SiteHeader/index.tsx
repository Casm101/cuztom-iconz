import "./styles.scss";

export const SiteHeader = ({ icons }: any ) => {
	return (
    <header className="site-header">
      <div className="content">
        <div className="header-top">
          <span className="logo">Cuztom Icons</span>
          <span className="social">Share</span>
        </div>
        <div className="header-main">
          <div className="main-info">
            <span>{icons.length} icons</span>
            <span>·</span>
            <span>OGL license</span>
            <span>·</span>
            <span>
              Made 4 <i>React</i>
            </span>
          </div>
          <div className="main-title">
            <h1>
              Beautiful hand-crafted icon library, by the coders of Fathom3Dev.
            </h1>
          </div>
          <div className="main-docs">
						<span><a href="https://github.com/Casm101/cuztom-iconz#readme">Documentation</a></span>
						<span><a href="https://github.com/Casm101/cuztom-iconz">Get cuztom-iconz</a></span>
          </div>
        </div>
      </div>
    </header>
  );
}