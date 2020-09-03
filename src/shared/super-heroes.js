const heroes = [
  {
    name: 'Dynaguy',
    powers: ['laser', 'fly']
  },
  {
    name: 'Paulo',
    powers: ['press arms']
  }
]
export const getFlyingSuperHeroes = () => heroes.filter(hero => hero.powers.includes('fly'))