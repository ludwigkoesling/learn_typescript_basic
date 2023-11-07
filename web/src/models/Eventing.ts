type Callback = () => void;

export class Eventing {
  // we don't know the different event names, but strings pointing to array of callback functions
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] (the array value) is undefined when a user is created
    // this line prevents it, either its filled or empty
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  };
}
