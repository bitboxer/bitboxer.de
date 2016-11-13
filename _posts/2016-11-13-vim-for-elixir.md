---
comments: true
date: 2016-11-13 20:00:00
layout: post
slug: vim-for-elixir
title: "Vim for elixir"
categories:
- elixir
- vim
---
During my two month sabbatical from work I am starting a small toy project using
elixir. I finally have the time to play around with this great language. But no
language is fun to write code in when your tooling is not configured correctly.
In this blog post I will go through my current vim configuration for elixir.

## [vim-polyglot](https://github.com/sheerun/vim-polyglot)

```
Plug 'sheerun/vim-polyglot'
```

[Vim-polyglot](https://github.com/sheerun/vim-polyglot) makes it really
easy to have support for tons of programming languages inside of vim. You won't
need to find out the package for a certain language, this plugin has them all.
And the best part of it is that it loads the language support on demand.

## [vim-gutentags](https://ludovicchabant/vim-gutentags)

```vim
Plug 'ludovicchabant/vim-gutentags'
let g:gutentags_cache_dir = '~/.tags_cache'
```

I am a heavy user of the tag system within vim. With it you can jump
to the definition of a method, class or module using Ctrl-]. More details
[in the vim wikia](http://vim.wikia.com/wiki/Browsing_programs_with_tags).
To always have an up to date tags definition file, I am using gutentags. It
refreshes the tags file on save in the background.

To make [ctags](https://ctags.io/) elixir aware I am using [this config](https://github.com/mmorearty/elixir-ctags)
within my `.ctags` file.

## [Neomake](https://github.com/neomake/neomake)

```vim
Plug 'neomake/neomake'
autocmd! BufWritePost * Neomake
```

If you are using vim and haven't tried
[Neomake](https://github.com/neomake/neomake) yet, you are definitely doing it
wrong<sup>TM</sup>. Neomake will execute code checks to find mistakes in the currently
edited file. If you use [neovim](https://neovim.io/) or vim > 8 it will use the
background job system to prevent any blocking of your editor.

And to make it even better: if you look into the [config](https://github.com/neomake/neomake/blob/master/autoload/neomake/makers/ft/elixir.vim)
for elixir you will see that it also uses [credo](https://github.com/rrrene/credo) to mark
code consistency problems right in your editor.

## [phoenix.vim](https://github.com/c-brenn/phoenix.vim)

```vim
Plug 'c-brenn/phoenix.vim'
Plug 'tpope/vim-projectionist'
```

I really love working with [vim-rails](https://github.com/tpope/vim-rails), and this is
the same thing for phoenix. It gives you methods to navigate to controllers, models,
channels and other files with commands like `:Emodel {name}`.

## [Alchemist.vim](https://github.com/slashmili/alchemist.vim)

```vim
Plug 'slashmili/alchemist.vim'
let g:alchemist_tag_disable = 1
```

Together with [deoplete](https://github.com/Shougo/deoplete.nvim) this opens up a new
world of tab completions. It exposes module and method definitions to your fingertips.
This is one of the things that are really hard to do for languages like ruby.

[![asciicast](https://asciinema.org/a/9uupb79bp90p9ji4jbfolvzuk.png)](https://asciinema.org/a/9uupb79bp90p9ji4jbfolvzuk)

My complete neovim config can be found [in my dotfiles repo](https://github.com/bitboxer/dotfiles/blob/master/tilde/config/nvim/init.vim).
