export default function ({ app }) {
  console.log(app);
  for (const key of Object.keys(app)) {
    console.log(key);
  }
}