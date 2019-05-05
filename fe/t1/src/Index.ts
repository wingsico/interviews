

interface StringArray {
  [index: number]: string
}

var test: StringArray = {
  0: "haha",
  1: "hah2"
}

interface Shape {
  color: string
}

interface Penstroke {
  penWidth: number
}

interface Square extends Shape, Penstroke {
  sideLength: number
}


var a = <Square>{}
