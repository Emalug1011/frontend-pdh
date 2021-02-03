import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    main: [
      {
        state: '/dashboard',
        short_label: 'D',
        name: 'dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: '/user/',
        short_label: 'B',
        name: 'Gestión de usuarios',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'list-user',
            name: 'Mantenimiento de Usuarios'
          },
          {
            state: 'maintance-profile',
            name: 'Mantenimiento de Perfiles'
          }
        ]
      },
  //     {
  //       state: '/notifications',
  //       short_label: 'n',
  //       name: 'Notifications',
  //       type: 'link',
  //       icon: 'ti-crown'
  //     },
  //     ],
  //     },
  //     {
  //       main: [
  //         {
  //           state: '/bootstrap-table',
  //           short_label: 'B',
  //           name: 'Bootstrap Table',
  //           type: 'link',
  //           icon: 'ti-receipt'
  //         }
  //       ]
  //     },
  //     {
  //       main: [
  //         {
  //           state: '/map',
  //           short_label: 'M',
  //           name: 'Maps',
  //           type: 'link',
  //           icon: 'ti-map-alt'
  //         },
  //         {
  //           state: '/authentication',
  //           short_label: 'A',
  //           name: 'Authentication',
  //           type: 'sub',
  //           icon: 'ti-id-badge',
  //           children: [
  //             {
  //               state: '/login',
  //               type: 'link',
  //               name: 'Login',
  //               target: false
  //             }, {
  //               state: '/registration',
  //               type: 'link',
  //               name: 'Registration',
  //               target: false
  //             }
  //           ]
  //         },
  //         {
  //           state: '/user/profile',
  //           short_label: 'U',
  //           name: 'User Profile',
  //           type: 'link',
  //           icon: 'ti-user'
  //         }
  //       ]
  //     },
  //     {
  //       main: [
  //         {
  //           state: '/simple-page',
  //           short_label: 'S',
  //           name: 'Simple Page',
  //           type: 'link',
  //           icon: 'ti-layout-sidebar-left'
  //         }
  //   ]
  // },
  // {
  //   main: [
  //     {
  //       state: '/user/list-user',
  //       short_label: "A",
  //       name: 'Usuarios',
  //       type: 'link',
  //       icon: 'ti-user'
  //     }
  //   ]
  // },  {
  //   main: [
  //     {
  //       state: '/maintance-profile',
  //       short_label: "M",
  //       name: 'Mantenimiento de perfiles',
  //       type: 'link',
  //       icon: 'ti-user'
  //     }
    ]
  },
  // {
  //   main: [
  //     {
  //       state: '/bootstrap-table',
  //       short_label: 'B',
  //       name: 'Bootstrap Table',
  //       type: 'link',
  //       icon: 'ti-receipt'
  //     }
  //   ]
  // },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
