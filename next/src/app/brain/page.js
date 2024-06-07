import {Scene }from "@/components/Scene";
import Link from "next/link";

export default function Brain() {
    const brainProps = {
        materialFile: "Plastinated_brain_300K.mtl",
        objectFile: "Plastinated_brain_300K.obj",
        textureFile: "Plastinated_brain_300K_u1_v1.jpg"
      };
    
    return (
        <div>
            <Scene args={brainProps} />
            <Link href="/">Back to main menu</Link>
        </div>
    )
}