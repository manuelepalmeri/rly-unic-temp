import { LightningElement,api } from 'lwc';
export default class ConfirmationModal extends LightningElement {
    @api title;
    @api message;
    @api checkbox;
    @api confirm;
    @api cancel;
    @api closeModalConfirmationEventName;
    modalVisibile;
    disabledConfirm;
    @api
    openModal(){
        this.modalVisibile=true;
        this.disabledConfirm=true;
    }
    handleConfirm(event){  
        this.disabledConfirm=!(event.target.checked);
    }
    handleClosureModal(){
        this.closeModal();
        if (!this.disabledConfirm) this.dispatchEvent(new CustomEvent(this.closeModalConfirmationEventName));
    }
    @api
    closeModal(){
        this.modalVisibile=false;
    } 
}