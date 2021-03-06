// -----------------------------------------------------
// This file is generated by a script. DO NOT CHANGE IT!
// -----------------------------------------------------
import Nullstack from "nullstack";

class Icon extends Nullstack {

  render({width, height, length, title, rotation, animation, speed, class: klass, color = "currentColor"}) {
    const transform = rotation ? `rotate(${rotation})` : false;
    const duration = {slow: "1.5s", fast: "0.5s"}[speed] || "1.0s";
    return (
      <svg width={width} height={height} transform={transform} class={klass} viewBox="0 0 512 512">
        {title && <title>{title}</title>}
        {animation === "spin" && <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={duration} additive="sum" repeatCount="indefinite" />}
        <path d="M198.0943,428.5106a10,10,0,0,1-7.07-2.9282L86.6721,321.23a9.999,9.999,0,0,1,0-14.1405L326.6813,67.08a9.999,9.999,0,0,1,14.14,0L445.1742,171.4318a10,10,0,0,1,0,14.14l-240.01,240.01A10,10,0,0,1,198.0943,428.5106ZM107.8818,314.16l90.2125,90.212,225.8692-225.87L333.7515,88.29Z" transform="translate(0 0)" fill={color}/>
      <path d="M472.4093,152.894a9.9676,9.9676,0,0,1-7.07-2.9282L362.0344,46.6615a9.9983,9.9983,0,0,1,0-14.14l22.1363-22.1368c13.8475-13.8465,34.7281-13.8461,48.5756-.0005l68.8695,68.87c13.8456,13.8465,13.8456,34.7291,0,48.5752v.0005L479.48,149.9658A9.97,9.97,0,0,1,472.4093,152.894Zm22.1363-32.1348h0Z" transform="translate(0 0)" fill={color}/>
      <path d="M169.5659,445.7385,66.2616,342.4348a9.9984,9.9984,0,0,0-16.5858,4L.483,498.9316a9.9993,9.9993,0,0,0,12.585,12.586l152.497-49.1937a9.9983,9.9983,0,0,0,4.0009-16.5854ZM71.8953,471.5292l-31.424-31.4241L63.6858,368.14l80.175,80.1744Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;