import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import {
  d1,
  d2,
  d3,
  d4,
  d5,
  l1,
  l2,
  l3,
  l4,
  l5,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
} from "../../assets";
import "react-tabs/style/react-tabs.css";
import "./OurProduction.scss";
import { Button } from "../index";

export class OurProduction extends Component {
  render() {
    return (
      <section className="py-10 mt-32 our-production-wrapper" id="продукция">
        <div className="container mx-auto">
          <h1 className="mb-10 text-center title">
            Наша <span className="text-hoverColor">продукция</span>{" "}
          </h1>
          <Tabs className={"mt-20"}>
            <TabList className={"flex gap-6 justify-center mb-10"}>
              <Tab
                className={
                  "button cursor-pointer font-normal md:text-sm text-xs"
                }
              >
                Ламинатные тубы
              </Tab>
              <Tab
                className={
                  "button cursor-pointer font-normal md:text-sm text-xs"
                }
              >
                Экструзионные тубы
              </Tab>
              <Tab
                className={
                  "button cursor-pointer font-normal md:text-sm text-xs"
                }
              >
                Другая упаковка
              </Tab>
            </TabList>

            <TabPanel>
              <div className="flex justify-between gap-2">
                <div className="produc-card">
                  <img src={l1} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={l2} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={l3} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={l4} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={l5} alt="" className="produc-img" />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button>Перейти в каталог</Button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between">
                <div className="">
                  <img src={pr1} alt="" />
                </div>
                <div className="">
                  <img src={pr2} alt="" />
                </div>
                <div className="">
                  <img src={pr3} alt="" />
                </div>
                <div className="">
                  <img src={pr4} alt="" />
                </div>
                <div className="">
                  <img src={pr5} alt="" />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button>Перейти в каталог</Button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between gap-2">
                <div className="produc-card">
                  <img src={d1} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={d2} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={d3} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={d4} alt="" className="produc-img" />
                </div>
                <div className="produc-card">
                  <img src={d5} alt="" className="produc-img" />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button>Перейти в каталог</Button>
              </div>
            </TabPanel>
          </Tabs>
          <div className="mt-10 form-container">
            <div className="p-4 w-fit">
              <h1 className="text-xl md:text-3xl title">
                Получить подробную{" "}
                <span className="mb-4 text-hoverColor">информацию</span>
              </h1>
              <p className="flex flex-col text-xs font-normal md:text-sm text-titleColor mb-9">
                Просто заполните форму, наш менеджер свяжется{" "}
                <span>с вами в ближайшее время</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex  border-[1px] border-[rgba(0, 16, 61, 0.12)] h-12 rounded-md bg-white">
                  <button className="h-full p-3 text-center bg-white border-r-[1px] border-[rgba(0, 16, 61, 0.12)]">
                    <BsFillPersonFill className="text-xl text-hoverColor" />
                  </button>

                  <input
                    type="text"
                    className="py-[10px] px-4 focus:outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="flex  border-[1px] border-[rgba(0, 16, 61, 0.12)] h-12 rounded-md bg-white">
                  <button className="h-full p-3 text-center bg-white border-r-[1px] border-[rgba(0, 16, 61, 0.12)]">
                    <BsFillTelephoneFill className="text-xl text-hoverColor" />
                  </button>

                  <input
                    type="tel"
                    className="py-[10px] px-4 focus:outline-none"
                    placeholder="+375 (29) 0000000"
                  />
                </div>
              </div>
              <div className="mt-10">
                <textarea className="h-20 px-4 py-2 bg-white shadow-lg resize-none border-2 focus:outline-none w-full border-[rgba(0, 16, 61, 0.12)]" placeholder="Комментарий"></textarea>
                <div className="mt-10">
                  <Button>
                  Получить информацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurProduction;
