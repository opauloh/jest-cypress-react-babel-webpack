import {getFlyingSuperHeroes} from '../super-heroes'

test('return super heroes that can fly with snapshot', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchSnapshot() // Snapshots are good, but the problem altough, is that they can be very long and unreadable...
});
test('return super heroes that can fly with inline snapshot', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "laser",
          "fly",
        ],
      },
      Object {
        "name": "dri3lis",
        "powers": Array [
          "premonition",
          "fly",
        ],
      },
    ]
  `)
})
