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
        <rect x="0.4747" y="0.2247" width="213.0053" height="213.2615" rx="44.8165" fill={color}/>
      <rect x="0.4747" y="298.9632" width="213.0053" height="213.2615" rx="44.8165" fill={color}/>
      <rect x="299.4695" y="298.9632" width="213.0053" height="213.2615" rx="44.8165" fill={color}/>
      <path d="M465.8364,31.4442A15.4363,15.4363,0,0,1,481.2552,46.863V166.848a15.4362,15.4362,0,0,1-15.4188,15.4187H346.1077a15.4362,15.4362,0,0,1-15.4188-15.4187V46.863a15.4363,15.4363,0,0,1,15.4188-15.4188H465.8364m0-31.2195H346.1077A46.6384,46.6384,0,0,0,299.4694,46.863V166.848a46.6384,46.6384,0,0,0,46.6383,46.6383H465.8364a46.6383,46.6383,0,0,0,46.6383-46.6383V46.863A46.6383,46.6383,0,0,0,465.8364.2247Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;