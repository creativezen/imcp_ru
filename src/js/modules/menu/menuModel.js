// Определение класса Model для хранения состояния и данных приложения.
export default class menuModel {
    // Свойство, отражающее состояние открытия меню. Используется для контроля
    // отображения мобильного меню. По умолчанию меню закрыто (false).
    open = false;

    // Свойство для хранения высоты шапки сайта. Инициализировано нулем,
    // и должно быть установлено в актуальное значение в процессе выполнения.
    headerHeight = 0;

    // Свойство для хранения высоты героического блока (обычно первый визуально значимый блок на странице).
    // Инициализировано нулем и должно быть обновлено до актуального значения для правильной работы логики.
    heroHeight = 0;

    // Свойство для хранения вычисленной позиции навигации. Это значение используется
    // для определения момента, когда должно произойти изменение вида шапки или других элементов при скролле.
    navPosition = 0;

    // Метод для вычисления и установки позиции навигации. Это позиция, при достижении которой
    // (обычно при прокрутке страницы) может изменяться состояние или внешний вид шапки.
    // Вычисляется как разница между высотой героического блока и высотой шапки.
    setNavPosition() {
        this.navPosition = this.heroHeight - this.headerHeight;
    }
}
