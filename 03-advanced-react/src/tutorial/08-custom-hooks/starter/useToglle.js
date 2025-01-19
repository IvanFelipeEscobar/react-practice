import { useState } from "react";

const useToggle = (defaluValue) => {
      const [show, setShow] = useState(defaluValue);
      const toggle = () => setShow(!show)
      return [show, toggle]
    
}
export default useToggle