// -----------------------------------------------------
// This file is generated by a script. DO NOT CHANGE IT!
// -----------------------------------------------------
import Nullstack from "nullstack";
export default ({width, height, length, title, rotation, animation, speed, class: klass, color = "currentColor"}) => {
  const transform = rotation ? `rotate(${rotation})` : false;
  const duration = {slow: "1.5s", fast: "0.5s"}[speed] || "1.0s";
  return (
    <svg width={width} height={height} transform={transform} class={klass} viewBox="0 0 512 512">
      {title && <title>{title}</title>}
      {animation === "spin" && <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={duration} additive="sum" repeatCount="indefinite" />}
      <path d="M476.0474,161.0489h-13.99v154.116c0,24.0658-13.989,45.6952-42.0313,45.6952H145.6434v7.3913c0,21.2343,24.0652,42.6146,48.8807,42.6146h209.888L484.6655,458.04,472.9661,410.866h3.0813c24.8148,0,35.9526-21.38,35.9526-42.6146V197.6464c0-21.2133-11.1378-36.5975-35.9526-36.5975Zm0,0" transform="translate(0 0)" fill={color}/>
      <path d="M379.1182,53.96H60.33C32.2888,53.96,0,78.8375,0,102.9034V296.0539c0,22.1091,27.3129,38.1388,53.5852,40.5746l-17.07,64.8062,109.3776-64.3278H379.1182c27.9794,0,53.9182-17.07,53.9182-41.053v-193.15c0-24.0659-25.9388-48.943-53.9182-48.943ZM108.9614,217.0077a28.7917,28.7917,0,1,1,28.7914-28.7913,28.7288,28.7288,0,0,1-28.7914,28.7913Zm107.5047,0a28.7917,28.7917,0,1,1,28.7919-28.7913,28.782,28.782,0,0,1-28.7919,28.7913Zm107.5879,0a28.7917,28.7917,0,1,1,28.7919-28.7913,28.782,28.782,0,0,1-28.7919,28.7913Zm0,0" transform="translate(0 0)" fill={color}/>
    </svg>
  )
}