// Copy CSS tokens to clipboard (kept)
const copyBtn = document.getElementById('copyTokens');
const tokenBlock = document.getElementById('tokenBlock');
copyBtn?.addEventListener('click', async () => {
	const text = tokenBlock?.innerText?.trim();
	try {
		await navigator.clipboard.writeText(text);
		copyBtn.textContent = 'Copied ✓';
		setTimeout(() => (copyBtn.textContent = 'Copy tokens'), 1600);
	} catch (e) {
		copyBtn.textContent = 'Press ⌘C to copy';
		setTimeout(() => (copyBtn.textContent = 'Copy tokens'), 1600);
	}
});

// Footer year (kept)
document.getElementById('year').textContent = new Date().getFullYear();

// Plot color dots on wheel
const wheel = document.querySelector('.wheel');
if (wheel) {
    const colors = [
        { name: 'Espresso', hue: 25, sat: 40, color: 'var(--mazha-espresso-base)' },
        { name: 'Taupe', hue: 30, sat: 25, color: 'var(--mazha-taupe-base)' },
        { name: 'Olive', hue: 75, sat: 30, color: 'var(--mazha-olive-base)' },
        { name: 'Sage', hue: 120, sat: 20, color: 'var(--mazha-sage-base)' },
        { name: 'Forest', hue: 140, sat: 50, color: 'var(--mazha-forest-base)' }
    ];

    colors.forEach(({ name, hue, sat, color }) => {
        // Convert hue to radians (0° = right, counter-clockwise)
        const angle = (hue - 90) * (Math.PI / 180); // -90 to start from top
        // Saturation as percentage of radius (50% = center, 100% = edge)
        const radiusPercent = 50 + (sat / 100) * 50; // Center is 50%, edge is 100%
        
        // Calculate position as percentages
        const x = 50 + (sat / 100) * 50 * Math.cos(angle); // Center is 50%
        const y = 50 + (sat / 100) * 50 * Math.sin(angle); // Center is 50%

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'color-dot';
        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.background = color;
        dot.title = `${name} • H${hue}° S${sat}%`;
        
        wheel.appendChild(dot);
    });
}