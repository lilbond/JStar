### CORE
  Single point of source for maintaining state and proving gated view which is break proof.All the modules will talk to Core only that means there will not be any dependency with the modules.
#### Core
  Mediator which is the central point of contact for all the modules.It will responsible for maintaining the state within modules
#### Glue
  It provides gated view render mechanism to end user and exposes Core .
#### Modules
  Modules are concerned with subscribing and dispatching events rather than          communicating to each other.             
