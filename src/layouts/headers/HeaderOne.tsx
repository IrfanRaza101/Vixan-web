'use client'
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import Logo_white from "@/assets/img/Logo_white.png";

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

const HeaderOne = () => {
	const { sticky } = UseSticky()
	const [active, setActive] = useState(false);
	const [navTitle, setNavTitle] = useState("");
	const [lastScrollTop, setLastScrollTop] = useState(0);

	const handleActive = () => {
		setActive((prev) => !prev)
	}

	const closeSideMenu = () => {
		setActive(false)
	}

	const openMobileMenu = (menu: string) => {
		if (navTitle === menu) {
			setNavTitle("");
		} else {
			setNavTitle(menu);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".cs_sticky_header") as HTMLElement | null;
			if (!header) {
				return;
			}

			const headerHeight = header.offsetHeight + 30;
			const windowTop = window.pageYOffset || document.documentElement.scrollTop;

			if (windowTop >= headerHeight) {
				header.classList.add("cs_gescout_sticky");
			} else {
				header.classList.remove("cs_gescout_sticky");
				header.classList.remove("cs_gescout_show");
			}

			if (header.classList.contains("cs_gescout_sticky")) {
				if (windowTop < lastScrollTop) {
					header.classList.add("cs_gescout_show");
				} else {
					header.classList.remove("cs_gescout_show");
				}
			}

			setLastScrollTop(windowTop);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollTop]);

	return (
		<>
			<header className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${sticky ? "cs_gescout_sticky" : ""}`}>
				<div className="cs_main_header" suppressHydrationWarning>
					<div className="container">
						<div className="cs_main_header_in">
							<div className="cs_main_header_left">
								<Link className="cs_site_branding logo-dark" href="/marketing-agency">
									<Image src={logo} alt="Logo" />
								</Link>
								<Link className="cs_site_branding logo-white" href="/">
									<Image src={Logo_white} alt="Logo" />
								</Link>
							</div>
							<div className="cs_main_header_right">
								<div className="cs_nav cs_medium">
									<MobileMenu active={active} navTitle={navTitle} openMobileMenu={openMobileMenu} />
									<span className={`cs_munu_toggle ${active ? "cs_toggle_active" : ""}`} onClick={handleActive}><span></span></span>
								</div>
								<div className="cs_toolbox">
									<span
										className="cs_icon_btn"
										onClick={handleActive}
										onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleActive()}
										role="button"
										tabIndex={0}
									>
										<span className="cs_icon_btn_in">
											<span></span>
											<span></span>
											<span></span>
											<span></span>
										</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className={`cs_side_header ${active ? "active" : ""}`}>
				<button className="cs_close" onClick={closeSideMenu}></button>
				<div className="cs_side_header_overlay" onClick={closeSideMenu}></div>
				<div className="cs_side_header_in">
					<Link className="cs_site_branding" href="/">
						<Image src={Logo_white} alt="Logo" />
					</Link>
					<div className="row align-items-end">
						<div className="col-12">
							<div className="cs_box_one">
								<div className="cs_nav_black_section cs_font_changes">
									<ul>
										{menu_data.map((item, i) => (
											<li key={i} className={`menu-item-has-black-section cs_style_1 ${navTitle === item.title ? "active" : ""}`}>
												<Link href={item.link}>{item.title}</Link>
												{item.has_dropdown && (
													<>
														<ul style={{ display: navTitle === item.title ? "block" : "none" }}>
															{item?.sub_menu?.map((sub_item, index) => (
																<li key={index}>
																	<Link href={sub_item.link}>{sub_item.title}</Link>
																</li>
															))}
														</ul>
														<span onClick={() => openMobileMenu(item.title)} className={`cs_munu_dropdown_toggle_1 ${navTitle === item.title ? "active" : ""}`}></span>
													</>
												)}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderOne;
