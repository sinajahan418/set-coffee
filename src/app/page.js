import Footer from "@/component/madules/footer/Footer";
import Navbar from "@/component/madules/navbar/Navbar";
import Articles from "@/component/templates/index/articles/Articles";
import Baner from "@/component/templates/index/baner/Baner";
import Latest from "@/component/templates/index/latest/Latest";
import Promote from "@/component/templates/index/promote/Promote";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Baner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </>
  );
}
