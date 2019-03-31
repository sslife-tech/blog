SSLife Tech
===

[![CircleCI](https://circleci.com/gh/sslife-tech/blog/tree/master.svg?style=svg)](https://circleci.com/gh/sslife-tech/blog/tree/master)

Required
---

* [hugo](https://github.com/gohugoio/hugo)
* [go-task/task](https://github.com/go-task/task)

Installation
---

```bash
$ git clone https://github.com/sawadashota/sslife-tech.git
$ git submodule update --init
```

Serve
---

```bash
make serve
```

Create New Blog
---

```bash
make blog-new
```

Make Tasks
---

```
$ make
blog-new                       Create new blog
bootstrap                      first do this
help                           show help
install-go                     install go dependencies
install-yarn                   install node dependencies
start                          serve
sync-submodule                 download git submodule
```