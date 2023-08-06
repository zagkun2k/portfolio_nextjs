import Image from "next/image";
import image from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        {/* <Image
        src="https://images.pexels.com/photos/15989066/pexels-photo-15989066/free-photo-of-d-ng-phong-c-nh-dan-ong-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height={500}
        width={500}
        alt="Home Image"
      /> */}
        <Image src={image} className={styles.image} alt="Home page Image" />
      </div>
    </div>
  );
}
