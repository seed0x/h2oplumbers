import { toast as sonnerToast } from "sonner";

export const toast = {
  success(title: string, description?: string) {
    return sonnerToast.success(title, {
      description,
    });
  },
  error(title: string, description?: string) {
    return sonnerToast.error(title, {
      description,
    });
  },
  info(title: string, description?: string) {
    return sonnerToast.info(title, {
      description,
    });
  },
  warning(title: string, description?: string) {
    return sonnerToast.warning(title, {
      description,
    });
  },
};


