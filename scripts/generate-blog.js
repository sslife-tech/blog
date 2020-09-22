#!/usr/bin/env node

const ULID = require('ulid');
const path = require('path');
const fs = require('fs');

const postsDirectory = path.join(process.cwd(), 'markdown');

/**
 *
 * @param date {Date}
 * @returns {string}
 */
const template = (date = new Date) => `---
title: ""
description: ""
tags: []
author: shota or shiori
thumbnail: /images/blog/grand_canyon/antelope_canyon.jpg
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
