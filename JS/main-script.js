window.addEventListener('DOMContentLoaded', () => {
  const { createTimeline, stagger, splitText } = anime;

  const { words, chars } = splitText('h1', {
    words: { wrap: 'clip' },
    chars: true,
  });

  createTimeline({
    loop: true,
    defaults: { ease: 'inOut(2)', duration: 650 }
  })
  .add(words, {
    y: ['5', '0%'],
  }, stagger(250))
  .add(chars, {
    y: '5%',
  }, stagger(10, { from: 'random' }));
});