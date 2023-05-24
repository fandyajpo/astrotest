import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
// interface Props {
//   children: ComponentChildren | ComponentChildren[];
// }

export default function Count() {
  let [count, setCount] = useState(0);
  return (
    <>
      <div class="counter">
        <button onClick={() => setCount((a) => a + 1)}>+</button>
        <pre>{count}</pre>
        <button onClick={() => setCount((a) => a - 1)}>-</button>
      </div>
    </>
  );
}
