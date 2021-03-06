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
        <rect x="74.1597" y="73.5849" width="151.0896" height="151.2926" rx="10.435" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="286.7507" y="73.5849" width="151.0896" height="151.2926" rx="11.935" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="74.1597" y="286.4615" width="151.0896" height="151.2926" rx="13.935" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="284.7951" y="284.5033" width="85.677" height="85.7921" rx="7.935" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="372.2824" y="372.1081" width="61.792" height="61.875" rx="1.6716" stroke-width={length || 20} stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M124.4721,10.0426h-79.04S10,7.3135,10,45.5221v80.511" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M10.0426,387.3742v79.1464S7.3171,502,45.4744,502h80.403" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M501.9574,124.6258V45.4794S504.6829,10,466.5256,10h-80.403" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M387.5279,501.9574h79.04S502,504.6865,502,466.4779v-80.511" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;