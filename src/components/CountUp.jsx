import React, { useEffect, useRef, useState } from "react";

export default function CountUp({
  from = 0,
  to = 100,
  duration = 1200,
  suffix = "",
}) {
  const [val, setVal] = useState(from);
  const ref = useRef();
  useEffect(() => {
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const n = Math.round(from + (to - from) * p);
      setVal(n);
      if (p < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [from, to, duration]);
  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}
