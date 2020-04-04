import { LightningElement } from 'lwc';

export default class FlowRunnerLWC extends LightningElement {

  launchFlow(){
    /** 
     * To communicate from child to parent, dispatch and event. Lightning web components fire DOM events. An enclosing Aura component can listen for these events, just
     * like an enclosing Lightning Web Component can.
     */

     let eventParams = {
       showFLow: true,
       inputFlowParams: '',
     };
     
     const flowLaunchEvent = new CustomEvent('flowLaunch', {
       detail: {
         eventParams
       },
     });

     // Fire the custom event
     this.dispatchEvent(flowLaunchEvent);
  }

}