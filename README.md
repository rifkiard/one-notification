<h1 align="center">
  <a href="https://www.npmjs.com/package/one-notification" target="_blank">One Notification</a>

  <br />
  <br />

  <img src="https://raw.githubusercontent.com/rifkiard/one-notification/main/miscellaneous/example.gif">
</h1>

<div align="center">

### A lightweight JavaScript package for Samsung One UI styled notification.

![test](https://img.shields.io/github/workflow/status/rifkiard/one-notification/CI)
[![npm package](https://img.shields.io/npm/v/one-notification?color=blue)](https://img.shields.io/npm/v/one-notification?color=blue)
[![npm downloads](https://img.shields.io/npm/dm/one-notification)](https://img.shields.io/npm/dm/one-notification)
[![npm bundle size](https://img.shields.io/bundlephobia/min/one-notification)](https://img.shields.io/bundlephobia/min/one-notification)
[![supported node version](https://img.shields.io/node/v/one-notification)](https://img.shields.io/node/v/one-notification)
[![contributors](https://img.shields.io/github/contributors/rifkiard/one-notification)](https://img.shields.io/github/contributors/rifkiard/one-notification)
[![last commit](https://img.shields.io/github/last-commit/rifkiard/one-notification)](https://img.shields.io/github/last-commit/rifkiard/one-notification)
[![license](https://img.shields.io/npm/l/one-notification)](https://img.shields.io/npm/l/one-notification)
</div>

# Installation

```shell
npm install one-notification
```

# Usage

```JavaScript
import oneNotification from "one-notification";
import "one-notification/dist/one-notification.min.css";

oneNotification({
  text: "Hi there! One notification is here",
  icon: "<i class='ph-smiley-fill'></i>"
});
```

# Configuration

There are some configuration properties that you can pass into the function parameter:

|key|type|required|default|description|
|-|-|-|-|-|
|text|`string`|required||Text that displayed on notification|
|icon|`string`|required||Icon that displayed on notification|
|iconSize|`number`||21|Icon size in pixels|
|iconColor|`string`||#FFFFFF|Icon color|
|iconBackgroundSize|`number`||42|Icon background size in pixels|
|iconBackgroundColor|`string`||#1B9CFC|Icon background color|
|duration|`string`||4s|Duration of notification|
|color|`string`||#FFFFFF|Text color|
|backgroundColor|`string`||#1E272E|Notification color|
|fontSize|`number`||14|Font size in pixels|
|fontWeight|`number`||500|Font weight|
|fontFamily|`string`||sans-serif|Font family (use it when you are already imported font file in somewhere else)|
|iconScale|`number`||0.70|Scale down icon when notification is active|
|borderRadius|`number`||1000|Notification border radius|
|zIndex|`number`||1400|Notification z-index|

# LICENSE
[One Notification](https://www.npmjs.com/package/one-notification) is released under the [MIT](https://github.com/rifkiard/one-notification/blob/main/LICENSE) license.