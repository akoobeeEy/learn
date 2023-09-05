import { Component } from "react";

export class CardTeam extends Component {
  render() {
    console.log(this.props);
    const { children:[ image,firstName, lastName, desc, tel, phone, email ]} = this.props;

    return (
      <div className="flex flex-col items-center gap-3">
        <img src={image} alt="" className="rounded-[50%]" />
       
        <div className="flex gap-1">
          <p className="text-sm font-semibold text-titleColor md:text-base">
            {firstName}
          </p>
          <p className="text-sm font-semibold text-titleColor md:text-base">
            {lastName}
          </p>
        </div>
        <p className="text-xs font-medium text-center text-gray-300 md:text-sm">{desc}</p>
        <a
          href="tel:{tel}"
          className="text-xs font-medium text-titleColor md:text-sm"
        >
          {tel}
        </a>
        <a href="tel:{phone}" className="text-xs font-medium text-titleColor md:text-sm">
          {phone}
        </a>
        <a href="email:{email}" className="">
          {email}
        </a>
      </div>
    );
  }
}

export default CardTeam;
