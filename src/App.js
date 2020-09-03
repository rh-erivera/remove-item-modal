import React, { useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';


export default function App() {
  const [open, setOpen] = React.useState(false);
  const removeItem = useRef(null);
  const itemRemoved = useRef(null);
  const modal = useRef(null);
  var checkTimeline = anime.timeline({ autoplay: true, direction: 'normal', loop: 2 });

  checkTimeline
  .add({
    targets: '.checkmark',
    scale: [
      { value: [0, 1], duration: 500, easing: 'easeOutQuad' }
    ]})
  .add({
    targets: '.check',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: 600,
      delay: 200,
      easing: 'easeOutQuart'
    }})

  function remove() {
    removeItem.current.className = "modal-inner closed";
    setTimeout(() => {
      itemRemoved.current.className = "modal-inner open";
    }, 500);
    setTimeout(() => {
      modal.current.className = "modal-container closed";
    }, 2500);
    setTimeout(() => {
      removeItem.current.className = "modal-inner open";
      itemRemoved.current.className = "modal-inner closed";
      setOpen(!open);
    }, 3500);
  }

  return (
    <div className="App">
      <div className="container">
        <button className="button-primary" onClick={() => { setOpen(!open); }}>Click Me</button>
        <div ref={modal} className={ open ? "open modal-container" : "closed modal-container"}>
          <div className="modal">
            <svg className="x" onClick={() => { setOpen(!open); }} focusable="false" viewBox="0 0 20 20" aria-hidden="true"><title>Combined Shape</title><desc>Created with Sketch.</desc><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Grommet/X-Close" transform="translate(-15.000000, -15.000000)"><rect id="Rectangle" x="0" y="0" width="50" height="50"></rect><path d="M34.3548387,15 L35,15.6451613 L25.645,24.999 L35,34.3548387 L34.3548387,35 L25,25.645 L15.6451613,35 L15,34.3548387 L24.354,25 L15,15.6451613 L15.6451613,15 L25,24.354 L34.3548387,15 Z" id="Combined-Shape" fill="currentColor"></path></g></g></svg>
            <div ref={removeItem} className="modal-inner open">
              <p>are you sure you want to remove this item?</p>
              <button 
                onClick={remove}
                className="button-primary">remove from returns</button>
              <button onClick={() => { setOpen(!open); }}>cancel</button>
            </div>
            <div ref={itemRemoved} className="modal-inner closed">
            <svg class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              width="77px"
              height="77px"
              viewBox="0 0 77 77">
              <circle class="circle"
                cx="38.5"
                cy="38.5"
                r="38"
                stroke="#CCCCCC"
                fill="none"/>
              <path class="check"
                d="M26 40l9 9 20-20 "
                fill="none"
                stroke="#000"
                stroke-width="2"></path>
              </svg>
              <p>item removed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}