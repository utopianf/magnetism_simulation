import "./App.css";

import React, { useMemo, useState } from "react";
import Plot from "react-plotly.js";
import { Vector2 } from "three";

const App = () => {
  const size = 360;

  const [J, setJ] = useState(3e-3);
  const [delta1, setDelta1] = useState(-15e-6);
  const [delta2, setDelta2] = useState(12e-6);

  const plotE = useMemo(() => {
    const CENTER = new Vector2(0, 0);
    const theta1_angle = Array.from(
      { length: size },
      (_, i) => (360 / size) * i
    );
    const theta2_angle = Array.from(
      { length: size },
      (_, i) => (360 / size) * i
    );
    let E = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => 0)
    );
    const S1 = new Vector2(5, 0);
    const S2 = new Vector2(5, 0);
    let minE = Infinity;
    let minTheta1Angle = 0;
    let minTheta2Angle = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        E[i][j] = J * S1.dot(S2) + delta1 * S1.y * S1.y + delta2 * S2.y * S2.y;
        if (E[i][j] - minE < -1e-12) {
          minE = E[i][j];
          minTheta1Angle = theta1_angle[i];
          minTheta2Angle = theta2_angle[j];
        }
        S2.rotateAround(CENTER, ((360 / size) * Math.PI) / 180);
      }
      S1.rotateAround(CENTER, ((360 / size) * Math.PI) / 180);
    }
    return (
      <>
        <div>minE: {minE}</div>
        <div>θ1: {minTheta1Angle}</div>
        <div>θ2: {minTheta2Angle}</div>
        <Plot
          data={[
            {
              z: E,
              x: theta1_angle,
              y: theta2_angle,
              type: "contour",
              ncontours: 360,
              line: { width: 0 },
            },
          ]}
          layout={{
            width: 1080,
            height: 720,
            title: "H = JS1･S2 + Δ1|S1z|^2 + Δ2|S2z|^2",
          }}
        />
      </>
    );
  }, [J, delta1, delta2]);

  const [JForm, setJForm] = useState(J);
  const [delta1Form, setDelta1Form] = useState(delta1);
  const [delta2Form, setDelta2Form] = useState(delta2);
  const handleChange = (e) => {
    switch (e.target.name) {
      case "J":
        setJForm(e.target.value);
        break;
      case "delta1":
        setDelta1Form(e.target.value);
        break;
      case "delta2":
        setDelta2Form(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJ(JForm);
    setDelta1(delta1Form);
    setDelta2(delta2Form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          J
          <input type="text" name="J" value={JForm} onChange={handleChange} />
        </label>
        <br />
        <label>
          Δ1
          <input
            type="text"
            name="delta1"
            value={delta1Form}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Δ2
          <input
            type="text"
            name="delta2"
            value={delta2Form}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      {plotE}
    </>
  );
};

export default App;
