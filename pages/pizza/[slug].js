import Layout from "../../components/layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/dist/client/image";
import css from "../../styles/Pizza.module.css";
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from "react";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();

  const [size, setSize] = useState(1); 

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
            src={src}
          />
        </div>

        {/* right side */}
        <div className={css.right}>
            <span>{pizza.name}</span>
            <span>{pizza.details}</span>

            <span><span style={{color:"var(--themeRed)"}}>$</span>{pizza.price[1]}</span>
            <span>$ {pizza.price[1]}</span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.SizeVariants}>
              <div onClick={() => setSize(0)}
              className={size === 0? css.selected : ""}
              >Small</div>
              <div onClick={() => setSize(1)}
              className={size === 1? css.selected : ""}
              >Medium</div>
              <div onClick={() => setSize(2)}
              className={size === 2? css.selected : ""}
              >Large</div>
            </div>
          </div>

          {/* Quantity Counter */}
          <div className={css.quantity}>
            <span>Quantity</span>

            <div className={css.counter}>
                <Image src={LeftArrow}
                height={20} 
                weight={20}
                alt=""
                objectFit="contain"
                />

                <span>1</span>

                <Image src={RightArrow}
                height={20} 
                weight={20}
                alt=""
                objectFit="contain"
                />
            </div>
          </div>

          {/* button */}
          <div className={`btn ${css.btn}`}>
            Add to cart
          </div>

        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
