/* eslint-disable jsx-a11y/no-autofocus */

import React from 'react';

import { NavLink } from 'react-router-dom';
import { bool } from 'prop-types';
// import Breadcrumbs from './Breadcrumbs';
import Navigation from './Navigation';
import Routes from './Routes';
import Icon from '../Icon';
import logo from '../../images/logo.svg';

import styles from './App.scss';

export default function App(props) {
  return (
    <div className={styles.app}>
      <div className={styles.menu}>
        <header>
          <NavLink exact to="/">
            <img src={logo} alt="nOS Logo" width="36" height="36" />
          </NavLink>
        </header>
        <Navigation authenticated={props.authenticated} />
      </div>
      <main className={styles.main}>
        <div className={styles.addressBar}>
          <input type="text" placeholder="Search or enter address" autoFocus />
          <button>
            <Icon name="unfavorite" />
          </button>
          <button>
            <Icon name="settings" />
          </button>
        </div>
        {/* <Breadcrumbs /> */}
        <div className={styles.content}>
          <Routes />
        </div>
        <footer className={styles.footer}>
          <div className={styles.status}>
            This is some status text, maybe it only appears if there&rsquo;s something to show?
          </div>
        </footer>
      </main>
    </div>
  );
}

App.displayName = 'App';

App.propTypes = {
  authenticated: bool
};

App.defaultProps = {
  authenticated: false
};