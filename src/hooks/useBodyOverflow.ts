import { useEffect } from "react";

export function useBodyOverflow(isHidden: boolean) {
  useEffect(() => {
    document.body.style.overflow = isHidden ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHidden]);
}
