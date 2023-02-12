#!/usr/bin/env node

const ULID = require('ulid');
const path = require('path');
const fs = require('fs');

const postsDirectory = path.join(process.cwd(), 'src/pages/blog');

/**
 *
 * @param date {Date}
 * @returns {string}
 */
const template = (date = new Date) => `---
layout: $/layouts/post.astro
title: ""
description: ""
tags: []
author: Shota or Shiori
authorTwitter: xioota
thumbnail: /images/posts/grand_canyon/antelope_canyon.jpg
date: ${date.toISOString()}
---`

const generate = () => {
    const fileName = `${ULID.ulid()}.md`;
    const fullPath = path.join(postsDirectory, fileName);

    fs.writeFile(fullPath, template(), function (err) {
        if (err) throw err;
        console.log('A blog template is created successfully.');
        console.log(fullPath);
    });
}

generate();
