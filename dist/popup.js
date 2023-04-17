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
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { p: 2, display: 'flex', flexDirection: 'column', height: 240 } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], { container: true, spacing: 2 },
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
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__["default"], { variant: "contained", size: 'small', onClick: handleConfirm }, "Confirm")))));
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
                marginBottom: 3
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_14__["default"], { value: currentPage, "aria-label": "tabs", variant: "scrollable", scrollButtons: false, sx: {
                    width: '100%',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Value", id: "tab1", "aria-controls": "tabs", onClick: () => { handleTabsClick(0); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Select", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(1); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Enable", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(2); } }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 0 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: {
                    marginBottom: 3
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormSection, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddPanel__WEBPACK_IMPORTED_MODULE_8__["default"], null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 2 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__["default"], null,
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: { pl: 2, pr: 1, display: 'flex', alignItems: 'center' } },
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
                "|",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcG9wdXAuY3NzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcG9wdXAuY3NzP2YyYzYiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9hY3Rpb24vZmlsbERhdGFBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9hY3Rpb24vc2VsZWN0QWN0aW9uLnRzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9BZGRQYW5lbC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL0Jhc2ljVGFiLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvRW5hYmxlUGFuZWwudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvY29tcG9uZW50cy9Gb3JtUm93LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvU2V0VmFsdWVQYW5lbC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1N3aXRjaC50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1N3aXRjaENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9wb3B1cC9jb21wb25lbnRzL1RleHRCb3gudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcG9wdXAudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcmVkdWNlcnMvYWxsUmVkdWNlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3V0aWxzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy91dGlscy90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjb25zdCBsb2FkQWxsRmlsbERhdGEgPSAocGF5bG9hZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdMT0FEX0FMTF9GSUxMX0RBVEEnLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbGxEYXRhID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0ZJTExfREFUQScsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0QWRkID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRUxFQ1RfQUREJyxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3REZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VMRUNUX0RFTEVURScsXG4gICAgICAgIGluZGV4LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdFVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NFTEVDVF9VUERBVEUnLFxuICAgICAgICBkYXRhLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdEVuYWJsZSA9IChpbmRleCwgZW5hYmxlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NFTEVDVF9FTkFCTEUnLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgZW5hYmxlLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNldFNlbGVjdERhdGEgPSAoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRVRfU0VMRUNUX0RBVEEnLFxuICAgICAgICBkYXRhLFxuICAgIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVGaWxsRGF0YSB9IGZyb20gJy4uL2FjdGlvbi9maWxsRGF0YUFjdGlvbic7XG5pbXBvcnQgeyBzZWxlY3RVcGRhdGUgfSBmcm9tICcuLi9hY3Rpb24vc2VsZWN0QWN0aW9uJztcbmltcG9ydCB7IHNldFN0b3JhZ2UsIHNldENvbHVtbnNEYXRhLCBnZXRTdG9yYWdlLCBnZXRDb2x1bW5zRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Sb3cgZnJvbSAnLi9Gb3JtUm93JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFRleHRCb3ggZnJvbSAnLi9UZXh0Qm94JztcbmNvbnN0IEFkZFBhbmVsID0gKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBjb2x1bW5UeXBlOiAnJyxcbiAgICAgICAgc2VsZWN0TmFtZTogJycsXG4gICAgICAgIGdldFR5cGU6ICcnLFxuICAgICAgICBjb2x1bW5zOiBbXSxcbiAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBvbkZvcm1Sb3dDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybURhdGEoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSksIHsgW25hbWVdOiB2YWx1ZSB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBvblRleHRGaWVsZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhKSwgeyBbbmFtZV06IHZhbHVlIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uVGV4dEJveENoYW5nZSA9IChlLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudENvbHVtbnMgPSBbXTtcbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbHVtbnMubGVuZ3RoIDwgaW5kZXggKyAxKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29sdW1ucyA9IFtlLnRhcmdldC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5zID0gWy4uLmZvcm1EYXRhLmNvbHVtbnMsIGUudGFyZ2V0LnZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5zID0gZm9ybURhdGEuY29sdW1ucy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRGb3JtRGF0YShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhKSwgeyBjb2x1bW5zOiBjdXJyZW50Q29sdW1ucyB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDb25maXJtID0gKCkgPT4ge1xuICAgICAgICAvL2NoZWNrIGZvcm1EYXRhIGV2ZXJ5IGlzIG5vdCBlbXB0eVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvXCIsIGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKGZvcm1EYXRhLmNvbHVtblR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn5qyE5L2N6aGe5Z6L5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1EYXRhLnNlbGVjdE5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn6Ieq6KiC576k57WE5ZCN56ix5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1EYXRhLmdldFR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgn57aB5a6a5pa55byP5LiN5Y+v54K656m6Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9ybURhdGEuY29sdW1ucy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICBpZiAoY29sLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCflsazmgKflkI3kuI3lj6/ngrrnqbonKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZm9ybURhdGEuY29sdW1uc1swXSA9PT0gZm9ybURhdGEuY29sdW1uc1sxXSkge1xuICAgICAgICAgICAgYWxlcnQoJ+WxrOaAp+WQjeS4jeWPr+mHjeikhycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgc2VsZWN0TmFtZSBhbmQgZmlsbERhdGEncyBrZXkgaXMgbm90IHJlcGVhdFxuICAgICAgICBnZXRDb2x1bW5zRGF0YSgpLnRoZW4oKGNvbHVtbnNEYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXBlYXRTZWxlY3QgPSBjb2x1bW5zRGF0YS5maW5kKGNvbCA9PiBjb2wuc2VsZWN0TmFtZSA9PT0gZm9ybURhdGEuc2VsZWN0TmFtZSk7XG4gICAgICAgICAgICBpZiAocmVwZWF0U2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ+iHquiogue+pOe1hOWQjeeoseiIh+ePvuacieizh+aWmemHjeikhycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbLi4uY29sdW1uc0RhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0TmFtZTogZm9ybURhdGEuc2VsZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZXM6IGZvcm1EYXRhLmNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZm9ybURhdGEuZW5hYmxlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBmb3JtRGF0YS5jb2x1bW5UeXBlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pLnRoZW4oKG5ld0NvbHVtbnMpID0+IHtcbiAgICAgICAgICAgIGdldFN0b3JhZ2UoKS50aGVuKChmaWxsRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGVhdENvbHVtbnMgPSBmaWxsRGF0YS5maW5kKGNvbCA9PiBjb2wua2V5ID09PSBmb3JtRGF0YS5jb2x1bW5zWzBdIHx8IGNvbC5rZXkgPT09IGZvcm1EYXRhLmNvbHVtbnNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXBlYXRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfmrITkvY3lgLzoiIfnj77mnInos4fmlpnph43opIcnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRDb2x1bW5zRGF0YShuZXdDb2x1bW5zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2VsZWN0VXBkYXRlKG5ld0NvbHVtbnMpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2V0Q29sdW1uc0RhdGFcIixuZXdDb2x1bW5zKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEZpbGxEYXRhID0gZm9ybURhdGEuY29sdW1ucy5tYXAoY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogY29sLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDogZm9ybURhdGEuc2VsZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmZpbGxEYXRhLCAuLi5hZGRGaWxsRGF0YV07XG4gICAgICAgICAgICB9KS50aGVuKChuZXdGaWxsRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzZXRTdG9yYWdlXCIsbmV3RmlsbERhdGEpXG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZShuZXdGaWxsRGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUZpbGxEYXRhKG5ld0ZpbGxEYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblR5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0TmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRUeXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgeyBzeDogeyBwOiAyLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6IDI0MCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoR3JpZCwgeyBjb250YWluZXI6IHRydWUsIHNwYWNpbmc6IDIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybVJvdywgeyBpZDogJ2NvbHVtblR5cGUnLCBzZWxlY3ROYW1lOiAn5qyE5L2N6aGe5Z6LJywgc2VsZWN0SXRlbXM6IFt7IGtleTogJ+WWruashCcsIHZhbHVlOiAnc2luZ2xlJyB9LCB7IGtleTogJ+mbmeashCcsIHZhbHVlOiAncGFpcicgfV0sIG9uRm9ybVJvd0NoYW5nZTogb25Gb3JtUm93Q2hhbmdlLCB2YWx1ZTogZm9ybURhdGEuY29sdW1uVHlwZSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybVJvdywgeyBpZDogJ2dldFR5cGUnLCBzZWxlY3ROYW1lOiAn57aB5a6a5pa55byPJywgc2VsZWN0SXRlbXM6IFt7IGtleTogJ05hbWUnLCB2YWx1ZTogJ25hbWUnIH1dLCBvbkZvcm1Sb3dDaGFuZ2U6IG9uRm9ybVJvd0NoYW5nZSwgdmFsdWU6IGZvcm1EYXRhLmdldFR5cGUgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6ICdjb2x1bW5OYW1lJywgbGFiZWw6IFwiXFx1OEYzOFxcdTUxNjVcXHU4MUVBXFx1OEEwMlxcdTdGQTRcXHU3RDQ0XFx1NTQwRFxcdTdBMzFcIiwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBuYW1lOiAnc2VsZWN0TmFtZScsIGZ1bGxXaWR0aDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiB7IG9uVGV4dEZpZWxkQ2hhbmdlKGUpOyB9LCB2YWx1ZTogZm9ybURhdGEuc2VsZWN0TmFtZSB9KSksXG4gICAgICAgICAgICBmb3JtRGF0YS5jb2x1bW5UeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHcmlkLCB7IGl0ZW06IHRydWUsIHhzOiAxMiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0Qm94LCB7IGlkOiAnY29sdW1uVmFsdWUnLCBsYWJlbDogJ+i8uOWFpeWxrOaAp+WQjScsIG9uVGV4dEZpZWxkQ2hhbmdlOiBvblRleHRCb3hDaGFuZ2UsIGluZGV4OiAwLCB2YWx1ZTogKF9hID0gZm9ybURhdGEuY29sdW1uc1swXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycgfSkpXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRCb3gsIHsgaWQ6ICdjb2x1bW5WYWx1ZTEnLCBsYWJlbDogJ+i8uOWFpeWxrOaAp+WQjTEnLCBvblRleHRGaWVsZENoYW5nZTogb25UZXh0Qm94Q2hhbmdlLCBpbmRleDogMCwgdmFsdWU6IChfYiA9IGZvcm1EYXRhLmNvbHVtbnNbMF0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0Qm94LCB7IGlkOiAnY29sdW1uVmFsdWUyJywgbGFiZWw6ICfovLjlhaXlsazmgKflkI0yJywgb25UZXh0RmllbGRDaGFuZ2U6IG9uVGV4dEJveENoYW5nZSwgaW5kZXg6IDEsIHZhbHVlOiAoX2MgPSBmb3JtRGF0YS5jb2x1bW5zWzFdKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJyB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgc2l6ZTogJ3NtYWxsJywgb25DbGljazogaGFuZGxlQ29uZmlybSB9LCBcIkNvbmZpcm1cIikpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFkZFBhbmVsO1xuLy8gUGF0aDogc3JjL3BvcHVwL2NvbXBvbmVudHMvRW5hYmxlUGFuZWwudHN4XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9JbnB1dExhYmVsJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU2VsZWN0RGVmYXVsdERhdGEsIEZpbGxEZWZhdWx0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3RlbXBsYXRlJztcbmltcG9ydCB7IHNldFNlbGVjdERhdGEgfSBmcm9tICcuLi9hY3Rpb24vc2VsZWN0QWN0aW9uJztcbmltcG9ydCB7IHNldENvbHVtbnNEYXRhLCBnZXRDb2x1bW5zRGF0YSwgZ2V0U3RvcmFnZSwgc2V0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgbG9hZEFsbEZpbGxEYXRhIH0gZnJvbSAnLi4vYWN0aW9uL2ZpbGxEYXRhQWN0aW9uJztcbmltcG9ydCBTZXRWYWx1ZVNlY3Rpb24gZnJvbSAnLi9TZXRWYWx1ZVBhbmVsJztcbmltcG9ydCBFbmFibGVQYW5lbCBmcm9tICcuL0VuYWJsZVBhbmVsJztcbmltcG9ydCBBZGRQYW5lbCBmcm9tICcuL0FkZFBhbmVsJztcbjtcbmNvbnN0IEZvcm1TZWN0aW9uID0gKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0RGF0YSA9IChfYSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29sdW1ucykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFNlbGVjdERlZmF1bHREYXRhO1xuICAgIGNvbnN0IFtjdXJyZW50Q29sdW1uLCBzZXRDdXJyZW50Q29sdW1uXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc2VsZWN0TmFtZTogJycsXG4gICAgICAgIGNvbHVtbk5hbWVzOiBbXSxcbiAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgdHlwZTogJycsXG4gICAgfSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ29sTmFtZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFNlbGVjdERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdE5hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbihpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudENvbHVtbihjdXJyZW50U2VsZWN0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFNlbGVjdERhdGFdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2wsIHsgc3g6IHsgaGVpZ2h0OiA1MCwgd2lkdGg6ICcxMDAlJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRMYWJlbCwgeyBpZDogXCJmb3JtMVwiIH0sIFwidGFyZ2V0XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyBsYWJlbElkOiBcInRhcmdldC1zZWxlY3RlZC1sYWJlbFwiLCBpZDogXCJ0YXJnZXQtc2VsZWN0ZWRcIiwgdmFsdWU6IGN1cnJlbnRDb2x1bW4uc2VsZWN0TmFtZSwgbGFiZWw6IFwiY29sdW1uc1wiLCBvbkNoYW5nZTogKGUpID0+IHsgaGFuZGxlQ2hhbmdlQ29sTmFtZShlLnRhcmdldC52YWx1ZSk7IH0gfSwgY3VycmVudFNlbGVjdERhdGEubWFwKGl0ZW0gPT4gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBrZXk6IGl0ZW0uc2VsZWN0TmFtZSwgdmFsdWU6IGl0ZW0uc2VsZWN0TmFtZSB9LCBpdGVtLnNlbGVjdE5hbWUpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZXRWYWx1ZVNlY3Rpb24sIHsgc2VsZWN0VmFsdWU6IGN1cnJlbnRDb2x1bW4gfSkpKSk7XG59O1xuLy9GdW5jdGlvbiBDb21wb25lbnQgXG5jb25zdCBUYWJQYW5lbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCB9ID0gcHJvcHM7XG4gICAgaWYgKHZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgY2hpbGRyZW4pKSk7XG59O1xuLy9GdW5jdGlvbiBDb21wb25lbnQg5rOb5Z6L5a6a576pIFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFA9e30+XG4vLyBjb25zdCBUYWJQYW5lbDogUmVhY3QuRkM8VGFiUGFuZWxQcm9wcz4gPSAocHJvcHMpID0+IHtcbi8vICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHNcbi8vICAgcmV0dXJuKFxuLy8gICAgIDxzZWN0aW9uIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fT5cbi8vICAgICAgIHtjaGlsZHJlbn1cbi8vICAgICAgIDxNdWlGaWxsZWRJbnB1dC8+XG4vLyAgICAgPC9zZWN0aW9uPlxuLy8gICApXG4vLyB9XG5jb25zdCBCYXNpY1RhYiA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAvL2ZpcnN0IHJlbmRlciB0aGVuIHJ1biB1c2VFZmZlY3QgYW5kIGdldCBzZWxlY3REYXRhIGZyb20gY2hyb21lLnN0b3JhZ2VcbiAgICAvL2lmIHNlbGVjdERhdGEgaXMgbnVsbCwgc2V0IGRlZmF1bHQgdmFsdWUgZnJvbSBTZWxlY3REZWZhdWx0RGF0YVxuICAgIC8vZ2V0IHNlbGVjdERhdGEgZnJvbSBjaHJvbWUuc3RvcmFnZSBhbmQgZGlzcGF0Y2goc2V0U2VsZWN0RGF0YSkgdG8gcmVkdXhcbiAgICAvL2lmIG5vdCBmaXJzdCByZW5kZXIgbm90IGRvIHRoaXMgdXNlRWZmZWN0XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0Q29sdW1uc0RhdGEoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vY2hlY2sgcmVzIGhhcyBkYXRhICxpZiBub3Qgc2V0IGRlZmF1bHQgdmFsdWUgdG8gcmVkdXhcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdERhdGEgPSByZXM7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRTZWxlY3REYXRhKHNlbGVjdERhdGEpKTtcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTZWxlY3REYXRhKFNlbGVjdERlZmF1bHREYXRhKSk7XG4gICAgICAgICAgICAgICAgc2V0Q29sdW1uc0RhdGEoU2VsZWN0RGVmYXVsdERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0RGF0YShzZWxlY3REYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRTdG9yYWdlKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxsRGF0YSA9IHJlcztcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2FkQWxsRmlsbERhdGEoRmlsbERlZmF1bHREYXRhKSk7XG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZShGaWxsRGVmYXVsdERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFsbEZpbGxEYXRhKGZpbGxEYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJzQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoaW5kZXgpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogM1xuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCB7IHZhbHVlOiBjdXJyZW50UGFnZSwgXCJhcmlhLWxhYmVsXCI6IFwidGFic1wiLCB2YXJpYW50OiBcInNjcm9sbGFibGVcIiwgc2Nyb2xsQnV0dG9uczogZmFsc2UsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7IHN4OiB7IHB4OiAwLjUsIHdpZHRoOiAyLCBmb250U2l6ZTogMiB9LCBsYWJlbDogXCJWYWx1ZVwiLCBpZDogXCJ0YWIxXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMCk7IH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgc3g6IHsgcHg6IDAuNSwgd2lkdGg6IDIsIGZvbnRTaXplOiAyIH0sIGxhYmVsOiBcIlNlbGVjdFwiLCBpZDogXCJ0YWIyXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMSk7IH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgc3g6IHsgcHg6IDAuNSwgd2lkdGg6IDIsIGZvbnRTaXplOiAyIH0sIGxhYmVsOiBcIkVuYWJsZVwiLCBpZDogXCJ0YWIyXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMik7IH0gfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbCwgeyB2YWx1ZTogY3VycmVudFBhZ2UsIGluZGV4OiAwIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDNcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtU2VjdGlvbiwgbnVsbCkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbCwgeyB2YWx1ZTogY3VycmVudFBhZ2UsIGluZGV4OiAxIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFkZFBhbmVsLCBudWxsKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYlBhbmVsLCB7IHZhbHVlOiBjdXJyZW50UGFnZSwgaW5kZXg6IDIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRW5hYmxlUGFuZWwsIG51bGwpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCYXNpY1RhYjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuaW1wb3J0IHsgc2VsZWN0VXBkYXRlIH0gZnJvbSAnLi4vYWN0aW9uL3NlbGVjdEFjdGlvbic7XG5pbXBvcnQgeyBzZXRTdG9yYWdlLCBzZXRDb2x1bW5zRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBTd2l0Y2hDb250YWluZXIgZnJvbSAnLi9Td2l0Y2hDb250YWluZXInO1xuY29uc3QgRW5hYmxlUGFuZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Jvd0xpc3QsIHNldFJvd0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGZpbGxEYXRhTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZmlsbERhdGEpO1xuICAgIGNvbnN0IGNvbHVtbnNEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb2x1bW5zKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgaGFuZGxlRW5hYmxlQ2hhbmdlID0gKGNvbHVtbk5hbWUsIGVuYWJsZVN0YXRlKSA9PiB7XG4gICAgICAgIC8v5pu05pawQ29sdW1uRGF0YSBFbmFibGXni4DmhYtcbiAgICAgICAgY29uc3QgdXBkYXRlQ29sdW1uRGF0YSA9IGNvbHVtbnNEYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0TmFtZSA9PT0gY29sdW1uTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pLCB7IGVuYWJsZTogZW5hYmxlU3RhdGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5pu05pawRmlsbERhdGEgRW5hYmxl54uA5oWLXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWxsRGF0YSA9IGZpbGxEYXRhTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnJvb3QgPT09IGNvbHVtbk5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpdGVtKSwgeyBlbmFibGU6IGVuYWJsZVN0YXRlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICAvL+abtOaWsFN0b3JhZ2Xlj4pSZWR1eFxuICAgICAgICBkaXNwYXRjaChzZWxlY3RVcGRhdGUodXBkYXRlQ29sdW1uRGF0YSkpO1xuICAgICAgICBzZXRDb2x1bW5zRGF0YSh1cGRhdGVDb2x1bW5EYXRhKTtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlRmlsbERhdGEoY3VycmVudEZpbGxEYXRhKSk7XG4gICAgICAgIHNldFN0b3JhZ2UoY3VycmVudEZpbGxEYXRhKTtcbiAgICB9O1xuICAgIC8vY29sdW1uc0RhdGHmlLnorormmYLvvIzmm7TmlrByb3dMaXN077yM6YeN5paw5riy5p+TU3dpdGNoQ29udGFpbmVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFJvd0xpc3QgPSBjb2x1bW5zRGF0YS5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGxldCBoaWRkZW5Cb3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5zRGF0YS5sZW5ndGggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuQm9yZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29sdW1uc0RhdGHnmoRzZWNsdE5hbWXngrrllK/kuIDlgLzvvIzlj6/nlKjmlrxrZXlcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hDb250YWluZXIsIHsga2V5OiBpdGVtLnNlbGVjdE5hbWUsIGxhYmVsOiBpdGVtLnNlbGVjdE5hbWUsIGhpZGRlbkJvcmRlcjogaGlkZGVuQm9yZGVyLCBlbmFibGVTdGF0ZTogaXRlbS5lbmFibGUsIGhhbmRsZUVuYWJsZUNoYW5nZTogaGFuZGxlRW5hYmxlQ2hhbmdlIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFJvd0xpc3QoY3VycmVudFJvd0xpc3QpO1xuICAgIH0sIFtjb2x1bW5zRGF0YV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgeyBzeDogeyBwbDogMiwgcHI6IDEsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgY29udGFpbmVyOiB0cnVlLCBzcGFjaW5nOiAxIH0sIHJvd0xpc3QpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5hYmxlUGFuZWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2VsZWN0JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1IZWxwZXJUZXh0JztcbmNvbnN0IEZvcm1Sb3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGlkLCBzZWxlY3ROYW1lLCBzZWxlY3RJdGVtcywgb25Gb3JtUm93Q2hhbmdlLCB2YWx1ZSB9ID0gcHJvcHM7XG4gICAgLy9jb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2wsIHsgZnVsbFdpZHRoOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0TGFiZWwsIHsgaWQ6IGlkIH0sIHNlbGVjdE5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgbGFiZWxJZDogYCR7aWR9LWxhYmVsYCwgaWQ6IGAke2lkfS1zZWxlY3RgLCB2YWx1ZTogdmFsdWUsIGxhYmVsOiBzZWxlY3ROYW1lLCBuYW1lOiBpZCwgb25DaGFuZ2U6IChlKSA9PiB7IG9uRm9ybVJvd0NoYW5nZShlKTsgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsgdmFsdWU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImVtXCIsIG51bGwsIGAke3NlbGVjdE5hbWV9YCkpLFxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW1zLm1hcCgoaXRlbSkgPT4gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyBrZXk6IGl0ZW0udmFsdWUsIHZhbHVlOiBpdGVtLnZhbHVlIH0sIGl0ZW0ua2V5KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSGVscGVyVGV4dCwgbnVsbCwgYCR7c2VsZWN0TmFtZX3mrITkvY3lv4XpoIjloavlr6tgKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGb3JtUm93O1xuIiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNldFN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVwZGF0ZUZpbGxEYXRhIH0gZnJvbSAnLi4vYWN0aW9uL2ZpbGxEYXRhQWN0aW9uJztcbmNvbnN0IFNldFZhbHVlU2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHsgc2VsZWN0VmFsdWUgfSA9IHByb3BzO1xuICAgIGNvbnN0IGZpcklucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNlY0lucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtpbnB1dFZhbHVlcywgc2V0SW5wdXRWYWx1ZXNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IGZpbGxEYXRhTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZmlsbERhdGEpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VUZXh0RmllbGQgPSAodmFsdWUsIHRhcmdldCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3SW5wdXRWYWx1ZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGlucHV0VmFsdWVzKSwgeyBbdGFyZ2V0XTogdmFsdWUgfSk7XG4gICAgICAgIHNldElucHV0VmFsdWVzKG5ld0lucHV0VmFsdWVzKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIC8vY2hlY2sgaW5wdXRWYWx1ZXMgaGFzIHZhbHVlICxpZiBub3QsIHJldHVybiAsaWYgeWVzLCBzZXRTdG9yYWdlXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Db3VudCA9IHNlbGVjdFZhbHVlLnR5cGUgPT09ICdzaW5nbGUnID8gMSA6IDI7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSBPYmplY3QudmFsdWVzKGlucHV0VmFsdWVzKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb2x1bW4ubGVuZ3RoIDwgdmFsaWRhdGlvbkNvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBpbnB1dFZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHJpbSgpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtJyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZURhdGEgPSBmaWxsRGF0YUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lcy5tYXAoKGNvbE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5rZXkgPT09IGNvbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IGlucHV0VmFsdWVzW2NvbE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZURhdGFcIiwgdXBkYXRlRGF0YSk7XG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFN0b3JhZ2UodXBkYXRlRGF0YSk7XG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVGaWxsRGF0YSh1cGRhdGVEYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vc2V0IGlucHV0IGRlZmF1bHQgdmFsdWVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJbnB1dFZhbHVlcyA9IHt9O1xuICAgICAgICBmaWxsRGF0YUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgc2VsZWN0VmFsdWUuY29sdW1uTmFtZXMuZm9yRWFjaCgoY29sTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmtleSA9PT0gY29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdJbnB1dFZhbHVlc1tjb2xOYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJbnB1dFZhbHVlcyhuZXdJbnB1dFZhbHVlcyk7XG4gICAgfSwgW2ZpbGxEYXRhTGlzdCwgc2VsZWN0VmFsdWVdKTtcbiAgICBpZiAoc2VsZWN0VmFsdWUudHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgbXQ6IDQsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEZpZWxkLCB7IGlkOiBcInRhcmdldC1zZXRcIiwgbGFiZWw6IHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzBdLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIGZ1bGxXaWR0aDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiB7IGhhbmRsZUNoYW5nZVRleHRGaWVsZChlLnRhcmdldC52YWx1ZSwgc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMF0pOyB9LCB2YWx1ZTogKF9hID0gaW5wdXRWYWx1ZXNbc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMF1dKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJywgaW5wdXRSZWY6IGZpcklucHV0UmVmIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIG10OiA1LFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgc2l6ZTogJ3NtYWxsJywgb25DbGljazogaGFuZGxlQ29uZmlybSB9LCBcIkNvbmZpcm1cIikpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtdDogNCxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6IFwidGFyZ2V0LXNldC1maXJzdFwiLCBsYWJlbDogc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMF0sIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgaGFuZGxlQ2hhbmdlVGV4dEZpZWxkKGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXSk7IH0sIHZhbHVlOiAoX2IgPSBpbnB1dFZhbHVlc1tzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnLCBpbnB1dFJlZjogZmlySW5wdXRSZWYgfSksXG4gICAgICAgICAgICAgICAgXCJ8XCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6IFwidGFyZ2V0LXNldC1zZWNvbmRcIiwgbGFiZWw6IHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzFdLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIGZ1bGxXaWR0aDogdHJ1ZSwgb25DaGFuZ2U6IChlKSA9PiB7IGhhbmRsZUNoYW5nZVRleHRGaWVsZChlLnRhcmdldC52YWx1ZSwgc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMV0pOyB9LCB2YWx1ZTogKF9jID0gaW5wdXRWYWx1ZXNbc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMV1dKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJywgaW5wdXRSZWY6IHNlY0lucHV0UmVmIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIG10OiA1LFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJjb250YWluZWRcIiwgc2l6ZTogJ3NtYWxsJywgb25DbGljazogaGFuZGxlQ29uZmlybSB9LCBcIkNvbmZpcm1cIikpKSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNldFZhbHVlU2VjdGlvbjtcbi8v5b6eQ2hyb21lIFN0b3JhZ2XkuK3lj5blvpdUZW1wbGF0ZeeahOizh+aWmSgp77yM6Iul5rKS5pyJ77yM5YmH5Y+W5b6XU2VsZWN0RGVmYXVsdERhdGHnmoTos4fmlplcbi8vKOioiOeVqynpoa/npLrmiYDmnIlzZWxlY3QgTmFtZeWcqFNlbGVjdOS4rVxuLy/pgbjmk4dzZWxlY3QgTmFtZeW+jO+8jOmhr+ekuuWwjeaHieeahENvbHVtbiBOYW1lXG4vL+S+neaTmkNvbHVtbiBOYW1l6aGv56S65bCN5oeJ55qEVmFsdWVcbi8v6Ly45YWlVmFsdWXlvozvvIzmjInkuItDb25maXJt77yM5Lulc2VsZWN0RGF0YeeahOagvOW8j++8jGtleeeCunNlbGVjdCBOYW1l77yMdmFsdWXngrpWYWx1Ze+8jOWtmOWFpUNocm9tZSBTdG9yYWdl5LitXG4vL+iLpeW3sue2k+acieebuOWQjOeahGtlee+8jOWJh+abtOaWsHZhbHVlXG4vL+iLpeaykuacieebuOWQjOeahGtlee+8jOWJh+aWsOWinuS4gOethuizh+aWmVxuLy/mr4/mrKHmnInkv67mlLnmmYLvvIzpg73opoHmm7TmlrBsb2NhbFN0b3JhZ2VEYXRh5Lit55u45ZCMS2V555qEc2VsZWN0RGF0YeeahHZhbHVlXG4vL+S4puS4lOWwh2xvY2FsU3RvcmFnZURhdGHlrZjlhaVDaHJvbWUgU3RvcmFnZeS4rVxuLy9jb250ZXh0TWVudXMub25DbGlja2Vk5LqL5Lu26Ke455m85pmC77yM5L2/55SoZ2V0U3RvcmFnZSgp5Y+W5b6X6LOH5paZ77yM5Lim5bCH6LOH5paZ5aGr5YWl5bCN5oeJ55qE5qyE5L2N5LitXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3dpdGNoJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcbmNvbnN0IElPU1N3aXRjaCA9IHN0eWxlZCgocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXRjaCwgT2JqZWN0LmFzc2lnbih7IGZvY3VzVmlzaWJsZUNsYXNzTmFtZTogXCIuTXVpLWZvY3VzVmlzaWJsZVwiLCBkaXNhYmxlUmlwcGxlOiB0cnVlIH0sIHByb3BzKSkpKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHdpZHRoOiA0MixcbiAgICBoZWlnaHQ6IDI2LFxuICAgIHBhZGRpbmc6IDAsXG4gICAgJyYgLk11aVN3aXRjaC1zd2l0Y2hCYXNlJzoge1xuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzMwMG1zJyxcbiAgICAgICAgJyYuTXVpLWNoZWNrZWQnOiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE2cHgpJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAnJiArIC5NdWlTd2l0Y2gtdHJhY2snOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJyA/ICcjMkVDQTQ1JyA6ICcjNjVDNDY2JyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJi5NdWktZGlzYWJsZWQgKyAuTXVpU3dpdGNoLXRyYWNrJzoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICcmLk11aS1mb2N1c1Zpc2libGUgLk11aVN3aXRjaC10aHVtYic6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzY2Y0ZCcsXG4gICAgICAgICAgICBib3JkZXI6ICc2cHggc29saWQgI2ZmZicsXG4gICAgICAgIH0sXG4gICAgICAgICcmLk11aS1kaXNhYmxlZCAuTXVpU3dpdGNoLXRodW1iJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs2MDBdLFxuICAgICAgICB9LFxuICAgICAgICAnJi5NdWktZGlzYWJsZWQgKyAuTXVpU3dpdGNoLXRyYWNrJzoge1xuICAgICAgICAgICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnID8gMC43IDogMC4zLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgJyYgLk11aVN3aXRjaC10aHVtYic6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHdpZHRoOiAyMixcbiAgICAgICAgaGVpZ2h0OiAyMixcbiAgICB9LFxuICAgICcmIC5NdWlTd2l0Y2gtdHJhY2snOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogMjYgLyAyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0JyA/ICcjRTlFOUVBJyA6ICcjMzkzOTNEJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZC1jb2xvciddLCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICB9KSxcbiAgICB9LFxufSkpO1xuZXhwb3J0IGRlZmF1bHQgSU9TU3dpdGNoO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElPU1N3aXRjaCBmcm9tICcuL1N3aXRjaCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuY29uc3QgU3dpdGNoQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBoaWRkZW5Cb3JkZXIsIGxhYmVsLCBlbmFibGVTdGF0ZSwgaGFuZGxlRW5hYmxlQ2hhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCBzd2l0Y2hDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBoYW5kbGVFbmFibGVDaGFuZ2UobGFiZWwsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEdyaWQsIHsgaXRlbTogdHJ1ZSwgeHM6IDEyIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogaGlkZGVuQm9yZGVyID8gMCA6IDAuNSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ2QwZDBkMCcsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sTGFiZWwsIHsgY29udHJvbDogUmVhY3QuY3JlYXRlRWxlbWVudChJT1NTd2l0Y2gsIHsgc3g6IHsgbTogMSB9LCBvbkNoYW5nZTogc3dpdGNoQ2hhbmdlLCBjaGVja2VkOiBlbmFibGVTdGF0ZSB9KSwgbGFiZWw6IGxhYmVsLCBsYWJlbFBsYWNlbWVudDogXCJzdGFydFwiLCBzeDoge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICAgICAgICBtbDogMCxcbiAgICAgICAgICAgICAgICB9IH0pKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRm9ybUhlbHBlclRleHQnO1xuY29uc3QgVGV4dEJveCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgaWQsIGxhYmVsLCBpbmRleCwgb25UZXh0RmllbGRDaGFuZ2UsIHZhbHVlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBpZDogYCR7aWR9LWZpbGwta2V5YCwgbGFiZWw6IGxhYmVsLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIG5hbWU6ICdjb2x1bW5OYW1lJywgdmFsdWU6IHZhbHVlLCBmdWxsV2lkdGg6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4geyBvblRleHRGaWVsZENoYW5nZShlLCBpbmRleCk7IH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUhlbHBlclRleHQsIG51bGwsIGDkvp3mk5rntoHlrprpoZ7lnovovLjlhaVJROaIlk5hbWXlsazmgKdgKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRleHRCb3g7XG4iLCJpbXBvcnQgJy4vcG9wdXAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzMwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNDAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by81MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzcwMC5jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCBCYXNpY1RhYiBmcm9tICcuL2NvbXBvbmVudHMvQmFzaWNUYWInO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhbGxSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYWxsUmVkdWNlcic7XG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShhbGxSZWR1Y2VyKTtcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFzaWNUYWIsIG51bGwpKSkpO1xufTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCBudWxsKSk7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgY29sdW1uczogW10sXG4gICAgZmlsbERhdGE6IFtdLFxufTtcbmNvbnN0IHNlbGVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUuY29sdW1ucywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiU0VMRUNUX0FERFwiOlxuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IHNlbGVjdCBpdGVtXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgXCJTRUxFQ1RfREVMRVRFXCI6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgXCJTRUxFQ1RfVVBEQVRFXCI6XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjdGlvbi5kYXRhXTtcbiAgICAgICAgY2FzZSBcIlNFVF9TRUxFQ1RfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY3Rpb24uZGF0YV07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbmNvbnN0IGZpbGxEYXRhUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZS5maWxsRGF0YSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiQUREX0ZJTExfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdO1xuICAgICAgICBjYXNlIFwiVVBEQVRFX0ZJTExfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIGNhc2UgXCJFTkFCTEVfRklMTF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKChjb2x1bW4sIGluZGV4KSA9PiBpbmRleCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICBjYXNlIFwiREVMRVRFX0ZJTExfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigoY29sdW1uLCBpbmRleCkgPT4gaW5kZXggIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgY2FzZSBcIkxPQURfQUxMX0ZJTExfREFUQVwiOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5hY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcbmNvbnN0IGFsbFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvbHVtbnM6IHNlbGVjdFJlZHVjZXIsXG4gICAgZmlsbERhdGE6IGZpbGxEYXRhUmVkdWNlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgYWxsUmVkdWNlcjtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlKGRhdGEpIHtcbiAgICBjb25zdCBzZXREYXRhID0ge1xuICAgICAgICBkYXRhLFxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChzZXREYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2RhdGEnXSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsbERhdGEgPSByZXMuZGF0YSA/IHJlcy5kYXRhIDogW107XG4gICAgICAgICAgICByZXNvbHZlKGZpbGxEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sdW1uc0RhdGEoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjb2x1bW5zOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sdW1uc0RhdGEoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2NvbHVtbnMnXSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uc0RhdGEgPSByZXMuY29sdW1ucyA/IHJlcy5jb2x1bW5zIDogW107XG4gICAgICAgICAgICByZXNvbHZlKGNvbHVtbnNEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvLyBleHBvcnQgaW50ZXJmYWNlIEFycmF5PFNpbmdsZUNvbHVtbj4ge1xuLy8gICBbaW5kZXg6IG51bWJlciBdOiBTaW5nbGVDb2x1bW47XG4vLyAgIGxlbmd0aDogbnVtYmVyO1xuLy8gfVxuLy8gZXhwb3J0IGludGVyZmFjZSBBcnJheTxQYWlyQ29sdW1uPiB7XG4vLyB9XG5leHBvcnQgY29uc3QgU2VsZWN0RGVmYXVsdERhdGEgPSBbXG4gICAge1xuICAgICAgICBzZWxlY3ROYW1lOiAnVXNlcklkJyxcbiAgICAgICAgY29sdW1uTmFtZXM6IFsnI1VzZXJJZCddLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHR5cGU6ICdzaW5nbGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3ROYW1lOiAnVXNlck5hbWUnLFxuICAgICAgICBjb2x1bW5OYW1lczogWycjVXNlck5hbWUnXSxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICB0eXBlOiAnc2luZ2xlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0TmFtZTogJ2RhdGUnLFxuICAgICAgICBjb2x1bW5OYW1lczogWydTdGFydERhdGUnLCAnRW5kRGF0ZSddLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHR5cGU6ICdwYWlyJyxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCBGaWxsRGVmYXVsdERhdGEgPSBbXG4gICAge1xuICAgICAgICByb290OiAnVXNlcklkJyxcbiAgICAgICAga2V5OiAnI1VzZXJJZCcsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcm9vdDogJ1VzZXJOYW1lJyxcbiAgICAgICAga2V5OiAnI1VzZXJOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdTT0RBRE0nLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJvb3Q6ICdkYXRlJyxcbiAgICAgICAga2V5OiAnU3RhcnREYXRlJyxcbiAgICAgICAgdmFsdWU6ICcyMDIwLzAxLzAxJyxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICByb290OiAnZGF0ZScsXG4gICAgICAgIGtleTogJ0VuZERhdGUnLFxuICAgICAgICB2YWx1ZTogJzIwMjAvMDEvMDEnLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfY2hyb21lX2V4dGVuc2lvblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyZWFjdF9jaHJvbWVfZXh0ZW5zaW9uXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfY3NzVy02NTY1MzVcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX211aV9tYXRlcmlhbF9Cb3hfQm94X2pzLW5vZGVfbW9kdWxlc19tdWlfbWF0ZXJpYWxfQnV0dG9uX0J1dHRvbl9qcy1ub2RlXy1lODM1NGVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcG9wdXAvcG9wdXAudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=