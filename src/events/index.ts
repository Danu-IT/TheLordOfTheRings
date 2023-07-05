function subscribe(eventName: string, listener: () => void): void{
    document.addEventListener(eventName, listener);
}
  
function unsubscribe(eventName: string, listener: () => void): void{
    document.removeEventListener(eventName, listener);
}

function publish (eventName: string): void {
    const event = new CustomEvent(eventName);
    document.dispatchEvent(event);
}

export { subscribe, unsubscribe, publish }