import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '63b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '595'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '8a1'),
            routes: [
              {
                path: '/Contact-Us',
                component: ComponentCreator('/Contact-Us', 'd05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Developers/Custom-Tools',
                component: ComponentCreator('/Developers/Custom-Tools', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Developers/Quick-Start',
                component: ComponentCreator('/Developers/Quick-Start', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Users/Onboarding',
                component: ComponentCreator('/Users/Onboarding', '855'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'b6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
