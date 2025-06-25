import lb1 from "./lb1.jpg";
import lb2 from "./lb2.jpg";
import lb3 from "./lb3.jpg";
import "./LatestBlog.scss";
import LatestBlog from "./LatestBlog.js";

export default function LatestBlogs() {
  const blogs = [
    {
      img: lb1,
      heading: "Top essential Trends in 2023",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
    },
    {
      img: lb2,
      heading: "Top essential Trends in 2023",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
    },
    {
      img: lb3,
      heading: "Top essential Trends in 2023",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
    },
  ];

  return (
    <section className="lb">
      <h2>Latest Blog</h2>
      <div className="lb__blogs">
        {blogs.map((blog,index) => {
          return (
            <LatestBlog heading={blog.heading} para={blog.para} img={blog.img} key={index} />
          );
        })}
      </div>
    </section>
  );
}
