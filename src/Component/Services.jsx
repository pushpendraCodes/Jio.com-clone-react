import React from "react";
import recharge from "../../public/icons/recharge.png";
import customerService from "../../public/icons/customer-service.png";
import money from "../../public/icons/money.png";
import Sim from "../../public/icons/sim-card.png";
import SimToolkit from "../../public/icons/sim-toolkit.png";
import wifi from "../../public/icons/wifi.png";
const Services = () => {
  return (
    <div>
      {/* desktop */}
      <div className="container mx-auto   my-16">
        <div className="lg:flex hidden  justify-center space-x-10 items-center">
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full p-4 flex ">
              <img className="w-8 h-8  " src={recharge} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">Recharge</p>
          </div>
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full p-4 flex ">
              <img className="w-8 h-8  " src={money} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">PayBills</p>
          </div>
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full p-4 flex ">
              <img className="w-8 h-8  " src={Sim} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">Get Jio Sim</p>
          </div>
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full p-4 flex ">
              <img className="w-8 h-8  " src={SimToolkit} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">Port tO jiO</p>
          </div>
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full  p-4 justify-center flex ">
              <img className="w-5 h-5" src={wifi} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">
              Get Jio Fiber
            </p>
          </div>
          <div
            className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
          >
            <figure className="bg-blue-100 rounded-full p-4 flex ">
              <img className="w-8 h-8  " src={customerService} alt="" />
            </figure>
            <p className="text-sm font-medium mt-2 text-center">Support</p>
          </div>
        </div>

        {/* mobile */}

        <div className=" sm:block   lg:hidden md:hidden   gap-1   items-center">
          <div className="flex justify-between">
          <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full p-4 flex ">
                <img className="w-8 h-8  " src={money} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">PayBills</p>
            </div>
            <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full p-4 flex ">
                <img className="w-8 h-8  " src={money} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">PayBills</p>
            </div>
            <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full p-4 flex ">
                <img className="w-8 h-8  " src={Sim} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">
                Get Jio Sim
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full p-4 flex ">
                <img className="w-8 h-8  " src={SimToolkit} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">
                Port tO jiO
              </p>
            </div>
            <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full  p-4 justify-center flex ">
                <img className="w-5 h-5" src={wifi} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">
                Get Jio Fiber
              </p>
            </div>
            <div
              className="hover:bg-blue-200 p-5 rounded-2xl transition duration-700 hover:ease-in
                        cursor-pointer "
            >
              <figure className="bg-blue-100 rounded-full p-4 flex ">
                <img className="w-8 h-8  " src={customerService} alt="" />
              </figure>
              <p className="text-sm font-medium mt-2 text-center">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
