"use client";
import React, { useRef, useEffect } from "react";
// import styles from "./page.module.css";
import WebGL from "three/examples/jsm/capabilities/WebGL.js";
import Cube from "./cube";

export default function Home() {
  useEffect(() => {
    if (!WebGL.isWebGLAvailable()) {
      const warning = WebGL.getWebGLErrorMessage();
      warning.id = "webgl-error-message";
      if (document.getElementById("webgl-error-message") === null) {
        document.body.appendChild(warning);
      }
    }
    if (typeof window !== "undefined") {
      Cube();
    }
  }, []);
}
