---
title: "The importance of Vim keybindings"
updateDate: 2023-08-28
publishDate: 2023-08-28
image: 'chaos-2.jpg'
tags: ["vim", "neovim", "vscode", "keybindings", "text editor"]
author: andrej-acevski
excerpt: "Vim keybindings are important because they allow you to edit text with a precision and speed that traditional editors struggle to match. The efficiency gains from Vim's keybindings translate into saved time and enhanced productivity. While the learning curve might be steep, the benefits are undeniable, making the journey towards mastering Vim's keybindings an endeavor well worth the effort."
---

You might be wondering if this will be an article where I'll speak on how you can flex to your friends and colleagues that you use Vim. Well, you're wrong. This article is about the importance of Vim keybindings and how they can help you become a better programmer and okay, maybe a little bit of flexing.

### What is Vim?

Vim is a text editor. A very old text editor I might say, it was originally published in 1991 and it was an improvement of Billy Joy's [vi](https://www.cs.colostate.edu/helpdocs/vi.html) text editor.
So after over 30 years, how are we using Vim nowadays? For starters, you can add the Vim keybindings to your favorite text editor. For example, I use Vim keybindings in VSCode, and I can tell you that it has improved my workflow a lot. But, why is that? Why are Vim keybindings so important? Let's find out.

### Why are Vim keybindings so important?

Vim keybindings are important because they allow you to edit text with a precision and speed that traditional editors struggle to match. The efficiency gains from Vim's keybindings translate into saved time and enhanced productivity. While the learning curve might be steep, the benefits are undeniable, making the journey towards mastering Vim's keybindings an endeavor well worth the effort.

For example: 
```js
const myFunction = () => {
  console.log('Hello World');
}
```

If I want to change the name of the function, I can do it in a couple of seconds with Vim keybindings. I just need to type `ciw` and then the new name of the function. In this case, I'll change it to `myNewFunction`. So, the result will be:

```js
const myNewFunction = () => {
  console.log('Hello World');
}
```

As you can see, it's a very simple and fast process. But, how does it work? Let's find out.

### How do Vim keybindings work?

Vim keybindings are based on the concept of modal editing. This means that the editor has different modes, and each mode has a different purpose. For example, the default mode is the normal mode, and it's used for navigation and editing. The insert mode is used for inserting text, and the visual mode is used for selecting text. You can switch between modes by pressing the `Esc` key.

### How to use Vim keybindings in VSCode?

To use Vim keybindings in VSCode, you need to install the [Vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim). You can do this by going to the extensions tab and searching for Vim. Once you've installed the extension, you can enable it by going to the settings tab and searching for Vim. Then, you need to check the box that says "Enable Vim". After that, you can start using Vim keybindings in VSCode.

### Neovim, the future of Vim

Neovim is a fork of Vim that aims to improve the extensibility and maintainability of Vim. Neovim is written in C and Lua. It is available for Linux, macOS, and Windows.

### Improvements over Vim

Neovim has several improvements over Vim, including:
   - `Better plugin architecture:` Neovim has a better plugin architecture than Vim. This allows developers to create plugins that are more powerful and easier to maintain.
   - `Ecosystem:` Neovim has a larger ecosystem than Vim. This means that there are more plugins available for Neovim than for Vim.
   - `Lua instead of Vimscript:` Neovim uses Lua instead of Vimscript. This allows developers to create plugins that are more powerful and easier to maintain. Lua is super fast and easy to learn, so it's a great choice for a scripting language.
   - And many more...

###  How to get started with Neovim?

To get started with Neovim, you need to install it on your machine. You can do this by following the instructions on the [Neovim website](https://neovim.io/).

Or if you're like me and you prefer to watch videos, you can watch this [video](https://www.youtube.com/watch?v=w7i4amO_zaE) by ThePrimeagen on how to setup Neovim.

When it comes to Neovim, I would suggest you not to re-create VSCode in Neovim. You can get lost in the rabbit hole of plugins and configurations. Instead, I would suggest you to start with the basics and then slowly add plugins and configurations as you need them.

Simple is better than complex.

### Vim keybindings that you should know

There are a lot of Vim keybindings that you can use to improve your workflow. Instead of me going through each keybind, I'll share this cheat sheet that you can use as a reference. You can also print it out and put it on your desk so that you can look at it whenever you need to.

[https://vim.rtorr.com](https://vim.rtorr.com)

It might seem a little overwhelming, but remember: 
> _"Rome wasn't built in a day."_

So, take your time and learn one keybinding at a time. You'll be surprised by how much you can improve your workflow by learning just a few keybindings.

---

### Resources to learn more about Vim

You can use this or any blog post as a reference however the best way to learn Vim is by using it. So, I recommend starting with the VSCode extension and then moving to Neovim. If you want to learn more about Vim, here are some resources that you can use:
- [Vim Adventures](https://vim-adventures.com/)
- [OpenVim](https://www.openvim.com/)
- [ThePrimeagen's Vim As Your Editor](https://www.youtube.com/playlist?list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R) 

---

### Conclusion

At the end of the day you don't have to use Vim if it's not your cup of tea. However we can't deny the importance of it and at the end of the day, you will at least be able to work on a server and modify files without too much hassle. 

And to finish this article with a joke:
> _Vim is not just a text editor, it's a way of life. It's a philosophy. It's a way of thinking. It's a way of being. It's a way of life._

Thanks for reading and I hope you learned something new today. If you have any questions or comments, feel free to join the creatures.dev Discord server and ask away. I'll be happy to help you out.