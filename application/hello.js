// The same application class can be used with spacelets
var spaceify = require("/var/lib/spaceify/code/spaceifyapplication.js");

// The server-side spacelet application
function Hello()
	{
	var self = this;

	// The provided service
	var service = null;
	var serviceName = "spaceify.org/services/hello";

	// This method is called if spacelet is started succesfully
	self.start = function()
		{
		// Get the provided service and expose the RPC method
		service = spaceify.getProvidedService(serviceName);
		service.exposeRpcMethod("hello", self, hello);
		}

	// This method is called if starting the spacelet fails
	self.fail = function()
		{
		}

	// Say hello to the caller of this RPC method
	var hello = function(name, callObj, callback)
		{
		callback(null, "Hello, " + name + ".");
		}
	}

// Start the spacelet
var hello = new Hello();
spaceify.start(hello);
