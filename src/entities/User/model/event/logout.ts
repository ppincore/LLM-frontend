const eventName = 'logout-event';

const logoutEvent = new CustomEvent(eventName);

export const triggerLogoutEvent = () => document.dispatchEvent(logoutEvent);

export const listenLogoutEvent = (callback: () => void) => {
  document.addEventListener(eventName, callback);
  return {
    unsubscribeEvent: () => document.removeEventListener(eventName, callback),
  };
};
