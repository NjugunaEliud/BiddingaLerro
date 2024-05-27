"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  scrollY: 0,
  sidebar: false,
  modalOpen: false,
  rightSidebar: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu: "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "SET_SCROLL_Y":
      return {
        ...state,
        scrollY: action.payload,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case "TOGGLE_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    case "RIGHT_SIDEBAR":
      return { ...state, rightSidebar: !state.rightSidebar };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}

function Header2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  function toggleModal() {
    dispatch({ type: "TOGGLE_MODAL" });
  }
  function handleRightSidebar() {
    dispatch({ type: "RIGHT_SIDEBAR" });
  }

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };

  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "SET_SCROLL_Y", payload: scrollY });
  };

  const handleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>

      <div className={`mobile-search ${state.modalOpen ? "slide" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn" onClick={toggleModal}>
                {/* <i class="bi bi-search me-4"></i> */}
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={state.scrollY > 120 ? "sticky-header" : ""}>
        <div className="header-area header-style-one px-md-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-2 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link legacyBehavior href="/">
                    <a><img src="assets/images/logo.png" alt="Bidleo" /></a>
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <ul className="nav-actions nav-inner-actions d-flex d-xl-none">
                      <li className="search-btn" onClick={toggleModal}>
                        <i className="bi bi-search" />
                      </li>
                    </ul>
                    <div className="mobile-menu d-flex ">
                      <div
                        onClick={handleSidebar}
                        className={
                          state.sidebar
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <nav
                  className={state.sidebar ? "main-nav slidenav" : "main-nav"}
                >
                  <div className="inner-logo d-xl-none text-center mt-4">
                    <a href="#">
                      <img src="assets/images/logo-dark.png" alt="" />
                    </a>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <a href="#">Home</a>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Auction</a>
                    </li>
                    <li className="has-child-menu">
                      <a href="#">Pages</a>
                      <i
                        className="fl flaticon-plus"
                        onClick={() => toggleMenu("pages")}
                      >
                        +
                      </i>

                      <ul
                        className={
                          state.activeMenu === "pages"
                            ? "sub-menu d-block"
                            : "sub-menu"
                        }
                      >
                        <li>
                          <Link legacyBehavior href="/about"><a>about</a></Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/winner"><a>winner</a></Link>
                        </li>
                        <li>
                          <Link legacyBehavior href="/faq"><a>faq</a></Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact"><a>contact </a></Link>
                    </li>
                  </ul>
                  <div className="contact-mail inner-contact-mail mt-5 d-block d-xl-none">
                    <span>Message Us</span>
                    <a href="mailto:support@example.com">support@bidleo.africa</a>
                  </div>
                </nav>
              </div>
              <div className="col-xl-4 d-xl-flex align-items-center justify-content-end d-none">
                <div className="nav-right d-flex align-items-center">
                  <form
                    action="#"
                    id="header_searchbar"
                    className="d-xxl-block d-none"
                  >
                    <div className="nav-searchbar">
                      <input type="text" placeholder="Search your items" />
                    </div>
                  </form>
                  <div className="nav-actions d-flex align-items-center">
                    <ul className="d-flex">
                      <li className="search-btn d-block d-xxl-none">
                        <i className="bi bi-search" />
                      </li>
                      <li />
                    </ul>
                    <div className="contact-mail">
                      <span>Message Us</span>
                      <a href="mailto:support@bidleo.africa">
                        support@bidleo.africa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header2;
