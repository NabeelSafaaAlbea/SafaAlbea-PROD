"use client"

import { toast as sonnerToast } from "sonner"

/**
 * Modern wrapper for useToast that bridges your existing code to Sonner.
 * This fixes the "@components/ui/toast" import error by using the 
 * modern Sonner library instead of the deprecated Radix Toast.
 */

export function useToast() {
  return {
    /**
     * The toast function accepts title, description, and variant.
     * If variant is "destructive", it shows a red error toast.
     */
    toast: ({ title, description, variant, ...props }: any) => {
      if (variant === "destructive") {
        return sonnerToast.error(title, {
          description: description,
          ...props,
        })
      }
      return sonnerToast.success(title, {
        description: description,
        ...props,
      })
    },
    dismiss: (toastId?: string) => sonnerToast.dismiss(toastId),
  }
}

/**
 * Standalone toast export for use outside of components if needed.
 */
export const toast = (props: any) => {
  if (props.variant === "destructive") {
    return sonnerToast.error(props.title, { description: props.description })
  }
  return sonnerToast.success(props.title, { description: props.description })
}