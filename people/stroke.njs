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
        <path d="M386.4845,397.9539c0-59.9706-58.4831-108.5863-130.6256-108.5863S125.2334,337.9833,125.2334,397.9539" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <ellipse cx="255.8589" cy="186.437" rx="72.5383" ry="72.3908" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <ellipse cx="403.4361" cy="231.4143" rx="54.8858" ry="54.7742" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M125.2342,316.4218a119.2689,119.2689,0,0,0-16.3969-1.1255C54.251,315.2963,10,352.0812,10,397.4577" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <path d="M386.7658,316.4218a119.2689,119.2689,0,0,1,16.3969-1.1255c54.5863,0,98.8373,36.7849,98.8373,82.1614" transform="translate(0 0)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      <ellipse cx="108.8373" cy="231.4143" rx="54.8858" ry="54.7742" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={length || 20}/>
      </svg>
    )
  }

}

export default Icon;