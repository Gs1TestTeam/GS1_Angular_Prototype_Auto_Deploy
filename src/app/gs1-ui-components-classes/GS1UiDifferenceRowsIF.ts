/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: GS1UIComponentsIF.ts
 * 
 * 
 * Created by Jongkuk Lee 
 * Created date: 2018.09.20
 * 
********************************************************************************/  
export interface GS1UiDifferenceRowsIF extends GS1CompnentsIF 
{
    pid : String;
    gtin : String;
    gln : String;
    isDeleted : Number;
    last_modified_date : Date;
    pid_dw : String;
    gtin_dw : String;
    gln_dw : String;
    targetMarketCountryCode : String;
}