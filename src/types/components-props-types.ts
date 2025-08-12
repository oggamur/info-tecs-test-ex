export type UserTableRoadType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: 'male' | 'female';
  phone: string;
  email: string;
  image: string;
  height: number;
  weight: number;
  address: {
    address: string;
    country: string;
    city: string;
  };
};
