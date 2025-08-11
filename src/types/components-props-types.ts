export type UserTableRoadType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: 'male' | 'female';
  phone: string;
  email: string;
  address: {
    country: string;
    city: string;
  };
};
