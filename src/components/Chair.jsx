import LoadModel from "./LoadModel";

export default function Chair(props) {
  return <LoadModel url={"./models/chair/chair.gltf"} {...props}></LoadModel>;
}
