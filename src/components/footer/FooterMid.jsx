import React, { Component } from 'react'
import { Link } from 'react-scroll'

export class FooterMid extends Component {
  render() {
    return (
      <div className='py-4'>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-7">
            <div className="">
                <h1 className='footer-title'>Продукция</h1>
                <ul className="flex flex-col gap-3">
                    <Link className='footer-link'>Ламинатные тубы</Link>
                    <Link className='footer-link'>Экструзионные тубы</Link>
                    <Link className='footer-link'>Другая упаковка</Link>
                </ul>
            </div>
            <div className="">
                <h1 className='footer-title'>Компания</h1>
                <ul className="flex flex-col gap-3">
                    <Link className='footer-link'>О нас</Link>
                    <Link className='footer-link'>Наша команда</Link>
                    <Link className='footer-link'>Сертификаты</Link>
                </ul>
            </div>
            <div className="">
                <h1 className='footer-title'>Разделы</h1>
                <ul className="flex flex-col gap-3">
                    <Link className='footer-link'>Контакты</Link>
                    <Link className='footer-link'>Новости</Link>
                    <Link className='footer-link'>Вакансии</Link>
                </ul>
            </div>
            <div className="">
                <h1 className='mb-3 footer-title text-hoverColor'>Беларусь</h1>
                <div className="flex flex-col">
                <Link className='mb-1 footer-link'>+375 (17) 270 53 77</Link>
                <Link className='footer-link'>+375 (17) 270 53 78</Link>
                </div>
                <div className="mt-6">
                <h1 className='mb-3 footer-title text-hoverColor'>Москва</h1>
                <div className="flex flex-col">
                <Link className='mb-1 footer-link'>+7 (495) 280 73 44</Link>
                <Link className='footer-link'>+7 (495) 280 73 44</Link>
                </div>
                </div>
            </div>
            <div className="">
                <h1 className='mb-3 footer-title text-hoverColor'>Европа</h1>
           
                <Link className='mb-1 footer-link'>+7 (495) 280 73 44</Link>
                    <div className="mt-6">
                    <h1 className='mb-3 footer-title text-hoverColor'>Екатеринбург</h1>
                        <Link className='footer-link'>+7 (343) 346 82 06</Link>
                    </div>
                </div>
        </div>
      </div>
    )
  }
}

export default FooterMid
