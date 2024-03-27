_default:
  @just --choose

# local dev

dash:
	@pnpm --filter @dash/app start

site:
	@pnpm --filter site start

storybook:
	@pnpm --filter @storybook/app start

dev:
  pnpm concurrently \
  -n ds,st,sb \
  -c cyan.dim,magenta.dim,green.dim \
  "just dash" "just site"
  # "just dash" "just site" "just storybook"

typecheck:
	@pnpm exec nx run-many --parallel=10 --target=typecheck

nuke-node-modules:
  # @pnpm store prune
  @find . -name "node_modules" -type d -prune -exec rm -rf {} + && pnpm i
