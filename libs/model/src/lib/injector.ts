import { BankService } from './services/bank.service';
import { CountryService } from './services/country.service';
import { AddressService } from './services/address.service';
import { BankAccountService } from './services/bank.account.service';
import { OrganizationService } from './services/organization.service';
import { CustomerService } from './services/customer.service';
import { AccountingSchemeService } from './services/accounting.scheme.service';
import { CurrencyService } from './services/currency.service';
import { SalesInvoiceService } from './services/sales.invoice.service';
import { SalesInvoiceLineService } from './services/sales.invoice.line.service';
import { TaxService } from './services/tax.service';
import { SalesInvoiceVatService } from './services/sales.invoice.vat.service';
import { UserService } from './services/user.service';
import { UserToOrganizationService } from './services/user.to.organization.service';
import { TaskService } from './services/task.service';
import { CalendarActivityService } from './services/calendar.activity.service';
import { LeadService } from './services/lead.service';
import { SuspectService } from './services/suspect.service';
import { ProspectService } from './services/prospect.service';
import { ProductService } from './services/product.service';
import { CurrencyRateService } from './services/currency.rate.service';
import { RecurringSalesInvoiceService } from './services/recurring.sales.invoice.service';
import { RecurringSalesInvoiceLineService } from './services/recurring.sales.invoice.line.service';
import { AccountService } from './services/account.service';
import { DocumentNumberingServiceModel } from './service.interfaces/document.numbering.service.model';
import { ReportsServiceModel } from './service.interfaces/reports.service.model';
import { CustomerGroupService } from './services/customer.group.service';
import { CustomerPriceListService } from './services/customer.price.list.service';
import { CustomerProductPriceService } from './services/customer.product.price.service';
import { TranslationService } from './services/translation.service';
import { LanguagesService } from './services/languages.service';
import { ProductQuantityOnHandService } from './services/product.quantity.on-hand.service';
import { ProductReceiptLineService } from './services/product.receipt.line.service';
import { ProductReceiptService } from './services/product.receipt.service';
import { WarehouseService } from './services/warehouse.service';
import { ProductIssueLineService } from './services/product.issue.line.service';
import { ProductIssueService } from './services/product.issue.service';
import { FifoCostsOfGoodsSoldService } from './services/fifo.costs.of.goods.sold.service';
import { CustomerOrderService } from '@erp/model/src/lib/services/customer.order.service';

export interface Injector {
  bankService: BankService;
  countryService: CountryService;
  currencyService: CurrencyService;
  addressService: AddressService;
  bankAccountService: BankAccountService;
  organizationService: OrganizationService;
  customerService: CustomerService;
  accountingSchemeService: AccountingSchemeService;
  salesInvoiceService: SalesInvoiceService;
  salesInvoiceLineService: SalesInvoiceLineService;
  taxService: TaxService;
  salesInvoiceVatService: SalesInvoiceVatService;
  userService: UserService;
  userToOrganizationService: UserToOrganizationService;
  taskService: TaskService;
  calendarActivityService: CalendarActivityService;
  leadService: LeadService;
  suspectService: SuspectService;
  prospectService: ProspectService;
  productService: ProductService;
  currencyRateService: CurrencyRateService;
  recurringSalesInvoiceService: RecurringSalesInvoiceService;
  recurringSalesInvoiceLineService: RecurringSalesInvoiceLineService;
  accountService: AccountService;
  documentNumberingServiceModel: DocumentNumberingServiceModel;
  reportsServiceModel: ReportsServiceModel;
  customerGroupService: CustomerGroupService;
  customerPriceListService: CustomerPriceListService;
  customerProductPriceService: CustomerProductPriceService;
  translationService: TranslationService;
  languagesService: LanguagesService;
  productQuantityOnHandService: ProductQuantityOnHandService;
  productReceiptLineService: ProductReceiptLineService;
  productReceiptService: ProductReceiptService;
  warehouseService : WarehouseService;
  productIssueLineService: ProductIssueLineService;
  productIssueService: ProductIssueService;
  fifoCostsOfGoodsSoldService: FifoCostsOfGoodsSoldService;
  customerOrderService: CustomerOrderService;
}
