import { BaseModel } from './base.model';
import { TransactionModel } from './transaction.model';
import { CreditAccountEntryModel } from './credit.account.entry.model';
import { DebitAccountEntryModel } from './debit.account.entry.model';

export interface GeneralJournalEntryModel extends BaseModel {
  transaction: Promise<TransactionModel>;
  credits: Promise<Array<CreditAccountEntryModel>>;
  debits: Promise<Array<DebitAccountEntryModel>>;
  // posting means:
  // - validating the journal entry model to sum up to zero
  // - transferring the debit and credit amounts from the journal to the ledger accounts
  // - calculating the account balances
  posted: boolean;
}
