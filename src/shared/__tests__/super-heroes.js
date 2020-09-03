import { getFlyingSuperHeroes} from '../super-heroes';

test('return super heroes that can fly', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchSnapshot()
})