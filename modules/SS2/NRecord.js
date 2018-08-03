const Record = require("./Record")

module.exports = class NRecord {
  constructor() {
    this.Record = Record;
    this.Type = {
      ACCOUNT: 'account',
      ACCOUNTING_BOOK: 'accountingbook',
      ACCOUNTING_CONTEXT: 'accountingcontext',
      ACCOUNTING_PERIOD: 'accountingperiod',
      ADV_INTER_COMPANY_JOURNAL_ENTRY: 'advintercompanyjournalentry',
      ALLOCATION_SCHEDULE: 'allocationschedule',
      AMORTIZATION_SCHEDULE: 'amortizationschedule',
      AMORTIZATION_TEMPLATE: 'amortizationtemplate',
      ASSEMBLY_BUILD: 'assemblybuild',
      ASSEMBLY_ITEM: 'assemblyitem',
      ASSEMBLY_UNBUILD: 'assemblyunbuild',
      BILLING_ACCOUNT: 'billingaccount',
      BILLING_CLASS: 'billingclass',
      BILLING_RATE_CARD: 'billingratecard',
      BILLING_REVENUE_EVENT: 'billingrevenueevent',
      BILLING_SCHEDULE: 'billingschedule',
      BIN: 'bin',
      BIN_TRANSFER: 'bintransfer',
      BIN_WORKSHEET: 'binworksheet',
      BLANKET_PURCHASE_ORDER: 'blanketpurchaseorder',
      BOM: 'bom',
      BOM_REVISION: 'bomrevision',
      BULK_OWNERSHIP_TRANSFER: 'bulkownershiptransfer',
      BUNDLE_INSTALLATION_SCRIPT: 'bundleinstallationscript',
      CALENDAR_EVENT: 'calendarevent',
      CAMPAIGN: 'campaign',
      CAMPAIGN_RESPONSE: 'campaignresponse',
      CAMPAIGN_TEMPLATE: 'campaigntemplate',
      CASH_REFUND: 'cashrefund',
      CASH_SALE: 'cashsale',
      CHARGE: 'charge',
      CHARGE_RULE: 'chargerule',
      CHECK: 'check',
      CLASSIFICATION: 'classification',
      CLIENT_SCRIPT: 'clientscript',
      CMS_CONTENT: 'cmscontent',
      CMS_CONTENT_TYPE: 'cmscontenttype',
      COMMERCE_CATEGORY: 'commercecategory',
      COMPETITOR: 'competitor',
      CONSOLIDATED_EXCHANGE_RATE: 'consolidatedexchangerate',
      CONTACT: 'contact',
      CONTACT_CATEGORY: 'contactcategory',
      CONTACT_ROLE: 'contactrole',
      COST_CATEGORY: 'costcategory',
      COUPON_CODE: 'couponcode',
      CREDIT_CARD_CHARGE: 'creditcardcharge',
      CREDIT_CARD_REFUND: 'creditcardrefund',
      CREDIT_MEMO: 'creditmemo',
      CURRENCY: 'currency',
      CUSTOMER: 'customer',
      CUSTOMER_CATEGORY: 'customercategory',
      CUSTOMER_DEPOSIT: 'customerdeposit',
      CUSTOMER_MESSAGE: 'customermessage',
      CUSTOMER_PAYMENT: 'customerpayment',
      CUSTOMER_PAYMENT_AUTHORIZATION: 'customerpaymentauthorization',
      CUSTOMER_REFUND: 'customerrefund',
      CUSTOMER_STATUS: 'customerstatus',
      CUSTOMER_SUBSIDIARY_RELATIONSHIP: 'customersubsidiaryrelationship',
      CUSTOM_RECORD: 'customrecord',
      CUSTOM_TRANSACTION: 'customtransaction',
      DEPARTMENT: 'department',
      DEPOSIT: 'deposit',
      DEPOSIT_APPLICATION: 'depositapplication',
      DESCRIPTION_ITEM: 'descriptionitem',
      DISCOUNT_ITEM: 'discountitem',
      DOWNLOAD_ITEM: 'downloaditem',
      DRIVERS_LICENSE: 'driverslicense',
      EMAIL_TEMPLATE: 'emailtemplate',
      EMPLOYEE: 'employee',
      ENTITY_ACCOUNT_MAPPING: 'entityaccountmapping',
      ESTIMATE: 'estimate',
      EXPENSE_CATEGORY: 'expensecategory',
      EXPENSE_REPORT: 'expensereport',
      FAIR_VALUE_PRICE: 'fairvalueprice',
      FIXED_AMOUNT_PROJECT_REVENUE_RULE: 'fixedamountprojectrevenuerule',
      FOLDER: 'folder',
      FULFILLMENT_REQUEST: 'fulfillmentrequest',
      GENERIC_RESOURCE: 'genericresource',
      GIFT_CERTIFICATE: 'giftcertificate',
      GIFT_CERTIFICATE_ITEM: 'giftcertificateitem',
      GLOBAL_ACCOUNT_MAPPING: 'globalaccountmapping',
      GLOBAL_INVENTORY_RELATIONSHIP: 'globalinventoryrelationship',
      GOVERNMENT_ISSUED_ID_TYPE: 'governmentissuedidtype',
      HCM_JOB: 'hcmjob',
      INBOUND_SHIPMENT: 'inboundshipment',
      INTERCOMP_ALLOCATION_SCHEDULE: 'intercompallocationschedule',
      INTER_COMPANY_JOURNAL_ENTRY: 'intercompanyjournalentry',
      INTER_COMPANY_TRANSFER_ORDER: 'intercompanytransferorder',
      INVENTORY_ADJUSTMENT: 'inventoryadjustment',
      INVENTORY_COST_REVALUATION: 'inventorycostrevaluation',
      INVENTORY_COUNT: 'inventorycount',
      INVENTORY_DETAIL: 'inventorydetail',
      INVENTORY_ITEM: 'inventoryitem',
      INVENTORY_NUMBER: 'inventorynumber',
      INVENTORY_TRANSFER: 'inventorytransfer',
      INVOICE: 'invoice',
      ISSUE: 'issue',
      ISSUE_PRODUCT: 'issueproduct',
      ISSUE_PRODUCT_VERSION: 'issueproductversion',
      ITEM_ACCOUNT_MAPPING: 'itemaccountmapping',
      ITEM_DEMAND_PLAN: 'itemdemandplan',
      ITEM_FULFILLMENT: 'itemfulfillment',
      ITEM_GROUP: 'itemgroup',
      ITEM_LOCATION_CONFIGURATION: 'itemlocationconfiguration',
      ITEM_RECEIPT: 'itemreceipt',
      ITEM_REVISION: 'itemrevision',
      ITEM_SUPPLY_PLAN: 'itemsupplyplan',
      JOB: 'job',
      JOB_REQUISITION: 'jobrequisition',
      JOB_STATUS: 'jobstatus',
      JOB_TYPE: 'jobtype',
      JOURNAL_ENTRY: 'journalentry',
      KIT_ITEM: 'kititem',
      KUDOS: 'kudos',
      LABOR_BASED_PROJECT_REVENUE_RULE: 'laborbasedprojectrevenuerule',
      LEAD: 'lead',
      LOCATION: 'location',
      LOT_NUMBERED_ASSEMBLY_ITEM: 'lotnumberedassemblyitem',
      LOT_NUMBERED_INVENTORY_ITEM: 'lotnumberedinventoryitem',
      MANUFACTURING_COST_TEMPLATE: 'manufacturingcosttemplate',
      MANUFACTURING_OPERATION_TASK: 'manufacturingoperationtask',
      MANUFACTURING_ROUTING: 'manufacturingrouting',
      MAP_REDUCE_SCRIPT: 'mapreducescript',
      MARKUP_ITEM: 'markupitem',
      MASSUPDATE_SCRIPT: 'massupdatescript',
      MERCHANDISE_HIERARCHY_LEVEL: 'merchandisehierarchylevel',
      MERCHANDISE_HIERARCHY_NODE: 'merchandisehierarchynode',
      MERCHANDISE_HIERARCHY_VERSION: 'merchandisehierarchyversion',
      MESSAGE: 'message',
      MFG_PLANNED_TIME: 'mfgplannedtime',
      NEXUS: 'nexus',
      NON_INVENTORY_ITEM: 'noninventoryitem',
      NOTE: 'note',
      NOTE_TYPE: 'notetype',
      OPPORTUNITY: 'opportunity',
      ORDER_SCHEDULE: 'orderschedule',
      ORGANIZATION_VALUE: 'organizationvalue',
      OTHER_CHARGE_ITEM: 'otherchargeitem',
      OTHER_GOVERNMENT_ISSUED_ID: 'othergovernmentissuedid',
      OTHER_NAME: 'othername',
      PARTNER: 'partner',
      PARTNER_CATEGORY: 'partnercategory',
      PASSPORT: 'passport',
      PAYCHECK_JOURNAL: 'paycheckjournal',
      PAYMENT_ITEM: 'paymentitem',
      PAYMENT_METHOD: 'paymentmethod',
      PAYROLL_ITEM: 'payrollitem',
      PERIOD_END_JOURNAL: 'periodendjournal',
      PHONE_CALL: 'phonecall',
      PORTLET: 'portlet',
      POSITION: 'position',
      PRICE_BOOK: 'pricebook',
      PRICE_LEVEL: 'pricelevel',
      PRICE_PLAN: 'priceplan',
      PRICING_GROUP: 'pricinggroup',
      PROJECT_EXPENSE_TYPE: 'projectexpensetype',
      PROJECT_TASK: 'projecttask',
      PROJECT_TEMPLATE: 'projecttemplate',
      PROMOTION_CODE: 'promotioncode',
      PROSPECT: 'prospect',
      PURCHASE_CONTRACT: 'purchasecontract',
      PURCHASE_ORDER: 'purchaseorder',
      PURCHASE_REQUISITION: 'purchaserequisition',
      RATE_PLAN: 'rateplan',
      REALLOCATE_ITEM: 'reallocateitem',
      RECEIVE_INBOUND_SHIPMENT: 'receiveinboundshipment',
      RESOURCE_ALLOCATION: 'resourceallocation',
      RESTLET: 'restlet',
      RETURN_AUTHORIZATION: 'returnauthorization',
      REVENUE_ARRANGEMENT: 'revenuearrangement',
      REVENUE_COMMITMENT: 'revenuecommitment',
      REVENUE_COMMITMENT_REVERSAL: 'revenuecommitmentreversal',
      REVENUE_PLAN: 'revenueplan',
      REV_REC_SCHEDULE: 'revrecschedule',
      REV_REC_TEMPLATE: 'revrectemplate',
      SALES_ORDER: 'salesorder',
      SALES_TAX_ITEM: 'salestaxitem',
      SCHEDULED_SCRIPT: 'scheduledscript',
      SCHEDULED_SCRIPT_INSTANCE: 'scheduledscriptinstance',
      SCRIPT_DEPLOYMENT: 'scriptdeployment',
      SERIALIZED_ASSEMBLY_ITEM: 'serializedassemblyitem',
      SERIALIZED_INVENTORY_ITEM: 'serializedinventoryitem',
      SERVICE_ITEM: 'serviceitem',
      SHIP_ITEM: 'shipitem',
      SOLUTION: 'solution',
      STATISTICAL_JOURNAL_ENTRY: 'statisticaljournalentry',
      STORE_PICKUP_FULFILLMENT: 'storepickupfulfillment',
      SUBSCRIPTION: 'subscription',
      SUBSCRIPTION_CHANGE_ORDER: 'subscriptionchangeorder',
      SUBSCRIPTION_LINE: 'subscriptionline',
      SUBSCRIPTION_PLAN: 'subscriptionplan',
      SUBSIDIARY: 'subsidiary',
      SUBTOTAL_ITEM: 'subtotalitem',
      SUITELET: 'suitelet',
      SUPPORT_CASE: 'supportcase',
      TASK: 'task',
      TAX_ACCT: 'taxacct',
      TAX_GROUP: 'taxgroup',
      TAX_PERIOD: 'taxperiod',
      TAX_TYPE: 'taxtype',
      TERM: 'term',
      TERMINATION_REASON: 'terminationreason',
      TIME_BILL: 'timebill',
      TIME_OFF_CHANGE: 'timeoffchange',
      TIME_OFF_PLAN: 'timeoffplan',
      TIME_OFF_REQUEST: 'timeoffrequest',
      TIME_OFF_RULE: 'timeoffrule',
      TIME_OFF_TYPE: 'timeofftype',
      TOPIC: 'topic',
      TRANSFER_ORDER: 'transferorder',
      UNITS_TYPE: 'unitstype',
      USAGE: 'usage',
      USEREVENT_SCRIPT: 'usereventscript',
      VENDOR: 'vendor',
      VENDOR_BILL: 'vendorbill',
      VENDOR_CATEGORY: 'vendorcategory',
      VENDOR_CREDIT: 'vendorcredit',
      VENDOR_PAYMENT: 'vendorpayment',
      VENDOR_RETURN_AUTHORIZATION: 'vendorreturnauthorization',
      WEBSITE: 'website',
      WORKFLOW_ACTION_SCRIPT: 'workflowactionscript',
      WORK_ORDER: 'workorder',
      WORK_ORDER_CLOSE: 'workorderclose',
      WORK_ORDER_COMPLETION: 'workordercompletion',
      WORK_ORDER_ISSUE: 'workorderissue',
      WORKPLACE: 'workplace'
    }
    this.records = [];
  }

  create(options) {
    return new Record(options);
  }

  load(options) {
    var records = this.records.filter(record => (record.id == options.id && record.type == options.type));
    if(records && records.length > 0) {
      return records[0]
    }
  }

  addRecord(record) {
    this.records.push(record)
  }

}
