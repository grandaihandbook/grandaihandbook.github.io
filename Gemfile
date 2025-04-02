source "https://rubygems.org"

# To update GitHub Pages dependencies, run: `bundle update github-pages`
gem "github-pages", group: :jekyll_plugins

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-redirect-from"
end

# Windows and JRuby support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
# gem "wdm", ">= 0.1.0", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock Jekyll to version used by GitHub Pages
gem "jekyll", "~> 3.9.0"
gem "base64", "= 0.2.0"

# Required for Ruby 3.0+ as it was removed from standard library
gem "webrick", "~> 1.7"

# Help with Windows compilation issues
gem 'eventmachine', '~> 1.2', platforms: [:mingw, :x64_mingw, :mswin]

# If you're having issues with racc
gem 'racc', '~> 1.6', platforms: [:mingw, :x64_mingw, :mswin]