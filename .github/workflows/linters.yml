name: Linters

on:
  pull_request:
    types: [opened, synchronize, reopened, ready_for_review]
    paths:
      - README.md
      - Moderation-Policy.md
      - .github/workflows/linters.yml
  push:
    branches:
      - main
    paths:
      - README.md
      - Moderation-Policy.md
      - .github/workflows/linters.yml

concurrency:
  group: ${{ github.workflow }}-${{ github.head_ref || github.run_id }}
  cancel-in-progress: false

permissions:
  contents: read

jobs:
  lint-md-lists:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        file:
          - README.md
          - Moderation-Policy.md
    steps:
      - uses: actions/checkout@692973e3d937129bcbf40652eb9f2f61becf3332  # v4.1.7
        with:
          persist-credentials: false
      - run: tools/lint-readme-lists.mjs "$FILE"
        env:
          FILE: ${{ matrix.file }}
