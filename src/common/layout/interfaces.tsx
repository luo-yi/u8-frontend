import React from 'react';

export interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
  routes: {
    path: string,
    name: string,
  }[];
}
