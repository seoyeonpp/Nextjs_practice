'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import Flip from "gsap/Flip";
import {useEffect} from "react";

const App = () => {

  gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2},
    effect: (targets: object, config: object) => {
      return gsap.to(targets, {duration: config.duration, opacity: 0, scale: 0.8});
    }
  });

  gsap.registerPlugin(ScrollTrigger, Draggable, Flip);

  useEffect(() => {
    Draggable.create(".drag", { bounds: "body" });
    Draggable.create(".flick", { inertia: true, bounds: "body" });
    Draggable.create(".rotate", { inertia: true, type: "rotation", bounds: "body" });
  });

  const onEnter = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 0.8 });
    // gsap.effects.fade(currentTarget, {duration: 2});
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1, opacity: 1 });
  };

  return (
    <div className="flex items-center justify-around min-h-screen m-0 bg-black">
      <div className="box text-white p-2 rounded-2xl" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        마우스 오버해보세요
      </div>

        <div className="drag bg-green-400 w-[100px] h-[100px] flex items-center justify-center rounded-2xl">drag me</div>

      <div className="flick bg-purple-700 w-[100px] h-[100px] flex items-center justify-center rounded-2xl">flick me</div>

      <div className="rotate bg-orange-500 w-[100px] h-[100px] flex items-center justify-center rounded-2xl">spin me</div>
    </div>
  );
}

export default App;
