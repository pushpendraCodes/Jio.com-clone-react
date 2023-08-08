import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Accordion from "accordion-js";

import "accordion-js/dist/accordion.min.css";
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = [
  "mobile",
  "True 5g",
  "Jio Fiber",
  "Bussiness",
  "Shop",
  "Apps",
  "Support",
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const navigation = [
    {
      name: "mobile",
      href: "#",
      current: false,
      submenu: ["offering", "support", "5g", "Bussiness", "Shop"],
    },
    { name: "True 5g", new: true, href: "#", current: false },
    {
      name: "Jio Fibe",
      href: "#",
      current: false,
      submenu: ["offering", "support", "5g", "Bussiness", "Shop"],
    },
    {
      name: "Bussiness",
      href: "#",
      current: false,
      submenu: ["offering", "support", "5g", "Bussiness", "Shop"],
    },
    {
      name: "Shop",
      href: "#",
      current: false,
    },
    {
      name: "Apps",
      href: "#",
      current: false,
      submenu: ["offering", "support", "5g", "Bussiness", "Shop"],
    },
    {
      name: "Support",
      href: "#",
      current: false,
      submenu: ["offering", "support", "5g", "Bussiness", "Shop"],
    },
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const Open = (index) => {
    if (index === 1) {
      setIsOpen1(true);
    } else if (index === 2) {
      setIsOpen2(true);
    } else if (index === 3) {
      setIsOpen3(true);
    } else if (index === 4) {
      setIsOpen4(true);
    }
  };
  const Close = (index) => {
    if (index === 1) {
      setIsOpen1(false);
    } else if (index === 2) {
      setIsOpen2(false);
    } else if (index === 3) {
      setIsOpen3(false);
    } else if (index === 4) {
      setIsOpen4(false);
    }
  };



  return (
    <>
      {/* <div className="hidden">
        <div className="hidden bg-color-primary  p-4 text-white items-center lg:flex justify-between">
          <ul className=" hidden lg:flex lg:flex-row lg:w-3/5 justify-between ml-5 ">
            <li className="   text-base font-bold items-center bg-color-secondary rounded-full px-2 py-1">
              Jio
            </li>
            {Nav.map((item, i) => {
              return (
                <>
                  <li className="text-base cursor-pointer font-bold hover:text-gray-400">
                    {i === 1 && (
                      <p className="text-xs  bg-red-500 rounded-full items-center text-center absolute top-1 px-2 ">
                        New
                      </p>
                    )}{" "}
                    {item}
                  </li>
                </>
              );
            })}
          </ul>

          <ul className="flex justify-center w-2/5 gap-10">
            <li className="flex  items-center bg-color-secondary rounded-3xl p-2 ">
              <AiOutlineSearch size={20} className="mx-2" />
              <input
                className="outline-none  focus:outline-none bg-color-secondary placeholder:text-sm placeholder:font-medium  "
                type="text"
                placeholder="search"
              />
            </li>
            <li className="bg-white rounded-full cursor-pointer p-3 items-center">
              <FaUserAlt size={16} color="darkblue" />
            </li>
          </ul>
        </div>

        <div className=" md:hidden lg:hidden block ">
          <ul className="flex gap-3 justify-between items-center bg-color-primary p-3 ">
            <li>
              <GiHamburgerMenu />
            </li>
            <li className="   text-white font-bold items-center bg-color-secondary rounded-full px-2 py-1">
              Jio
            </li>
            <li className="  flex items-center text-white bg-color-secondary rounded-3xl p-1 ">
              <AiOutlineSearch color="white" size={20} className="mx-3" />
              <input
                className="outline-none w-32  focus:outline-none bg-color-secondary placeholder:text-sm placeholder:font-medium  "
                type="text"
                placeholder="search"
              />
            </li>
            <li className="bg-white rounded-full cursor-pointer p-3 items-center">
              <FaUserAlt size={16} color="darkblue" />
            </li>
          </ul>
        </div>
      </div> */}

      <div  >
        <Disclosure id="navbar" as="nav" className="bg-color-primary  top-0 z-50">
          {({ open }) => (
            <>
              <div  className="mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute  inset-y-0 left-0 flex justify-evenly items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2   hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                    <div className="   text-white font-bold items-center bg-color-secondary rounded-full mx-3 px-2 py-1">
                      Jio
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="   text-white font-bold items-center bg-color-secondary rounded-full mx-3 px-2 py-1">
                      Jio
                    </div>
                    <div className="hidden   sm:ml-6 sm:block">
                      <div className="flex space-x-4 relative">
                        {navigation.map((item) => (
                          <>
                            {item.new && (
                              <p className="text-xs text-white bg-red-500 rounded-full items-center text-center absolute  left-16 -top-3 px-2 ">
                                New
                              </p>
                            )}

                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? " text-white "
                                  : "text-white text-sm font-bold hover:text-gray-400",
                                "rounded-md px-2 py-1 "
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex justify-between items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="  flex items-center text-white bg-color-secondary rounded-3xl p-1 ">
                      <AiOutlineSearch
                        color="white"
                        size={20}
                        className="mx-3"
                      />
                      <input
                        className="outline-none w-32  focus:outline-none bg-color-secondary placeholder:text-sm placeholder:font-medium  "
                        type="text"
                        placeholder="search"
                      />
                    </div>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <FaUserCircle color="white" size={30} />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden bg-white">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <div className="offering   my-5">
                    <div className="flex justify-between p-3 items-center">
                      <p className="text-xl text-gray-600 font-normal">
                        Offerings
                      </p>

                      {!isOpen1 && (
                        <p
                          onClick={() => {
                            Open(1);
                          }}
                        >
                          <AiOutlinePlus color="blue" size={20} />
                        </p>
                      )}
                      {isOpen1 && (
                        <p>
                          <AiOutlineMinus
                            onClick={() => {
                              Close(1);
                            }}
                          />{" "}
                        </p>
                      )}
                    </div>
                    {isOpen1 && (
                      <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
                        <li className="text-xl text-gray-500 font-normal">
                          Mobile
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Fiber
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          {" "}
                          Bussiness
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          App
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Shop
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          5g Network
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="offering   my-5">
                    <div className="flex justify-between p-3 items-center">
                      <p className="text-xl text-gray-600 font-normal">
                        Support
                      </p>

                      {!isOpen2 && (
                        <p
                          onClick={() => {
                            Open(2);
                          }}
                        >
                          <AiOutlinePlus color="blue" size={20} />
                        </p>
                      )}
                      {isOpen2 && (
                        <p>
                          <AiOutlineMinus
                            onClick={() => {
                              Close(2);
                            }}
                          />
                        </p>
                      )}
                    </div>
                    {isOpen2 && (
                      <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
                        <li className="text-xl text-gray-500 font-normal">
                          Mobile
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Fiber
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          {" "}
                          Bussiness
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          App
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Shop
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          5g Network
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="offering   my-5">
                    <div className="flex justify-between p-3 items-center">
                      <p className="text-xl text-gray-600 font-normal">
                        Our company
                      </p>

                      {!isOpen3 && (
                        <p
                          onClick={() => {
                            Open(3);
                          }}
                        >
                          <AiOutlinePlus color="blue" size={20} />
                        </p>
                      )}
                      {isOpen3 && (
                        <p>
                          <AiOutlineMinus
                            onClick={() => {
                              Close(3);
                            }}
                          />{" "}
                        </p>
                      )}
                    </div>
                    {isOpen3 && (
                      <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
                        <li className="text-xl text-gray-500 font-normal">
                          Mobile
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Fiber
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          {" "}
                          Bussiness
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          App
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Shop
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          5g Network
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="offering   my-5">
                    <div className="flex justify-between p-3 items-center">
                      <p className="text-xl text-gray-600 font-normal">
                        Useful links
                      </p>

                      {!isOpen4 && (
                        <p
                          onClick={() => {
                            Open(4);
                          }}
                        >
                          <AiOutlinePlus color="blue" size={20} />
                        </p>
                      )}
                      {isOpen4 && (
                        <p>
                          <AiOutlineMinus
                            onClick={() => {
                              Close(4);
                            }}
                          />{" "}
                        </p>
                      )}
                    </div>
                    {isOpen4 && (
                      <ul className="flex flex-col gap-2 p-4 smooth  ease-in-out duration-1000">
                        <li className="text-xl text-gray-500 font-normal">
                          Mobile
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Fiber
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          {" "}
                          Bussiness
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          App
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          Shop
                        </li>
                        <li className="text-xl text-gray-500 font-normal">
                          5g Network
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="offering   my-5">
                    <div className="flex relative justify-between p-3 items-center">
                      <p className="text-xl text-gray-600 font-normal">
                        Useful links
                      </p>
                      <p className="text-xs  bg-red-500 rounded-full items-center text-center absolute right-2 px-2 ">
                        New
                      </p>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
