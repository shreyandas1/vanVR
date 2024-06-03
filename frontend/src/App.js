import _ from 'lodash';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useLoader, ambientLight} from '@react-three/fiber'
import { Environment, TrackballControls, PerspectiveCamera } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DDSLoader } from "three-stdlib";
import { Suspense, useRef, useState, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

// Model with mtl, obj and texture file 
const Model = ( {args} ) => {
  const colorMap = useLoader(THREE.TextureLoader, args.textureFile)

  const materials = useLoader( MTLLoader, args.materialFile)
  const obj = useLoader(OBJLoader, args.objectFile, (loader) => {
    materials.preload();
    loader.setMaterials(materials)
  })
  return <primitive object = {obj} map={colorMap} position = {[0,0,0]}/>
}

const CustomController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 10;
      controls.maxDistance = 50;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function App() {

  const [toggle, setToggle] = useState(0)

  const heartProps = { 
    materialFile:"./Heart_300K_8Ktexture.mtl",
    objectFile :"./Heart_300K_8Ktexture.obj",
    textureFile : "./Heart_300K_8Ktexture_u1_v1.jpg"
  }

  const brainProps = {
    materialFile: "Plastinated_brain_300K.mtl",
    objectFile :"Plastinated_brain_300K.obj",
    textureFile : "Plastinated_brain_300K_u1_v1.jpg"

  }

  return (
    <div  style = {{ width: "100vw", height: "100vh"}}>
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-100,-100,-100] }}>
      <Suspense fallback={null}>
      <ambientLight  />
       {toggle % 2 ? <Model args={brainProps} />: <Model args={heartProps} /> }
      <CustomController /> 
      </Suspense>
      
    </Canvas>
    <button onClick={() => {setToggle(toggle+1); console.log(toggle);}} > Switch sample</button>

    </div >
  );
}

export default App;
