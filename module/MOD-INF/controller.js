function registerCommands() {
    Packages.java.lang.System.out.print("\nRegistering GOKb Utilities commands...");
    var RS = Packages.com.google.refine.RefineServlet;
    RS.registerCommand(module, "data-addrows", new Packages.com.k_int.gokb.refine.commands.AddRowsCommand());
    RS.registerCommand(module, "data-trimws", new Packages.com.k_int.gokb.refine.commands.TrimWhitespaceCommand());
}

function registerOperations() {
    Packages.java.lang.System.out.print("\nRegistering GOKb Utilities operations...");
    var OR = Packages.com.google.refine.operations.OperationRegistry;
    OR.registerOperation(module, "data-addrows", Packages.com.k_int.gokb.refine.operations.AddRowsOperation);
    OR.registerOperation(module, "data-trimws", Packages.com.k_int.gokb.refine.operations.TrimWhitespaceOperation);
}

function registerFunctions() {
    Packages.java.lang.System.out.print("\nRegistering GOKb Utilities functions...");
    var FR = com.google.refine.grel.ControlFunctionRegistry
    FR.registerFunction("extractHost", new com.k_int.gokb.refine.functions.ExtractHost());
    FR.registerFunction("randomNumber", new com.k_int.gokb.refine.functions.RandomNumber());
    FR.registerFunction("inArray", new com.k_int.gokb.refine.functions.InArray());
}

function init() {
    Packages.java.lang.System.out.println("Initializing GOKb Utilities...");
    Packages.java.lang.System.out.println(module.getMountPoint());
    registerCommands();
    registerOperations();
    registerFunctions();

    ClientSideResourceManager.addPaths(
        "project/scripts",
        module,
        [     
            "scripts/common.js",
            "scripts/handlers.js",
            "scripts/menu.js",
        ]
    );
}

