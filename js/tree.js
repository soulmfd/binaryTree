/*
    дерево
    */
class Tree {
    /*
        конструктор
        */
    constructor() {
        this.dict = {
            input: [], // входные числа
            root: null, // корень
            count: 0 // число элементов в дереве
        }
    }



    /*
        свойства
        */
    // возвращает массив входных чисел
    get input() { return this.dict['input']; }
    
    // запрещено
    set input(value) { 
        let exception = {
            message: "Операция запрещена!",
            operation: "Tree.input.setter"
        };

        console.log(exception);
        throw exception;
    }

    // возвращает корень дерева
    get root() { return this.dict['root']; }

    // запрещено
    set root(value) { 
        let exception = {
            message: "Операция запрещена!",
            operation: "Tree.root.setter"
        };

        console.log(exception);
        throw exception;
    }

    // возвращает кол-во элементов в дереве
    get count() { return this.dict['count']; }

    // запрещено
    set count(value) { 
        let exception = {
            message: "Операция запрещена!",
            operation: "Tree.count.setter"
        };

        console.log(exception);
        throw exception;
    }



    /*
        методы
        */
    // добавить новое значение
    add(name, value) {
        this.input.push(value);

        let n = new Node(name, value, this.count);

        if (this.root == null)
            this.dict['root'] = n;
        else
            this.root.add(n);

        this.dict['count']++;
    };
	
	// обход дерева
	walk() {
		return this.root ? this.root.walk() : [];
	}

    // очистка дерева
    clear() {
        if (this.root) {
            this.dict['input'] = [];
            this.dict['root'] = null;
            this.dict['count'] = 0;
        }
    }

    toString() {
        return `в дереве ${this.count} элементов`;
    }
};