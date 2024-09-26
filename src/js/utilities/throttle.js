// Определение функции throttle, которая принимает целевую функцию func и задержку delay (по умолчанию 250 мс).
export const throttle = (func, delay = 250) => {
    // Переменная isThrottled для контроля состояния торможения (ограничения вызова функции).
    let isThrottled = false;
    // Переменные для хранения аргументов и контекста последнего вызова функции,
    // когда она была заторможена.
    let savedArgs = null;
    let savedThis = null;

    // Возвращаем обертку вокруг целевой функции.
    return function wrap(...args) {
      // Если функция уже заторможена, сохраняем аргументы и контекст для вызова позже.
      if (isThrottled) {
        savedArgs = args;
        savedThis = this;
        return;
      }

      // Вызываем целевую функцию с текущими аргументами и контекстом.
      func.apply(this, args);
      // Устанавливаем состояние торможения в true.
      isThrottled = true;

      // Устанавливаем таймер, который снимет торможение через заданный интервал времени (delay).
      setTimeout(() => {
        isThrottled = false;

        // Если были сохранены аргументы и контекст для отложенного вызова,
        // вызываем функцию с этими параметрами и сбрасываем их.
        if (savedArgs) {
          wrap.apply(savedThis, savedArgs);
          savedThis = null;
          savedArgs = null;
        }
  
      }, delay);
    }
}
