import { useRef, useLayoutEffect, MutableRefObject, RefObject } from "react";
import { TTabKey } from "./type";

type TUseSizeLinkage = (
  activeTabKey: TTabKey
) => {
  emitterDomRef: RefObject<HTMLElement | null>;
  recieverDomRef: RefObject<HTMLElement | null>;
};

/**
 * 用作一个dom尺寸随另一个dom尺寸变化
 * @param activeTabKey 
 */
export const useSizeLinkage: TUseSizeLinkage = activeTabKey => {
  const emitterDomRef = useRef<HTMLElement>(null); //变化者
  const recieverDomRef = useRef<HTMLElement>(null); //接受者
  const cacheRef = useRef(new Map()); // 做一个缓存,减少重排

  useLayoutEffect(() => {
    let size: any = {};
    if (cacheRef.current.has(emitterDomRef.current)) {
      size = cacheRef.current.get(emitterDomRef.current);
    } else {
      size.left = emitterDomRef.current && emitterDomRef.current.offsetLeft;
      size.width = emitterDomRef.current && emitterDomRef.current.offsetWidth;
      cacheRef.current.set(emitterDomRef.current, size);
    }
    if (recieverDomRef.current) {
      recieverDomRef.current.style.width = size.width;
      recieverDomRef.current.style.transform = `translate(${size.left}px,0px)`;
    }
  }, [activeTabKey]);
  return { emitterDomRef, recieverDomRef };
};
