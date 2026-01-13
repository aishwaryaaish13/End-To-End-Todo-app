Node.js Architecture – Theory
--------------------------------------------
1. Node.js Architecture

Node.js is built on an event-driven, non-blocking I/O architecture designed to handle a large number of concurrent operations efficiently.

Key Characteristics
------------------------------------
Single-threaded JavaScript execution
Asynchronous and non-blocking by default
Uses an event loop to manage operations
Delegates heavy or blocking tasks to background threads

High-Level Flow
---------------------------------------------------
JavaScript code runs on a single main thread
Asynchronous operations are offloaded
Callbacks/promises are queued
Event loop executes them when ready

2. JavaScript Engine (V8)
What is V8?
V8 is the JavaScript engine developed by Google
It converts JavaScript into machine code
Written in C++
Role in Node.js
Executes JavaScript code
Handles memory management (heap & garbage collection)
Optimizes performance using JIT (Just-In-Time compilation)
Node.js itself does not understand JavaScript — V8 makes that possible.

3. Node.js Core APIs
What are Core APIs?
Built-in modules provided by Node.js
Written mostly in C++ and JavaScript
Examples
fs (File System)
http
path
crypto
timers
Purpose
------------------
Provide access to OS-level features
Enable file I/O, networking, timers, etc.
Abstract complex native logic into easy JS APIs.

4. Native Bindings
What are Native Bindings?
Bridges between JavaScript and C/C++ code
Allow JS to call native system-level functions
Why They Exist
-----------------------------
JavaScript alone cannot access OS features
Performance-critical operations need native code
Example
fs.readFile() → JS API → C++ binding → OS file system

5. Event Loop
What is the Event Loop?
A mechanism that allows Node.js to perform non-blocking operations
Continuously checks queues and executes callbacks
Responsibilities
Handles async callbacks
Executes timers
Processes I/O events
Maintains execution order
The event loop is the heart of Node.js concurrency.

6. libuv
What is libuv?
A C library used by Node.js
Provides the event loop and async I/O handling
Why Node.js Needs libuv
JavaScript is single-threaded
OS-level async handling is complex and platform-specific
libuv abstracts OS differences (Windows, Linux, macOS)
Responsibilities of libuv
Event loop implementation
Thread pool management
Asynchronous file & network I/O
Timers and system events.

7. Thread Pool
What is a Thread Pool?
A group of background threads managed by libuv
Default size: 4 threads
Why Node.js Uses a Thread Pool
Some operations cannot be truly async
Prevents blocking the main JS thread
Operations Handled by Thread Pool
File system operations
DNS lookups
Compression (zlib)
Crypto operations

8. Worker Threads
What are Worker Threads?
Separate JavaScript threads introduced in Node.js
Each has its own event loop and memory
Why Worker Threads Are Needed
CPU-intensive tasks block the main thread
Allows true parallel computation in JS

Difference: Thread Pool vs Worker Threads
-------------------------------------------------
Feature	Thread Pool	Worker Threads
Managed by	libuv	Node.js
Used for	Internal async tasks	Custom CPU-heavy logic
JS execution	No	Yes
Memory	Shared internally	Isolated

9. Event Loop Queues
Macro Task Queue
Handles larger async tasks
Examples
setTimeout
setInterval
setImmediate
I/O callbacks

Micro Task Queue
----------------------------------
Executes smaller, high-priority tasks
Examples
Promise.then()
Promise.catch()
queueMicrotask()
process.nextTick()

Execution Priority
Current JS stack
Micro Task Queue
Macro Task Queue