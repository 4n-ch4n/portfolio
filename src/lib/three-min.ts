// Narrow re-export so Rollup can tree-shake three down to what the hero mesh
// actually touches. Importing the whole `three` namespace defeats that and
// costs roughly 180 KB gzipped instead.
export {
  BufferAttribute,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from "three";
