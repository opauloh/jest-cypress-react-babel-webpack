const heroes = [
  {
    name: 'Dynaguy',
    powers: ['laser', 'fly']
  },
  {
    name: 'Paulo',
    powers: ['press arms']
  },
  {
    name: 'dri3lis',
    powers: ['premonition', 'fly']
  }
]
export const getFlyingSuperHeroes = () => heroes.filter(hero => hero.powers.includes('fly'))