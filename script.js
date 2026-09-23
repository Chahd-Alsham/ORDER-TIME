/* ==========================================
   Lighting Manager - Professional JavaScript
   ========================================== */

// Default Data Structure State (المعدات الافتراضية لشركة لايت سكاي)
let appData = {
    projects: [],
    warehouseEquipment: [
        { id: "EQ_LS_1", name: "Beam F450", brand: "Light Sky", model: "Beam F450", type: "Beam Moving Head", available: 100, notes: "إضاءة بيم قوية واحترافية عالية الأداء" },
        { id: "EQ_LS_2", name: "Wash 1920 Zoom", brand: "Light Sky", model: "Wash 1920 Zoom", type: "LED Wash Zoom", available: 40, notes: "إضاءة غسيل متحركة مع خاصية الزوم" },
        { id: "EQ_LS_3", name: "Wash 1940 Zoom", brand: "Light Sky", model: "Wash 1940 Zoom", type: "LED Wash Zoom", available: 30, notes: "إضاءة غسيل متحركة عالية الطاقة مع زوم واسع" },
        { id: "EQ_LS_4", name: "Aurora Spot", brand: "Light Sky", model: "Aurora Spot", type: "Spot Moving Head", available: 60, notes: "سبوت متحرك مع تأثيرات جوبو وبريزم متقدمة" },
        { id: "EQ_LS_5", name: "LED Bar", brand: "Light Sky", model: "LED Bar Standard", type: "LED Bar", available: 200, notes: "شريط إضاءة ليد جداري وديكوري" },
        { id: "EQ_LS_6", name: "LED Bar Battery", brand: "Light Sky", model: "Wireless Battery LED Bar", type: "Battery LED Bar", available: 40, notes: "شريط إضاءة ليد لاسلكي يعمل ببطارية قابلة للشحن" },
        { id: "EQ_LS_7", name: "City Color", brand: "Light Sky", model: "City Color Architectural", type: "Architectural Light", available: 170, notes: "إضاءة معمارية خارجية غامرة للواجهات والمباني" },
        { id: "EQ_LS_8", name: "Strobe Pixel", brand: "Light Sky", model: "Pixel Strobe", type: "Strobe / Blinder", available: 37, notes: "ستروب فلاش إلكتروني مع تحكم بالبكسل" },
        { id: "EQ_LS_9", name: "Blinder RGBW", brand: "Light Sky", model: "RGBW Blinder", type: "Blinder", available: 40, notes: "بلايندر إضاءة المسارح بألوان RGBW المتعددة" },
        { id: "EQ_LS_10", name: "Kinetic Ball", brand: "Light Sky", model: "Kinetic LED Ball", type: "Kinetic System", available: 200, notes: "كرات حركية متحركة مضيئة بنظام الونش" },
        { id: "EQ_LS_11", name: "LED Par 1M", brand: "Light Sky", model: "LED Par 1M", type: "LED Par", available: 30, notes: "إضاءة بار ليد مسرحية وتدشينات" },
        { id: "EQ_LS_12", name: "Truss Euro 1M", brand: "Light Sky", model: "Eurotruss 1M Segment", type: "Rigging / Truss", available: 1000, notes: "هياكل حديدية/ألومنيوم تروس بطول 1 متر" },
        { id: "EQ_LS_13", name: "Motor Chain", brand: "Light Sky", model: "Electric Chain Hoist", type: "Rigging Motor", available: 200, notes: "موتور زنجير كهربائي لرفع الأحمال والتروس" }
    ],
    companySettings: {
        name: "مؤسسة الإضاءة الاحترافية",
        nameEn: "Professional Lighting Est",
        phone: "+966 50 000 0000",
        email: "info@lighting.com",
        website: "www.lighting.com",
        address: "الرياض، المملكة العربية السعودية",
        logo: ""
    },
    engineerSettings: {
        name: "مهندس الإضاءة",
        title: "Senior Lighting Designer",
        phone: "+966 5xxxxxxxx",
        email: "engineer@lighting.com"
    },
    appSettings: {
        language: "ar"
    }
};

// Current Active State
let currentProjectId = null;

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    initNavigation();
    initEventListeners();
    renderProjects();
    renderWarehouse();
    updateSidebarCompanyInfo();
    fillCompanySettingsForm();
});

/* ==========================================
   LocalStorage Management (محسنة لتثبيت البيانات)
   ========================================== */
function loadData() {
    try {
        const saved = localStorage.getItem("LightingManager_Data");
        if (saved) {
            const parsed = JSON.parse(saved);
            // الدمج الذكي: نحافظ على المشاريع وإعدادات المستخدم، ونضمن عدم تدبيل معدات المستودع
            appData.projects = parsed.projects || [];
            appData.warehouseEquipment = parsed.warehouseEquipment && parsed.warehouseEquipment.length > 0 
                ? parsed.warehouseEquipment 
                : appData.warehouseEquipment;
            
            if (parsed.companySettings) appData.companySettings = { ...appData.companySettings, ...parsed.companySettings };
            if (parsed.engineerSettings) appData.engineerSettings = { ...appData.engineerSettings, ...parsed.engineerSettings };
            if (parsed.appSettings) appData.appSettings = { ...appData.appSettings, ...parsed.appSettings };
        } else {
            // إذا لم تكن هناك بيانات مخزنة مسبقاً، قم بحفظ المعدات الافتراضية لأول مرة
            saveData();
        }
    } catch (e) {
        console.error("Error loading data from LocalStorage:", e);
    }
}

function saveData() {
    try {
        localStorage.setItem("LightingManager_Data", JSON.stringify(appData));
    } catch (e) {
        console.error("Error saving to LocalStorage:", e);
        showToast("خطأ في حفظ البيانات محلياً في المتصفح", "error");
    }
}

/* ==========================================
   Navigation & View Routing
   ========================================== */
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("data-target");
            switchView(targetId);
            
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");

            // Close mobile sidebar if open
            document.getElementById("sidebar").classList.remove("mobile-open");
        });
    });

    // Mobile Sidebar Toggle
    document.getElementById("sidebar-toggle").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("mobile-open");
    });
    document.getElementById("sidebar-close").addEventListener("click", () => {
        document.getElementById("sidebar").classList.remove("mobile-open");
    });

    // Back to projects
    document.getElementById("back-to-projects").addEventListener("click", () => {
        switchView("projects-view");
        currentProjectId = null;
        renderProjects();
    });
}

function switchView(viewId) {
    document.querySelectorAll(".view-section").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(viewId).classList.add("active");
    window.scrollTo(0, 0);
}

/* ==========================================
   Toast Notifications
   ========================================== */
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const msgEl = document.getElementById("toast-message");
    const iconEl = document.getElementById("toast-icon");

    msgEl.textContent = message;
    if (type === "success") {
        iconEl.className = "fa-solid fa-circle-check";
        iconEl.style.color = "var(--success-color)";
    } else {
        iconEl.className = "fa-solid fa-triangle-exclamation";
        iconEl.style.color = "var(--danger-color)";
    }

    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* ==========================================
   Modals Management
   ========================================== */
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

document.querySelectorAll(".close-modal, .close-modal-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".modal");
        if (modal) modal.classList.remove("active");
    });
});

/* ==========================================
   Warehouse Equipment Management
   ========================================== */
function initEventListeners() {
    // Open Add Equipment Modal
    document.getElementById("open-add-equipment-modal").addEventListener("click", () => {
        document.getElementById("equipment-modal-title").textContent = "إضافة معدة جديدة للمستودع";
        document.getElementById("equipment-form").reset();
        document.getElementById("eq-id").value = "";
        openModal("equipment-modal");
    });

    // Save Equipment Form
    document.getElementById("equipment-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("eq-id").value;
        const name = document.getElementById("eq-name").value.trim();
        const brand = document.getElementById("eq-brand").value.trim();
        const model = document.getElementById("eq-model").value.trim();
        const type = document.getElementById("eq-type").value.trim();
        const available = parseInt(document.getElementById("eq-available").value) || 0;
        const notes = document.getElementById("eq-notes").value.trim();

        if (id) {
            // Edit existing
            const eq = appData.warehouseEquipment.find(item => item.id === id);
            if (eq) {
                eq.name = name;
                eq.brand = brand;
                eq.model = model;
                eq.type = type;
                eq.available = available;
                eq.notes = notes;
            }
            showToast("تم تحديث المعدة بنجاح");
        } else {
            // Add new
            const newEq = {
                id: "EQ_" + Date.now(),
                name, brand, model, type, available, notes
            };
            appData.warehouseEquipment.push(newEq);
            showToast("تمت إضافة المعدة إلى المستودع بنجاح");
        }

        saveData();
        renderWarehouse();
        closeModal("equipment-modal");
    });

    // Warehouse Search
    document.getElementById("warehouse-search").addEventListener("input", (e) => {
        renderWarehouse(e.target.value);
    });

    // Open Add Project Modal
    document.getElementById("open-add-project-modal").addEventListener("click", () => {
        document.getElementById("project-modal-title").textContent = "مشروع جديد";
        document.getElementById("project-form").reset();
        document.getElementById("project-id").value = "";
        openModal("project-modal");
    });

    // Quick add from mobile top bar
    document.getElementById("quick-add-btn").addEventListener("click", () => {
        openModal("project-modal");
    });

    // Save Project Form
    document.getElementById("project-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("project-id").value;
        const name = document.getElementById("p-name").value.trim();
        const client = document.getElementById("p-client").value.trim();
        const venue = document.getElementById("p-venue").value.trim();
        const date = document.getElementById("p-date").value;
        const time = document.getElementById("p-time").value;
        const setupDate = document.getElementById("p-setup-date").value;
        const notes = document.getElementById("p-notes").value.trim();

        if (id) {
            const proj = appData.projects.find(p => p.id === id);
            if (proj) {
                proj.name = name;
                proj.client = client;
                proj.venue = venue;
                proj.date = date;
                proj.time = time;
                proj.setupDate = setupDate;
                proj.notes = notes;
                proj.updatedAt = new Date().toISOString().split("T")[0];
            }
            showToast("تم تحديث بيانات المشروع");
        } else {
            const newProj = {
                id: "PRJ_" + Date.now(),
                name, client, venue, date, time, setupDate, notes,
                createdAt: new Date().toISOString().split("T")[0],
                updatedAt: new Date().toISOString().split("T")[0],
                versions: [
                    {
                        versionId: "VER_1",
                        versionNumber: 1,
                        versionName: " Version",
                        createdAt: new Date().toISOString().split("T")[0],
                        equipment: []
                    }
                ],
                currentVersionId: "VER_1"
            };
            appData.projects.push(newProj);
            showToast("تم إنشاء المشروع بنجاح");
        }

        saveData();
        renderProjects();
        closeModal("project-modal");
        if (currentProjectId) {
            openProjectDetails(currentProjectId);
        }
    });

    // Project Search
    document.getElementById("project-search").addEventListener("input", (e) => {
        renderProjects(e.target.value);
    });

    // Add Equipment to Project Modal
    document.getElementById("open-open-add-proj-equip-modal")?.addEventListener("click", () => {
        // Handled dynamically
    });
    document.getElementById("open-add-proj-equip-modal").addEventListener("click", () => {
        populateWarehouseDropdown();
        document.getElementById("project-equipment-form").reset();
        document.getElementById("proj-eq-edit-index").value = "-1";
        openModal("project-equipment-modal");
    });

    // Save Project Equipment
    document.getElementById("project-equipment-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const editIdx = parseInt(document.getElementById("proj-eq-edit-index").value);
        const eqId = document.getElementById("select-warehouse-eq").value;
        const required = parseInt(document.getElementById("proj-eq-required").value) || 0;
        const notes = document.getElementById("proj-eq-notes").value.trim();

        const proj = appData.projects.find(p => p.id === currentProjectId);
        if (!proj) return;

        const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId);
        if (!currentVer) return;

        if (editIdx >= 0) {
            // Update existing entry in version
            currentVer.equipment[editIdx] = { eqId, required, notes };
            showToast("تم تحديث المعدة في المشروع");
        } else {
            // Check if already exists in version
            const existing = currentVer.equipment.find(item => item.eqId === eqId);
            if (existing) {
                existing.required += required;
                if (notes) existing.notes = notes;
                showToast("تم تحديث كمية المعدة المطلوبة");
            } else {
                currentVer.equipment.push({ eqId, required, notes });
                showToast("تمت إضافة المعدة إلى المشروع");
            }
        }

        proj.updatedAt = new Date().toISOString().split("T")[0];
        saveData();
        openProjectDetails(currentProjectId);
        closeModal("project-equipment-modal");
    });

    // Versions Modal Trigger
    document.getElementById("open-versions-modal").addEventListener("click", () => {
        renderVersionsModalTable();
        openModal("versions-modal");
    });

    // Create New Version
    document.getElementById("create-version-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const verName = document.getElementById("new-version-name").value.trim();
        const proj = appData.projects.find(p => p.id === currentProjectId);
        if (!proj) return;

        // Find current version to snapshot its equipment independently
        const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId);
        const clonedEquipment = currentVer ? JSON.parse(JSON.stringify(currentVer.equipment)) : [];

        const newVerId = "VER_" + Date.now();
        const newVerNum = proj.versions.length + 1;

        const newVersion = {
            versionId: newVerId,
            versionNumber: newVerNum,
            versionName: verName || `الإصدار ${newVerNum}`,
            createdAt: new Date().toISOString().split("T")[0],
            equipment: clonedEquipment // Snapshot copy
        };

        proj.versions.push(newVersion);
        proj.currentVersionId = newVerId;
        proj.updatedAt = new Date().toISOString().split("T")[0];

        saveData();
        document.getElementById("new-version-name").value = "";
        renderVersionsModalTable();
        openProjectDetails(currentProjectId);
        showToast("تم إنشاء إصدار جديد مستقل بنجاح");
    });

    // Company Settings Form
    document.getElementById("company-settings-form").addEventListener("submit", (e) => {
        e.preventDefault();
        appData.companySettings.name = document.getElementById("comp-name").value.trim();
        appData.companySettings.nameEn = document.getElementById("comp-name-en").value.trim();
        appData.companySettings.phone = document.getElementById("comp-phone").value.trim();
        appData.companySettings.email = document.getElementById("comp-email").value.trim();
        appData.companySettings.website = document.getElementById("comp-website").value.trim();
        appData.companySettings.address = document.getElementById("comp-address").value.trim();

        appData.engineerSettings.name = document.getElementById("eng-name").value.trim();
        appData.engineerSettings.title = document.getElementById("eng-title").value.trim();
        appData.engineerSettings.phone = document.getElementById("eng-phone").value.trim();
        appData.engineerSettings.email = document.getElementById("eng-email").value.trim();

        saveData();
        updateSidebarCompanyInfo();
        showToast("تم حفظ الإعدادات بنجاح");
    });

    // Logo Upload & Delete
    document.getElementById("upload-logo-btn").addEventListener("click", () => {
        document.getElementById("logo-file-input").click();
    });

    document.getElementById("logo-file-input").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                appData.companySettings.logo = event.target.result;
                saveData();
                renderLogoPreview();
                showToast("تم رفع الشعار بنجاح");
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById("delete-logo-btn").addEventListener("click", () => {
        appData.companySettings.logo = "";
        saveData();
        renderLogoPreview();
        showToast("تم حذف الشعار");
    });

    // Backup & Restore Buttons
    document.getElementById("create-backup-btn").addEventListener("click", () => {
        createBackupFile();
    });

    document.getElementById("trigger-restore-btn").addEventListener("click", () => {
        document.getElementById("restore-file-input").click();
    });

    document.getElementById("restore-file-input").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            restoreBackupFile(file);
        }
    });

    // Print & PDF Preview Triggers
    document.getElementById("print-preview-btn").addEventListener("click", () => {
        generatePrintPreviewContent();
        document.getElementById("print-preview-modal").classList.add("active");
    });

    document.getElementById("close-preview-btn").addEventListener("click", () => {
        document.getElementById("print-preview-modal").classList.remove("active");
    });

    document.getElementById("print-doc-btn").addEventListener("click", () => {
        window.print();
    });

    document.getElementById("download-pdf-btn").addEventListener("click", () => {
        exportProjectPDF();
    });
}

/* ==========================================
   Warehouse Rendering
   ========================================== */
function renderWarehouse(searchTerm = "") {
    const tbody = document.getElementById("warehouse-table-body");
    const mobileCards = document.getElementById("warehouse-mobile-cards");
    tbody.innerHTML = "";
    mobileCards.innerHTML = "";

    const filtered = appData.warehouseEquipment.filter(item => {
        const term = searchTerm.toLowerCase();
        return item.name.toLowerCase().includes(term) ||
               item.brand.toLowerCase().includes(term) ||
               item.model.toLowerCase().includes(term) ||
               item.type.toLowerCase().includes(term);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-secondary);">لا توجد معدات في المستودع</td></tr>`;
        mobileCards.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">لا توجد معدات</p>`;
        return;
    }

    filtered.forEach(item => {
        // Table row
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.name}</strong></td>
            <td>${item.brand}</td>
            <td>${item.model}</td>
            <td><span class="badge badge-accent">${item.type}</span></td>
            <td><strong>${item.available}</strong></td>
            <td>${item.notes || '-'}</td>
            <td>
                <button class="icon-btn" onclick="editEquipment('${item.id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                <button class="icon-btn" onclick="confirmDeleteEquipment('${item.id}')" title="حذف" style="color: var(--danger-color);"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);

        // Mobile card
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-card-header">
                <h3>${item.name}</h3>
                <span class="badge badge-accent">${item.type}</span>
            </div>
            <div class="project-card-body">
                <p><i class="fa-solid fa-industry"></i> الشركة: ${item.brand} - ${item.model}</p>
                <p><i class="fa-solid fa-boxes-stacked"></i> المتوفر: <strong>${item.available}</strong></p>
                ${item.notes ? `<p><i class="fa-solid fa-note-sticky"></i> ${item.notes}</p>` : ''}
            </div>
            <div class="project-card-footer">
                <button class="btn btn-secondary" onclick="editEquipment('${item.id}')"><i class="fa-solid fa-pen"></i> تعديل</button>
                <button class="btn btn-danger" onclick="confirmDeleteEquipment('${item.id}')"><i class="fa-solid fa-trash"></i> حذف</button>
            </div>
        `;
        mobileCards.appendChild(card);
    });
}

function editEquipment(id) {
    const item = appData.warehouseEquipment.find(i => i.id === id);
    if (!item) return;

    document.getElementById("equipment-modal-title").textContent = "تعديل بيانات المعدة";
    document.getElementById("eq-id").value = item.id;
    document.getElementById("eq-name").value = item.name;
    document.getElementById("eq-brand").value = item.brand;
    document.getElementById("eq-model").value = item.model;
    document.getElementById("eq-type").value = item.type;
    document.getElementById("eq-available").value = item.available;
    document.getElementById("eq-notes").value = item.notes || "";

    openModal("equipment-modal");
}

function confirmDeleteEquipment(id) {
    showConfirmDialog("هل أنت متأكد من حذف هذه المعدة من المستودع؟", () => {
        appData.warehouseEquipment = appData.warehouseEquipment.filter(i => i.id !== id);
        saveData();
        renderWarehouse();
        showToast("تم حذف المعدة بنجاح");
    });
}

/* ==========================================
   Projects Rendering
   ========================================== */
function renderProjects(searchTerm = "") {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = "";

    const filtered = appData.projects.filter(p => {
        const term = searchTerm.toLowerCase();
        return p.name.toLowerCase().includes(term) ||
               p.venue.toLowerCase().includes(term) ||
               (p.client && p.client.toLowerCase().includes(term));
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 40px;">لا توجد مشاريع مضافة حالياً. ابدأ بإنشاء مشروع جديد.</p>`;
        return;
    }

    filtered.forEach(proj => {
        // Calculate totals for current version
        const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId) || proj.versions[0];
        const typesCount = currentVer ? currentVer.equipment.length : 0;
        
        let totalReq = 0;
        let totalShort = 0;

        if (currentVer) {
            currentVer.equipment.forEach(item => {
                totalReq += item.required;
                const whItem = appData.warehouseEquipment.find(w => w.id === item.eqId);
                const avail = whItem ? whItem.available : 0;
                const short = Math.max(0, item.required - avail);
                totalShort += short;
            });
        }

        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <div class="project-card-header">
                <h3>${proj.name}</h3>
                <span class="badge badge-accent">${currentVer ? currentVer.versionName : 'v1'}</span>
            </div>
            <div class="project-card-body">
                <p><i class="fa-solid fa-location-dot"></i> ${proj.venue}</p>
                <p><i class="fa-solid fa-calendar"></i> ${proj.date} ${proj.time ? '- ' + proj.time : ''}</p>
                ${proj.client ? `<p><i class="fa-solid fa-user-tie"></i> العميل: ${proj.client}</p>` : ''}
            </div>
            <div class="project-stats-mini">
                <div class="mini-stat">
                    <label>أنواع المعدات</label>
                    <span>${typesCount}</span>
                </div>
                <div class="mini-stat">
                    <label>إجمالي المطلوبة</label>
                    <span>${totalReq}</span>
                </div>
                <div class="mini-stat ${totalShort > 0 ? 'alert' : ''}">
                    <label>النقص</label>
                    <span>${totalShort}</span>
                </div>
            </div>
            <div class="project-card-footer">
                <button class="btn btn-primary" onclick="openProjectDetails('${proj.id}')"><i class="fa-solid fa-folder-open"></i> فتح</button>
                <button class="btn btn-secondary" onclick="editProject('${proj.id}')"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-danger" onclick="confirmDeleteProject('${proj.id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openProjectDetails(projId) {
    currentProjectId = projId;
    const proj = appData.projects.find(p => p.id === projId);
    if (!proj) return;

    const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId) || proj.versions[0];

    // Populate UI
    document.getElementById("det-proj-name").textContent = proj.name;
    document.getElementById("det-proj-venue").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${proj.venue} ${proj.client ? '| العميل: ' + proj.client : ''}`;
    document.getElementById("det-proj-date").innerHTML = `<i class="fa-solid fa-calendar"></i> تاريخ الفعالية: ${proj.date}`;
    document.getElementById("det-proj-version-badge").textContent = `الإصدار الحالي: ${currentVer.versionName}`;
    document.getElementById("versions-count-lbl").textContent = proj.versions.length;

    // Render stats & equipment table
    renderProjectEquipmentTable(proj, currentVer);

    switchView("project-details-view");
}

function editProject(id) {
    const proj = appData.projects.find(p => p.id === id);
    if (!proj) return;

    document.getElementById("project-modal-title").textContent = "تعديل بيانات المشروع";
    document.getElementById("project-id").value = proj.id;
    document.getElementById("p-name").value = proj.name;
    document.getElementById("p-client").value = proj.client || "";
    document.getElementById("p-venue").value = proj.venue;
    document.getElementById("p-date").value = proj.date;
    document.getElementById("p-time").value = proj.time || "";
    document.getElementById("p-setup-date").value = proj.setupDate || "";
    document.getElementById("p-notes").value = proj.notes || "";

    openModal("project-modal");
}

function confirmDeleteProject(id) {
    showConfirmDialog("هل أنت متأكد من حذف هذا المشروع نهائياً؟", () => {
        appData.projects = appData.projects.filter(p => p.id !== id);
        saveData();
        renderProjects();
        showToast("تم حذف المشروع بنجاح");
    });
}

/* ==========================================
   Project Equipment Rendering
   ========================================== */
function renderProjectEquipmentTable(proj, version) {
    const tbody = document.getElementById("project-equip-table-body");
    const mobileCards = document.getElementById("project-equip-mobile-cards");
    tbody.innerHTML = "";
    mobileCards.innerHTML = "";

    let totalTypes = version.equipment.length;
    let totalReq = 0;
    let totalShort = 0;

    if (totalTypes === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-secondary);">لا توجد معدات مضافة لهذا الإصدار</td></tr>`;
        mobileCards.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">لا توجد معدات مضافة</p>`;
    } else {
        version.equipment.forEach((item, index) => {
            const whItem = appData.warehouseEquipment.find(w => w.id === item.eqId);
            const name = whItem ? whItem.name : "معدة غير معروفة";
            const brand = whItem ? whItem.brand : "-";
            const model = whItem ? whItem.model : "-";
            const type = whItem ? whItem.type : "-";
            const available = whItem ? whItem.available : 0;
            const required = item.required;
            const shortage = Math.max(0, required - available);

            totalReq += required;
            totalShort += shortage;

            // Table Row
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${name}</strong></td>
                <td>${brand}</td>
                <td>${model}</td>
                <td><span class="badge badge-accent">${type}</span></td>
                <td>${available}</td>
                <td><strong>${required}</strong></td>
                <td><span class="${shortage > 0 ? 'badge badge-alert' : ''}">${shortage}</span></td>
                <td>${item.notes || '-'}</td>
                <td>
                    <button class="icon-btn" onclick="editProjectEquipment(${index})" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                    <button class="icon-btn" onclick="deleteProjectEquipment(${index})" title="حذف" style="color: var(--danger-color);"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);

            // Mobile Card
            const card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = `
                <div class="project-card-header">
                    <h3>${name}</h3>
                    <span class="badge ${shortage > 0 ? 'badge-alert' : 'badge-accent'}">نقص: ${shortage}</span>
                </div>
                <div class="project-card-body">
                    <p><i class="fa-solid fa-industry"></i> ${brand} - ${model} (${type})</p>
                    <p><i class="fa-solid fa-warehouse"></i> المتوفر: ${available} | المطلوبة: <strong>${required}</strong></p>
                    ${item.notes ? `<p><i class="fa-solid fa-note-sticky"></i> ${item.notes}</p>` : ''}
                </div>
                <div class="project-card-footer">
                    <button class="btn btn-secondary" onclick="editProjectEquipment(${index})"><i class="fa-solid fa-pen"></i> تعديل</button>
                    <button class="btn btn-danger" onclick="deleteProjectEquipment(${index})"><i class="fa-solid fa-trash"></i> حذف</button>
                </div>
            `;
            mobileCards.appendChild(card);
        });
    }

    // Update stats
    document.getElementById("stat-equip-types").textContent = totalTypes;
    document.getElementById("stat-total-req").textContent = totalReq;
    document.getElementById("stat-total-short").textContent = totalShort;
}

function populateWarehouseDropdown() {
    const select = document.getElementById("select-warehouse-eq");
    select.innerHTML = `<option value="">-- اختر المعدة من المستودع --</option>`;
    appData.warehouseEquipment.forEach(w => {
        const opt = document.createElement("option");
        opt.value = w.id;
        opt.textContent = `${w.name} (${w.brand} - ${w.model}) [متوفر: ${w.available}]`;
        select.appendChild(opt);
    });
}

function editProjectEquipment(index) {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;
    const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId);
    const item = currentVer.equipment[index];
    if (!item) return;

    populateWarehouseDropdown();
    document.getElementById("select-warehouse-eq").value = item.eqId;
    document.getElementById("proj-eq-required").value = item.required;
    document.getElementById("proj-eq-notes").value = item.notes || "";
    document.getElementById("proj-eq-edit-index").value = index;

    openModal("project-equipment-modal");
}

function deleteProjectEquipment(index) {
    showConfirmDialog("هل أنت متأكد من حذف هذه المعدة من المشروع؟", () => {
        const proj = appData.projects.find(p => p.id === currentProjectId);
        if (!proj) return;
        const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId);
        currentVer.equipment.splice(index, 1);
        proj.updatedAt = new Date().toISOString().split("T")[0];
        saveData();
        openProjectDetails(currentProjectId);
        showToast("تم حذف المعدة من المشروع");
    });
}

/* ==========================================
   Versions Management
   ========================================== */
function renderVersionsModalTable() {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;

    const tbody = document.getElementById("versions-table-body");
    tbody.innerHTML = "";

    proj.versions.forEach(ver => {
        const isCurrent = ver.versionId === proj.currentVersionId;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>v${ver.versionNumber}</strong></td>
            <td>${ver.versionName}</td>
            <td>${ver.createdAt}</td>
            <td>${isCurrent ? '<span class="badge badge-accent">الإصدار الحالي</span>' : '-'}</td>
            <td>
                ${!isCurrent ? `<button class="btn btn-secondary" onclick="switchCurrentVersion('${ver.versionId}')"><i class="fa-solid fa-check"></i> تعيين كحالي</button>` : ''}
                <button class="icon-btn" onclick="confirmDeleteVersion('${ver.versionId}')" title="حذف الإصدار" style="color: var(--danger-color);"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function switchCurrentVersion(versionId) {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;
    proj.currentVersionId = versionId;
    saveData();
    renderVersionsModalTable();
    openProjectDetails(currentProjectId);
    showToast("تم تغيير الإصدار الحالي بنجاح");
}

function confirmDeleteVersion(versionId) {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;
    if (proj.versions.length <= 1) {
        showToast("لا يمكن حذف الإصدار الوحيد للمشروع", "error");
        return;
    }

    showConfirmDialog("هل أنت متأكد من حذف هذا الإصدار بشكل نهائي؟", () => {
        proj.versions = proj.versions.filter(v => v.versionId !== versionId);
        if (proj.currentVersionId === versionId) {
            proj.currentVersionId = proj.versions[0].versionId;
        }
        saveData();
        renderVersionsModalTable();
        openProjectDetails(currentProjectId);
        showToast("تم حذف الإصدار بنجاح");
    });
}

/* ==========================================
   Backup & Restore
   ========================================== */
function createBackupFile() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement("a");
    const dateStr = new Date().toISOString().split("T")[0];
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `LightingManager_Backup_${dateStr}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("تم إنشاء وتنزيل النسخة الاحتياطية بنجاح");
}

function restoreBackupFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            // Validation
            if (parsed && Array.isArray(parsed.projects) && Array.isArray(parsed.warehouseEquipment)) {
                showConfirmDialog("تحذير: استعادة النسخة الاحتياطية ستستبدل كافة البيانات الحالية. هل تريد المتابعة؟", () => {
                    appData = parsed;
                    saveData();
                    renderProjects();
                    renderWarehouse();
                    updateSidebarCompanyInfo();
                    fillCompanySettingsForm();
                    showToast("تم استعادة البيانات بنجاح");
                });
            } else {
                showToast("ملف النسخة الاحتياطية غير صالح أو تالف", "error");
            }
        } catch (e) {
            showToast("خطأ في قراءة ملف JSON", "error");
        }
    };
    reader.readAsText(file);
}

/* ==========================================
   Company Settings & Logo Rendering
   ========================================== */
function updateSidebarCompanyInfo() {
    document.getElementById("mini-comp-name").textContent = appData.companySettings.name || "شركة الإضاءة";
    document.getElementById("mini-eng-name").textContent = appData.engineerSettings.name || "مهندس الإضاءة";
    renderLogoPreview();
}

function fillCompanySettingsForm() {
    document.getElementById("comp-name").value = appData.companySettings.name || "";
    document.getElementById("comp-name-en").value = appData.companySettings.nameEn || "";
    document.getElementById("comp-phone").value = appData.companySettings.phone || "";
    document.getElementById("comp-email").value = appData.companySettings.email || "";
    document.getElementById("comp-website").value = appData.companySettings.website || "";
    document.getElementById("comp-address").value = appData.companySettings.address || "";

    document.getElementById("eng-name").value = appData.engineerSettings.name || "";
    document.getElementById("eng-title").value = appData.engineerSettings.title || "";
    document.getElementById("eng-phone").value = appData.engineerSettings.phone || "";
    document.getElementById("eng-email").value = appData.engineerSettings.email || "";

    renderLogoPreview();
}

function renderLogoPreview() {
    const box = document.getElementById("logo-preview-box");
    if (appData.companySettings.logo) {
        box.innerHTML = `<img src="${appData.companySettings.logo}" alt="Company Logo">`;
    } else {
        box.innerHTML = `<i class="fa-solid fa-image placeholder-icon"></i><span style="font-size:0.8rem; color:var(--text-secondary);">No Logo</span>`;
    }
}

/* ==========================================
    Print Preview & PDF Export (Professional Cinematic Lighting Report)
    ========================================== */
function generatePrintPreviewContent() {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;
    const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId) || proj.versions[0];

    const docEl = document.getElementById("a4-document");
    if (!docEl) return;

    // إعداد حاوية الـ A4 بخلفية بيضاء صلبة وخطوط إنجليزية عريضة وأنيقة
    docEl.style.cssText = `
        all: initial !important;
        display: block !important;
        box-sizing: border-box !important;
        font-family: 'Montserrat', 'Inter', 'Segoe UI', sans-serif !important;
        direction: ltr !important;
        text-align: left !important;
        width: 210mm !important;
        min-height: 297mm !important;
        background-color: #ffffff !important;
        color: #1a202c !important;
        position: relative !important;
        padding: 12mm 15mm !important;
        margin: 0 auto !important;
    `;

    // تجهيز اللوجو بحجم أكبر ومظهر بارز
    const logoSrc = appData.companySettings.logo || '';
    const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="Logo" style="max-height: 65px; max-width: 180px; object-fit: contain;">` : '';

    // تجهيز صفوف المعدات (بدون عمود المتوفر Available)
    let equipmentRowsHtml = '';
    if (!currentVer.equipment || currentVer.equipment.length === 0) {
        equipmentRowsHtml = `<tr><td colspan="6" style="text-align: center; padding: 25px; color: #718096; font-family: 'Montserrat', sans-serif; font-weight: 500;">No equipment registered in this version.</td></tr>`;
    } else {
        currentVer.equipment.forEach((item) => {
            const whItem = appData.warehouseEquipment.find(w => w.id === item.eqId);
            const name = whItem ? whItem.name : "Unknown Fixture";
            const brand = whItem ? whItem.brand : "-";
            const model = whItem ? whItem.model : "-";
            const type = whItem ? whItem.type : "-";
            const required = item.required;

            equipmentRowsHtml += `
                <tr style="border-bottom: 1px solid #e2e8f0 !important;">
                    <td style="padding: 12px 10px !important; font-weight: 700 !important; color: #2d3748 !important; text-align: left !important; font-size: 11px !important;">${name}</td>
                    <td style="padding: 12px 10px !important; color: #4a5568 !important; text-align: left !important; font-size: 10.5px !important;">${brand}</td>
                    <td style="padding: 12px 10px !important; color: #4a5568 !important; text-align: left !important; font-size: 10.5px !important;">${model}</td>
                    <td style="padding: 12px 10px !important; color: #4a5568 !important; text-align: left !important; font-size: 10.5px !important;">${type}</td>
                    <td style="padding: 12px 10px !important; text-align: center !important; font-weight: 800 !important; color: #1a202c !important; font-size: 12px !important;">${required}</td>
                </tr>
            `;
        });
    }

    // بناء الهيكل باللغة الإنجليزية بالكامل
    docEl.innerHTML = `
        <div style="position: relative !important; z-index: 2 !important; width: 100% !important;">
            
            <!-- HEADER / COVER SECTION -->
            <div style="border-bottom: 2.5px solid #cbd5e0 !important; padding-bottom: 15px !important; margin-bottom: 18px !important; display: flex !important; justify-content: space-between !important; align-items: center !important;">
                <div>
                    <div style="font-size: 14px !important; letter-spacing: 4px !important; color: #3182ce !important; font-weight: 800 !important; text-transform: uppercase !important; margin-bottom: 6px !important;">PROFESSIONAL LIGHTING DESIGN REPORT</div>
                    <h1 style="font-size: 22px !important; font-weight: 900 !important; color: #1a202c !important; margin: 0 !important; line-height: 1.2 !important; letter-spacing: -0.5px !important;">${proj.name}</h1>
                </div>
                <div style="text-align: right !important;">
                    ${logoHtml}
                    <div style="font-size: 9.5px !important; color: #4a5568 !important; font-weight: 700 !important; margin-top: 4px !important;">${appData.companySettings.name || ''}</div>
                </div>
            </div>

            <!-- PROJECT METADATA CARDS -->
            <div style="display: flex !important; gap: 10px !important; margin-bottom: 12px !important;">
                <div style="flex: 1 !important; background: #f7fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 6px !important; padding: 9px 12px !important; border-left: 4px solid #3182ce !important; text-align: left !important;">
                    <div style="font-size: 8.5px !important; color: #718096 !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 3px !important; letter-spacing: 0.5px !important;">Client</div>
                    <div style="font-size: 12.5px !important; font-weight: 800 !important; color: #080f0a !important;">${proj.client || "-"}</div>
                </div>
                <div style="flex: 1 !important; background: #f7fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 6px !important; padding: 9px 12px !important; border-left: 4px solid #805ad5 !important; text-align: left !important;">
                    <div style="font-size: 8.5px !important; color: #718096 !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 3px !important; letter-spacing: 0.5px !important;">Venue</div>
                    <div style="font-size: 12.5px !important; font-weight: 800 !important; color: #1a202c !important;">${proj.venue || "-"}</div>
                </div>
                <div style="flex: 1 !important; background: #f7fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 6px !important; padding: 9px 12px !important; border-left: 4px solid #3182ce !important; text-align: left !important;">
                    <div style="font-size: 8.5px !important; color: #718096 !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 3px !important; letter-spacing: 0.5px !important;">Date</div>
                    <div style="font-size: 12.5px !important; font-weight: 800 !important; color: #1a202c !important;">${proj.date || "-"}</div>
                </div>
            </div>

            <!-- SECONDARY METADATA GRID -->
            <div style="display: flex !important; gap: 8px !important; margin-bottom: 18px !important;">
                <div style="flex: 1 !important; background: #f7fafc !important; padding: 7px 10px !important; border-radius: 5px !important; border: 1px solid #e2e8f0 !important; text-align: left !important;">
                    <span style="color: #718096 !important; display: block !important; font-size: 8.5px !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 2px !important;">Version:</span>
                    <strong style="color: #3182ce !important; font-size: 10.5px !important; font-weight: 800 !important;">${currentVer.versionName} (v${currentVer.versionNumber})</strong>
                </div>
                <div style="flex: 1 !important; background: #f7fafc !important; padding: 7px 10px !important; border-radius: 5px !important; border: 1px solid #e2e8f0 !important; text-align: left !important;">
                    <span style="color: #718096 !important; display: block !important; font-size: 8.5px !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 2px !important;">Show Time:</span>
                    <strong style="color: #1a202c !important; font-size: 10.5px !important; font-weight: 800 !important;">${proj.time || "-"}</strong>
                </div>
                <div style="flex: 1 !important; background: #f7fafc !important; padding: 7px 10px !important; border-radius: 5px !important; border: 1px solid #e2e8f0 !important; text-align: left !important;">
                    <span style="color: #718096 !important; display: block !important; font-size: 8.5px !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 2px !important;">Setup Date:</span>
                    <strong style="color: #1a202c !important; font-size: 10.5px !important; font-weight: 800 !important;">${proj.setupDate || "-"}</strong>
                </div>
                <div style="flex: 1 !important; background: #f7fafc !important; padding: 7px 10px !important; border-radius: 5px !important; border: 1px solid #e2e8f0 !important; text-align: left !important;">
                    <span style="color: #718096 !important; display: block !important; font-size: 8.5px !important; font-weight: 700 !important; text-transform: uppercase !important; margin-bottom: 2px !important;">Lighting Engineer:</span>
                    <strong style="color: #1a202c !important; font-size: 10.5px !important; font-weight: 800 !important;">${appData.engineerSettings.name || ''}</strong>
                </div>
            </div>

            <!-- NOTES SECTION (IF EXISTS) -->
            ${proj.notes ? `
            <div style="background: #ebf8ff !important; border: 1px solid #bee3f8 !important; border-radius: 6px !important; padding: 10px 12px !important; margin-bottom: 18px !important; text-align: left !important;">
                <div style="font-size: 9.5px !important; color: #2b6cb0 !important; font-weight: 800 !important; margin-bottom: 3px !important; text-transform: uppercase !important; letter-spacing: 0.5px !important;">Project Notes</div>
                <div style="font-size: 10.5px !important; color: #2d3748 !important; line-height: 1.5 !important; font-weight: 500 !important;">${proj.notes}</div>
            </div>
            ` : ''}

            <!-- TECHNICAL EQUIPMENT SPECIFICATION SECTION -->
            <div style="margin-bottom: 25px !important;">
                <div style="display: flex !important; align-items: center !important; justify-content: space-between !important; margin-bottom: 10px !important; border-bottom: 1.5px solid #cbd5e0 !important; padding-bottom: 6px !important;">
                    <h3 style="font-size: 12px !important; font-weight: 800 !important; color: #2b6cb0 !important; margin: 0 !important; letter-spacing: 1.2px !important; text-transform: uppercase !important;">03 // TECHNICAL EQUIPMENT SPECIFICATION</h3>
                    <span style="font-size: 9.5px !important; color: #718096 !important; font-weight: 700 !important;">Approved Version Manifest</span>
                </div>

                <table style="width: 100% !important; border-collapse: collapse !important; font-size: 10.5px !important;">
                    <thead>
                        <tr style="background: #edf2f7 !important; color: #2b6cb0 !important; border-bottom: 2.5px solid #cbd5e0 !important;">
                            <th style="padding: 9px 10px !important; font-weight: 800 !important; text-align: left !important; letter-spacing: 0.5px !important;">Fixture</th>
                            <th style="padding: 9px 10px !important; font-weight: 800 !important; text-align: left !important; letter-spacing: 0.5px !important;">Brand</th>
                            <th style="padding: 9px 10px !important; font-weight: 800 !important; text-align: left !important; letter-spacing: 0.5px !important;">Model</th>
                            <th style="padding: 9px 10px !important; font-weight: 800 !important; text-align: left !important; letter-spacing: 0.5px !important;">Type</th>
                            <th style="padding: 9px 10px !important; text-align: center !important; font-weight: 800 !important; letter-spacing: 0.5px !important;">Required Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${equipmentRowsHtml}
                    </tbody>
                </table>
            </div>

        </div>

        <!-- FOOTER -->
        <div style="position: relative !important; z-index: 2 !important; width: 100% !important; margin-top: 35px !important; display: flex !important; justify-content: space-between !important; align-items: center !important; font-size: 9.5px !important; color: #718096 !important; font-weight: 700 !important; border-top: 1px solid #e2e8f0 !important; padding-top: 10px !important;">
            <div>${appData.companySettings.name} &bull; ${appData.engineerSettings.name}</div>
            <div>Lighting Design Report &bull; Generated: ${new Date().toISOString().split("T")[0]}</div>
        </div>
    `;
}

async function exportProjectPDF() {
    const proj = appData.projects.find(p => p.id === currentProjectId);
    if (!proj) return;
    const currentVer = proj.versions.find(v => v.versionId === proj.currentVersionId) || proj.versions[0];

    // توليد محتوى المعاينة
    generatePrintPreviewContent();
    const element = document.getElementById("a4-document");
    if (!element) return;

    // اسم الملف المطلوب حسب البيانات الفعلية
    const cleanProjectName = proj.name.replace(/[^a-zA-Z0-9_\u0600-\u06FF]/g, "_");
    const filename = `${cleanProjectName}_${currentVer.versionName}_${new Date().toISOString().split("T")[0]}.pdf`;

    try {
        // 1. انتظار تحميل الخطوط والصور لضمان عدم اختفاء النصوص أو الصور
        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }
        const images = element.querySelectorAll('img');
        await Promise.all([...images].map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));

        // 2. حساب الأبعاد الفعلية للمحتوى بدقة لتجنب مشاكل iOS Safari
        const rect = element.getBoundingClientRect();
        const contentWidth = Math.max(element.scrollWidth, element.offsetWidth, rect.width, 794); // عرض A4 القياسي بالبكسل تقريباً عند 96 DPI هو 794px
        
        // ضبط scale متوازن وآمن للذاكرة على iPhone وفي نفس الوقت بجودة عالية
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const safeScale = isIOS ? 2 : 3;

        // تحديد اتجاه الصفحة بناءً على التصميم الحالي
        const isLandscape = element.classList.contains('landscape') || element.offsetWidth > element.offsetHeight;
        const orientation = isLandscape ? 'landscape' : 'portrait';

        const opt = {
            margin:       0,
            filename:     filename,
            image:        { type: 'jpeg', quality: 0.95 },
            html2canvas:  { 
                scale: safeScale, 
                useCORS: true, 
                letterRendering: true,
                windowWidth: contentWidth
            },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: orientation }
        };

        // 3. التصدير الحقيقي باستخدام html2pdf مع معالجة خاصة للـ Blob والـ Share على iPhone
        const worker = html2pdf().from(element).set(opt);
        
        if (isIOS) {
            // توليد PDF كـ Blob للتعامل الآمن مع Safari وبدون صفحة بيضاء
            const pdfBlob = await worker.outputPdf('blob');
            const file = new File([pdfBlob], filename, { type: 'application/pdf' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: filename,
                        text: 'Project PDF Export'
                    });
                    showToast("PDF exported successfully");
                    return;
                } catch (shareErr) {
                    if (shareErr.name !== 'AbortError') {
                        console.warn("Share API failed, falling back to download:", shareErr);
                    } else {
                        return; // المستخدم ألغى المشاركة
                    }
                }
            }
            
            // Fallback آمن لـ Safari في حال لم تكن مشاركة الملفات مدعومة مباشرة
            const blobUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
            showToast("PDF exported successfully");

        } else {
            // المسار الافتراضي والسريع للكمبيوتر والأندرويد
            await worker.save();
            showToast("PDF exported successfully");
        }

    } catch (err) {
        console.error("PDF Export Error:", err);
        showToast("Error exporting PDF", "error");
    }
}
/* ==========================================
   Confirm Dialog Utility
   ========================================== */
let confirmCallback = null;
function showConfirmDialog(message, callback) {
    document.getElementById("confirm-message").textContent = message;
    confirmCallback = callback;
    openModal("confirm-modal");
}

document.getElementById("confirm-yes-btn").addEventListener("click", () => {
    if (confirmCallback) confirmCallback();
    closeModal("confirm-modal");
});

document.getElementById("confirm-no-btn").addEventListener("click", () => {
    closeModal("confirm-modal");
});