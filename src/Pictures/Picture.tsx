import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styles from "./Picture.module.css";
import "../About/Aboutme.css";

import ideathon1 from "../assets/ideathon1.jpg";
import Talk from "../assets/Talk.jpg";
import ncs2 from "../assets/ncs2.jpg";
import Ncs3 from "../assets/Ncs3.jpg";
import Ncs from "../assets/ncs2.jpg";
import gdg from "../assets/gdg.JPG";
import ice from "../assets/ice.jpeg";
import devfestteam from "../assets/devfestteam.jpg";
import icebreak from "../assets/icebreak.jpeg";

const cards = [ideathon1, Talk, ncs2, Ncs3, Ncs, gdg, ice, devfestteam, icebreak];

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: 1000 });

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function Deck() {
  const [gone] = useState<Set<number>>(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cards.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
      }
    }
  );

  return (
    <div
      id="Memories"
      className="flex flex-col justify-center items-center overflow-hidden pb-40 mt-32 md:pb-56 md:mt-48"
    >
      <h1 className="title bg-linear-to-r from-[#5DFFFF] via-[#8A7FF0] to-[#AE0CA7] bg-clip-text text-transparent text-center">
        Memories
      </h1>

      <div className="w-full flex justify-center items-center relative mt-52 md:mt-72">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div className={`${styles.deck} absolute`} key={i} style={{ x, y }}>
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
              }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}
