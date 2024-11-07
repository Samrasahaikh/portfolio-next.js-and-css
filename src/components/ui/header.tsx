import React from "react";
import Link from "next/link";
import "../style/header.css"
import { IoMenu } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  export default function Header(){
    return(
        <div>
            <header className="nav_container">
            <div>
                <h2 className="logo"><span>My</span> Portfolio</h2>
            </div>

            <div className="nav__button">
                <ul className="links">
                    <li className="nav__list">
                        <Link className="nav__link" href="/">Home</Link>
                        <Link className="nav__link" href="/about">About</Link>
                        <Link className="nav__link" href="/skills">Skills</Link>
                        <Link className="nav__link" href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <Sheet>
  <SheetTrigger className="humburg">
  <IoMenu  className="humburg__menu"/>
  </SheetTrigger>
  <SheetContent className="sheet__contant">
    <ul className="hum__list">
        <li className="hum__link">
            <Link href="/">Home</Link>
        </li>
        <li className="hum__link">
            <Link  href="/about">About</Link>
        </li>
        <li className="hum__link">
            <Link href="/skills">Skills</Link>
        </li>
        <li className="hum__link">
            <Link href="/contact">Contact</Link>
        </li>
    </ul>

  </SheetContent>
</Sheet>

            </header>
        </div>
    )
  }
  