export const randomTime = (nb) => (
  Math.floor(Math.random() * 400) * nb || 1
)
export const randomChoice = (item, nbMax = 10) => {
  return item[(Math.floor(Math.random() * 42)% nbMax)];
}
