public with sharing class caseClosure{
    public caseClosure(){}
    @auraEnabled
    public static void closeCase(String caseId){
        Case currentCase=[select status,ConfirmSendClosureEmail__c from case where id=:caseId];
        currentCase.status='Escalated';
        currentCase.ConfirmSendClosureEmail__c=true;
        update currentCase;
    }
}