# Review Notes - Iteration 2

## Issues Found
1. Process section: The 4 step cards are NOT visible - they have the `reveal` class but the IntersectionObserver isn't triggering. The section header shows but the steps grid is blank.
2. Why Us section: Same issue - the 6 differentiator cards are NOT visible. Header shows but cards are blank.
3. About section: The values grid at the bottom (4 cards) also appears blank - same reveal issue.
4. The heading "Blooming Tech Solutions" looks better now with increased line-height.
5. Nav items are properly in one row with no overlap.
6. "Get in Touch" button is properly separated on the right.
7. Stats bar shows: Global / 24/7 / APAC / End-to-End - good.

## Root Cause
The `reveal` class items start with `opacity: 0` and `transform: translateY(20px)`. The IntersectionObserver in each component's `useReveal()` hook adds `visible` class. But the individual cards/items within the grid also have `reveal` class but don't have their own observer attached - only the parent container does.

## Fix Needed
Each card/item that has `reveal` class needs its own IntersectionObserver, OR we should remove `reveal` from individual items and only keep it on the container, OR add a useReveal hook to each item.
