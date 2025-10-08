export function add(a: number, b: number): number {
  return a + b;
}

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

// deno run --allow-read main.ts
const data = await Deno.readTextFile("deno.json");
console.log(data);

// deno run --allow-net main.ts
const response = await fetch("https://api.github.com/users/denoland");
const user = await response.json();
console.log(user.name);

// deno fmt main.ts

// deno lint main.ts

// deno info main.ts

// deno add npm:react
