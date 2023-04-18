import darkThemeButton from '../assets/theme-icon/dark.svg';
import lightThemeButton from '../assets/theme-icon/light.svg';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { themeContext } from '../App';

// 헤더, 네비
function Header() {
  const { theme, setTheme } = useContext(themeContext);
  const dispatch = useDispatch();

  function changeTheme(): void {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        break;
    }
  }

  // 장바구니 물품 갯수 체크
  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount,
  );

  return (
    <nav className="navbar sticky top-0 z-10" data-theme={theme}>
      {/* 왼쪽 상단 네비바 */}
      <div className="dropdown md:hidden" id="category_drop-down">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/fashion">패션</Link>
          </li>
          <li>
            <Link to="/accessory">액세서리</Link>
          </li>
          <li>
            <Link to="/digital">디지털</Link>
          </li>
        </ul>
      </div>
      {/* 로고 */}
      <div className="flex-none" id="logo">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          React Shop
        </Link>
      </div>
      {/* 카테고리 메뉴 */}
      <div className="flex-none hidden md:block" id="category">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/fashion" className="btn btn-ghost rounded-md">
              패션
            </Link>
          </li>
          <li>
            <Link to="/accessory" className="btn btn-ghost rounded-md">
              액세서리
            </Link>
          </li>
          <li>
            <Link to="/digital" className="btn btn-ghost rounded-md">
              디지털
            </Link>
          </li>
        </ul>
      </div>
      {/* 빈 공간 */}
      <div className="grow" id="space"></div>
      {/* 테마 선택 */}
      <div className="mr-5 cursor-pointer flex-none" id="theme">
        {theme === 'light' ? (
          <img
            src={darkThemeButton}
            className="swap-off w-5 h-5"
            alt="다크모드"
            onClick={changeTheme}
          />
        ) : (
          <img
            src={lightThemeButton}
            className="swap-on w-5 h-5"
            alt="라이트모드"
            onClick={changeTheme}
          />
        )}
      </div>
      {/* 검색 */}
      <Search />
      {/* 장바구니 */}
      <label tabIndex={0} className="btn btn-ghost btn-circle" id="cart">
        <Link to="/cart" className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
            {cartItemsCount}
          </span>
        </Link>
      </label>
    </nav>
  );
}

export default Header;
