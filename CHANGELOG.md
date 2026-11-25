# Changelog

All notable changes to Techly are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.6.0] - 2026-11-25

### Added

- `notice` shortcode for info, tip, warning and caution boxes, styled like blockquotes with a colored border, icon and title. Colors meet WCAG AA in light and dark mode.
- Notice types are configured under `params.notices.<type>` in your site config (TOML or YAML): `title`, `icon` (any SVG in `assets/icons/`, or `""` for none) and `color` (one value or separate `light` and `dark` values). Override single keys of the built-in types or add your own types.
- Custom notice titles per notice (positional or `title=`) and translatable default titles (`notice_<type>` i18n keys).
- `note` as an alias for `info`, so content written for hugo-notice keeps working.

### Fixed

- README: document `markup.highlight.noClasses = false` as a required site setting. Hugo doesn't take it from the theme, and without it code blocks use inline Monokai colors that make plain text unreadable.

## [2.5.1] - 2026-11-22

### Fixed

- `toc = false` in front matter hides the table of contents on posts ([#3](https://github.com/m1rm/techly/issues/3)).
- No empty table of contents box on posts and pages without headings in the configured `startLevel`–`endLevel` range.

## [2.5.0] - 2026-11-22

### Added

- Canonical link (`<link rel="canonical">`) on every page. Paginated lists (home, tags, series) point to the current page, so `/page/2/` is canonical to itself.
- Overridable `canonical` block in `baseof.html` and `head/canonical.html` partial for custom paginating layouts.
- `404.html` page with links to the home and search pages (`noindex`, no canonical, not in the sitemap).

## [2.4.0] - 2026-10-17

### Changed

- `theme.toml` uses themes.gohugo.io tags and richer metadata.

### Fixed

- Search escapes titles and snippets before highlighting matches.
- Search encodes quotes in suggestions and closes the suggestion list when focus leaves it.
- Accessibility: search suggestions are plain links, and menu items have a visible focus style.

## [2.3.1] - 2026-05-31

### Fixed

- Subheadings in the table of contents are nested under their parent heading.

## [2.3.0] - 2026-05-31

### Added

- Copy button in the top right corner of code blocks, shown on hover; copies the code to the clipboard.

### Fixed

- Code blocks were unreadable in dark mode because some color variables were missing.

## [2.2.1] - 2026-05-31

### Fixed

- Accessibility: raised the contrast of `--text-muted` in light and dark mode.

## [2.2.0] - 2026-05-30

### Added

- `params.indexHome` (default `true`) controls whether the home page is indexed and listed in `sitemap.xml`.

## [2.1.0] - 2026-05-30

### Added

- Opt-in indexing: the `index` front matter parameter sets `<meta name="robots">` and controls inclusion in `sitemap.xml`.
- `robots` front matter parameter to set a custom robots value, overriding `index`.
- Documentation for both parameters.

### Changed

- **Pages are now `noindex` and excluded from `sitemap.xml` unless they set `index = true`.** Add `index = true` to content that search engines should index.

## [2.0.2] - 2026-05-29

### Fixed

- The footer shows a year range only when `params.footer.since` differs from the current year (no more "2026 - 2026").

## [2.0.1] - 2026-05-29

### Fixed

- `go.mod` module path is now `github.com/m1rm/techly/v2`, so the theme can be installed as a v2 Hugo Module. Use this version instead of 2.0.0.

## [2.0.0] - 2026-05-29

### Added

- Home page hero configured via `params.banner.heading` and `params.banner.subheading`, separate from the navbar `title`.
- Related articles based on Hugo's related content (tag score matching), with an optional "More in …" link.
- Footer social links via `menus.social` and SVG icons.
- Pagination for tag archives and post series.
- Copyright year range in the footer via `params.footer.since`.
- Image helper partial.
- Site overrides in `assets/css/custom.css` are loaded.

### Changed

- **Breaking:** the module path is `github.com/m1rm/techly/v2` (fixed in 2.0.1, see there).
- **Breaking:** the home page hero uses `params.banner` instead of the site title and subtitle.
- **Breaking:** the search page is expected as a page folder (`/search` or `/page/search`); override with `params.searchPagePath`.

### Fixed

- The footer sticks to the bottom of the viewport on short pages.
- The "Read more" link is always at the bottom left of post cards.
- Code block styling.

### Known issues

- The `go.mod` module path is wrong in this release. Use 2.0.1 or later.

## [1.0.0] - 2026-05-22

### Added

- Theme metadata, screenshot and thumbnail for themes.gohugo.io.
- README with installation and configuration docs.

### Changed

- **Breaking:** the cover image front matter parameter is `featuredImage` (was `featured_image`).
- The featured image is shown above the post, with fewer horizontal lines.

## [0.5.0] - 2026-05-22

### Changed

- Improved post series UX.
- Tags: better positioning and hover colors.
- More compact layout overall.
- The "stay up to date" call-to-action is shown on the home page only.

## [0.4.1] - 2026-05-22

### Fixed

- Pinned posts are pinned on the home page and in the posts section.

## [0.4.0] - 2026-05-22

### Added

- Pin posts to the top of listings with `pinned = true`.

## [0.3.0] - 2026-05-22

### Added

- Post series out of the box.

## [0.2.0] - 2026-05-22

### Added

- Favicons and web app manifest.

## [0.1.2] - 2026-05-22

### Fixed

- Accessibility: color contrast of dates in dark mode.

## [0.1.1] - 2026-05-22

### Changed

- Removed the light/dark mode toggle; the theme follows the system setting.
- The mobile menu uses CSS only, reducing JavaScript.

## [0.1.0] - 2026-05-22

### Added

- Basic theme layout.
- Client-side search.

## [0.0.1] - 2026-05-22

### Added

- Working skeleton theme with basic configuration and license.

> **Note:** the `v0.0.1` tag was moved by mistake and points at the same commit as v0.1.1 (`9045d47`). The release described here is commit `5c41631`. The tag stays as it is because the Go module proxy has already cached it.

[Unreleased]: https://github.com/m1rm/techly/compare/v2.6.0...HEAD
[2.6.0]: https://github.com/m1rm/techly/compare/v2.5.1...v2.6.0
[2.5.1]: https://github.com/m1rm/techly/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/m1rm/techly/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/m1rm/techly/compare/v2.3.1...v2.4.0
[2.3.1]: https://github.com/m1rm/techly/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/m1rm/techly/compare/v2.2.1...v2.3.0
[2.2.1]: https://github.com/m1rm/techly/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/m1rm/techly/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/m1rm/techly/compare/v2.0.2...v2.1.0
[2.0.2]: https://github.com/m1rm/techly/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/m1rm/techly/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/m1rm/techly/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/m1rm/techly/compare/v0.5.0...v1.0.0
[0.5.0]: https://github.com/m1rm/techly/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/m1rm/techly/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/m1rm/techly/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/m1rm/techly/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/m1rm/techly/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/m1rm/techly/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/m1rm/techly/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/m1rm/techly/compare/5c41631...v0.1.0
[0.0.1]: https://github.com/m1rm/techly/tree/5c41631
