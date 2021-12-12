import React from 'react';

export interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
  routes: {
    path: string,
    name: string,
  }[];
}

export interface SidebarProps {
  routes: {
    path: string,
    name: string,
  }[];
  dark: boolean;
  onDarkChange: (e: any) => void;
};
