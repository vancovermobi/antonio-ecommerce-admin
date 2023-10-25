"use client";

import { useEffect } from "react"

import { useStoreModalHook } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModalHook((state) => state.onOpen)
  const isOpen = useStoreModalHook((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen()
    }
  }, [ isOpen, onOpen ]) 
  
  return null;
}

export default SetupPage

