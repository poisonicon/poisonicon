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
        <path d="M10.4771,255.5221V447.0106s-8.3663,54.7109,44.9691,54.7109H444.4814S502,509.0865,502,448.0627V257.6264" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="256" y1="373.7435" x2="256" y2="16.1492" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <polyline points="106.383 174.854 255.064 10 405.617 174.854" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;