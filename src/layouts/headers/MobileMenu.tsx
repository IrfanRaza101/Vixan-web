'use client'

import Link from 'next/link';
import React from 'react';



interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[]
}


const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/marketing-agency",
    has_dropdown: false,
    sub_menu: [],
    
  },
  {
    id: 2,
    title: "About",
    link: '/about',
    has_dropdown: false
  },
  
  {
    id: 4,
    title: "Services",
    link: "/service",
    has_dropdown: false,
    
  },
  {
    id: 5,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
    
  },
  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
    
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  }


]


const MobileMenu = ({active, navTitle, openMobileMenu} : any) => {

  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${navTitle === menu.title ? "active" : ""}`}>
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
              <ul className="cs_mega_wrapper" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                {menu.sub_menu?.map((subMenu) => (
                  <li key={subMenu.id}>
                    <Link href={subMenu.link}>{subMenu.title}</Link>
                  </li>
                ))}
              </ul>
              <span onClick={() => openMobileMenu(menu.title)} className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? "active" : ""}`}></span>               
              </>
            )}
          </li>
        ))} 
      </ul>

       
    </>
  );
};

export default MobileMenu;
