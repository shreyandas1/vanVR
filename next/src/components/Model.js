"use client";
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// Model with mtl, obj and texture file 
export const Model = ({ args }) => {
  const colorMap = useLoader(THREE.TextureLoader, args.textureFile);

  const materials = useLoader(MTLLoader, args.materialFile);
  const obj = useLoader(OBJLoader, args.objectFile, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={obj} map={colorMap} position={[0, 0, 0]} />;
};
