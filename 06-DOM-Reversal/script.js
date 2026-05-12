/**
 * DOM TRAVERSAL: Navigating Relationships
 * Thinking of the DOM as a Family Tree
 */

const list = document.querySelector("#product-list");

// 1. MOVE UP: .parentElement
// Finds the direct container of the current element.
const container = list.parentElement;
container.style.border = "2px solid #007bff";
console.log("Parent Element:", container);

// 2. MOVE DOWN: .children
// Returns a LIVE HTMLCollection of direct child elements (no text nodes).
const allItems = list.children;
console.log("Total Children:", allItems.length);

// 3. TARGET FIRST & LAST: .firstElementChild / .lastElementChild
// Much cleaner than list.children[0]
list.firstElementChild.style.color = "green";
list.lastElementChild.style.color = "red";

// 4. MOVE SIDEWAYS: .nextElementSibling / .previousElementSibling
// Selecting the middle item via a class, then finding its neighbors.
const banana = document.querySelector(".target-item");
const nextItem = banana.nextElementSibling;
const prevItem = banana.previousElementSibling;

if (nextItem) nextItem.classList.add("highlight");
if (prevItem) prevItem.style.textDecoration = "underline";

// 5. THE "CLOSEST" METHOD (Advanced Upward Traversal)
// Searches up the tree for the nearest parent matching a selector.
// Great for finding a container from a button inside it.
const priceTag = banana.querySelector("span");
const nearestList = priceTag.closest("ul");
console.log("Found ancestor list via .closest():", nearestList);