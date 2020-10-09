export default function random(arrayLength: number) {
    let rty = Math.floor(Math.random() * arrayLength);
    console.log(rty, arrayLength);
    return rty;
}
