({
    
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        console.log(flow);
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Create_Lead");
    },
})
