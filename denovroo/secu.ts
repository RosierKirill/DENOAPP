// deno run --allow-read main.ts
const data = await Deno.readTextFile("deno.json");
console.log(data);

// deno run --allow-net main.ts
const response = await fetch("https://api.github.com/users/denoland");
const user = await response.json();
console.log(user.name);
