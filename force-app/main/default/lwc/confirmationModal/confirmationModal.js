import { LightningElement,api } from 'lwc';
export default class ConfirmationModal extends LightningElement {
    @api title;
    @api message;
    @api checkbox;
    @api confirm;
    @api cancel;
    modal;
    disabledConfirm;
    @api
    openModal(){
        this.modal=true;
        this.disabledConfirm=true;
    }
    handleConfirm(event){  
        this.disabledConfirm=!(event.target.checked);
    }
    @api
    closeModal(){
        this.modal=false;
        if (!this.disabledConfirm) this.dispatchEvent(new CustomEvent('closed'));
    }
}