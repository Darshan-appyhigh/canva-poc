import { useEffect, useState, useRef, useCallback } from "react";

export default function App() {
  const canvasRef = useRef(null);

  // Brush Tool Logic

  const drawBrush = (ctx, e) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(e?.x, e?.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawRec = (ctx, e1, e2) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.rect(e1.x, e1.y, e2.x - e1.x, e2.y - e1.y);
    ctx.fill();
  };

  const drawCircle = (ctx, e1, e2) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(e1?.x, e2?.y, e2.x - e1.x, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Brush Tool

    // const mouseMoveHandler = (e) => {
    //   drawBrush(context, e);
    // };

    // canvas.addEventListener("mousedown", (e) => {
    //   canvas.addEventListener("mousemove", mouseMoveHandler);
    // });

    // canvas.addEventListener("mouseup", (e) => {
    //   canvas.removeEventListener("mousemove", mouseMoveHandler);
    // });

    // Rectangle Tool

    // const mouseMoveHandler = (e1, e2) => {
    //   drawRec(context, e1, e2);
    // };

    // canvas.addEventListener("mousedown", (e1) => {
    //   const handler = (e2) => {
    //     mouseMoveHandler(e1, e2);
    //   };

    //   canvas.addEventListener("mousemove", handler);

    //   canvas.addEventListener("mouseup", () => {
    //     canvas.removeEventListener("mousemove", handler);
    //   });
    // });

    // Circle Tool

    const mouseMoveHandler = (e1, e2) => {
      drawCircle(context, e1, e2);
    };

    canvas.addEventListener("mousedown", (e1) => {
      const handler = (e2) => {
        mouseMoveHandler(e1, e2);
      };

      canvas.addEventListener("mousemove", handler);

      canvas.addEventListener("mouseup", () => {
        canvas.removeEventListener("mousemove", handler);
      });
    });
  }, []);

  return (
    <div className="App">
      <canvas width={1000} height={500} ref={canvasRef} id="myCanvas"></canvas>
    </div>
  );
}
