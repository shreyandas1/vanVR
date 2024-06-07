import {Scene }from "@/components/Scene";
import Link from "next/link";

export default function Heart() {
    const heartProps = {
        materialFile: "./Heart_300K_8Ktexture.mtl",
        objectFile: "./Heart_300K_8Ktexture.obj",
        textureFile: "./Heart_300K_8Ktexture_u1_v1.jpg"
      };
    
    return (
        <div>
            <Scene args={heartProps} />
            <Link href="/">Back to main menu</Link>
        </div>
    )
}