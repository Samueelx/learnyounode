# LEARNYOUNODE
Learn the basics of node: asynchronous i/o, http.

An introduction to Node.js via a set of self-guided workshops

These are my solutions to the exercises about dealing with synchronous & asynchronous I/O, filesystem operations, TCP and HTTP networking, events and streams. I have implemented my solutions using TypeScript. To transpile the TypeScript files to JavaScript files, use the following command (at the root of your direcory):

        tsc your-typescript-file.ts --target es2019 --outfile output-javascript-file.js

To verify the solutions, run the following command and the tests associated with your exercise will be executed:

        learnyounode verify your-solution-file.js


## NodeSchool
Workshopper is the name used for the open source lesson modules associated with NodeSchool. You can find these exercises/workshoppers by visiting the [NodeSchool page](https://nodeschool.io/)

The Workshopper associated with this repo is called `learnyounode`.

## Getting Started
To get started with this workshopper, run the following command to install the `learnyounode` package globally.

        npm install -g learnyounode

Start up learnyounode in your terminal by running the command learnyounode in your preferred directory

        learnyounode

To install type definitions for Node.js, run this:

        npm install --save @types/node

Alternatively, if you are running the programs in this repo, just run the following command and you'll have the type definitions (plus any other dependency) installed: 

        npm install

## Notes

### Process

The `process` object provides information about, and control over the current Node.js process. The `process` object is an instance of `EventEmitter`. What does this mean? 

Well, much of the Node.js core API is built around an asynchronous event-driven architecture in which certain kinds of objects, "emmiters", emit named events that cause `Function` objects, "Listeners", to be called. For instance, `fs.ReadStream` emits an event when the file is opened.

All objects that emit events are instances of the  `EventEmitter` class, this applies to our `process object`. To learn more about events associaed with this `process` object, please visit the [documentation page](https://nodejs.dev/en/api/v18/process#process-events).

`process.argv` is a property that returns an string array containing the command-line arguments passed when the associated Node.js process was launched. 

 - The first argument will be `process.execPath` which is a property that returns the absolute pathname of the executable that started the Node.js process.
 - The second argument will be the path to the javascript file being executed.
 - The remaining elements will be any additional command-line arguments.

 ### File System

 The `node:fs` module enables interacting with the file system. To perform a file system operation you are going to need this `fs` module from the node core library.

 All file system operations have synchronous(blocking), callback and promise-based forms.
 1. **Promise-based operations** - These return a promise that is fulfilled when the async operation is complete.
2. The **callback form** - These take a completion callback function as their last argument and invoke the operation asynchronously. The arguments passed to the completion callback depend on the method, but the *first argument* is always reserved for an exception. If the operation is completed successfully, then the first argument is null or undefined. 
3. **Synchronous APIs** - The synchronous APIs perform all operations synchronously, blocking the event loop until the operation completes or fails. The synchronous(blocking) filesystem methods in the fs module end with `Sync`.

**NOTE:** The callback-based versions of the `node:fs` module APIs perform better(both in terms of execution time and memory allocation) compared to the promise-based operations.