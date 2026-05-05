# Feature System — Abel alemu

This directory contains **assembly-only** feature systems that import shared UI and utils from `packages/`.

## Features

### 1) Resource Request
- UI: `Card`, `Button`, `Input`
- Utils: `capitalize`
- File: `feature1/index.jsx`

### 2) Notes System
- UI: `Card`, `Button`
- Utils: `formatDate`
- File: `feature2/index.jsx`

## Architecture
- Systems layer: `systems/Abel alemu/*` (configuration/assembly)
- Shared packages:
	- `packages/ui-components/*`
	- `packages/utils/*`
