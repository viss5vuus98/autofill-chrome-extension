/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #fff;\n  height: 500px;\n  width: 250px;\n}\n", "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd","sourcesContent":["body {\n  background-color: #fff;\n  height: 500px;\n  width: 250px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/popup/action/fillDataAction.ts":
/*!********************************************!*\
  !*** ./src/popup/action/fillDataAction.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAllFillData": () => (/* binding */ loadAllFillData),
/* harmony export */   "updateFillData": () => (/* binding */ updateFillData)
/* harmony export */ });
const loadAllFillData = (payload) => {
    return {
        type: 'LOAD_ALL_FILL_DATA',
        payload,
    };
};
const updateFillData = (payload) => {
    return {
        type: 'UPDATE_FILL_DATA',
        payload,
    };
};


/***/ }),

/***/ "./src/popup/action/selectAction.ts":
/*!******************************************!*\
  !*** ./src/popup/action/selectAction.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAdd": () => (/* binding */ selectAdd),
/* harmony export */   "selectDelete": () => (/* binding */ selectDelete),
/* harmony export */   "selectEnable": () => (/* binding */ selectEnable),
/* harmony export */   "selectUpdate": () => (/* binding */ selectUpdate),
/* harmony export */   "setSelectData": () => (/* binding */ setSelectData)
/* harmony export */ });
const selectAdd = () => {
    return {
        type: 'SELECT_ADD',
    };
};
const selectDelete = (index) => {
    return {
        type: 'SELECT_DELETE',
        index,
    };
};
const selectUpdate = (data) => {
    return {
        type: 'SELECT_UPDATE',
        data,
    };
};
const selectEnable = (index, enable) => {
    return {
        type: 'SELECT_ENABLE',
        index,
        enable,
    };
};
const setSelectData = (data) => {
    return {
        type: 'SET_SELECT_DATA',
        data,
    };
};


/***/ }),

/***/ "./src/popup/components/AddPanel.tsx":
/*!*******************************************!*\
  !*** ./src/popup/components/AddPanel.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_fillDataAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/fillDataAction */ "./src/popup/action/fillDataAction.ts");
/* harmony import */ var _action_selectAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/selectAction */ "./src/popup/action/selectAction.ts");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _FormRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormRow */ "./src/popup/components/FormRow.tsx");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _TextBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextBox */ "./src/popup/components/TextBox.tsx");












const AddPanel = () => {
    var _a, _b, _c;
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        columnType: '',
        selectName: '',
        getType: '',
        columns: [],
        enable: false
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const onFormRowChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const onTextFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const onTextBoxChange = (e, index) => {
        let currentColumns = [];
        if (formData.columns.length < index + 1) {
            if (index === 0) {
                currentColumns = [e.target.value];
            }
            else if (index === 1) {
                currentColumns = [...formData.columns, e.target.value];
            }
        }
        else {
            currentColumns = formData.columns.map((col, i) => {
                if (i === index) {
                    return e.target.value;
                }
                return col;
            });
        }
        setFormData(Object.assign(Object.assign({}, formData), { columns: currentColumns }));
    };
    const handleConfirm = () => {
        //check formData every is not empty
        console.log("co", formData);
        if (formData.columnType === '') {
            alert('欄位類型不可為空');
            return;
        }
        if (formData.selectName === '') {
            alert('自訂群組名稱不可為空');
            return;
        }
        if (formData.getType === '') {
            alert('綁定方式不可為空');
            return;
        }
        formData.columns.forEach(col => {
            if (col.trim().length <= 0) {
                alert('屬性名不可為空');
                return;
            }
        });
        if (formData.columns[0] === formData.columns[1]) {
            alert('屬性名不可重複');
            return;
        }
        //check selectName and fillData's key is not repeat
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.getColumnsData)().then((columnsData) => {
            const repeatSelect = columnsData.find(col => col.selectName === formData.selectName);
            if (repeatSelect) {
                alert('自訂群組名稱與現有資料重複');
                return;
            }
            return [...columnsData, {
                    selectName: formData.selectName,
                    columnNames: formData.columns,
                    enable: formData.enable,
                    type: formData.columnType,
                }
            ];
        }).then((newColumns) => {
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)().then((fillData) => {
                const repeatColumns = fillData.find(col => col.key === formData.columns[0] || col.key === formData.columns[1]);
                if (repeatColumns) {
                    alert('欄位值與現有資料重複');
                    return;
                }
                (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setColumnsData)(newColumns).then(() => {
                    dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_3__.selectUpdate)(newColumns));
                });
                //console.log("setColumnsData",newColumns)
                const addFillData = formData.columns.map(col => {
                    return {
                        enable: true,
                        key: col,
                        root: formData.selectName,
                        value: '',
                    };
                });
                return [...fillData, ...addFillData];
            }).then((newFillData) => {
                //console.log("setStorage",newFillData)
                (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setStorage)(newFillData).then(() => {
                    dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_2__.updateFillData)(newFillData));
                    setFormData({
                        columnType: '',
                        selectName: '',
                        getType: '',
                        columns: [],
                        enable: false
                    });
                });
            });
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { p: 2, display: 'flex', flexDirection: 'column', height: '100%' }, elevation: 3 },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { container: true, spacing: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormRow__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'columnType', selectName: '欄位類型', selectItems: [{ key: '單欄', value: 'single' }, { key: '雙欄', value: 'pair' }], onFormRowChange: onFormRowChange, value: formData.columnType }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormRow__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'getType', selectName: '綁定方式', selectItems: [{ key: 'Name', value: 'name' }], onFormRowChange: onFormRowChange, value: formData.getType }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], { id: 'columnName', label: "\u8F38\u5165\u81EA\u8A02\u7FA4\u7D44\u540D\u7A31", variant: "outlined", name: 'selectName', fullWidth: true, onChange: (e) => { onTextFieldChange(e); }, value: formData.selectName })),
            formData.columnType === 'single'
                ?
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { item: true, xs: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TextBox__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'columnValue', label: '輸入屬性名', onTextFieldChange: onTextBoxChange, index: 0, value: (_a = formData.columns[0]) !== null && _a !== void 0 ? _a : '' }))
                :
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { item: true, xs: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TextBox__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'columnValue1', label: '輸入屬性名1', onTextFieldChange: onTextBoxChange, index: 0, value: (_b = formData.columns[0]) !== null && _b !== void 0 ? _b : '' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TextBox__WEBPACK_IMPORTED_MODULE_6__["default"], { id: 'columnValue2', label: '輸入屬性名2', onTextFieldChange: onTextBoxChange, index: 1, value: (_c = formData.columns[1]) !== null && _c !== void 0 ? _c : '' })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { display: 'flex', justifyContent: 'center', marginY: 1 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__["default"], { variant: "contained", size: 'small', onClick: handleConfirm }, "Confirm"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPanel);
// Path: src/popup/components/EnablePanel.tsx


/***/ }),

/***/ "./src/popup/components/BasicTab.tsx":
/*!*******************************************!*\
  !*** ./src/popup/components/BasicTab.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.ts");
/* harmony import */ var _action_selectAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/selectAction */ "./src/popup/action/selectAction.ts");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _action_fillDataAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action/fillDataAction */ "./src/popup/action/fillDataAction.ts");
/* harmony import */ var _SetValuePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SetValuePanel */ "./src/popup/components/SetValuePanel.tsx");
/* harmony import */ var _EnablePanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EnablePanel */ "./src/popup/components/EnablePanel.tsx");
/* harmony import */ var _AddPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddPanel */ "./src/popup/components/AddPanel.tsx");
















;
const FormSection = () => {
    var _a;
    const currentSelectData = (_a = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.columns)) !== null && _a !== void 0 ? _a : _utils_template__WEBPACK_IMPORTED_MODULE_2__.SelectDefaultData;
    const [currentColumn, setCurrentColumn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        selectName: '',
        columnNames: [],
        enable: false,
        type: '',
    });
    const handleChangeColName = (value) => {
        if (value.trim().length <= 0) {
            return;
        }
        currentSelectData.forEach(item => {
            if (item.selectName === value) {
                setCurrentColumn(item);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (currentSelectData.length > 0) {
            setCurrentColumn(currentSelectData[0]);
        }
    }, [currentSelectData]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], { sx: { height: 50, width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_10__["default"], { id: "form1" }, "target"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_11__["default"], { labelId: "target-selected-label", id: "target-selected", value: currentColumn.selectName, label: "columns", onChange: (e) => { handleChangeColName(e.target.value); } }, currentSelectData.map(item => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__["default"], { key: item.selectName, value: item.selectName }, item.selectName))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SetValuePanel__WEBPACK_IMPORTED_MODULE_6__["default"], { selectValue: currentColumn }))));
};
//Function Component 
const TabPanel = (props) => {
    const { children, value, index } = props;
    if (value !== index) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, children)));
};
//Function Component 泛型定義 React.FunctionComponent<P={}>
// const TabPanel: React.FC<TabPanelProps> = (props) => {
//   const { children, value, index, ...other } = props
//   return(
//     <section hidden={value !== index}>
//       {children}
//       <MuiFilledInput/>
//     </section>
//   )
// }
const BasicTab = () => {
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    //first render then run useEffect and get selectData from chrome.storage
    //if selectData is null, set default value from SelectDefaultData
    //get selectData from chrome.storage and dispatch(setSelectData) to redux
    //if not first render not do this useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.getColumnsData)().then((res) => {
            //check res has data ,if not set default value to redux
            const selectData = res;
            dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_3__.setSelectData)(selectData));
            if (res.length <= 0) {
                dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_3__.setSelectData)(_utils_template__WEBPACK_IMPORTED_MODULE_2__.SelectDefaultData));
                (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setColumnsData)(_utils_template__WEBPACK_IMPORTED_MODULE_2__.SelectDefaultData);
            }
            else {
                dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_3__.setSelectData)(selectData));
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)().then((res) => {
            const fillData = res;
            if (res.length <= 0) {
                dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_5__.loadAllFillData)(_utils_template__WEBPACK_IMPORTED_MODULE_2__.FillDefaultData));
                (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setStorage)(_utils_template__WEBPACK_IMPORTED_MODULE_2__.FillDefaultData);
            }
            else {
                dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_5__.loadAllFillData)(fillData));
            }
        });
    }, []);
    const handleTabsClick = (index) => {
        setCurrentPage(index);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                marginBottom: 0
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14__["default"], { value: currentPage, "aria-label": "tabs", variant: "scrollable", scrollButtons: false, sx: {
                    width: '100%',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Value", id: "tab1", "aria-controls": "tabs", onClick: () => { handleTabsClick(0); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Select", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(1); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Enable", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(2); } }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 0 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                    paddingY: 2,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormSection, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                    pt: 1,
                    pb: 2,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddPanel__WEBPACK_IMPORTED_MODULE_8__["default"], null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 2 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                    pt: 1,
                    pb: 2,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EnablePanel__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicTab);


/***/ }),

/***/ "./src/popup/components/EnablePanel.tsx":
/*!**********************************************!*\
  !*** ./src/popup/components/EnablePanel.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_fillDataAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/fillDataAction */ "./src/popup/action/fillDataAction.ts");
/* harmony import */ var _action_selectAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/selectAction */ "./src/popup/action/selectAction.ts");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _SwitchContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwitchContainer */ "./src/popup/components/SwitchContainer.tsx");








const EnablePanel = () => {
    const [rowList, setRowList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const fillDataList = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.fillData);
    const columnsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.columns);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const handleEnableChange = (columnName, enableState) => {
        //更新ColumnData Enable狀態
        const updateColumnData = columnsData.map((item) => {
            if (item.selectName === columnName) {
                return Object.assign(Object.assign({}, item), { enable: enableState });
            }
            return item;
        });
        //更新FillData Enable狀態
        const currentFillData = fillDataList.map((item) => {
            if (item.root === columnName) {
                return Object.assign(Object.assign({}, item), { enable: enableState });
            }
            return item;
        });
        //更新Storage及Redux
        dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_3__.selectUpdate)(updateColumnData));
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setColumnsData)(updateColumnData);
        dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_2__.updateFillData)(currentFillData));
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_4__.setStorage)(currentFillData);
    };
    //columnsData改變時，更新rowList，重新渲染SwitchContainer
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const currentRowList = columnsData.map((item, i) => {
            let hiddenBorder = false;
            if (columnsData.length === i + 1) {
                hiddenBorder = true;
            }
            //columnsData的secltName為唯一值，可用於key
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwitchContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { key: item.selectName, label: item.selectName, hiddenBorder: hiddenBorder, enableState: item.enable, handleEnableChange: handleEnableChange }));
        });
        setRowList(currentRowList);
    }, [columnsData]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: { p: 2, display: 'flex', alignItems: 'start', height: '100%', minHeight: '400px' }, elevation: 3 },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], { container: true, spacing: 1 }, rowList)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnablePanel);


/***/ }),

/***/ "./src/popup/components/FormRow.tsx":
/*!******************************************!*\
  !*** ./src/popup/components/FormRow.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormHelperText */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");







const FormRow = (props) => {
    const { id, selectName, selectItems, onFormRowChange, value } = props;
    //const [value, setValue] = useState<string>('')
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__["default"], { item: true, xs: 12 },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], { fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { id: id }, selectName),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], { labelId: `${id}-label`, id: `${id}-select`, value: value, label: selectName, name: id, onChange: (e) => { onFormRowChange(e); } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], { value: "" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, `${selectName}`)),
                selectItems.map((item) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], { key: item.value, value: item.value }, item.key))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_6__["default"], null, `${selectName}欄位必須填寫`))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRow);


/***/ }),

/***/ "./src/popup/components/SetValuePanel.tsx":
/*!************************************************!*\
  !*** ./src/popup/components/SetValuePanel.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_fillDataAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/fillDataAction */ "./src/popup/action/fillDataAction.ts");







const SetValueSection = (props) => {
    var _a, _b, _c;
    const { selectValue } = props;
    const firInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const secInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [inputValues, setInputValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const fillDataList = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state) => state.fillData);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const handleChangeTextField = (value, target) => {
        if (value.trim().length <= 0) {
            return;
        }
        const newInputValues = Object.assign(Object.assign({}, inputValues), { [target]: value });
        setInputValues(newInputValues);
    };
    const handleConfirm = () => {
        //check inputValues has value ,if not, return ,if yes, setStorage
        const validationCount = selectValue.type === 'single' ? 1 : 2;
        const currentColumn = Object.values(inputValues);
        if (currentColumn.length < validationCount) {
            return;
        }
        for (let item in inputValues) {
            if (item.trim().length <= 0) {
                return;
            }
        }
        console.log('confirm');
        const updateData = fillDataList.map((item) => {
            selectValue.columnNames.map((colName) => {
                if (item.key === colName) {
                    item.value = inputValues[colName];
                }
            });
            return item;
        });
        console.log("updateData", updateData);
        if (updateData.length > 0) {
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_1__.setStorage)(updateData);
            dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_3__.updateFillData)(updateData));
        }
    };
    //set input default value
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const newInputValues = {};
        fillDataList.forEach((item) => {
            selectValue.columnNames.forEach((colName) => {
                if (item.key === colName) {
                    newInputValues[colName] = item.value;
                }
            });
        });
        setInputValues(newInputValues);
    }, [fillDataList, selectValue]);
    if (selectValue.type === 'single') {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                    mt: 4,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "target-set", label: selectValue.columnNames[0], variant: "outlined", fullWidth: true, onChange: (e) => { handleChangeTextField(e.target.value, selectValue.columnNames[0]); }, value: (_a = inputValues[selectValue.columnNames[0]]) !== null && _a !== void 0 ? _a : '', inputRef: firInputRef })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "contained", size: 'small', onClick: handleConfirm }, "Confirm"))));
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                    mt: 4,
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "target-set-first", label: selectValue.columnNames[0], variant: "outlined", fullWidth: true, onChange: (e) => { handleChangeTextField(e.target.value, selectValue.columnNames[0]); }, value: (_b = inputValues[selectValue.columnNames[0]]) !== null && _b !== void 0 ? _b : '', inputRef: firInputRef }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { marginY: 2, textAlign: 'center' } }, "|"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "target-set-second", label: selectValue.columnNames[1], variant: "outlined", fullWidth: true, onChange: (e) => { handleChangeTextField(e.target.value, selectValue.columnNames[1]); }, value: (_c = inputValues[selectValue.columnNames[1]]) !== null && _c !== void 0 ? _c : '', inputRef: secInputRef })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                    mt: 5,
                    display: 'flex',
                    justifyContent: 'center',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "contained", size: 'small', onClick: handleConfirm }, "Confirm"))));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetValueSection);
//從Chrome Storage中取得Template的資料()，若沒有，則取得SelectDefaultData的資料
//(計畫)顯示所有select Name在Select中
//選擇select Name後，顯示對應的Column Name
//依據Column Name顯示對應的Value
//輸入Value後，按下Confirm，以selectData的格式，key為select Name，value為Value，存入Chrome Storage中
//若已經有相同的key，則更新value
//若沒有相同的key，則新增一筆資料
//每次有修改時，都要更新localStorageData中相同Key的selectData的value
//並且將localStorageData存入Chrome Storage中
//contextMenus.onClicked事件觸發時，使用getStorage()取得資料，並將資料填入對應的欄位中


/***/ }),

/***/ "./src/popup/components/Switch.tsx":
/*!*****************************************!*\
  !*** ./src/popup/components/Switch.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Switch */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");



const IOSSwitch = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])((props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({ focusVisibleClassName: ".Mui-focusVisible", disableRipple: true }, props))))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IOSSwitch);


/***/ }),

/***/ "./src/popup/components/SwitchContainer.tsx":
/*!**************************************************!*\
  !*** ./src/popup/components/SwitchContainer.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch */ "./src/popup/components/Switch.tsx");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");





const SwitchContainer = (props) => {
    const { hiddenBorder, label, enableState, handleEnableChange } = props;
    const switchChange = (e) => {
        handleEnableChange(label, e.target.checked);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], { item: true, xs: 12 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__["default"], { sx: {
                width: '100%',
                mb: 1,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderBottom: hiddenBorder ? 0 : 0.5,
                borderColor: 'd0d0d0',
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], { control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Switch__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { m: 1 }, onChange: switchChange, checked: enableState }), label: label, labelPlacement: "start", sx: {
                    width: '100%',
                    justifyContent: 'space-between',
                    ml: 0,
                } }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitchContainer);


/***/ }),

/***/ "./src/popup/components/TextBox.tsx":
/*!******************************************!*\
  !*** ./src/popup/components/TextBox.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/FormHelperText */ "./node_modules/@mui/material/FormHelperText/FormHelperText.js");




const TextBox = (props) => {
    const { id, label, index, onTextFieldChange, value } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { id: `${id}-fill-key`, label: label, variant: "outlined", name: 'columnName', value: value, fullWidth: true, onChange: (e) => { onTextFieldChange(e, index); } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_FormHelperText__WEBPACK_IMPORTED_MODULE_3__["default"], null, `依據綁定類型輸入ID或Name屬性`)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/roboto/300.css */ "./node_modules/@fontsource/roboto/300.css");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/roboto/500.css */ "./node_modules/@fontsource/roboto/500.css");
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/roboto/700.css */ "./node_modules/@fontsource/roboto/700.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BasicTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BasicTab */ "./src/popup/components/BasicTab.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_allReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/allReducer */ "./src/popup/reducers/allReducer.ts");











let store = (0,redux__WEBPACK_IMPORTED_MODULE_10__.createStore)(_reducers_allReducer__WEBPACK_IMPORTED_MODULE_9__["default"]);
const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, { store: store },
            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_BasicTab__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};
const container = document.createElement('div');
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_6__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(App, null));


/***/ }),

/***/ "./src/popup/reducers/allReducer.ts":
/*!******************************************!*\
  !*** ./src/popup/reducers/allReducer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

const initialState = {
    columns: [],
    fillData: [],
};
const selectReducer = (state = initialState.columns, action) => {
    switch (action.type) {
        case "SELECT_ADD":
            // add a new select item
            return state;
        case "SELECT_DELETE":
            return state;
        case "SELECT_UPDATE":
            return [...action.data];
        case "SET_SELECT_DATA":
            return [...action.data];
        default:
            return state;
    }
};
const fillDataReducer = (state = initialState.fillData, action) => {
    switch (action.type) {
        case "ADD_FILL_DATA":
            return [...state, action.payload];
        case "UPDATE_FILL_DATA":
            return [...action.payload];
        case "ENABLE_FILL_DATA":
            return state.filter((column, index) => index !== action.payload);
        case "DELETE_FILL_DATA":
            return state.filter((column, index) => index !== action.payload);
        case "LOAD_ALL_FILL_DATA":
            return [...action.payload];
        default:
            return state;
    }
};
const allReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    columns: selectReducer,
    fillData: fillDataReducer,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allReducer);


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColumnsData": () => (/* binding */ getColumnsData),
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "setColumnsData": () => (/* binding */ setColumnsData),
/* harmony export */   "setStorage": () => (/* binding */ setStorage)
/* harmony export */ });
function setStorage(data) {
    const setData = {
        data,
    };
    return new Promise((resolve) => {
        chrome.storage.local.set(setData, () => {
            resolve();
        });
    });
}
function getStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['data'], (res) => {
            const fillData = res.data ? res.data : [];
            resolve(fillData);
        });
    });
}
function setColumnsData(data) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ columns: data }, () => {
            resolve();
        });
    });
}
function getColumnsData() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['columns'], (res) => {
            const columnsData = res.columns ? res.columns : [];
            resolve(columnsData);
        });
    });
}


/***/ }),

/***/ "./src/utils/template.ts":
/*!*******************************!*\
  !*** ./src/utils/template.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FillDefaultData": () => (/* binding */ FillDefaultData),
/* harmony export */   "SelectDefaultData": () => (/* binding */ SelectDefaultData)
/* harmony export */ });
// export interface Array<SingleColumn> {
//   [index: number ]: SingleColumn;
//   length: number;
// }
// export interface Array<PairColumn> {
// }
const SelectDefaultData = [
    {
        selectName: 'UserId',
        columnNames: ['#UserId'],
        enable: true,
        type: 'single',
    },
    {
        selectName: 'UserName',
        columnNames: ['#UserName'],
        enable: true,
        type: 'single',
    },
    {
        selectName: 'date',
        columnNames: ['StartDate', 'EndDate'],
        enable: true,
        type: 'pair',
    },
];
const FillDefaultData = [
    {
        root: 'UserId',
        key: '#UserId',
        value: '1',
        enable: true,
    },
    {
        root: 'UserName',
        key: '#UserName',
        value: 'SODADM',
        enable: true,
    },
    {
        root: 'date',
        key: 'StartDate',
        value: '2020/01/01',
        enable: true,
    },
    {
        root: 'date',
        key: 'EndDate',
        value: '2020/01/01',
        enable: true,
    },
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_chrome_extension"] = self["webpackChunkreact_chrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-656535","vendors-node_modules_mui_material_Box_Box_js-node_modules_mui_material_Button_Button_js-node_-e8354e"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmNzcz9mMmM2Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvYWN0aW9uL2ZpbGxEYXRhQWN0aW9uLnRzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvYWN0aW9uL3NlbGVjdEFjdGlvbi50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvQWRkUGFuZWwudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9CYXNpY1RhYi50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0VuYWJsZVBhbmVsLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRm9ybVJvdy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1NldFZhbHVlUGFuZWwudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Td2l0Y2gudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Td2l0Y2hDb250YWluZXIudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9UZXh0Qm94LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3JlZHVjZXJzL2FsbFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy91dGlscy9zdG9yYWdlLnRzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvdXRpbHMvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cC9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY29uc3QgbG9hZEFsbEZpbGxEYXRhID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnTE9BRF9BTExfRklMTF9EQVRBJyxcbiAgICAgICAgcGF5bG9hZCxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCB1cGRhdGVGaWxsRGF0YSA9IChwYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1VQREFURV9GSUxMX0RBVEEnLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IHNlbGVjdEFkZCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VMRUNUX0FERCcsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2VsZWN0RGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NFTEVDVF9ERUxFVEUnLFxuICAgICAgICBpbmRleCxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RVcGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRUxFQ1RfVVBEQVRFJyxcbiAgICAgICAgZGF0YSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RFbmFibGUgPSAoaW5kZXgsIGVuYWJsZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRUxFQ1RfRU5BQkxFJyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGVuYWJsZSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZXRTZWxlY3REYXRhID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VUX1NFTEVDVF9EQVRBJyxcbiAgICAgICAgZGF0YSxcbiAgICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuaW1wb3J0IHsgc2VsZWN0VXBkYXRlIH0gZnJvbSAnLi4vYWN0aW9uL3NlbGVjdEFjdGlvbic7XG5pbXBvcnQgeyBzZXRTdG9yYWdlLCBzZXRDb2x1bW5zRGF0YSwgZ2V0U3RvcmFnZSwgZ2V0Q29sdW1uc0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtUm93IGZyb20gJy4vRm9ybVJvdyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFRleHRCb3ggZnJvbSAnLi9UZXh0Qm94JztcbmNvbnN0IEFkZFBhbmVsID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBjb2x1bW5UeXBlOiAnJyxcbiAgICAgICAgc2VsZWN0TmFtZTogJycsXG4gICAgICAgIGdldFR5cGU6ICcnLFxuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBvbkZvcm1Sb3dDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybURhdGEoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSksIHsgW25hbWVdOiB2YWx1ZSB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBvblRleHRGaWVsZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhKSwgeyBbbmFtZV06IHZhbHVlIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uVGV4dEJveENoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudENvbHVtbnMgPSBbXTtcbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbHVtbnMubGVuZ3RoIDwgaW5kZXggKyAxKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29sdW1ucyA9IFtlLnRhcmdldC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5zID0gWy4uLmZvcm1EYXRhLmNvbHVtbnMsIGUudGFyZ2V0LnZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5zID0gZm9ybURhdGEuY29sdW1ucy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRGb3JtRGF0YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhKSwgeyBjb2x1bW5zOiBjdXJyZW50Q29sdW1ucyB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICAvL2NoZWNrIGZvcm1EYXRhIGV2ZXJ5IGlzIG5vdCBlbXB0eVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvXCIsIGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbHVtblR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn5qyE5L2N6aGe5Z6L5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1EYXRhLnNlbGVjdE5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn6Ieq6KiC576k57WE5ZCN56ix5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1EYXRhLmdldFR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn57aB5a6a5pa55byP5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9ybURhdGEuY29sdW1ucy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICBpZiAoY29sLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCflsazmgKflkI3kuI3lj6/ngrrnqbonKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZm9ybURhdGEuY29sdW1uc1swXSA9PT0gZm9ybURhdGEuY29sdW1uc1sxXSkge1xuICAgICAgICAgICAgYWxlcnQoJ+WxrOaAp+WQjeS4jeWPr+mHjeikhycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgc2VsZWN0TmFtZSBhbmQgZmlsbERhdGEncyBrZXkgaXMgbm90IHJlcGVhdFxuICAgICAgICBnZXRDb2x1bW5zRGF0YSgpLnRoZW4oKGNvbHVtbnNEYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXBlYXRTZWxlY3QgPSBjb2x1bW5zRGF0YS5maW5kKGNvbCA9PiBjb2wuc2VsZWN0TmFtZSA9PT0gZm9ybURhdGEuc2VsZWN0TmFtZSk7XG4gICAgICAgICAgICBpZiAocmVwZWF0U2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ+iHquiogue+pOe1hOWQjeeoseiIh+ePvuacieizh+aWmemHjeikhycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbLi4uY29sdW1uc0RhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TmFtZTogZm9ybURhdGEuc2VsZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZXM6IGZvcm1EYXRhLmNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZm9ybURhdGEuZW5hYmxlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmb3JtRGF0YS5jb2x1bW5UeXBlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pLnRoZW4oKG5ld0NvbHVtbnMpID0+IHtcbiAgICAgICAgICAgIGdldFN0b3JhZ2UoKS50aGVuKChmaWxsRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGVhdENvbHVtbnMgPSBmaWxsRGF0YS5maW5kKGNvbCA9PiBjb2wua2V5ID09PSBmb3JtRGF0YS5jb2x1bW5zWzBdIHx8IGNvbC5rZXkgPT09IGZvcm1EYXRhLmNvbHVtbnNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXBlYXRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfmrITkvY3lgLzoiIfnj77mnInos4fmlpnph43opIcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDb2x1bW5zRGF0YShuZXdDb2x1bW5zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VsZWN0VXBkYXRlKG5ld0NvbHVtbnMpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0Q29sdW1uc0RhdGFcIixuZXdDb2x1bW5zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEZpbGxEYXRhID0gZm9ybURhdGEuY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogZm9ybURhdGEuc2VsZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmZpbGxEYXRhLCAuLi5hZGRGaWxsRGF0YV07XG4gICAgICAgICAgICB9KS50aGVuKChuZXdGaWxsRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXRTdG9yYWdlXCIsbmV3RmlsbERhdGEpXG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZShuZXdGaWxsRGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUZpbGxEYXRhKG5ld0ZpbGxEYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblR5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRUeXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgeyBzeDogeyBwOiAyLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6ICcxMDAlJyB9LCBlbGV2YXRpb246IDMgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGNvbnRhaW5lcjogdHJ1ZSwgc3BhY2luZzogMSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtUm93LCB7IGlkOiAnY29sdW1uVHlwZScsIHNlbGVjdE5hbWU6ICfmrITkvY3poZ7lnosnLCBzZWxlY3RJdGVtczogW3sga2V5OiAn5Zau5qyEJywgdmFsdWU6ICdzaW5nbGUnIH0sIHsga2V5OiAn6ZuZ5qyEJywgdmFsdWU6ICdwYWlyJyB9XSwgb25Gb3JtUm93Q2hhbmdlOiBvbkZvcm1Sb3dDaGFuZ2UsIHZhbHVlOiBmb3JtRGF0YS5jb2x1bW5UeXBlIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtUm93LCB7IGlkOiAnZ2V0VHlwZScsIHNlbGVjdE5hbWU6ICfntoHlrprmlrnlvI8nLCBzZWxlY3RJdGVtczogW3sga2V5OiAnTmFtZScsIHZhbHVlOiAnbmFtZScgfV0sIG9uRm9ybVJvd0NoYW5nZTogb25Gb3JtUm93Q2hhbmdlLCB2YWx1ZTogZm9ybURhdGEuZ2V0VHlwZSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBpZDogJ2NvbHVtbk5hbWUnLCBsYWJlbDogXCJcXHU4RjM4XFx1NTE2NVxcdTgxRUFcXHU4QTAyXFx1N0ZBNFxcdTdENDRcXHU1NDBEXFx1N0EzMVwiLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIG5hbWU6ICdzZWxlY3ROYW1lJywgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgb25UZXh0RmllbGRDaGFuZ2UoZSk7IH0sIHZhbHVlOiBmb3JtRGF0YS5zZWxlY3ROYW1lIH0pKSxcbiAgICAgICAgICAgIGZvcm1EYXRhLmNvbHVtblR5cGUgPT09ICdzaW5nbGUnXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRCb3gsIHsgaWQ6ICdjb2x1bW5WYWx1ZScsIGxhYmVsOiAn6Ly45YWl5bGs5oCn5ZCNJywgb25UZXh0RmllbGRDaGFuZ2U6IG9uVGV4dEJveENoYW5nZSwgaW5kZXg6IDAsIHZhbHVlOiAoX2EgPSBmb3JtRGF0YS5jb2x1bW5zWzBdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyB9KSlcbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEJveCwgeyBpZDogJ2NvbHVtblZhbHVlMScsIGxhYmVsOiAn6Ly45YWl5bGs5oCn5ZCNMScsIG9uVGV4dEZpZWxkQ2hhbmdlOiBvblRleHRCb3hDaGFuZ2UsIGluZGV4OiAwLCB2YWx1ZTogKF9iID0gZm9ybURhdGEuY29sdW1uc1swXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRCb3gsIHsgaWQ6ICdjb2x1bW5WYWx1ZTInLCBsYWJlbDogJ+i8uOWFpeWxrOaAp+WQjTInLCBvblRleHRGaWVsZENoYW5nZTogb25UZXh0Qm94Q2hhbmdlLCBpbmRleDogMSwgdmFsdWU6IChfYyA9IGZvcm1EYXRhLmNvbHVtbnNbMV0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDogeyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luWTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6IGhhbmRsZUNvbmZpcm0gfSwgXCJDb25maXJtXCIpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRkUGFuZWw7XG4vLyBQYXRoOiBzcmMvcG9wdXAvY29tcG9uZW50cy9FbmFibGVQYW5lbC50c3hcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTZWxlY3REZWZhdWx0RGF0YSwgRmlsbERlZmF1bHREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVtcGxhdGUnO1xuaW1wb3J0IHsgc2V0U2VsZWN0RGF0YSB9IGZyb20gJy4uL2FjdGlvbi9zZWxlY3RBY3Rpb24nO1xuaW1wb3J0IHsgc2V0Q29sdW1uc0RhdGEsIGdldENvbHVtbnNEYXRhLCBnZXRTdG9yYWdlLCBzZXRTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgeyBsb2FkQWxsRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuaW1wb3J0IFNldFZhbHVlU2VjdGlvbiBmcm9tICcuL1NldFZhbHVlUGFuZWwnO1xuaW1wb3J0IEVuYWJsZVBhbmVsIGZyb20gJy4vRW5hYmxlUGFuZWwnO1xuaW1wb3J0IEFkZFBhbmVsIGZyb20gJy4vQWRkUGFuZWwnO1xuO1xuY29uc3QgRm9ybVNlY3Rpb24gPSAoKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3REYXRhID0gKF9hID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb2x1bW5zKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogU2VsZWN0RGVmYXVsdERhdGE7XG4gICAgY29uc3QgW2N1cnJlbnRDb2x1bW4sIHNldEN1cnJlbnRDb2x1bW5dID0gdXNlU3RhdGUoe1xuICAgICAgICBzZWxlY3ROYW1lOiAnJyxcbiAgICAgICAgY29sdW1uTmFtZXM6IFtdLFxuICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDb2xOYW1lID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U2VsZWN0RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0TmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50Q29sdW1uKGN1cnJlbnRTZWxlY3REYXRhWzBdKTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50U2VsZWN0RGF0YV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgeyBzeDogeyBoZWlnaHQ6IDUwLCB3aWR0aDogJzEwMCUnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dExhYmVsLCB7IGlkOiBcImZvcm0xXCIgfSwgXCJ0YXJnZXRcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IGxhYmVsSWQ6IFwidGFyZ2V0LXNlbGVjdGVkLWxhYmVsXCIsIGlkOiBcInRhcmdldC1zZWxlY3RlZFwiLCB2YWx1ZTogY3VycmVudENvbHVtbi5zZWxlY3ROYW1lLCBsYWJlbDogXCJjb2x1bW5zXCIsIG9uQ2hhbmdlOiAoZSkgPT4geyBoYW5kbGVDaGFuZ2VDb2xOYW1lKGUudGFyZ2V0LnZhbHVlKTsgfSB9LCBjdXJyZW50U2VsZWN0RGF0YS5tYXAoaXRlbSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogaXRlbS5zZWxlY3ROYW1lLCB2YWx1ZTogaXRlbS5zZWxlY3ROYW1lIH0sIGl0ZW0uc2VsZWN0TmFtZSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNldFZhbHVlU2VjdGlvbiwgeyBzZWxlY3RWYWx1ZTogY3VycmVudENvbHVtbiB9KSkpKTtcbn07XG4vL0Z1bmN0aW9uIENvbXBvbmVudCBcbmNvbnN0IFRhYlBhbmVsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4IH0gPSBwcm9wcztcbiAgICBpZiAodmFsdWUgIT09IGluZGV4KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBjaGlsZHJlbikpKTtcbn07XG4vL0Z1bmN0aW9uIENvbXBvbmVudCDms5vlnovlrprnvqkgUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UD17fT5cbi8vIGNvbnN0IFRhYlBhbmVsOiBSZWFjdC5GQzxUYWJQYW5lbFByb3BzPiA9IChwcm9wcykgPT4ge1xuLy8gICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wc1xuLy8gICByZXR1cm4oXG4vLyAgICAgPHNlY3Rpb24gaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9PlxuLy8gICAgICAge2NoaWxkcmVufVxuLy8gICAgICAgPE11aUZpbGxlZElucHV0Lz5cbi8vICAgICA8L3NlY3Rpb24+XG4vLyAgIClcbi8vIH1cbmNvbnN0IEJhc2ljVGFiID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIC8vZmlyc3QgcmVuZGVyIHRoZW4gcnVuIHVzZUVmZmVjdCBhbmQgZ2V0IHNlbGVjdERhdGEgZnJvbSBjaHJvbWUuc3RvcmFnZVxuICAgIC8vaWYgc2VsZWN0RGF0YSBpcyBudWxsLCBzZXQgZGVmYXVsdCB2YWx1ZSBmcm9tIFNlbGVjdERlZmF1bHREYXRhXG4gICAgLy9nZXQgc2VsZWN0RGF0YSBmcm9tIGNocm9tZS5zdG9yYWdlIGFuZCBkaXNwYXRjaChzZXRTZWxlY3REYXRhKSB0byByZWR1eFxuICAgIC8vaWYgbm90IGZpcnN0IHJlbmRlciBub3QgZG8gdGhpcyB1c2VFZmZlY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRDb2x1bW5zRGF0YSgpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy9jaGVjayByZXMgaGFzIGRhdGEgLGlmIG5vdCBzZXQgZGVmYXVsdCB2YWx1ZSB0byByZWR1eFxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0RGF0YSA9IHJlcztcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlbGVjdERhdGEoc2VsZWN0RGF0YSkpO1xuICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlbGVjdERhdGEoU2VsZWN0RGVmYXVsdERhdGEpKTtcbiAgICAgICAgICAgICAgICBzZXRDb2x1bW5zRGF0YShTZWxlY3REZWZhdWx0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTZWxlY3REYXRhKHNlbGVjdERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFN0b3JhZ2UoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxEYXRhID0gcmVzO1xuICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvYWRBbGxGaWxsRGF0YShGaWxsRGVmYXVsdERhdGEpKTtcbiAgICAgICAgICAgICAgICBzZXRTdG9yYWdlKEZpbGxEZWZhdWx0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2FkQWxsRmlsbERhdGEoZmlsbERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGhhbmRsZVRhYnNDbGljayA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRDdXJyZW50UGFnZShpbmRleCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYnMsIHsgdmFsdWU6IGN1cnJlbnRQYWdlLCBcImFyaWEtbGFiZWxcIjogXCJ0YWJzXCIsIHZhcmlhbnQ6IFwic2Nyb2xsYWJsZVwiLCBzY3JvbGxCdXR0b25zOiBmYWxzZSwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgc3g6IHsgcHg6IDAuNSwgd2lkdGg6IDIsIGZvbnRTaXplOiAyIH0sIGxhYmVsOiBcIlZhbHVlXCIsIGlkOiBcInRhYjFcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IFwidGFic1wiLCBvbkNsaWNrOiAoKSA9PiB7IGhhbmRsZVRhYnNDbGljaygwKTsgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwgeyBzeDogeyBweDogMC41LCB3aWR0aDogMiwgZm9udFNpemU6IDIgfSwgbGFiZWw6IFwiU2VsZWN0XCIsIGlkOiBcInRhYjJcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IFwidGFic1wiLCBvbkNsaWNrOiAoKSA9PiB7IGhhbmRsZVRhYnNDbGljaygxKTsgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwgeyBzeDogeyBweDogMC41LCB3aWR0aDogMiwgZm9udFNpemU6IDIgfSwgbGFiZWw6IFwiRW5hYmxlXCIsIGlkOiBcInRhYjJcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IFwidGFic1wiLCBvbkNsaWNrOiAoKSA9PiB7IGhhbmRsZVRhYnNDbGljaygyKTsgfSB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYlBhbmVsLCB7IHZhbHVlOiBjdXJyZW50UGFnZSwgaW5kZXg6IDAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmdZOiAyLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1TZWN0aW9uLCBudWxsKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYlBhbmVsLCB7IHZhbHVlOiBjdXJyZW50UGFnZSwgaW5kZXg6IDEgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIHB0OiAxLFxuICAgICAgICAgICAgICAgICAgICBwYjogMixcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRQYW5lbCwgbnVsbCkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbCwgeyB2YWx1ZTogY3VycmVudFBhZ2UsIGluZGV4OiAyIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBwdDogMSxcbiAgICAgICAgICAgICAgICAgICAgcGI6IDIsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW5hYmxlUGFuZWwsIG51bGwpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCYXNpY1RhYjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuaW1wb3J0IHsgc2VsZWN0VXBkYXRlIH0gZnJvbSAnLi4vYWN0aW9uL3NlbGVjdEFjdGlvbic7XG5pbXBvcnQgeyBzZXRTdG9yYWdlLCBzZXRDb2x1bW5zRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBTd2l0Y2hDb250YWluZXIgZnJvbSAnLi9Td2l0Y2hDb250YWluZXInO1xuY29uc3QgRW5hYmxlUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Jvd0xpc3QsIHNldFJvd0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGZpbGxEYXRhTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZmlsbERhdGEpO1xuICAgIGNvbnN0IGNvbHVtbnNEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb2x1bW5zKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlRW5hYmxlQ2hhbmdlID0gKGNvbHVtbk5hbWUsIGVuYWJsZVN0YXRlKSA9PiB7XG4gICAgICAgIC8v5pu05pawQ29sdW1uRGF0YSBFbmFibGXni4DmhYtcbiAgICAgICAgY29uc3QgdXBkYXRlQ29sdW1uRGF0YSA9IGNvbHVtbnNEYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0TmFtZSA9PT0gY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pLCB7IGVuYWJsZTogZW5hYmxlU3RhdGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5pu05pawRmlsbERhdGEgRW5hYmxl54uA5oWLXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWxsRGF0YSA9IGZpbGxEYXRhTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnJvb3QgPT09IGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpdGVtKSwgeyBlbmFibGU6IGVuYWJsZVN0YXRlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICAvL+abtOaWsFN0b3JhZ2Xlj4pSZWR1eFxuICAgICAgICBkaXNwYXRjaChzZWxlY3RVcGRhdGUodXBkYXRlQ29sdW1uRGF0YSkpO1xuICAgICAgICBzZXRDb2x1bW5zRGF0YSh1cGRhdGVDb2x1bW5EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlRmlsbERhdGEoY3VycmVudEZpbGxEYXRhKSk7XG4gICAgICAgIHNldFN0b3JhZ2UoY3VycmVudEZpbGxEYXRhKTtcbiAgICB9O1xuICAgIC8vY29sdW1uc0RhdGHmlLnorormmYLvvIzmm7TmlrByb3dMaXN077yM6YeN5paw5riy5p+TU3dpdGNoQ29udGFpbmVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0xpc3QgPSBjb2x1bW5zRGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBoaWRkZW5Cb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zRGF0YS5sZW5ndGggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuQm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29sdW1uc0RhdGHnmoRzZWNsdE5hbWXngrrllK/kuIDlgLzvvIzlj6/nlKjmlrxrZXlcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hDb250YWluZXIsIHsga2V5OiBpdGVtLnNlbGVjdE5hbWUsIGxhYmVsOiBpdGVtLnNlbGVjdE5hbWUsIGhpZGRlbkJvcmRlcjogaGlkZGVuQm9yZGVyLCBlbmFibGVTdGF0ZTogaXRlbS5lbmFibGUsIGhhbmRsZUVuYWJsZUNoYW5nZTogaGFuZGxlRW5hYmxlQ2hhbmdlIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFJvd0xpc3QoY3VycmVudFJvd0xpc3QpO1xuICAgIH0sIFtjb2x1bW5zRGF0YV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgeyBzeDogeyBwOiAyLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdzdGFydCcsIGhlaWdodDogJzEwMCUnLCBtaW5IZWlnaHQ6ICc0MDBweCcgfSwgZWxldmF0aW9uOiAzIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDEgfSwgcm93TGlzdCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFbmFibGVQYW5lbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHQnO1xuY29uc3QgRm9ybVJvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaWQsIHNlbGVjdE5hbWUsIHNlbGVjdEl0ZW1zLCBvbkZvcm1Sb3dDaGFuZ2UsIHZhbHVlIH0gPSBwcm9wcztcbiAgICAvL2NvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBpdGVtOiB0cnVlLCB4czogMTIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgeyBmdWxsV2lkdGg6IHRydWUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRMYWJlbCwgeyBpZDogaWQgfSwgc2VsZWN0TmFtZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyBsYWJlbElkOiBgJHtpZH0tbGFiZWxgLCBpZDogYCR7aWR9LXNlbGVjdGAsIHZhbHVlOiB2YWx1ZSwgbGFiZWw6IHNlbGVjdE5hbWUsIG5hbWU6IGlkLCBvbkNoYW5nZTogKGUpID0+IHsgb25Gb3JtUm93Q2hhbmdlKGUpOyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyB2YWx1ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZW1cIiwgbnVsbCwgYCR7c2VsZWN0TmFtZX1gKSksXG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbXMubWFwKChpdGVtKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IGtleTogaXRlbS52YWx1ZSwgdmFsdWU6IGl0ZW0udmFsdWUgfSwgaXRlbS5rZXkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1IZWxwZXJUZXh0LCBudWxsLCBgJHtzZWxlY3ROYW1lfeashOS9jeW/hemgiOWhq+Wvq2ApKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZvcm1Sb3c7XG4iLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuY29uc3QgU2V0VmFsdWVTZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgeyBzZWxlY3RWYWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgZmlySW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2VjSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW2lucHV0VmFsdWVzLCBzZXRJbnB1dFZhbHVlc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgZmlsbERhdGFMaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5maWxsRGF0YSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRleHRGaWVsZCA9ICh2YWx1ZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnB1dFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRWYWx1ZXMpLCB7IFt0YXJnZXRdOiB2YWx1ZSB9KTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZXMobmV3SW5wdXRWYWx1ZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgLy9jaGVjayBpbnB1dFZhbHVlcyBoYXMgdmFsdWUgLGlmIG5vdCwgcmV0dXJuICxpZiB5ZXMsIHNldFN0b3JhZ2VcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkNvdW50ID0gc2VsZWN0VmFsdWUudHlwZSA9PT0gJ3NpbmdsZScgPyAxIDogMjtcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IE9iamVjdC52YWx1ZXMoaW5wdXRWYWx1ZXMpO1xuICAgICAgICBpZiAoY3VycmVudENvbHVtbi5sZW5ndGggPCB2YWxpZGF0aW9uQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIGlucHV0VmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpcm0nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGZpbGxEYXRhTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzLm1hcCgoY29sTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmtleSA9PT0gY29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gaW5wdXRWYWx1ZXNbY29sTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlRGF0YVwiLCB1cGRhdGVEYXRhKTtcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0U3RvcmFnZSh1cGRhdGVEYXRhKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUZpbGxEYXRhKHVwZGF0ZURhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9zZXQgaW5wdXQgZGVmYXVsdCB2YWx1ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0lucHV0VmFsdWVzID0ge307XG4gICAgICAgIGZpbGxEYXRhTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lcy5mb3JFYWNoKChjb2xOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBjb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lucHV0VmFsdWVzW2NvbE5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElucHV0VmFsdWVzKG5ld0lucHV0VmFsdWVzKTtcbiAgICB9LCBbZmlsbERhdGFMaXN0LCBzZWxlY3RWYWx1ZV0pO1xuICAgIGlmIChzZWxlY3RWYWx1ZS50eXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtdDogNCxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6IFwidGFyZ2V0LXNldFwiLCBsYWJlbDogc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMF0sIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgaGFuZGxlQ2hhbmdlVGV4dEZpZWxkKGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXSk7IH0sIHZhbHVlOiAoX2EgPSBpbnB1dFZhbHVlc1tzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCBpbnB1dFJlZjogZmlySW5wdXRSZWYgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgbXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBzaXplOiAnc21hbGwnLCBvbkNsaWNrOiBoYW5kbGVDb25maXJtIH0sIFwiQ29uZmlybVwiKSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIG10OiA0LFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBpZDogXCJ0YXJnZXQtc2V0LWZpcnN0XCIsIGxhYmVsOiBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXSwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBmdWxsV2lkdGg6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4geyBoYW5kbGVDaGFuZ2VUZXh0RmllbGQoZS50YXJnZXQudmFsdWUsIHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzBdKTsgfSwgdmFsdWU6IChfYiA9IGlucHV0VmFsdWVzW3NlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzBdXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIGlucHV0UmVmOiBmaXJJbnB1dFJlZiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDogeyBtYXJnaW5ZOiAyLCB0ZXh0QWxpZ246ICdjZW50ZXInIH0gfSwgXCJ8XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkLCB7IGlkOiBcInRhcmdldC1zZXQtc2Vjb25kXCIsIGxhYmVsOiBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1sxXSwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBmdWxsV2lkdGg6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4geyBoYW5kbGVDaGFuZ2VUZXh0RmllbGQoZS50YXJnZXQudmFsdWUsIHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzFdKTsgfSwgdmFsdWU6IChfYyA9IGlucHV0VmFsdWVzW3NlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzFdXSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJycsIGlucHV0UmVmOiBzZWNJbnB1dFJlZiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtdDogNSxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwiY29udGFpbmVkXCIsIHNpemU6ICdzbWFsbCcsIG9uQ2xpY2s6IGhhbmRsZUNvbmZpcm0gfSwgXCJDb25maXJtXCIpKSkpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTZXRWYWx1ZVNlY3Rpb247XG4vL+W+nkNocm9tZSBTdG9yYWdl5Lit5Y+W5b6XVGVtcGxhdGXnmoTos4fmlpkoKe+8jOiLpeaykuacie+8jOWJh+WPluW+l1NlbGVjdERlZmF1bHREYXRh55qE6LOH5paZXG4vLyjoqIjnlasp6aGv56S65omA5pyJc2VsZWN0IE5hbWXlnKhTZWxlY3TkuK1cbi8v6YG45pOHc2VsZWN0IE5hbWXlvozvvIzpoa/npLrlsI3mh4nnmoRDb2x1bW4gTmFtZVxuLy/kvp3mk5pDb2x1bW4gTmFtZemhr+ekuuWwjeaHieeahFZhbHVlXG4vL+i8uOWFpVZhbHVl5b6M77yM5oyJ5LiLQ29uZmlybe+8jOS7pXNlbGVjdERhdGHnmoTmoLzlvI/vvIxrZXnngrpzZWxlY3QgTmFtZe+8jHZhbHVl54K6VmFsdWXvvIzlrZjlhaVDaHJvbWUgU3RvcmFnZeS4rVxuLy/oi6Xlt7LntpPmnInnm7jlkIznmoRrZXnvvIzliYfmm7TmlrB2YWx1ZVxuLy/oi6XmspLmnInnm7jlkIznmoRrZXnvvIzliYfmlrDlop7kuIDnrYbos4fmlplcbi8v5q+P5qyh5pyJ5L+u5pS55pmC77yM6YO96KaB5pu05pawbG9jYWxTdG9yYWdlRGF0YeS4reebuOWQjEtleeeahHNlbGVjdERhdGHnmoR2YWx1ZVxuLy/kuKbkuJTlsIdsb2NhbFN0b3JhZ2VEYXRh5a2Y5YWlQ2hyb21lIFN0b3JhZ2XkuK1cbi8vY29udGV4dE1lbnVzLm9uQ2xpY2tlZOS6i+S7tuinuOeZvOaZgu+8jOS9v+eUqGdldFN0b3JhZ2UoKeWPluW+l+izh+aWme+8jOS4puWwh+izh+aWmeWhq+WFpeWwjeaHieeahOashOS9jeS4rVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbXVpL21hdGVyaWFsL1N3aXRjaCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5jb25zdCBJT1NTd2l0Y2ggPSBzdHlsZWQoKHByb3BzKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2gsIE9iamVjdC5hc3NpZ24oeyBmb2N1c1Zpc2libGVDbGFzc05hbWU6IFwiLk11aS1mb2N1c1Zpc2libGVcIiwgZGlzYWJsZVJpcHBsZTogdHJ1ZSB9LCBwcm9wcykpKSkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB3aWR0aDogNDIsXG4gICAgaGVpZ2h0OiAyNixcbiAgICBwYWRkaW5nOiAwLFxuICAgICcmIC5NdWlTd2l0Y2gtc3dpdGNoQmFzZSc6IHtcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgbWFyZ2luOiAyLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICczMDBtcycsXG4gICAgICAgICcmLk11aS1jaGVja2VkJzoge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxNnB4KScsXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgJyYgKyAuTXVpU3dpdGNoLXRyYWNrJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyAnIzJFQ0E0NScgOiAnIzY1QzQ2NicsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyYuTXVpLWRpc2FibGVkICsgLk11aVN3aXRjaC10cmFjayc6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnJi5NdWktZm9jdXNWaXNpYmxlIC5NdWlTd2l0Y2gtdGh1bWInOiB7XG4gICAgICAgICAgICBjb2xvcjogJyMzM2NmNGQnLFxuICAgICAgICAgICAgYm9yZGVyOiAnNnB4IHNvbGlkICNmZmYnLFxuICAgICAgICB9LFxuICAgICAgICAnJi5NdWktZGlzYWJsZWQgLk11aVN3aXRjaC10aHVtYic6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbNjAwXSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYuTXVpLWRpc2FibGVkICsgLk11aVN3aXRjaC10cmFjayc6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0JyA/IDAuNyA6IDAuMyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgICcmIC5NdWlTd2l0Y2gtdGh1bWInOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB3aWR0aDogMjIsXG4gICAgICAgIGhlaWdodDogMjIsXG4gICAgfSxcbiAgICAnJiAuTXVpU3dpdGNoLXRyYWNrJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDI2IC8gMixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCcgPyAnI0U5RTlFQScgOiAnIzM5MzkzRCcsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQtY29sb3InXSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgfSksXG4gICAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IElPU1N3aXRjaDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJT1NTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmNvbnN0IFN3aXRjaENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaGlkZGVuQm9yZGVyLCBsYWJlbCwgZW5hYmxlU3RhdGUsIGhhbmRsZUVuYWJsZUNoYW5nZSB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc3dpdGNoQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgaGFuZGxlRW5hYmxlQ2hhbmdlKGxhYmVsLCBlLnRhcmdldC5jaGVja2VkKTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGl0ZW06IHRydWUsIHhzOiAxMiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWI6IDEsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IGhpZGRlbkJvcmRlciA/IDAgOiAwLjUsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdkMGQwZDAnLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbExhYmVsLCB7IGNvbnRyb2w6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSU9TU3dpdGNoLCB7IHN4OiB7IG06IDEgfSwgb25DaGFuZ2U6IHN3aXRjaENoYW5nZSwgY2hlY2tlZDogZW5hYmxlU3RhdGUgfSksIGxhYmVsOiBsYWJlbCwgbGFiZWxQbGFjZW1lbnQ6IFwic3RhcnRcIiwgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgbWw6IDAsXG4gICAgICAgICAgICAgICAgfSB9KSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0JztcbmNvbnN0IFRleHRCb3ggPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGlkLCBsYWJlbCwgaW5kZXgsIG9uVGV4dEZpZWxkQ2hhbmdlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6IGAke2lkfS1maWxsLWtleWAsIGxhYmVsOiBsYWJlbCwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBuYW1lOiAnY29sdW1uTmFtZScsIHZhbHVlOiB2YWx1ZSwgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgb25UZXh0RmllbGRDaGFuZ2UoZSwgaW5kZXgpOyB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1IZWxwZXJUZXh0LCBudWxsLCBg5L6d5pOa57aB5a6a6aGe5Z6L6Ly45YWlSUTmiJZOYW1l5bGs5oCnYCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUZXh0Qm94O1xuIiwiaW1wb3J0ICcuL3BvcHVwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by8zMDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzQwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNTAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by83MDAuY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgQmFzaWNUYWIgZnJvbSAnLi9jb21wb25lbnRzL0Jhc2ljVGFiJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYWxsUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2FsbFJlZHVjZXInO1xubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcik7XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhc2ljVGFiLCBudWxsKSkpKTtcbn07XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNvbHVtbnM6IFtdLFxuICAgIGZpbGxEYXRhOiBbXSxcbn07XG5jb25zdCBzZWxlY3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmNvbHVtbnMsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlNFTEVDVF9BRERcIjpcbiAgICAgICAgICAgIC8vIGFkZCBhIG5ldyBzZWxlY3QgaXRlbVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VMRUNUX0RFTEVURVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VMRUNUX1VQREFURVwiOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY3Rpb24uZGF0YV07XG4gICAgICAgIGNhc2UgXCJTRVRfU0VMRUNUX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBbLi4uYWN0aW9uLmRhdGFdO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5jb25zdCBmaWxsRGF0YVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuZmlsbERhdGEsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkFERF9GSUxMX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICAgICAgY2FzZSBcIlVQREFURV9GSUxMX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBbLi4uYWN0aW9uLnBheWxvYWRdO1xuICAgICAgICBjYXNlIFwiRU5BQkxFX0ZJTExfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigoY29sdW1uLCBpbmRleCkgPT4gaW5kZXggIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgY2FzZSBcIkRFTEVURV9GSUxMX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKGNvbHVtbiwgaW5kZXgpID0+IGluZGV4ICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0FMTF9GSUxMX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBbLi4uYWN0aW9uLnBheWxvYWRdO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5jb25zdCBhbGxSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb2x1bW5zOiBzZWxlY3RSZWR1Y2VyLFxuICAgIGZpbGxEYXRhOiBmaWxsRGF0YVJlZHVjZXIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGFsbFJlZHVjZXI7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0U3RvcmFnZShkYXRhKSB7XG4gICAgY29uc3Qgc2V0RGF0YSA9IHtcbiAgICAgICAgZGF0YSxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoc2V0RGF0YSwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydkYXRhJ10sIChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxEYXRhID0gcmVzLmRhdGEgPyByZXMuZGF0YSA6IFtdO1xuICAgICAgICAgICAgcmVzb2x2ZShmaWxsRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbHVtbnNEYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgY29sdW1uczogZGF0YSB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbHVtbnNEYXRhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydjb2x1bW5zJ10sIChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNEYXRhID0gcmVzLmNvbHVtbnMgPyByZXMuY29sdW1ucyA6IFtdO1xuICAgICAgICAgICAgcmVzb2x2ZShjb2x1bW5zRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8gZXhwb3J0IGludGVyZmFjZSBBcnJheTxTaW5nbGVDb2x1bW4+IHtcbi8vICAgW2luZGV4OiBudW1iZXIgXTogU2luZ2xlQ29sdW1uO1xuLy8gICBsZW5ndGg6IG51bWJlcjtcbi8vIH1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgQXJyYXk8UGFpckNvbHVtbj4ge1xuLy8gfVxuZXhwb3J0IGNvbnN0IFNlbGVjdERlZmF1bHREYXRhID0gW1xuICAgIHtcbiAgICAgICAgc2VsZWN0TmFtZTogJ1VzZXJJZCcsXG4gICAgICAgIGNvbHVtbk5hbWVzOiBbJyNVc2VySWQnXSxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB0eXBlOiAnc2luZ2xlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0TmFtZTogJ1VzZXJOYW1lJyxcbiAgICAgICAgY29sdW1uTmFtZXM6IFsnI1VzZXJOYW1lJ10sXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3NpbmdsZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdE5hbWU6ICdkYXRlJyxcbiAgICAgICAgY29sdW1uTmFtZXM6IFsnU3RhcnREYXRlJywgJ0VuZERhdGUnXSxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB0eXBlOiAncGFpcicsXG4gICAgfSxcbl07XG5leHBvcnQgY29uc3QgRmlsbERlZmF1bHREYXRhID0gW1xuICAgIHtcbiAgICAgICAgcm9vdDogJ1VzZXJJZCcsXG4gICAgICAgIGtleTogJyNVc2VySWQnLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvb3Q6ICdVc2VyTmFtZScsXG4gICAgICAgIGtleTogJyNVc2VyTmFtZScsXG4gICAgICAgIHZhbHVlOiAnU09EQURNJyxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICByb290OiAnZGF0ZScsXG4gICAgICAgIGtleTogJ1N0YXJ0RGF0ZScsXG4gICAgICAgIHZhbHVlOiAnMjAyMC8wMS8wMScsXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm9vdDogJ2RhdGUnLFxuICAgICAgICBrZXk6ICdFbmREYXRlJyxcbiAgICAgICAgdmFsdWU6ICcyMDIwLzAxLzAxJyxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIH0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3JlYWN0X2Nocm9tZV9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfY2hyb21lX2V4dGVuc2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1ctNjU2NTM1XCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfbWF0ZXJpYWxfQm94X0JveF9qcy1ub2RlX21vZHVsZXNfbXVpX21hdGVyaWFsX0J1dHRvbl9CdXR0b25fanMtbm9kZV8tZTgzNTRlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BvcHVwL3BvcHVwLnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9