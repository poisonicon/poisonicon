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
        <path d="M408.8356,100.8752v-22.03A68.9234,68.9234,0,0,0,339.9908,10H171.0913a68.9234,68.9234,0,0,0-68.8449,68.8449v22.03Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M147.837,337.09V476.3663C147.837,490.5229,158.2839,502,171.17,502H337.6108c12.886,0,23.3329-11.4771,23.3329-25.6337V337.09Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M421.6867,145.5479H90.3133a68.9235,68.9235,0,0,0-68.8449,68.8449V324.5446A68.9235,68.9235,0,0,0,90.3133,393.39h11.9331V319.9549H93.9851a13.769,13.769,0,1,1,0-27.5379H417.097a13.769,13.769,0,1,1,0,27.5379h-8.2614V393.39h12.8511a68.9235,68.9235,0,0,0,68.8449-68.8449V214.3928A68.9235,68.9235,0,0,0,421.6867,145.5479Z" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="87.5595" y1="218.0645" x2="139.5757" y2="218.0645" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="221.9836" y1="390.3509" x2="286.7971" y2="390.3509" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <line x1="221.9836" y1="445.0362" x2="286.7971" y2="445.0362" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;