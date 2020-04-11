export class BudgetItem {
    // amount >= 0 is income; amount < 0 is expense
    constructor(public description: string, public amount: number) { }


    // which is equivalent to:

    // export class BudgetItem {
    //     description: string;
    //     amount: number;

    //     constructor(description: string, amount: number) { 
    //         this.description = description;
    //         this.amount = amount;
    //     }
    // }
}