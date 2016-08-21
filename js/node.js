/*
    нода
    */
class Node {

    /*
        конструктор
        */
    constructor(name, value, iteration) {
        this.dict = {
            name: name,
            value: value,
            iteration: iteration,
            left: null,
            right: null
        }

        console.log(`нода ${name}:${value} создана в итерации ${iteration}`)
    }
    

    /*
        свойства
        */
    get left() {
        return this.dict['left'];
    }

    // установить левую ноду
    set left(value) {
        if (!this.left)
            this.dict['left'] = value;
        else {
            let exception = {
            message: "Операция невозможна: левая нода уже присвоена!",
            operation: "Node.left.setter"
            }

        console.log(exception);
        throw exception;
        }
    }

    get right() {
        return this.dict['right']
    }

    // установить правую ноду
    // false если уже есть
    set right(value) {
        if (!this.right)
            this.dict['right'] = value;
        else {
            let exception = {
            message: "Операция невозможна: правая нода уже присвоена!",
            operation: "Node.right.setter"
            }

        console.log(exception);
        throw exception;
        }
    }

    // возвращает имя
    get name() {
        return this.dict['name'];
    };

    // запрещено
    set name(value) {
        let exception = {
            message: "Операция запрещена!",
            operation: "Node.name.setter"
        };

        console.log(exception);
        throw exception;
    }

    // возвращает значение
    get value() {
        return this.dict['value'];
    };

    // запрещено
    set value(value) {
        let exception = {
            message: "Операция запрещена!",
            operation: "Node.value.setter"
        };

        console.log(exception);
        throw exception;
    }

    // возвращает номер итерации
    get iteration() {
        return this.dict['iteration'];
    };

    // запрещено
    set iteration(value) {
        let exception = {
            message: "Операция запрещена!",
            operation: "Node.iteration.setter"
        };

        console.log(exception);
        throw exception;
    }



    /*
        методы
        */
    // сверяет значения
    // true  - значение больше хранимого
    // false - значение меньше или равно хранимому
    compare(n) {
        return n.value > this.value;
    }
    
    // добавить ноду
    add(n) {
        if (this.compare(n)) { // добавляемое значение больше => направо
            if (this.right)
                this.right.add(n);
            else {
                this.right = n;
                console.log(`${this.name}:${this.value} => правая нода = ${n.name}:${n.value}`);
            }
        }
        else { // добавляемое значение меньше или равно => налево
            if (this.left)
                this.left.add(n);
            else {
                this.left = n;
                console.log(`${this.name}:${this.value} => левая нода = ${n.name}:${n.value}`);
            }
        }
    }

    // обход ноды
    walk() {
        let result = {
            names: [],
            values: []
        };

        if (this.left) {
            let lResult = this.left.walk();
            result.names = result.names.concat(lResult.names);
            result.values = result.values.concat(lResult.values);
        }

        result.names.push(this.name);
        result.values.push(this.value);

        if (this.right) {
            let rResult = this.right.walk();
            result.names = result.names.concat(rResult.names);
            result.values = result.values.concat(rResult.values);
        }

        return result;
    }

    // возвращает строку ноды
    toString() {
        if (this.left || this.right)
            return `${this.value}(${(this.left ? this.left.toString() : 'null')}, ${(this.right ? this.right.toString() : 'null')})`;
        else
            return this.value.toString();
    }

    // возвращает строку ноды на момент итерации
    toIterationString(iteration) {
        if(this.iteration <= iteration) {
            if ((this.left && this.left.iteration <= iteration) || (this.right && this.right.iteration <= iteration))
                return `${this.value}(${((this.left && this.left.iteration <= iteration) ? this.left.toIterationString(iteration) : 'null')}, ${((this.right && this.right.iteration <= iteration)? this.right.toIterationString(iteration) : 'null')})`;
            else
                return this.value.toString();
        }
        else
            return 'null';
    }
}
