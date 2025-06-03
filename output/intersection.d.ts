type personTN = {
    name: string;
};
type personTA = {
    age: number;
};
type personTC = personTN & personTA;
declare var personDataA: {
    name: string;
};
declare var personDataB: {
    age: number;
};
declare var personDataC: personTC;
