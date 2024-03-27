nuke-node-modules:
  # @pnpm store prune
  @find . -name "node_modules" -type d -prune -exec rm -rf {} + && pnpm i
