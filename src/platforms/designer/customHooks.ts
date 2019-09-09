import { useState } from "react";

export const useToggleStatus = (
  initValue: boolean = true
): { status: boolean; handleToogle: () => void } => {
  const [status, setStatus] = useState<boolean>(initValue);
  const handleToogle = () => {
    setStatus(!status);
  };
  return { status, handleToogle };
};
