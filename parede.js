class Parede {
  constructor(x, y, w, h) {
    //propriedades do objeto
    //this.

    this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  show() {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}
