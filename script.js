
// --- STATE MANAGEMENT & DEFAULT DATA ---
const DEFAULT_STORES = [
    { id: 'store_shein', name: 'SHEIN', logo: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=100' },
    { id: 'store_temu', name: 'Temu', logo: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100' },
    { id: 'store_amazon', name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100' },
    { id: 'store_trendyol', name: 'Trendyol', logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100' },
    { id: 'store_aliexpress', name: 'AliExpress', logo: 'https://images.unsplash.com/photo-1556742049-0a67d553c253?w=100' },
    { id: 'store_noon', name: 'Noon', logo: 'https://images.unsplash.com/photo-1572584919865-031e8436413a?w=100' }
];

let appData = {
    settings: {
        companyName: 'ORDER TIME',
        phone: '+2135799891705',
        whatsapp: '+2135799891705',
        email: 'contact@ORDERTIME.com',
        address: 'Algiers, Algeria',
        footerMessage: 'Merci pour votre confiance order_time',
        logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        defaultLang: 'ar',
        reportingCurr: 'DZD'
    },
    stores: DEFAULT_STORES,
    orders: []
};

// Translations Dictionary
const TRANSLATIONS = {
    ar: {
        companyName: 'ORDER TIME',
        navDashboard: 'لوحة القيادة',
        navOrders: 'الطلبات',
        navNewOrder: 'طلب جديد',
        navStores: 'مواقع الشراء',
        navSettings: 'الإعدادات',
        systemActive: 'النظام يعمل محلياً',
        searchPlaceholder: 'ابحث برقم الطلب، اسم الزبون، أو الهاتف...',
        dashTitle: 'لوحة القيادة المالية والتشغيلية',
        dashSubtitle: 'نظرة شاملة ومحدثة فورياً على حركة الطلبات والأرباح',
        statOrdersCount: 'عدد الطلبات',
        statCustomersCount: 'عدد الزبائن',
        statTotalOrdersVal: 'إجمالي قيمة الطلبات',
        statTotalCollected: 'إجمالي المحصل',
        statTotalRemaining: 'المبالغ المتبقية',
        statCapital: 'رأس المال المستخدم',
        statGrossProfit: 'إجمالي الأرباح',
        statNetProfit: 'صافي الأرباح',
        ordersTitle: 'إدارة الطلبات',
        ordersSubtitle: 'استعرض، عدل، تتبع واطبع الفواتير والتقارير الداخلية',
        newOrderBtn: 'طلب جديد',
        allStatuses: 'جميع الحالات',
        statusPending: 'قيد الطلب',
        statusOrdered: 'تم الطلب',
        statusShipping: 'في الشحن',
        statusArrived: 'وصل',
        statusDelivering: 'في التسليم',
        statusCancelled: 'ملغي',
        allStores: 'جميع المواقع',
        thOrderNo: 'رقم الطلب',
        thDate: 'التاريخ',
        thCustomer: 'الزبون',
        thStores: 'المواقع',
        thTotal: 'الإجمالي',
        thPaid: 'المدفوع',
        thRemaining: 'المتبقي',
        thProfit: 'الربح',
        thStatus: 'الحالة',
        thActions: 'الإجراءات',
        newOrderTitle: 'إنشاء طلب جديد',
        newOrderSubtitle: 'أدخل تفاصيل الطلب لتظهر المعاينة المباشرة فورياً',
        boxOrderInfo: 'معلومات الطلب الأساسية',
        lblOrderNo: 'رقم الطلب',
        lblOrderDate: 'تاريخ الطلب',
        lblExpDate: 'تاريخ التسليم المتوقع',
        lblStatus: 'حالة الطلب',
        lblNotes: 'ملاحظات اختيارية',
        notesPlaceholder: 'أدخل أي ملاحظات خاصة بالطلب...',
        boxCustomerInfo: 'معلومات الزبون',
        lblCustName: 'اسم الزبون *',
        custNamePlaceholder: 'اسم الزبون الكامل',
        lblCustPhone: 'رقم الهاتف *',
        custPhonePlaceholder: '06xxxxxxxx',
        lblCustWhatsapp: 'رقم WhatsApp *',
        custWhatsappPlaceholder: '2136xxxxxxxx',
        lblCustAddress: 'العنوان (اختياري)',
        custAddressPlaceholder: 'المدينة، الحي...',
        boxStoresInfo: 'مواقع الشراء والقطع (USD)',
        btnAddStore: 'إضافة موقع',
        totalPurchaseCostLbl: 'إجمالي تكلفة الشراء:',
        boxFinancials: 'الإدارة المالية وسعر الصرف',
        lblExchangeRate: 'سعر الصرف (1 USD = ? DZD) *',
        lblCustomerTotal: 'المبلغ المطلوب من الزبون (DZD) *',
        custTotalPlaceholder: 'مثلاً: 45000',
        finCostDZD: 'التكلفة بالدينار:',
        finGrossProfit: 'الربح الإجمالي:',
        boxPayments: 'الدفعات المحصلة (DZD)',
        btnAddPayment: 'إضافة دفعة',
        sumPaid: 'إجمالي المدفوع:',
        sumRemaining: 'المتبقي:',
        boxInvoiceOptions: 'خيارات الفاتورة',
        lblInvoiceLang: 'لغة فاتورة الزبون',
        lblInvoiceCurr: 'عملة عرض الفاتورة',
        saveOrderSubmit: 'حفظ الطلب ومعاينة الفاتورة',
        livePreviewTitle: 'معاينة فاتورة الزبون الحية',
        btnPrintPdf: 'تحميل PDF',
        btnSendWhatsapp: 'إرسال WhatsApp',
        storesTitle: 'إدارة مواقع الشراء',
        storesSubtitle: 'إضافة وتعديل المواقع والشعارات الافتراضية',
        addNewStoreBtn: 'موقع جديد',
        settingsTitle: 'إعدادات النظام والشركة',
        settingsSubtitle: 'تخصيص بيانات شركة ORDER TIME وإدارة النسخ الاحتياطي',
        boxCompanyDetails: 'بيانات الشركة والفاتورة',
        lblCompanyName: 'اسم الشركة',
        lblSetPhone: 'رقم الهاتف',
        lblSetWhatsapp: 'رقم WhatsApp',
        lblSetEmail: 'البريد الإلكتروني',
        lblSetAddress: 'عنوان الشركة',
        lblSetFooter: 'رسالة تذييل الفاتورة',
        lblSetLogo: 'شعار الشركة (رفع صورة)',
        lblDefaultLang: 'لغة البرنامج الافتراضية',
        lblReportingCurr: 'عملة التقارير العامة',
        saveSettingsBtn: 'حفظ الإعدادات',
        boxBackupHeader: 'النسخ الاحتياطي واستعادة البيانات',
        backupDesc: 'قم بتصدير جميع بيانات الطلبات والزبائن والإعدادات إلى ملف JSON للاحتفاظ بها، أو قم بالاستعادة فوراً.',
        btnExportBackup: 'تصدير النسخة الاحتياطية',
        btnImportBackup: 'استعادة نسخة احتياطية',
        modalStoreTitle: 'إضافة موقع شراء جديد',
        modalStoreName: 'اسم الموقع',
        modalStoreLogo: 'أيقونة / شعار الموقع',
        btnCancel: 'إلغاء',
        btnSave: 'حفظ',
        internalReportTitle: 'التقرير الداخلي للطلب (خاص بصاحب البرنامج)',
        printInternalPdf: 'طباعة التقرير الداخلي PDF',
        invoiceTitleHeader: 'فاتورة طلب الزبون',
        invOrderNo: 'رقم الطلب',
        invOrderDate: 'تاريخ الطلب',
        invExpDate: 'تاريخ التسليم المتوقع',
        invStatus: 'الحالة',
        invCustomerName: 'الزبون',
        invPhone: 'الهاتف',
        invWhatsapp: 'WhatsApp',
        invAddress: 'العنوان',
        tableStore: 'موقع الشراء',
        tableItemsCount: 'عدد القطع',
        tableTotal: 'الإجمالي',
        invTotalAmount: 'إجمالي الطلب',
        invTotalPaid: 'إجمالي المدفوع',
        invRemaining: 'المبلغ المتبقي',
        actionView: 'عرض',
        actionEdit: 'تعديل',
        actionPdf: 'PDF',
        actionInternal: 'تقرير داخلي',
        actionWhatsapp: 'WhatsApp',
        actionDelete: 'حذف'
    },
    fr: {
        companyName: 'ORDER TIME',
        navDashboard: 'Tableau de bord',
        navOrders: 'Commandes',
        navNewOrder: 'Nouvelle commande',
        navStores: 'Magasins',
        navSettings: 'Paramètres',
        systemActive: 'Système local actif',
        searchPlaceholder: 'Rechercher par N° commande, client, téléphone...',
        dashTitle: 'Tableau de bord financier',
        dashSubtitle: 'Aperçu global et mis à jour en temps réel',
        statOrdersCount: 'Total Commandes',
        statCustomersCount: 'Total Clients',
        statTotalOrdersVal: 'Valeur Totale',
        statTotalCollected: 'Total Encaissé',
        statTotalRemaining: 'Reste à Payer',
        statCapital: 'Capital Utilisé',
        statGrossProfit: 'Bénéfice Brut',
        statNetProfit: 'Bénéfice Net',
        ordersTitle: 'Gestion des Commandes',
        ordersSubtitle: 'Consulter, modifier et imprimer factures',
        newOrderBtn: 'Nouvelle commande',
        allStatuses: 'Tous les statuts',
        statusPending: 'En attente',
        statusOrdered: 'Commandé',
        statusShipping: 'En livraison',
        statusArrived: 'Arrivé',
        statusDelivering: 'En distribution',
        statusCancelled: 'Annulé',
        allStores: 'Tous les magasins',
        thOrderNo: 'N° Commande',
        thDate: 'Date',
        thCustomer: 'Client',
        thStores: 'Magasins',
        thTotal: 'Total',
        thPaid: 'Payé',
        thRemaining: 'Reste',
        thProfit: 'Bénéfice',
        thStatus: 'Statut',
        thActions: 'Actions',
        newOrderTitle: 'Créer une commande',
        newOrderSubtitle: 'Aperçu direct en temps réel',
        boxOrderInfo: 'Informations de base',
        lblOrderNo: 'N° Commande',
        lblOrderDate: 'Date de commande',
        lblExpDate: 'Livraison prévue',
        lblStatus: 'Statut',
        lblNotes: 'Notes (Optionnel)',
        notesPlaceholder: 'Entrez vos notes...',
        boxCustomerInfo: 'Informations Client',
        lblCustName: 'Nom du client *',
        custNamePlaceholder: 'Nom complet',
        lblCustPhone: 'Téléphone *',
        custPhonePlaceholder: '06xxxxxxxx',
        lblCustWhatsapp: 'WhatsApp *',
        custWhatsappPlaceholder: '2136xxxxxxxx',
        lblCustAddress: 'Adresse (Optionnel)',
        custAddressPlaceholder: 'Ville, Quartier...',
        boxStoresInfo: 'Magasins & Articles (USD)',
        btnAddStore: 'Ajouter magasin',
        totalPurchaseCostLbl: 'Coût total d\'achat:',
        boxFinancials: 'Gestion Financière & Taux de Change',
        lblExchangeRate: 'Taux de change (1 USD = ? DZD) *',
        lblCustomerTotal: 'Montant Client (DZD) *',
        custTotalPlaceholder: 'Ex: 45000',
        finCostDZD: 'Coût en DZD:',
        finGrossProfit: 'Bénéfice Brut:',
        boxPayments: 'Paiements Reçus (DZD)',
        btnAddPayment: 'Ajouter paiement',
        sumPaid: 'Total Payé:',
        sumRemaining: 'Reste:',
        boxInvoiceOptions: 'Options de Facture',
        lblInvoiceLang: 'Langue de la facture',
        lblInvoiceCurr: 'Devise de la facture',
        saveOrderSubmit: 'Enregistrer & Aperçu',
        livePreviewTitle: 'Aperçu en direct',
        btnPrintPdf: 'Télécharger PDF',
        btnSendWhatsapp: 'Envoyer WhatsApp',
        storesTitle: 'Gestion des Magasins',
        storesSubtitle: 'Ajouter et modifier les boutiques',
        addNewStoreBtn: 'Nouveau magasin',
        settingsTitle: 'Paramètres du Système',
        settingsSubtitle: 'Configuration de ORDER TIME',
        boxCompanyDetails: 'Détails de l\'entreprise',
        lblCompanyName: 'Nom de l\'entreprise',
        lblSetPhone: 'Téléphone',
        lblSetWhatsapp: 'WhatsApp',
        lblSetEmail: 'Email',
        lblSetAddress: 'Adresse',
        lblSetFooter: 'Message de pied de page',
        lblSetLogo: 'Logo de l\'entreprise',
        lblDefaultLang: 'Langue par défaut',
        lblReportingCurr: 'Devise des rapports',
        saveSettingsBtn: 'Enregistrer',
        boxBackupHeader: 'Sauvegarde & Restauration',
        backupDesc: 'Exporter ou importer vos données JSON.',
        btnExportBackup: 'Exporter la sauvegarde',
        btnImportBackup: 'Restaurer la sauvegarde',
        modalStoreTitle: 'Ajouter un magasin',
        modalStoreName: 'Nom du magasin',
        modalStoreLogo: 'Logo / Icône',
        btnCancel: 'Annuler',
        btnSave: 'Enregistrer',
        internalReportTitle: 'Rapport Interne (Interne seulement)',
        printInternalPdf: 'Imprimer Rapport Interne PDF',
        invoiceTitleHeader: 'FACTURE CLIENT',
        invOrderNo: 'N° Commande',
        invOrderDate: 'Date',
        invExpDate: 'Livraison prévue',
        invStatus: 'Statut',
        invCustomerName: 'Client',
        invPhone: 'Téléphone',
        invWhatsapp: 'WhatsApp',
        invAddress: 'Adresse',
        tableStore: 'Magasin',
        tableItemsCount: 'Articles',
        tableTotal: 'Total',
        invTotalAmount: 'Total Commande',
        invTotalPaid: 'Total Payé',
        invRemaining: 'Reste à Payer',
        actionView: 'Voir',
        actionEdit: 'Modifier',
        actionPdf: 'PDF',
        actionInternal: 'Rapport',
        actionWhatsapp: 'WhatsApp',
        actionDelete: 'Supprimer'
    },
    en: {
        companyName: 'ORDER TIME',
        navDashboard: 'Dashboard',
        navOrders: 'Orders',
        navNewOrder: 'New Order',
        navStores: 'Stores',
        navSettings: 'Settings',
        systemActive: 'Local system active',
        searchPlaceholder: 'Search order, customer, phone...',
        dashTitle: 'Financial Dashboard',
        dashSubtitle: 'Comprehensive real-time overview of orders and profits',
        statOrdersCount: 'Total Orders',
        statCustomersCount: 'Total Customers',
        statTotalOrdersVal: 'Total Order Value',
        statTotalCollected: 'Total Collected',
        statTotalRemaining: 'Remaining Balance',
        statCapital: 'Capital Used',
        statGrossProfit: 'Gross Profit',
        statNetProfit: 'Net Profit',
        ordersTitle: 'Orders Management',
        ordersSubtitle: 'Review, edit, track and print invoices',
        newOrderBtn: 'New Order',
        allStatuses: 'All Statuses',
        statusPending: 'Pending',
        statusOrdered: 'Ordered',
        statusShipping: 'In Shipping',
        statusArrived: 'Arrived',
        statusDelivering: 'Delivering',
        statusCancelled: 'Cancelled',
        allStores: 'All Stores',
        thOrderNo: 'Order #',
        thDate: 'Date',
        thCustomer: 'Customer',
        thStores: 'Stores',
        thTotal: 'Total',
        thPaid: 'Paid',
        thRemaining: 'Remaining',
        thProfit: 'Profit',
        thStatus: 'Status',
        thActions: 'Actions',
        newOrderTitle: 'Create New Order',
        newOrderSubtitle: 'Live preview updates instantly',
        boxOrderInfo: 'Order Information',
        lblOrderNo: 'Order Number',
        lblOrderDate: 'Order Date',
        lblExpDate: 'Expected Delivery',
        lblStatus: 'Status',
        lblNotes: 'Notes (Optional)',
        notesPlaceholder: 'Enter any notes...',
        boxCustomerInfo: 'Customer Information',
        lblCustName: 'Customer Name *',
        custNamePlaceholder: 'Full name',
        lblCustPhone: 'Phone *',
        custPhonePlaceholder: '06xxxxxxxx',
        lblCustWhatsapp: 'WhatsApp *',
        custWhatsappPlaceholder: '2136xxxxxxxx',
        lblCustAddress: 'Address (Optional)',
        custAddressPlaceholder: 'City, District...',
        boxStoresInfo: 'Stores & Items (USD)',
        btnAddStore: 'Add Store',
        totalPurchaseCostLbl: 'Total Purchase Cost:',
        boxFinancials: 'Financials & Exchange Rate',
        lblExchangeRate: 'Exchange Rate (1 USD = ? DZD) *',
        lblCustomerTotal: 'Customer Total (DZD) *',
        custTotalPlaceholder: 'Ex: 45000',
        finCostDZD: 'Cost in DZD:',
        finGrossProfit: 'Gross Profit:',
        boxPayments: 'Collected Payments (DZD)',
        btnAddPayment: 'Add Payment',
        sumPaid: 'Total Paid:',
        sumRemaining: 'Remaining:',
        boxInvoiceOptions: 'Invoice Options',
        lblInvoiceLang: 'Invoice Language',
        lblInvoiceCurr: 'Invoice Currency',
        saveOrderSubmit: 'Save Order & Preview',
        livePreviewTitle: 'Live Customer Invoice Preview',
        btnPrintPdf: 'Download PDF',
        btnSendWhatsapp: 'Send WhatsApp',
        storesTitle: 'Stores Management',
        storesSubtitle: 'Add and edit online stores',
        addNewStoreBtn: 'New Store',
        settingsTitle: 'System Settings',
        settingsSubtitle: 'Configure ORDER TIME settings',
        boxCompanyDetails: 'Company Details',
        lblCompanyName: 'Company Name',
        lblSetPhone: 'Phone',
        lblSetWhatsapp: 'WhatsApp',
        lblSetEmail: 'Email',
        lblSetAddress: 'Address',
        lblSetFooter: 'Invoice Footer Message',
        lblSetLogo: 'Company Logo',
        lblDefaultLang: 'Default Language',
        lblReportingCurr: 'Reporting Currency',
        saveSettingsBtn: 'Save Settings',
        boxBackupHeader: 'Backup & Restore',
        backupDesc: 'Export or import your data JSON file.',
        btnExportBackup: 'Export Backup',
        btnImportBackup: 'Restore Backup',
        modalStoreTitle: 'Add New Store',
        modalStoreName: 'Store Name',
        modalStoreLogo: 'Store Logo / Icon',
        btnCancel: 'Cancel',
        btnSave: 'Save',
        internalReportTitle: 'Internal Report (Admin Only)',
        printInternalPdf: 'Print Internal Report PDF',
        invoiceTitleHeader: 'CUSTOMER ORDER INVOICE',
        invOrderNo: 'Order #',
        invOrderDate: 'Date',
        invExpDate: 'Expected Delivery',
        invStatus: 'Status',
        invCustomerName: 'Customer',
        invPhone: 'Phone',
        invWhatsapp: 'WhatsApp',
        invAddress: 'Address',
        tableStore: 'Store',
        tableItemsCount: 'Items',
        tableTotal: 'Total',
        invTotalAmount: 'Order Total',
        invTotalPaid: 'Total Paid',
        invRemaining: 'Remaining Balance',
        actionView: 'View',
        actionEdit: 'Edit',
        actionPdf: 'PDF',
        actionInternal: 'Internal',
        actionWhatsapp: 'WhatsApp',
        actionDelete: 'Delete'
    }
};

// --- INITIALIZATION & LOCALSTORAGE ---
function initApp() {
    loadFromLocalStorage();
    applyLanguage(appData.settings.defaultLang);
    document.getElementById('globalLangSelect').value = appData.settings.defaultLang;
    renderCompanyBranding();

    // Set default dates for new order
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('orderDateInput').value = today;
    generateNewOrderNumber();

    // Setup initial store and payment row in form if empty
    addStoreRow();
    addPaymentRow();

    setupEventListeners();
    refreshAllViews();
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('order_time_nour_express_data');
    if (saved) {
        try {
            appData = JSON.parse(saved);
        } catch (e) { console.error('Error loading storage', e); }
    }
}

function saveToLocalStorage() {
    localStorage.setItem('order_time_nour_express_data', JSON.stringify(appData));
}

function generateNewOrderNumber() {
    const nextNum = appData.orders.length > 0 ? Math.max(...appData.orders.map(o => parseInt(o.id.replace('#', '')) || 1000)) + 1 : 1001;
    document.getElementById('orderNumberInput').value = '#' + nextNum;
}

// --- LANGUAGE & UI RENDERING ---
function applyLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.textContent = TRANSLATIONS[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            el.placeholder = TRANSLATIONS[lang][key];
        }
    });
}

function renderCompanyBranding() {
    const logoImg = document.getElementById('companyLogoImg');
    if (logoImg) logoImg.src = appData.settings.logo;
    const headerName = document.getElementById('headerCompanyName');
    if (headerName) headerName.textContent = appData.settings.companyName;

    // Populate settings form values
    document.getElementById('setCompanyName').value = appData.settings.companyName;
    document.getElementById('setCompanyPhone').value = appData.settings.phone || '';
    document.getElementById('setCompanyWhatsapp').value = appData.settings.whatsapp || '';
    document.getElementById('setCompanyEmail').value = appData.settings.email || '';
    document.getElementById('setCompanyAddress').value = appData.settings.address || '';
    document.getElementById('setCompanyFooter').value = appData.settings.footerMessage || '';
    document.getElementById('setDefaultLang').value = appData.settings.defaultLang;
    document.getElementById('setReportingCurr').value = appData.settings.reportingCurr;
}

// --- NAVIGATION & VIEWS ---
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));

            item.classList.add('active');
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');

            if (target === 'new-order-section' && !document.getElementById('editOrderId').value) {
                resetOrderForm();
            }
            refreshAllViews();
        });
    });

    document.getElementById('gotoNewOrderBtn').addEventListener('click', () => {
        document.querySelector('[data-target="new-order-section"]').click();
    });

    // Global Language Selector
    document.getElementById('globalLangSelect').addEventListener('change', (e) => {
        const lang = e.target.value;
        appData.settings.defaultLang = lang;
        applyLanguage(lang);
        saveToLocalStorage();
    });

    // Add Store Row in New Order
    document.getElementById('addStoreRowBtn').addEventListener('click', () => addStoreRow());
    // Add Payment Row in New Order
    document.getElementById('addPaymentRowBtn').addEventListener('click', () => addPaymentRow());

    // Live calculation triggers in form
    document.getElementById('orderForm').addEventListener('input', updateLivePreviewAndCalcs);
    document.getElementById('orderForm').addEventListener('change', updateLivePreviewAndCalcs);

    // Save Order Submit
    document.getElementById('orderForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveCurrentOrder();
    });

    // Filters
    document.getElementById('filterStatus').addEventListener('change', renderOrdersTable);
    document.getElementById('filterStore').addEventListener('change', renderOrdersTable);
    document.getElementById('filterDate').addEventListener('change', renderOrdersTable);
    document.getElementById('globalSearchInput').addEventListener('input', renderOrdersTable);

    // Stores management modal
    document.getElementById('openAddStoreModalBtn').addEventListener('click', () => openStoreModal());
    document.getElementById('closeStoreModalBtn').addEventListener('click', () => closeStoreModal());
    document.getElementById('storeForm').addEventListener('submit', handleStoreSubmit);

    // Settings form
    document.getElementById('settingsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveSettings();
    });

    // Backup & Restore
    document.getElementById('exportBackupBtn').addEventListener('click', exportBackup);
    document.getElementById('importBackupFile').addEventListener('change', importBackup);

    // PDF & WhatsApp Preview Buttons
    document.getElementById('previewPdfBtn').addEventListener('click', downloadCustomerPDF);
    document.getElementById('previewWhatsappBtn').addEventListener('click', sendCustomerWhatsApp);

    // Internal Modal Close
    document.getElementById('closeInternalModalBtn').addEventListener('click', () => {
        document.getElementById('internalReportModal').classList.add('d-none');
    });
    document.getElementById('printInternalPdfBtn').addEventListener('click', printInternalPDF);
}

function addStoreRow(storeId = '', pieces = 1, totalUSD = 0) {
    const container = document.getElementById('storesRowsContainer');
    const rowId = 'store_row_' + Math.random().toString(36).substring(2, 7);

    let storeOptions = appData.stores.map(s => `<option value="${s.name}" ${s.name === storeId ? 'selected' : ''}>${s.name}</option>`).join('');

    const div = document.createElement('div');
    div.className = 'form-grid mt-2 store-row-item';
    div.id = rowId;
    div.innerHTML = `
        <div class="form-group">
            <select class="store-select" required>${storeOptions}</select>
        </div>
        <div class="form-group">
            <input type="number" class="store-pieces" min="1" value="${pieces}" placeholder="عدد القطع" required>
        </div>
        <div class="form-group">
            <input type="number" class="store-usd" min="0" step="0.01" value="${totalUSD}" placeholder="الإجمالي USD" required>
        </div>
        <div class="form-group" style="justify-content: flex-end;">
            <button type="button" class="btn-sm btn-secondary" onclick="document.getElementById('${rowId}').remove(); updateLivePreviewAndCalcs();"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    container.appendChild(div);
    updateLivePreviewAndCalcs();
}

function addPaymentRow(date = new Date().toISOString().split('T')[0], amount = 0) {
    const container = document.getElementById('paymentsRowsContainer');
    const rowId = 'payment_row_' + Math.random().toString(36).substring(2, 7);

    const div = document.createElement('div');
    div.className = 'form-grid mt-2 payment-row-item';
    div.id = rowId;
    div.innerHTML = `
        <div class="form-group">
            <input type="date" class="payment-date" value="${date}" required>
        </div>
        <div class="form-group">
            <input type="number" class="payment-amount" min="0" step="1" value="${amount}" placeholder="القيمة DZD" required>
        </div>
        <div class="form-group" style="justify-content: flex-end;">
            <button type="button" class="btn-sm btn-secondary" onclick="document.getElementById('${rowId}').remove(); updateLivePreviewAndCalcs();"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;
    container.appendChild(div);
    updateLivePreviewAndCalcs();
}

// --- LIVE CALCULATIONS & PREVIEW ---
function updateLivePreviewAndCalcs() {
    const exchangeRate = parseFloat(document.getElementById('exchangeRateInput').value) || 135;
    const customerTotalDZD = parseFloat(document.getElementById('customerTotalDZDInput').value) || 0;

    // Calculate total purchase USD from store rows
    let totalPurchaseUSD = 0;
    const storeRows = document.querySelectorAll('.store-row-item');
    storeRows.forEach(row => {
        const usd = parseFloat(row.querySelector('.store-usd').value) || 0;
        totalPurchaseUSD += usd;
    });

    document.getElementById('liveTotalPurchaseUSD').textContent = totalPurchaseUSD.toFixed(2) + ' USD';

    // Calculate Purchase Cost in DZD
    const costDZD = totalPurchaseUSD * exchangeRate;
    document.getElementById('previewCostDZD').textContent = costDZD.toLocaleString() + ' DZD';

    // Gross Profit
    const grossProfit = customerTotalDZD - costDZD;
    const profitEl = document.getElementById('previewGrossProfit');
    profitEl.textContent = grossProfit.toLocaleString() + ' DZD';
    profitEl.className = grossProfit >= 0 ? 'text-success' : 'text-danger';

    // Calculate Total Paid DZD
    let totalPaidDZD = 0;
    const paymentRows = document.querySelectorAll('.payment-row-item');
    paymentRows.forEach(row => {
        const amt = parseFloat(row.querySelector('.payment-amount').value) || 0;
        totalPaidDZD += amt;
    });

    document.getElementById('liveTotalPaidDZD').textContent = totalPaidDZD.toLocaleString() + ' DZD';

    const remainingDZD = customerTotalDZD - totalPaidDZD;
    const remEl = document.getElementById('liveRemainingDZD');
    remEl.textContent = remainingDZD.toLocaleString() + ' DZD';
    remEl.className = remainingDZD > 0 ? 'text-danger' : 'text-success';

    // Render Live Customer Invoice Preview
    renderInvoicePreviewHTML();
}

function gatherCurrentOrderFormData() {
    const stores = [];
    document.querySelectorAll('.store-row-item').forEach(row => {
        stores.push({
            store: row.querySelector('.store-select').value,
            pieces: parseInt(row.querySelector('.store-pieces').value) || 1,
            totalUSD: parseFloat(row.querySelector('.store-usd').value) || 0
        });
    });

    let totalPurchaseUSD = stores.reduce((sum, s) => sum + s.totalUSD, 0);
    const exchangeRate = parseFloat(document.getElementById('exchangeRateInput').value) || 135;
    const customerTotalDZD = parseFloat(document.getElementById('customerTotalDZDInput').value) || 0;
    const costDZD = totalPurchaseUSD * exchangeRate;
    const grossProfit = customerTotalDZD - costDZD;

    const payments = [];
    document.querySelectorAll('.payment-row-item').forEach(row => {
        payments.push({
            date: row.querySelector('.payment-date').value,
            amount: parseFloat(row.querySelector('.payment-amount').value) || 0
        });
    });

    const totalPaidDZD = payments.reduce((sum, p) => sum + p.amount, 0);
    const remainingDZD = customerTotalDZD - totalPaidDZD;

    return {
        id: document.getElementById('orderNumberInput').value,
        date: document.getElementById('orderDateInput').value,
        expDate: document.getElementById('orderExpDateInput').value,
        status: document.getElementById('orderStatusInput').value,
        notes: document.getElementById('orderNotesInput').value,
        customer: {
            name: document.getElementById('custNameInput').value,
            phone: document.getElementById('custPhoneInput').value,
            whatsapp: document.getElementById('custWhatsappInput').value,
            address: document.getElementById('custAddressInput').value
        },
        stores: stores,
        purchaseUSD: totalPurchaseUSD,
        exchangeRate: exchangeRate,
        costDZD: costDZD,
        customerTotalDZD: customerTotalDZD,
        grossProfit: grossProfit,
        netProfit: grossProfit, // Net = Gross in standard flow
        payments: payments,
        totalPaidDZD: totalPaidDZD,
        remainingDZD: remainingDZD,
        invoiceLang: document.getElementById('invoiceLangSelect').value,
        invoiceCurr: document.getElementById('invoiceCurrSelect').value
    };
}

function getStatusBadgeStyle(statusText) {
    if (!statusText) return 'background: #f1f5f9; color: #475569;';
    const s = statusText.toLowerCase();
    let bg = '#f1f5f9';
    let color = '#475569';

    if (s.includes('مكتمل') || s.includes('completed') || s.includes('livré') || s.includes('تم')) {
        bg = '#d1fae5';
        color = '#065f46';
    } else if (s.includes('انتظار') || s.includes('pending') || s.includes('en attente') || s.includes('مراجعة')) {
        bg = '#fef3c7';
        color = '#92400e';
    } else if (s.includes('ملغي') || s.includes('cancelled') || s.includes('annulé') || s.includes('مرفوض')) {
        bg = '#fee2e2';
        color = '#991b1b';
    } else if (s.includes('معالجة') || s.includes('processing') || s.includes('شحن') || s.includes('en cours')) {
        bg = '#e0f2fe';
        color = '#0369a1';
    }
    return `background: ${bg}; color: ${color}; padding: 3px 8px; border-radius: 4px; font-weight: 600; display: inline-block;`;
}

window.getStatusBadgeStyle = function(statusText) {
    if (!statusText) return 'background: #f1f5f9; color: #475569; padding: 3px 8px; border-radius: 4px; font-weight: 600; display: inline-block;';
    
    const s = String(statusText).trim().toLowerCase();
    let bg = '#f1f5f9';
    let color = '#475569';

    // 1. ملغي أو مرفوض (أحمر)
    if (s.includes('ملغ') || s.includes('cancel') || s.includes('رفض') || s.includes('إلغاء')) {
        bg = '#fee2e2';
        color = '#991b1b';
    } 
    // 2. وصل أو مكتمل أو arrived (أخضر داكن)
    else if (s.includes('وصل') || s.includes('arriv') || s.includes('مكتمل') || s.includes('deliver') || s.includes('complet') || s.includes('done')) {
        bg = '#d1fae5';
        color = '#065f46';
    } 
    // 3. في التسليم (تيل / أخضر فاتح)
    else if (s.includes('تسليم') || s.includes('out_for_delivery')) {
        bg = '#ccfbf1';
        color = '#115e59';
    } 
    // 4. في الشحن (أزرق)
    else if (s.includes('شحن') || s.includes('ship')) {
        bg = '#e0f2fe';
        color = '#0369a1';
    } 
    // 5. قيد الطلب أو معالجة (أصفر / برتقالي)
    else if (s.includes('قيد') || s.includes('pending') || s.includes('process')) {
        bg = '#fef3c7';
        color = '#92400e';
    } 
    // 6. تم الطلب أو ordered (رمادي مميز)
    else if (s.includes('تم الطلب') || s.includes('order') || s.includes('new')) {
        bg = '#c7f0ec';
        color = '#334155';
    }

    return `background: ${bg} !important; color: ${color} !important; padding: 3px 8px; border-radius: 4px; font-weight: 600; display: inline-block;`;
};
function renderInvoicePreviewHTML(customOrderData = null) {
    const data = customOrderData || gatherCurrentOrderFormData();
    const lang = data.invoiceLang || 'ar';
    const curr = data.invoiceCurr || 'DZD';
    const rate = data.exchangeRate || 135;

    // Format amounts based on currency
    const formatCurr = (valDZD) => {
        if (curr === 'USD') {
            return (valDZD / rate).toFixed(2) + ' USD';
        }
        return valDZD.toLocaleString() + ' DZD';
    };

    let storesHTML = '';
    const totalStores = data.stores.length;
    let distributedSum = 0;

    data.stores.forEach((s, index) => {
        let storeCustomerDZD = 0;
        if (data.customerTotalDZD > 0) {
            if (totalStores === 1) {
                storeCustomerDZD = data.customerTotalDZD;
            } else if (index === totalStores - 1) {
                storeCustomerDZD = data.customerTotalDZD - distributedSum;
            } else if (data.purchaseUSD > 0) {
                storeCustomerDZD = Math.round((s.totalUSD / data.purchaseUSD) * data.customerTotalDZD);
                distributedSum += storeCustomerDZD;
            } else {
                storeCustomerDZD = Math.round(data.customerTotalDZD / totalStores);
                distributedSum += storeCustomerDZD;
            }
        } else {
            storeCustomerDZD = s.totalUSD * rate;
        }

        // البحث عن المتجر في الإعدادات العامة لجلب شعاره بحجم 40px بجانب الاسم
        const matchedStore = appData.stores && appData.stores.find(storeObj => storeObj.name === s.store);
        const storeLogoHtml = matchedStore && matchedStore.logo 
            ? `<img src="${matchedStore.logo}" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-inline-end: 6px; border-radius: 3px;">` 
            : '';

        let storeDisplayTotal = formatCurr(storeCustomerDZD);
        storesHTML += `
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">
                    ${storeLogoHtml}<span>${s.store}</span>
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${s.pieces}</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: end;">${storeDisplayTotal}</td>
            </tr>
        `;
    });

    const t = TRANSLATIONS[lang] || TRANSLATIONS['ar'];
    const isRtl = lang === 'ar';
    const badgeStyle = getStatusBadgeStyle(data.status);

    let html = `
        <div style="direction: ${isRtl ? 'rtl' : 'ltr'}; text-align: ${isRtl ? 'right' : 'left'}; font-size: 0.92rem; color: #1e293b; font-family: 'Cairo', sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #059669; padding-bottom: 15px; margin-bottom: 15px;">
                <div>
                    <h2 style="color: #047857; margin: 0; font-size: 1.2rem;">${appData.settings.companyName}</h2>
                    <p style="font-size: 0.75rem; color: #64748b; margin: 2px 0;">${appData.settings.email || ''} | ${appData.settings.phone || ''}</p>
                </div>
                <img src="${appData.settings.logo}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
            </div>

            <div style="text-align: center; margin-bottom: 15px;">
                <h3 style="background: #ecfdf5; color: #047857; padding: 6px; border-radius: 6px; font-size: 1rem; margin: 0;">${t.invoiceTitleHeader}</h3>
            </div>

            <div style="margin-bottom: 15px; font-size: 0.85rem; line-height: 1.8;">
                <div><strong>${t.invOrderNo}:</strong> ${data.id}</div>
                <div><strong>${t.invOrderDate}:</strong> ${data.date}</div>
                ${data.expDate ? `<div><strong>${t.invExpDate}:</strong> ${data.expDate}</div>` : ''}
<div>
    <strong>${t.invStatus}:</strong> 
    <span style="${getStatusBadgeStyle(data.status)}">${data.status || '---'}</span>
</div>
            <div style="background: #f8fafc; padding: 10px; border-radius: 8px; margin-bottom: 15px; font-size: 0.85rem;">
                <div><strong>${t.invCustomerName}:</strong> ${data.customer.name || '---'}</div>
                <div><strong>${t.invPhone}:</strong> ${data.customer.phone || '---'}</div>
                <div><strong>${t.invWhatsapp}:</strong> ${data.customer.whatsapp || '---'}</div>
                ${data.customer.address ? `<div><strong>${t.invAddress}:</strong> ${data.customer.address}</div>` : ''}
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.85rem;">
                <thead>
                    <tr style="background: #f1f5f9; color: #0f766e;">
                        <th style="padding: 8px; text-align: ${isRtl ? 'right' : 'left'};">${t.tableStore}</th>
                        <th style="padding: 8px; text-align: center;">${t.tableItemsCount}</th>
                        <th style="padding: 8px; text-align: ${isRtl ? 'left' : 'right'};">${t.tableTotal}</th>
                    </tr>
                </thead>
                <tbody>
                    ${storesHTML}
                </tbody>
            </table>

            <div style="border-top: 1px solid #cbd5e1; padding-top: 10px; font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                    <span><strong>${t.invTotalAmount}:</strong></span>
                    <span><strong>${formatCurr(data.customerTotalDZD)}</strong></span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; color: #059669;">
                    <span>${t.invTotalPaid}:</span>
                    <span>${formatCurr(data.totalPaidDZD)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; color: #dc2626;">
                    <span>${t.invRemaining}:</span>
                    <span>${formatCurr(data.remainingDZD)}</span>
                </div>
            </div>

            ${appData.settings.footerMessage ? `<div style="text-align: center; margin-top: 20px; font-size: 0.75rem; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 10px;">${appData.settings.footerMessage}</div>` : ''}
        </div>
    `;

    if (!customOrderData) {
        const previewContainer = document.getElementById('customerInvoicePreview');
        if (previewContainer) {
            previewContainer.innerHTML = html;
        }
    }
    return html;
}
// --- SAVE / EDIT ORDER ---
function saveCurrentOrder() {
    const orderData = gatherCurrentOrderFormData();
    if (!orderData.customer.name || !orderData.customer.phone) {
        alert('يرجى إدخال اسم الزبون ورقم الهاتف على الأقل.');
        return;
    }

    const editId = document.getElementById('editOrderId').value;
    if (editId) {
        const index = appData.orders.findIndex(o => o.id === editId);
        if (index !== -1) {
            appData.orders[index] = orderData;
        }
    } else {
        // Check duplicate id
        if (appData.orders.some(o => o.id === orderData.id)) {
            orderData.id = '#' + (parseInt(orderData.id.replace('#', '')) + 1);
        }
        appData.orders.unshift(orderData);
    }

    saveToLocalStorage();
    alert('تم حفظ الطلب بنجاح!');
    document.querySelector('[data-target="orders-section"]').click();
}

function resetOrderForm() {
    document.getElementById('editOrderId').value = '';
    document.getElementById('orderForm').reset();
    document.getElementById('orderDateInput').value = new Date().toISOString().split('T')[0];
    document.getElementById('exchangeRateInput').value = '135';
    generateNewOrderNumber();

    document.getElementById('storesRowsContainer').innerHTML = '';
    document.getElementById('paymentsRowsContainer').innerHTML = '';
    addStoreRow();
    addPaymentRow();
    updateLivePreviewAndCalcs();
    document.getElementById('orderFormTitle').textContent = TRANSLATIONS[appData.settings.defaultLang]['newOrderTitle'];
}

// --- ORDERS TABLE & DASHBOARD STATS ---
function refreshAllViews() {
    renderDashboardStats();
    renderOrdersTable();
    populateStoreFilters();
    renderStoresGrid();
}

function renderDashboardStats() {
    const orders = appData.orders;
    document.getElementById('statTotalOrders').textContent = orders.length;

    const uniqueCustomers = new Set(orders.map(o => o.customer.phone)).size;
    document.getElementById('statTotalCustomers').textContent = uniqueCustomers;

    const reportingCurr = appData.settings.reportingCurr;

    let totalOrdersValDZD = 0;
    let totalCollectedDZD = 0;
    let totalRemainingDZD = 0;
    let capitalDZD = 0;
    let grossProfitDZD = 0;

    orders.forEach(o => {
        totalOrdersValDZD += o.customerTotalDZD;
        totalCollectedDZD += o.totalPaidDZD;
        totalRemainingDZD += o.remainingDZD;
        capitalDZD += o.costDZD;
        grossProfitDZD += o.grossProfit;
    });

    const formatRep = (valDZD) => {
        if (reportingCurr === 'USD') {
            // average rate or per order conversion approximation for report
            const avgRate = orders.length > 0 ? orders.reduce((s, o) => s + o.exchangeRate, 0) / orders.length : 135;
            return (valDZD / avgRate).toFixed(2) + ' USD';
        }
        return valDZD.toLocaleString() + ' DZD';
    };

    document.getElementById('statTotalOrdersValue').textContent = formatRep(totalOrdersValDZD);
    document.getElementById('statTotalCollectedValue').textContent = formatRep(totalCollectedDZD);
    document.getElementById('statTotalRemainingValue').textContent = formatRep(totalRemainingDZD);
    document.getElementById('statCapitalValue').textContent = formatRep(capitalDZD);
    document.getElementById('statGrossProfitValue').textContent = formatRep(grossProfitDZD);
    document.getElementById('statNetProfitValue').textContent = formatRep(grossProfitDZD);
}

function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    if (!tbody) return;

    const statusFilter = document.getElementById('filterStatus').value;
    const storeFilter = document.getElementById('filterStore').value;
    const dateFilter = document.getElementById('filterDate').value;
    const searchVal = document.getElementById('globalSearchInput').value.toLowerCase();

    let filtered = appData.orders.filter(o => {
        let matchStatus = !statusFilter || o.status === statusFilter;
        let matchStore = !storeFilter || o.stores.some(s => s.store === storeFilter);
        let matchDate = !dateFilter || o.date === dateFilter;
        let matchSearch = !searchVal || o.id.toLowerCase().includes(searchVal) || o.customer.name.toLowerCase().includes(searchVal) || o.customer.phone.includes(searchVal);
        return matchStatus && matchStore && matchDate && matchSearch;
    });

    let html = '';
    filtered.forEach(o => {
        const storesStr = o.stores.map(s => `${s.store} (${s.pieces})`).join(', ');
        const badgeClass = `badge-${o.status}`;
        html += `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.date}</td>
                <td>${o.customer.name}<br><small style="color:#64748b;">${o.customer.phone}</small></td>
                <td><small>${storesStr}</small></td>
                <td>${o.customerTotalDZD.toLocaleString()} DZD</td>
                <td>${o.totalPaidDZD.toLocaleString()} DZD</td>
                <td><span class="${o.remainingDZD > 0 ? 'text-danger' : 'text-success'}">${o.remainingDZD.toLocaleString()} DZD</span></td>
                <td><span class="text-success">${o.grossProfit.toLocaleString()} DZD</span></td>
                <td><span class="badge-status ${badgeClass}">${o.status}</span></td>
                <td>
                    <button class="btn-sm btn-secondary" onclick="viewOrderDetails('${o.id}')" title="عرض"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn-sm btn-emerald" onclick="editOrder('${o.id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-sm btn-dark" onclick="openInternalReport('${o.id}')" title="تقرير داخلي"><i class="fa-solid fa-file-lines"></i></button>
                    <button class="btn-sm btn-whatsapp" onclick="sendOrderWhatsapp('${o.id}')" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></button>
                    <button class="btn-sm btn-secondary" onclick="downloadOrderPDF('${o.id}')" title="PDF"><i class="fa-solid fa-file-pdf"></i></button>
                    <button class="btn-sm btn-secondary text-danger" onclick="deleteOrder('${o.id}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html || `<tr><td colspan="10" style="text-align:center; padding:20px; color:#64748b;">لا توجد طلبات مطابقة</td></tr>`;
}

function populateStoreFilters() {
    const filterStoreSelect = document.getElementById('filterStore');
    if (!filterStoreSelect) return;
    let opts = `<option value="">جميع المواقع</option>`;
    appData.stores.forEach(s => {
        opts += `<option value="${s.name}">${s.name}</option>`;
    });
    filterStoreSelect.innerHTML = opts;
}

// --- ACTIONS ON ORDERS (VIEW, EDIT, PDF, WHATSAPP, DELETE, INTERNAL) ---
function viewOrderDetails(id) {
    const o = appData.orders.find(item => item.id === id);
    if (!o) return;
    document.querySelector('[data-target="new-order-section"]').click();
    fillOrderFormForEdit(o);
}

function editOrder(id) {
    const o = appData.orders.find(item => item.id === id);
    if (!o) return;
    document.querySelector('[data-target="new-order-section"]').click();
    fillOrderFormForEdit(o);
}

function fillOrderFormForEdit(o) {
    document.getElementById('editOrderId').value = o.id;
    document.getElementById('orderNumberInput').value = o.id;
    document.getElementById('orderDateInput').value = o.date;
    document.getElementById('orderExpDateInput').value = o.expDate || '';
    document.getElementById('orderStatusInput').value = o.status;
    document.getElementById('orderNotesInput').value = o.notes || '';

    document.getElementById('custNameInput').value = o.customer.name;
    document.getElementById('custPhoneInput').value = o.customer.phone;
    document.getElementById('custWhatsappInput').value = o.customer.whatsapp;
    document.getElementById('custAddressInput').value = o.customer.address || '';

    document.getElementById('exchangeRateInput').value = o.exchangeRate;
    document.getElementById('customerTotalDZDInput').value = o.customerTotalDZD;

    document.getElementById('invoiceLangSelect').value = o.invoiceLang || 'ar';
    document.getElementById('invoiceCurrSelect').value = o.invoiceCurr || 'DZD';

    // Stores rows
    const storesContainer = document.getElementById('storesRowsContainer');
    storesContainer.innerHTML = '';
    o.stores.forEach(s => addStoreRow(s.store, s.pieces, s.totalUSD));

    // Payments rows
    const paymentsContainer = document.getElementById('paymentsRowsContainer');
    paymentsContainer.innerHTML = '';
    o.payments.forEach(p => addPaymentRow(p.date, p.amount));

    updateLivePreviewAndCalcs();
    document.getElementById('orderFormTitle').textContent = 'تعديل الطلب ' + o.id;
}

function deleteOrder(id) {
    if (confirm('هل أنت متأكد من حذف هذا الطلب نهائياً؟')) {
        appData.orders = appData.orders.filter(o => o.id !== id);
        saveToLocalStorage();
        refreshAllViews();
    }
}

// --- HIGH RESOLUTION CRISP PDF EXPORT ---
function exportHighQualityPDF(htmlContent, filename, explicitDir = null) {
    // Detect target direction (e.g. 'ltr' for English/French, 'rtl' for Arabic)
    const isRtl = explicitDir ? (explicitDir === 'rtl') : (htmlContent.includes('direction: rtl') || (!htmlContent.includes('direction: ltr') && (document.documentElement.getAttribute('dir') || 'rtl') === 'rtl'));
    const targetDir = isRtl ? 'rtl' : 'ltr';

    // Store original document root direction
    const originalDocDir = document.documentElement.getAttribute('dir') || 'rtl';

    // Outer hidden wrapper positioned at (0,0) to ensure exact coordinates without offset clipping
    const wrapper = document.createElement('div');
    wrapper.setAttribute('dir', targetDir);
    wrapper.style.direction = targetDir;
    wrapper.style.position = 'fixed';
    wrapper.style.left = '0';
    wrapper.style.top = '0';
    wrapper.style.zIndex = '-99999';
    wrapper.style.opacity = '0.01';
    wrapper.style.pointerEvents = 'none';
    wrapper.style.width = '794px';
    wrapper.style.overflow = 'hidden';

    // Printable container with standard block flow for accurate height calculation
    const tempContainer = document.createElement('div');
    tempContainer.setAttribute('dir', targetDir);
    tempContainer.style.direction = targetDir;
    tempContainer.style.width = '794px'; // 210mm A4 standard width at 96 DPI
    tempContainer.style.backgroundColor = '#ffffff';
    tempContainer.style.padding = '24px 30px';
    tempContainer.style.boxSizing = 'border-box';
    tempContainer.style.fontFamily = "'Cairo', sans-serif";
    tempContainer.style.color = '#1e293b';
    tempContainer.innerHTML = htmlContent;

    wrapper.appendChild(tempContainer);
    document.body.appendChild(wrapper);

    // html2canvas aligns canvas coordinates according to document root direction
    document.documentElement.setAttribute('dir', targetDir);

    const safeFilename = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_');

    const opt = {
        margin: 0, // Margin is 0 because tempContainer's internal padding (30px) provides standard printable margins
        filename: safeFilename,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
            scale: 3,                // 3x resolution (300+ DPI equivalent) for crisp text & graphics
            useCORS: true,           // Load external logos cleanly
            letterRendering: true,   // Accurate glyph positioning
            logging: false,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    const cleanup = () => {
        document.documentElement.setAttribute('dir', originalDocDir);
        if (wrapper && wrapper.parentNode) {
            wrapper.parentNode.removeChild(wrapper);
        }
    };

    return html2pdf()
        .set(opt)
        .from(tempContainer)
        .save()
        .then(() => {
            cleanup();
        })
        .catch(err => {
            console.error('PDF export error:', err);
            cleanup();
        });
}

function downloadCustomerPDF() {
    const btn = document.getElementById('previewPdfBtn');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span data-i18n="btnPrintPdf">جاري التصدير...</span>';
    }

    const orderData = gatherCurrentOrderFormData();
    const rawOrderId = orderData.id || document.getElementById('orderNumberInput').value || 'invoice';
    const cleanId = String(rawOrderId).replace(/[^a-zA-Z0-9_-]/g, '_');
    const htmlContent = renderInvoicePreviewHTML(orderData);
    const invoiceLang = orderData.invoiceLang || 'ar';
    const dir = invoiceLang === 'ar' ? 'rtl' : 'ltr';

    exportHighQualityPDF(htmlContent, `Invoice_${cleanId}.pdf`, dir)
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });
}

function downloadOrderPDF(id) {
    const o = appData.orders.find(item => item.id === id);
    if (!o) return;
    const cleanId = String(o.id || 'invoice').replace(/[^a-zA-Z0-9_-]/g, '_');
    const htmlContent = renderInvoicePreviewHTML(o);
    const invoiceLang = o.invoiceLang || 'ar';
    const dir = invoiceLang === 'ar' ? 'rtl' : 'ltr';
    exportHighQualityPDF(htmlContent, `Invoice_${cleanId}.pdf`, dir);
}

function sendCustomerWhatsApp() {
    const data = gatherCurrentOrderFormData();
    sendWhatsappMessageForOrder(data);
}

function sendOrderWhatsapp(id) {
    const o = appData.orders.find(item => item.id === id);
    if (!o) return;
    sendWhatsappMessageForOrder(o);
}

function sendWhatsappMessageForOrder(o) {
    const storesStr = o.stores.map(s => `${s.store} - ${s.pieces} items`).join('\n');
    const msg =
        `${appData.settings.companyName}
Order Number: ${o.id}
Customer: ${o.customer.name}
Order Date: ${o.date}
${o.expDate ? `Expected Delivery: ${o.expDate}` : ''}
Status: ${o.status}
Stores:
${storesStr}
Total: ${o.customerTotalDZD.toLocaleString()} DZD
Paid: ${o.totalPaidDZD.toLocaleString()} DZD
Remaining: ${o.remainingDZD.toLocaleString()} DZD
Thank you for choosing ${appData.settings.companyName}.`;

    const cleanPhone = o.customer.whatsapp.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// --- INTERNAL REPORT ---
function openInternalReport(id) {
    const o = appData.orders.find(item => item.id === id);
    if (!o) return;

    let paymentsList = o.payments.map(p => `<li>${p.date}: ${p.amount.toLocaleString()} DZD</li>`).join('');
    let storesList = o.stores.map(s => `<li>${s.store} (${s.pieces} pcs) - ${s.totalUSD} USD</li>`).join('');

    let html = `
        <div style="font-size: 0.9rem; line-height: 1.6;">
            <p><strong>رقم الطلب:</strong> ${o.id}</p>
            <p><strong>تاريخ الطلب:</strong> ${o.date} | <strong>التسليم المتوقع:</strong> ${o.expDate || 'غير محدد'}</p>
            <p><strong>الزبون:</strong> ${o.customer.name} (${o.customer.phone})</p>
            <p><strong>المواقع:</strong><ul>${storesList}</ul></p>
            <hr style="margin: 10px 0; border:0; border-top:1px solid #e2e8f0;">
            <p><strong>إجمالي تكلفة الشراء:</strong> ${o.purchaseUSD.toFixed(2)} USD</p>
            <p><strong>سعر الصرف المستخدم:</strong> 1 USD = ${o.exchangeRate} DZD</p>
            <p><strong>التكلفة بالدينار:</strong> ${o.costDZD.toLocaleString()} DZD</p>
            <p><strong>إجمالي المطلوب من الزبون:</strong> ${o.customerTotalDZD.toLocaleString()} DZD</p>
            <p><strong>الدفعات المسجلة:</strong><ul>${paymentsList}</ul></p>
            <p><strong>إجمالي المدفوع:</strong> ${o.totalPaidDZD.toLocaleString()} DZD</p>
            <p><strong>المتبقي:</strong> ${o.remainingDZD.toLocaleString()} DZD</p>
            <hr style="margin: 10px 0; border:0; border-top:1px solid #e2e8f0;">
            <p><strong>رأس المال (التكلفة):</strong> ${o.costDZD.toLocaleString()} DZD</p>
            <p><strong>الربح الإجمالي:</strong> <span class="text-success">${o.grossProfit.toLocaleString()} DZD</span></p>
            <p><strong>صافي الربح:</strong> <span class="text-success">${o.netProfit.toLocaleString()} DZD</span></p>
            <p><strong>الحالة:</strong> ${o.status}</p>
        </div>
    `;

    document.getElementById('internalReportContent').innerHTML = html;
    document.getElementById('internalReportModal').classList.remove('d-none');
}

function printInternalPDF() {
    const btn = document.getElementById('printInternalPdfBtn');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التصدير...';
    }

    const element = document.getElementById('internalReportContent');
    const isRtl = (document.documentElement.getAttribute('dir') || 'rtl') === 'rtl';
    const reportHtml = `
        <div style="direction: ${isRtl ? 'rtl' : 'ltr'}; text-align: ${isRtl ? 'right' : 'left'}; font-family: 'Cairo', sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 16px;">
                <div>
                    <h2 style="color: #0f766e; margin: 0; font-size: 1.2rem;">${appData.settings.companyName}</h2>
                    <p style="font-size: 0.8rem; color: #64748b; margin: 2px 0;">تقرير الطلب الداخلي المفصل</p>
                </div>
                <img src="${appData.settings.logo}" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;">
            </div>
            ${element ? element.innerHTML : ''}
        </div>
    `;

    exportHighQualityPDF(reportHtml, 'Internal_Report.pdf', isRtl ? 'rtl' : 'ltr')
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });
}

// --- STORES SECTION MANAGEMENT ---
function renderStoresGrid() {
    const grid = document.getElementById('storesGridContainer');
    if (!grid) return;
    let html = '';
    appData.stores.forEach(s => {
        html += `
            <div class="store-card">
                <img src="${s.logo}" class="store-logo-img" alt="${s.name}">
                <h4>${s.name}</h4>
                <div class="mt-2">
                    <button class="btn-sm btn-emerald" onclick="openStoreModal('${s.id}')"><i class="fa-solid fa-pen"></i> تعديل</button>
                    <button class="btn-sm btn-secondary text-danger" onclick="deleteStore('${s.id}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function openStoreModal(id = '') {
    document.getElementById('storeModalId').value = id;
    if (id) {
        const s = appData.stores.find(item => item.id === id);
        if (s) {
            document.getElementById('modalStoreNameInput').value = s.name;
            document.getElementById('storeModalTitle').textContent = 'تعديل موقع الشراء';
        }
    } else {
        document.getElementById('storeForm').reset();
        document.getElementById('storeModalTitle').textContent = 'إضافة موقع شراء جديد';
    }
    document.getElementById('storeModal').classList.remove('d-none');
}

function closeStoreModal() {
    document.getElementById('storeModal').classList.add('d-none');
}

function handleStoreSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('storeModalId').value;
    const name = document.getElementById('modalStoreNameInput').value;
    const fileInput = document.getElementById('modalStoreLogoFile');

    const saveStoreData = (logoUrl) => {
        if (id) {
            const s = appData.stores.find(item => item.id === id);
            if (s) {
                s.name = name;
                if (logoUrl) s.logo = logoUrl;
            }
        } else {
            const newId = 'store_' + Math.random().toString(36).substring(2, 7);
            appData.stores.push({
                id: newId,
                name: name,
                logo: logoUrl || 'https://images.unsplash.com/photo-1556742049-0a67d553c253?w=100'
            });
        }
        saveToLocalStorage();
        closeStoreModal();
        refreshAllViews();
    };

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            saveStoreData(e.target.result);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        saveStoreData(null);
    }
}

function deleteStore(id) {
    if (confirm('هل أنت متأكد من حذف هذا الموقع؟')) {
        appData.stores = appData.stores.filter(s => s.id !== id);
        saveToLocalStorage();
        refreshAllViews();
    }
}

// --- SETTINGS & BACKUP ---
function saveSettings() {
    appData.settings.companyName = document.getElementById('setCompanyName').value;
    appData.settings.phone = document.getElementById('setCompanyPhone').value;
    appData.settings.whatsapp = document.getElementById('setCompanyWhatsapp').value;
    appData.settings.email = document.getElementById('setCompanyEmail').value;
    appData.settings.address = document.getElementById('setCompanyAddress').value;
    appData.settings.footerMessage = document.getElementById('setCompanyFooter').value;
    appData.settings.defaultLang = document.getElementById('setDefaultLang').value;
    appData.settings.reportingCurr = document.getElementById('setReportingCurr').value;

    const logoFile = document.getElementById('setCompanyLogoFile');
    if (logoFile.files && logoFile.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            appData.settings.logo = e.target.result;
            finishSavingSettings();
        };
        reader.readAsDataURL(logoFile.files[0]);
    } else {
        finishSavingSettings();
    }
}

function finishSavingSettings() {
    saveToLocalStorage();
    renderCompanyBranding();
    applyLanguage(appData.settings.defaultLang);
    alert('تم حفظ الإعدادات بنجاح!');
}

function exportBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `OrderTime_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

function importBackup(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
        try {
            const parsed = JSON.parse(evt.target.result);
            if (parsed && parsed.orders && parsed.stores) {
                appData = parsed;
                saveToLocalStorage();
                refreshAllViews();
                renderCompanyBranding();
                applyLanguage(appData.settings.defaultLang);
                alert('تم استعادة النسخة الاحتياطية بنجاح!');
            } else {
                alert('ملف النسخة الاحتياطية غير صالح.');
            }
        } catch (err) {
            alert('حدث خطأ أثناء قراءة الملف.');
        }
    };
    reader.readAsText(file);
}

// Run initialization on DOM load
document.addEventListener('DOMContentLoaded', initApp);