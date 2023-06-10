import { useContext, useMemo } from "react";

export const useMemoContext = (myContext, key) => {
  const { [key]: context } = useContext(myContext);

  return useMemo(() => {
    return context;
  }, [context]);
};
