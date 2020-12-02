/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: 5,
    y: 5,

    /**
     * Двигает игрока по переданному направлению. ПРи достжение "края"
     * выводит alert и
     * @param {{x: int, y: int}} nextPoint Следующая точка пользователя.
     */
    move(nextPoint) {
        if (nextPoint.x < 0 || nextPoint.y < 0 ||nextPoint.x > config.colsCount-1 ||nextPoint.y > config.rowsCount-1 ) {
            {
                alert('Выход за границы')
                return
            }
        }
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }


};