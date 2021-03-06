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
        <path d="M480.2922,502c0-103.9264-100.419-188.1753-224.2922-188.1753S31.7078,398.0736,31.7078,502" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-miterlimit="10" stroke-width={length || 20}/>
      <ellipse cx="256" cy="135.4502" rx="124.5527" ry="125.4502" fill="none" stroke={color} stroke-linecap="round" stroke-miterlimit="10" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;