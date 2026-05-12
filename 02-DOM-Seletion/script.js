/**
 * DOM SELECTION DEMO: getElement* vs querySelector*
 * Visualizing selections and collection behaviors in the browser.
 */

// ---------------------------------------------------------
// ⚠️ SECURITY NOTE: THE "INNERHTML" WARNING
// Using .innerHTML can be dangerous if content comes from a user.
// 👉 UNSAFE innerHTML can cause XSS (Cross-Site Scripting).
// ✅ Use .textContent or .innerText for safer updates.
// ---------------------------------------------------------

// 1. SELECT BY ID
// getElementById: High performance, specific. No '#' needed.
// querySelector('#id'): Versatile, but requires CSS syntax.
const mainTitle = document.getElementById('main-title');
mainTitle.style.color = 'crimson';
mainTitle.style.textTransform = 'uppercase';
console.log('ID Selection:', mainTitle);

// 2. SELECT BY CLASS (The "Live" Collection)
// Returns an HTMLCollection. 
// ⚠️ LIVE: Updates automatically if the DOM changes.
// ⚠️ NO .forEach(): Requires Array.from() to use modern iteration.
const descriptions = document.getElementsByClassName('description');
Array.from(descriptions).forEach(el => {
    el.style.borderLeft = '4px solid crimson';
    el.style.paddingLeft = '10px';
});
console.log('Class Selection (Live):', descriptions);

// 3. SELECT BY TAG
// Returns a live HTMLCollection of all <p> elements.
const allParagraphs = document.getElementsByTagName('p');
if (allParagraphs[1]) {
    allParagraphs[1].style.fontStyle = 'italic';
}

// 4. SELECT SINGLE ELEMENT (querySelector)
// Returns the FIRST match only. Uses CSS syntax ('.class', '#id', 'tag').
const firstButton = document.querySelector('button');
if (firstButton) firstButton.style.fontWeight = 'bold';

const actionBtn = document.querySelector('#action-btn'); 
actionBtn?.addEventListener('click', () => alert('Selection logic confirmed!'));

// 5. SELECT ALL MATCHES (The "Static" Collection)
// querySelectorAll returns a NodeList.
// ✅ STATIC: A snapshot that does NOT update if the DOM changes later.
// ✅ NATIVE .forEach(): No Array conversion required.
const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach((box, index) => {
    box.style.backgroundColor = 'skyblue';
    box.style.display = 'flex';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.innerText = `Box ${index + 1}`; // Safe text update
    box.style.borderRadius = '4px';
});

// 6. ADVANCED CSS SELECTORS (querySelector Power)
// Multiple classes: Element must have BOTH .description and .highlight
const specialPara = document.querySelector('.description.highlight');
if (specialPara) specialPara.style.backgroundColor = '#ffff00';

// Pseudo-classes: Selecting specific structural elements
const lastBox = document.querySelector('.box:last-of-type');
if (lastBox) lastBox.style.border = '2px dashed black';