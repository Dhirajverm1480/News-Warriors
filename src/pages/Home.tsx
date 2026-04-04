import React, { useContext } from "react";
import { Card } from "../components/Card";
import { NewsContext } from "../context/NewsContext";
import { Banner } from "../components/Banner";

const Home = () => {
  const { articles } = useContext(NewsContext);

  console.log("Art: ", articles);
  return (
    <section>
      <Banner />
      <div className="w-full px-10 pb-10 grid md:grid-cols-3 lg:grid-cols-4">
        {articles.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.urlToImage}
          />
        ))}
      </div>
      {/* <div className="w-full px-10 pb-10 grid md:grid-cols-3 lg:grid-cols-4">
        <Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        />
        <Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        /><Card
          title={"Title"}
          desciption={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius amet autem quia totam ex explicabo recusandae numquam repellat unde?"
          }
          image={"Image"}
        />
      </div> */}
    </section>
  );
};

export default Home;
