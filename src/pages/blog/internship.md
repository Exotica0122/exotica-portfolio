---
layout: "../../components/BlogPostLayout.astro"
title: My Internship Experience
description: I had an interesting internship experience at ezyVet during 2022/2023 summer university holiday and I want to share this experience
imageUrl: ""
---

# My Internship Experience at ezyVet

\
\
![ezyVet Internship Photo](/images/ezyvet-internship.jpg)

> **Where I am:** _Second to left person._

## Intro

I was able to have a lucky opportunity to have an internship experience during the 2022/2023 summer break.

During the 3 months I applied the current skills I had and went beyond to learn new skills.

I was surprised what I achieved throughout this internship.
So I would like to share some of these achievements to inspire and motivate those who read this blog.

> **Note:** _I got offered a grad offer before my internship. The internship is just for me to get started working earlier_

## Content:

-   [First Week](/blog/internship/#first-week)
-   [First Project](/blog/internship/#first-project)

## First Week

The first week was all filled with with onboarding and orientation. Pretty standard.
I had to complete the tasks they provided like tutorials about the product and also getting my dev environment set up.
I got a have a buddy with me since the first day so I thought I was lucky. _(some people didn't)_

## First project (API Docs)

The first project that I worked on was removing the API Documentation in their monorepo.
I got to make my separate repo and I made a CI build step in GitLab CI/CD. When the PR was approved, the main branch
started a pipeline that builds the project and uploads the minified(bundled) project into an AWS s3 bucket and used CloudFront
distribute the website to CDN. This was all done automatically. Also I set up a docker container that mounts with the project for hot reloading.

\
\
Things I learned

-   Writing pipelines in GitLab using their CI/CD pipeline.
-   Containerizing the project with docker
-   AWS s3 bucket and CloudFront for bucket storage and CDN

## Second Project (End-to-end Test)

## Tech

Dillinger uses a number of open source projects to work properly:

-   [AngularJS] - HTML enhanced for web apps!
-   [Ace Editor] - awesome web-based text editor
-   [markdown-it] - Markdown parser done right. Fast and easy to extend.
-   [Twitter Bootstrap] - great UI boilerplate for modern web apps
-   [node.js] - evented I/O for the backend
-   [Express] - fast node.js network app framework [@tjholowaychuk]
-   [Gulp] - the streaming build system
-   [Breakdance](https://breakdance.github.io/breakdance/) - HTML
    to Markdown converter
-   [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
on GitHub.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[Ace Editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[Twitter Bootstrap]: http://twitter.github.com/bootstrap/
[jQuery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[AngularJS]: http://angularjs.org
[Gulp]: http://gulpjs.com
[PlDb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[PlGh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[PlGd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[PlOd]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[PlMe]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[PlGa]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
