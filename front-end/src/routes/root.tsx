export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Etude de finales</h1>
          <div>
            {
              /*
              <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form> 
            <form method="post">
              <button type="submit">New</button>
            </form>*/
            }
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/pawns`}>Les pions.</a>
              </li>

              <li>
                <a href={`/knights-vs-pawns`}>Cavaliers contre pions.</a>
              </li>

              <li>
                <a href={`/knights`}>Les cavaliers.</a>
              </li>

              <li>
                <a href={`/bishop-vs-pawns`}>Fou contre pions.</a>
              </li>


            </ul>
          </nav>
        </div>
        <div></div>
      </>
    );
  }