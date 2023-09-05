import React, { Component } from "react";
import { newsData } from "../../data/news";
import {CardNews,Button} from "../index";

export class News extends Component {
  render() {
    return (
      <section className="py-10 mt-32" id="новости">
        <div className="container mx-auto">
          <h1 className="text-center title">Новости</h1>
          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map((el, i) => (
              <CardNews {...el} key={i}/>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button>
            Все новости
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
