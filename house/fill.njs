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
        <path d="M415.2907,509.8426H322.3714a9.9162,9.9162,0,0,1-9.9157-9.9158V371.4417a20.7412,20.7412,0,0,0-20.7175-20.7175H221.2829a20.7412,20.7412,0,0,0-20.7175,20.7175V499.9268a9.9159,9.9159,0,0,1-9.9157,9.9158H97.73a40.5947,40.5947,0,0,1-40.5484-40.549c0-.4318.0082-.8705.0252-1.3334q-.0247-.3529-.0252-.7088V298.9862H40.5489a40.5451,40.5451,0,0,1-27.0363-70.7585L224.2619,17.4784a40.5312,40.5312,0,0,1,63.175-.3714l211.9806,211.98a40.541,40.541,0,0,1-27.9664,69.8991H454.818V463.167a9.9114,9.9114,0,0,1-.2111,2.0335,40.5018,40.5018,0,0,1-38.2055,44.5781A9.6112,9.6112,0,0,1,415.2907,509.8426Z" transform="translate(0 0)" fill={color}/>
      </svg>
    )
  }

}

export default Icon;