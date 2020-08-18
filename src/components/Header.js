import React from 'react'
import {NavLink, BrowserRouter} from 'react-router-dom';

const Header = (props) => {
    return (
      <div>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="!#">
              Movies
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="!#">
                    <NavLink to="/latestmovies">Latest</NavLink>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="!#"></a>
                  <NavLink to="/nowplayingmovies">Now Playing</NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="!#">
                    <NavLink to="/upcomingmovies">Upcoming</NavLink>
                  </a>
                </li>
              </ul>
              <form
                class="form-inline my-2 my-lg-0"
                onSubmit={props.submitHandler}
              >
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name={props.searchTag}
                  onChange={props.changeHandler}
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </BrowserRouter>
      </div>
    );
}

export default Header;