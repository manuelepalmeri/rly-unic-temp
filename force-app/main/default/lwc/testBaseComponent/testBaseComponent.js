import { LightningElement, api } from 'lwc';
import closeCase from '@salesforce/apex/TestBaseComponentController.closeCase';
import CCC_CaseRemindTitle from '@salesforce/label/c.CCC_CaseRemindTitle';
import CCC_CaseRemindMessage from '@salesforce/label/c.CCC_CaseRemindMessage';
import CCC_CaseRemindCheckbox from '@salesforce/label/c.CCC_CaseRemindCheckbox';
import CCC_CaseRemindConfirm from '@salesforce/label/c.CCC_CaseRemindConfirm';
import CCC_CaseRemindCancel from '@salesforce/label/c.CCC_CaseRemindCancel';
export default class ConfirmationModal extends LightningElement {
    @api recordId;
    error;
    closeModalConfirmationEventName='caseclosureconfirmation';
    label={CCC_CaseRemindTitle,CCC_CaseRemindMessage,CCC_CaseRemindCheckbox,CCC_CaseRemindConfirm,CCC_CaseRemindCancel};
    handleModal(){
        this.template.querySelector('c-confirmation-modal').openModal();
    }
    confirmClosure(){
        closeCase({caseId:this.recordId})
        .catch(error => {
            this.error = error;
        });
    }
}