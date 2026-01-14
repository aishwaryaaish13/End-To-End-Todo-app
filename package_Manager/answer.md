Understanding Project Management in NodeJS
-------------------------------------------------------------------------------------
In backend development, writing server-side logic is only one part of the work. A developer must also handle libraries, tools, versions, and project structure. In Node.js, this responsibility is managed using package managers and proper project initialization methods.

a. Package Managers
-------------------------
What Is a Package Manager?
A package manager is a system that helps developers download, install, update, and remove software libraries required in a project. These libraries provide ready-made solutions, so developers do not need to build everything from the beginning.
Example:
Instead of writing your own server logic, you can use an existing framework library.
--------------------------------------------------------------
Why Package Managers Are Needed in Backend Development
Package managers are essential because they:
Save development time
Reduce repetitive coding
Maintain consistency across projects
Manage library versions automatically
Simplify team collaboration
They make backend development faster and more reliable.
--------------------------------------------------------
Problems Without Using Package Managers
Without package managers, developers may face:
Manual handling of library files
Dependency version conflicts
Difficulty in project setup for new team members
Increased chances of runtime errors
Poor scalability and maintenance issues
------------------------------------------------
b. NPM (Node Package Manager)
What Is NPM?

NPM is the official package manager used in Node.js applications. It is automatically installed with Node.js and provides access to thousands of open-source libraries.
------------------------------------------------------------------------
Why NPM Is Important for Node.js Projects
NPM plays a crucial role because it:
Handles dependency installation
Keeps track of required packages
Allows script execution
Helps manage project versions
Almost every Node.js backend project relies on NPM.
--------------------------------------------------------------
How NPM Manages Dependencies
NPM maintains dependencies using configuration files:
Installs libraries with a single command
Tracks dependencies in package.json
Locks exact versions using package-lock.json
Automatically installs dependent libraries
Example command:npm install express
----------------------------------------------------------
c. Backend Project Initialization
Command to Initialize a Node.js Project

A backend project is initialized using:
npm init
-------------------------------------------------
Difference Between npm init and npm init -y
npm init
-----------------
Prompts the user for project details
Allows custom configuration
Creates a package.json file
npm init -y
-------------------------------------
Skips the interactive questions
Uses default values
Creates the project setup instantly
This option is commonly used for quick initialization.
------------------------------------------------------------
d. Files and Folders Created After Initialization
package.json
Acts as the project blueprint
Stores project information and dependencies
Defines scripts and configuration settings
Importance:
It allows others to understand and run the project correctly.
-----------------------------------------------------------------------
node_modules
Contains all installed dependency files
Generated automatically by NPM
Can be recreated anytime
Importance:
It provides the actual code required to run the application.
-----------------------------------------------------------------------
GitHub File Management Rules
Files/Folders That Should NOT Be Uploaded
node_modules
Too large in size
Can be regenerated using NPM
Depends on system configuration
-------------------------------------------------
Files That MUST Be Committed
package.json
package-lock.json
Reason:
They define dependencies
Help recreate the project setup
Support collaboration and deployment
