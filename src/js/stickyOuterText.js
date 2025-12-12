document.addEventListener("DOMContentLoaded", function () {
  (function () {
    const pairs = [];

    document.querySelectorAll('.soft-head-1[data-group]').forEach(outline => {
      const group = outline.getAttribute('data-group');
      const fill = document.querySelector(`.soft-head-2[data-group="${group}"]`);
      if (fill) pairs.push({ outline, fill });
    });

    if (pairs.length === 0) return;

    pairs.forEach(({ outline }) => {
      outline.style.position = 'fixed';
      outline.style.margin = '0';
      outline.style.pointerEvents = 'none';
      outline.style.willChange = 'top, left, width, height';
      outline.style.transform = 'none';
    });

    function updatePositions() {
      pairs.forEach(({ outline, fill }) => {
        const r = fill.getBoundingClientRect();

        outline.style.top = Math.round(r.top) + 'px';
        outline.style.left = Math.round(r.left) + 'px';
        outline.style.width = Math.round(r.width) + 'px';
        outline.style.height = Math.round(r.height) + 'px';
      });
    }

    function rafUpdate() {
      requestAnimationFrame(updatePositions);
    }

    window.addEventListener('scroll', rafUpdate, { passive: true });
    window.addEventListener('resize', updatePositions, { passive: true });
    window.addEventListener('load', () => {
      updatePositions();
      setTimeout(updatePositions, 200);
      setTimeout(updatePositions, 500);
    });
  })();
});
