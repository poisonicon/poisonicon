// -----------------------------------------------------
// This file is generated by a script. DO NOT CHANGE IT!
// -----------------------------------------------------
import Nullstack from "nullstack";
export default ({width, height, length, title, rotation, animation, speed, class: klass, color = "currentColor"}) => {
  const transform = rotation ? `rotate(${rotation})` : false;
  const duration = {slow: "1.5s", fast: "0.5s"}[speed] || "1.0s";
  return (
    <svg width={width} height={height} transform={transform} class={klass} viewBox="0 0 512 512">
      {title && <title>{title}</title>}
      {animation === "spin" && <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={duration} additive="sum" repeatCount="indefinite" />}
      <path d="M500.94,512H10A10,10,0,0,1,0,502V425.0771a10,10,0,0,1,10-10H500.94a10.0006,10.0006,0,0,1,10,10V502A10.0005,10.0005,0,0,1,500.94,512Z" transform="translate(0 0)" fill={color}/>
      <path d="M497.2874,277.7444H29.4253V235.21H350.3477c8.113,0,14.7126-6.1,14.7126-13.5972s-6.6-13.5972-14.7126-13.5972H14.7126C6.6,208.0158,0,214.1155,0,221.613v69.7286c0,7.4979,6.6,13.5972,14.7126,13.5972H497.2874C505.4,304.9388,512,298.84,512,291.3416S505.4,277.7444,497.2874,277.7444Z" transform="translate(0 0)" fill={color}/>
      <path d="M352.19,96.9224H10a10,10,0,0,1-10-10V10A10,10,0,0,1,10,0H352.19a10,10,0,0,1,10,10V86.9224A10,10,0,0,1,352.19,96.9224Z" transform="translate(0 0)" fill={color}/>
      <path d="M431.3568,70.8927c1.5166-2.8224,9.1749-14.7816,28.0249-10.5089,17.9583,4.0707,19.6136,26.7517,19.6869,27.92a15.9762,15.9762,0,0,0,31.9146-1.55C510.18,69.07,500.01,37.2417,467.1033,29.3887V17.9767a15.9768,15.9768,0,0,0-31.9536,0V29.8916c-16.9584,5.1671-27.7391,17.5911-32.1946,26.3428-8.234,13.9976-16.1944,45.5275,9.8717,70.0824,3.77,4.1245,17.0065,16.4854,40.1782,16.4854,10.2554,0,15.6024,4.9452,16.5791,5.946a5.6706,5.6706,0,0,0,1.4822,1.5853c1.4011,1.4564,9.2708,10.46,5.2814,25.2484a6.2464,6.2464,0,0,0-.3215,1.3729c-.46,1.6649-3.1282,9.1649-14.5959,13.4118-12.3235,4.5621-20.54.2778-21.8651-.4946A7,7,0,0,0,438.4,189.14c-6.4025-3.7046-9.4-8.1649-10.7612-11.9656a23.8162,23.8162,0,0,1-.808-3.1012,16.1684,16.1684,0,0,1-.1161-4.9377c-.0344.2231-.0632.3393-.0632.3393l-.2731-.0547c-.0171-1.8842.164-3.165.1548-3.4195a15.9761,15.9761,0,0,0-31.9444.7031c.0109.5748.0421,1.18.0728,1.7842-.7795,13.4589,4.2565,34.4738,27.2577,48.031a49.2437,49.2437,0,0,0,13.2307,5.8237v12.7119a15.9768,15.9768,0,0,0,31.9536,0V222.0865c1.7726-.4967,3.5782-1.07,5.4249-1.7541,23.4706-8.6936,32.8242-26.9561,34.843-37.0867,6.8635-26.4958-5.0551-47.005-13.7627-55.5708-3.7134-4.1548-16.9785-16.8262-40.6035-16.8262-10.0923,0-15.4486-4.9178-16.4051-5.8868a8.6611,8.6611,0,0,0-1.52-1.5844c-13.8852-12.7479-6.2767-27.9866-4.4474-31.1624A6.3456,6.3456,0,0,0,431.3568,70.8927Z" transform="translate(0 0)" fill={color}/>
    </svg>
  )
}