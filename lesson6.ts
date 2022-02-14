//*1------------------------------------------------
// const func = (str: string): null | number => {
//     return 321
// }
// func("TS")


//*2------------------------------------------------
// import {IUser} from "./interfaces/user.interface"
//
// const user: IUser = {name: "Boris", age: 3, status: false}
//
// const userCounter = (user: Partial<IUser>): Partial<IUser> => {
//     return user
// }
//
// userCounter({name: "Boris", age: 5, status: false})


//*3------------------------------------------------
//user.interface.ts


//*4------------------------------------------------
// import {userService} from "./services/user.service";
//
// userService.getAll().then(value => value.data).then(users => {
//     for (const user of users) {
//         console.log(user.address.geo.lng);
//     }
// })


//*5------------------------------------------------
// import {IShapesActions} from "./interfaces/shapesActions.interface";
//
// class Rectangle implements IShapesActions {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return ((this.a * 2) + (this.b * 2));
//     }
// }
//
// class Triangle implements IShapesActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }
//
// const shapes: IShapesActions[] = [new Rectangle(1, 2), new Triangle(3, 2, 1), new Triangle(1, 2, 3)]
//
// for (const shape of shapes) {
//     console.log(shape.constructor["name"], "Area", shape.area())
//     console.log(shape.constructor["name"], "Perimeter", shape.perimeter())
// }


//*6------------------------------------------------
import {MyEnum} from "./enum";

console.log(MyEnum.FRI);
















