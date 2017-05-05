The GOKb Utilities extension for OpenRefine adds a number of new functions to the [OpenRefine](http://openrefine.org) data cleaning software.

The utilities in this extension were originally developed as part of the [Global Open Knowledgebase (GOKb) project](https://gokb.openlibraryfoundation.org/gokb/). The GOKb project developed software and a service to facilitate a community managed set of freely available information about electronic resources (such as electronic journals and books). OpenRefine is a key part of the data management process within GOKb and OpenRefine was highly integrated into the GOKb application and database through the development of an [OpenRefine extension](https://github.com/k-int/gokb-phase1/tree/dev-integration/refine/extensions/gokb). However a few of the utilities developed did not rely on the integration with GOKb - and they have now been separated from the main extension and bundled together here.

This extension does not rely on GOKb at all and can be used directly with OpenRefine like any OpenRefine extension.

This extension includes the following functions:

- Prepend rows: Add new blank rows to an existing OpenRefine project. Accessed via the 'All' dropdown menu "All->Edit Rows->Prepend rows"
- Trim all data: Remove preceding/trailing whitespace from across all cells in the project. Accessed via the 'All' dropdown menu "All->Trim all data"
- extractHost: new GREL function that extracts a host name from a URL
- inArray: new GREL function that checks for the existence of a value in an array
- randomNumber: new GREL function that generates a random integer in a specified range