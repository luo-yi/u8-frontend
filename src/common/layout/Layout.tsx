import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutProps } from './interfaces';

const styles = {
  link: {
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0px 8px',
    padding: '0px 12px',
    background: 'white',
    border: '1px solid darkgrey',
  },
};

function Layout(props: LayoutProps) {
  const { children, routes } = props;

  return (
    <>
      <div className="border-bottom">
        {routes.map(({ path, name }) => (
          <Link style={styles.link} to={path}>{name}</Link>
        ))}
      </div>

      {children}
    </>
  );
}

export default Layout;
