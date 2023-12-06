'use client';
import gsap from 'gsap';

const App = () => {

  gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2},
    effect: (targets: object, config: object) => {
      return gsap.to(targets, {duration: config.duration, opacity: 0, scale: 0.8});
    }
  });

  const onEnter = ({ currentTarget }: any) => {
    // gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 0.8 });
    gsap.effects.fade(currentTarget, {duration: 2});
  };

  const onLeave = ({ currentTarget }: any) => {
    gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1, opacity: 1 });
  };

  return (
    <>
      <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        마우스 오버해보세요
      </div>
    </>
  );
}

export default App;
