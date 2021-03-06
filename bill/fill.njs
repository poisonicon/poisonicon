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
        <path d="M121,301a15,15,0,1,0,15,15,14.9969,14.9969,0,0,0-15-15Z" transform="translate(0 0)" fill={color}/>
      <path d="M301,421H181a15,15,0,0,0,0,30H301a15,15,0,0,0,0-30Z" transform="translate(0 0)" fill={color}/>
      <path d="M121,361a15,15,0,1,0,15,15,14.9969,14.9969,0,0,0-15-15Z" transform="translate(0 0)" fill={color}/>
      <path d="M121,421a15,15,0,1,0,15,15,14.9969,14.9969,0,0,0-15-15Z" transform="translate(0 0)" fill={color}/>
      <path d="M301,60H121a14.9969,14.9969,0,0,0-15,15V255a14.9969,14.9969,0,0,0,15,15H301a14.9969,14.9969,0,0,0,15-15V75A14.997,14.997,0,0,0,301,60ZM196,90h30v35.7293l-8.292-4.1453a15.0039,15.0039,0,0,0-13.416,0L196,125.7293Zm90,150H136V90h30v60a15,15,0,0,0,21.708,13.416L211,151.7706l23.292,11.6454A15,15,0,0,0,256,150V90h30Z" transform="translate(0 0)" fill={color}/>
      <path d="M301,361H181a15,15,0,0,0,0,30H301a15,15,0,0,0,0-30Z" transform="translate(0 0)" fill={color}/>
      <path d="M406,0H106A60.07,60.07,0,0,0,46,60V497a14.997,14.997,0,0,0,15,15H361a14.997,14.997,0,0,0,15-15V150h75a14.997,14.997,0,0,0,15-15V60A60.07,60.07,0,0,0,406,0ZM346,60V482H76V60a30.0349,30.0349,0,0,1,30-30H354.0733A59.5811,59.5811,0,0,0,346,60Zm90,60H376V60a30,30,0,0,1,60,0Z" transform="translate(0 0)" fill={color}/>
      <path d="M301,301H181a15,15,0,0,0,0,30H301a15,15,0,0,0,0-30Z" transform="translate(0 0)" fill={color}/>
      <path d="M301,301" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;