class A{
    constructor(props){
        this.a="hello";
    }
    
}

class B extends A{
    constructor(){
        console.log(this.a)
    }
}

console.log(new B());


class A{
    constructor(props){
        this.props=props
    }
}

class B extends A{
    constructor(props){
        super(props);
        console.log(this.props)
    }
}
console.log(new B({title:'hello world'}))