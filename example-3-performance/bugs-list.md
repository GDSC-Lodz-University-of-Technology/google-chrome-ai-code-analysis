# Performance

## Bugs List

### INEFFICIENT ANIMATION

#### Description

PERFORMANCE BOTTLENECK: Layout Thrashing in the `inefficient-animation.js` file inside `animate` function.
On each frame, we READ a layout property (`offsetWidth`) and then immediately
WRITE a layout property (`style.left`). This forces the browser to
recalculate the layout synchronously, which is very slow.

#### Solution

DO not animate HTML properties. Instead, use CSS transform to put all calculations on the GPU
and do not retrigger re layouts every time the ball moves

### SLOW TABLE RE-RENDER
