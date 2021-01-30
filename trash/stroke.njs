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
        <polygon points="78.808 70.998 436.256 70.998 455.66 128.19 56.34 128.19 78.808 70.998" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M92.0848,128.19l26.5533,342.1048s-.4218,31.6831,29.4062,31.6831H359.0261s31.272,1.9956,34.3358-31.6831S419.9152,128.19,419.9152,128.19" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="178.9311" y1="455.8086" x2="165.2112" y2="179.2536" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="255.7864" y1="455.8086" x2="255.7864" y2="179.2536" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="330.6073" y1="455.8086" x2="345.3995" y2="179.2536" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M195.9039,70.9981V27.0832S193.8613,10,212.987,10h86.53s16.6423,2.7853,16.6423,19.1257V70.9981" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;