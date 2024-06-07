"use client";
import Image from "next/image";
import { ambientLight} from '@react-three/fiber'
import { Environment, TrackballControls, PerspectiveCamera } from '@react-three/drei';
import Link from "next/link";
import { useRef, useState, useEffect } from 'react';




export default function Home() {
  return (
    <div>
    <Link href="/heart">Heart</Link>
    <hr></hr>
    <Link href="/brain">Brain</Link>
    </div>
  )
}