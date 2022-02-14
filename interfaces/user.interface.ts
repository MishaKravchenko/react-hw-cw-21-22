//*2--------------------------------------
// export interface IUser {
//     name: string;
//     age: number;
//     status: boolean;
// }

//*3--------------------------------------

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address:IAddress,
    phone: string;
    website: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}
