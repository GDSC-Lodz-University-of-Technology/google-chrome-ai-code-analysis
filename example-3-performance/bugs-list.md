# Performance

## Bugs List

### INEFFICIENT ANIMATION

#### Description

PERFORMANCE BOTTLENECK: Layout Thrashing in the `inefficient-animation.js` file inside `animate` function.
On each frame, we READ a layout property (`offsetWidth`) and then immediately
WRITE a layout property (`style.left`). This forces the browser to
recalculate the layout synchronously, which is very slow.

#### Solution

Do not animate HTML properties. Instead, use CSS transform to put all calculations on the GPU
and do not retrigger re layouts every time the ball moves

### SLOW TABLE RE-RENDER

PERFORMANCE BOTTLENECK: Re-rendering the whole table instead of a single cell
ON each cell edit whole table is being re-rendered. 
This is a huge operation that will be even worse if the table is bigger and bigger

#### Solution

Add an identifier to each cell, so you can change the content of only a single cell instead of the whole table.
