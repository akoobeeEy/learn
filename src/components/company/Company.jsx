import React, { Component } from "react";
import { button, videoImg } from "../../assets";
import { motion } from "framer-motion";
export class Company extends Component {
  render() {
    return (
      <section className="py-10 mt-32" id="сертификаты">
        <div className="container mx-auto">
          <h1 className="text-center title">
            О компании <span className="text-hoverColor">LEANGROUP</span>
            <div className="grid items-center grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
              <motion.div
                drag="x"
                dragConstraints={{ left: 50 }}
                className="relative cursor-all-scroll"
              >
                <img src={videoImg} alt="" className="" />
                <div className="absolute top-[39%] left-[39%] z-10">
                  <a
                    href="https://youtube.com/shorts/nz8bvI6519E?si=64vWUEvp5CgpAyfk"
                    className="cursor-pointer"
                  >
                    <img src={button} alt="" className="" />
                  </a>
                </div>
              </motion.div>
              <div className="">
                <p className="text-xs font-normal md:text-base text-titleColor text-start">
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб. Имея две
                  технологии – для производства ламинатных и экструзионных туб,
                  мы предлагаем вам широкий спектр возможностей. Большим
                  преимуществом является собственный печатный цех в ламинате и
                  in-line печать в экструзии с возможностью различных
                  дополнительных опций декора. Особое внимание уделяется работе
                  с поставщиками для контроля и поддержания качества
                  производимой нами продукции. С января 2018 года компания стала
                  членом Европейской Ассоциации производителей туб (ETMA), что
                  подтверждает сильную позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </h1>
        </div>
      </section>
    );
  }
}

export default Company;
