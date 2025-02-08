# TypeScript Type Handling Bug

This repository demonstrates a common error in TypeScript related to type handling in functions.

## Description

The `printCoord` function in `bug.ts` demonstrates a scenario where a seemingly correct type definition can lead to unexpected behavior if not carefully handled. The bug causes a potential runtime error if the function is called with an object that does not strictly adhere to the expected type. The solution in `bugSolution.ts` addresses this. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Compile and run the code using `tsc bug.ts && node bug.js`.
4. Observe the output and compare it with the corrected version in `bugSolution.ts`.

## Solution

The solution introduces a more robust type handling method in `bugSolution.ts`, preventing potential runtime errors.