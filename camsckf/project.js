(() => {
  'use strict';
  const video = document.getElementById('paper-video');
  const jump = document.getElementById('jump-to-demo');
  const videoStatus = document.getElementById('video-status');
  jump.hidden = false;
  jump.addEventListener('click', async () => {
    const startDemo = async () => {
      video.currentTime = 52;
      video.focus({ preventScroll: true });
      video.scrollIntoView({ block: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      try { await video.play(); videoStatus.textContent = 'Playing the experimental demonstration from 52 seconds.'; }
      catch { videoStatus.textContent = 'Video positioned at 52 seconds. Press play to start the experimental demonstration.'; }
    };
    if (video.readyState >= 1) await startDemo();
    else { video.addEventListener('loadedmetadata', startDemo, { once: true }); video.load(); }
  });
  video.addEventListener('error', () => {
    videoStatus.textContent = 'The video could not be loaded. Use the Download video link to open the original file.';
  });
  const copyButton = document.getElementById('copy-citation');
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const citation = document.getElementById('bibtex');
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText(citation.textContent); status.textContent = 'Citation copied.'; }
    catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
})();
