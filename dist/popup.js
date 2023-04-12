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
const selectUpdate = (index, key, value) => {
    return {
        type: 'SELECT_UPDATE',
        index,
        key,
        value,
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

/***/ "./src/popup/components/SetValueSection.tsx":
/*!**************************************************!*\
  !*** ./src/popup/components/SetValueSection.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
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

/***/ "./src/popup/components/TabPanel.tsx":
/*!*******************************************!*\
  !*** ./src/popup/components/TabPanel.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _SetValueSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetValueSection */ "./src/popup/components/SetValueSection.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/template */ "./src/utils/template.ts");
/* harmony import */ var _action_selectAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././action/selectAction */ "./src/popup/action/selectAction.ts");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _action_fillDataAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././action/fillDataAction */ "./src/popup/action/fillDataAction.ts");














;
const FormSection = () => {
    var _a;
    const currentSelectData = (_a = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state) => state.columns)) !== null && _a !== void 0 ? _a : _utils_template__WEBPACK_IMPORTED_MODULE_3__.SelectDefaultData;
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], { sx: { height: 50, width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "form1" }, "target"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__["default"], { labelId: "target-selected-label", id: "target-selected", value: currentColumn.selectName, label: "columns", onChange: (e) => { handleChangeColName(e.target.value); } }, currentSelectData.map(item => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], { key: item.selectName, value: item.selectName }, item.selectName))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SetValueSection__WEBPACK_IMPORTED_MODULE_1__["default"], { selectValue: currentColumn }))));
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
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    //first render then run useEffect and get selectData from chrome.storage
    //if selectData is null, set default value from SelectDefaultData
    //get selectData from chrome.storage and dispatch(setSelectData) to redux
    //if not first render not do this useEffect
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.getColumnsData)().then((res) => {
            //check res has data
            //if not set default value to redux
            if (res.length <= 0) {
                console.log("default", _utils_template__WEBPACK_IMPORTED_MODULE_3__.SelectDefaultData);
                dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_4__.setSelectData)(_utils_template__WEBPACK_IMPORTED_MODULE_3__.SelectDefaultData));
            }
            else {
                console.log("ChromeStorage DATA", res);
                dispatch((0,_action_selectAction__WEBPACK_IMPORTED_MODULE_4__.setSelectData)(res));
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)().then((res) => {
            const fillData = res !== null && res !== void 0 ? res : _utils_template__WEBPACK_IMPORTED_MODULE_3__.FillDefaultData;
            console.log('first load fill data', fillData);
            dispatch((0,_action_fillDataAction__WEBPACK_IMPORTED_MODULE_6__.loadAllFillData)(fillData));
        });
    }, []);
    const handleTabsClick = (index) => {
        setCurrentPage(index);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], { sx: {
                marginBottom: 3
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"], { value: currentPage, "aria-label": "tabs", variant: "scrollable", scrollButtons: false, sx: {
                    width: '100%',
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Value", id: "tab1", "aria-controls": "tabs", onClick: () => { handleTabsClick(0); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Select", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(1); } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { px: 0.5, width: 2, fontSize: 2 }, label: "Enable", id: "tab2", "aria-controls": "tabs", onClick: () => { handleTabsClick(2); } }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 0 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], { sx: {
                    marginBottom: 3
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FormSection, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 1 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], null, "item1")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: currentPage, index: 2 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Enable"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicTab);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource/roboto/300.css */ "./node_modules/@fontsource/roboto/300.css");
/* harmony import */ var _fontsource_roboto_400_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fontsource/roboto/400.css */ "./node_modules/@fontsource/roboto/400.css");
/* harmony import */ var _fontsource_roboto_500_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/roboto/500.css */ "./node_modules/@fontsource/roboto/500.css");
/* harmony import */ var _fontsource_roboto_700_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/roboto/700.css */ "./node_modules/@fontsource/roboto/700.css");
/* harmony import */ var _components_TabPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TabPanel */ "./src/popup/components/TabPanel.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_allReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/allReducer */ "./src/popup/reducers/allReducer.ts");











let store = (0,redux__WEBPACK_IMPORTED_MODULE_10__.createStore)(_reducers_allReducer__WEBPACK_IMPORTED_MODULE_9__["default"]);
const App = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, { store: store },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TabPanel__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};
const container = document.createElement('div');
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));


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
            return state;
        case "SELECT_ENABLE":
            return state;
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
            resolve(res.data);
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
            console.log('res:', columnsData);
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
        key: '#UserId',
        value: '1',
    },
    {
        key: '#UserName',
        value: 'SODADM',
    },
    {
        key: 'StartDate',
        value: '2020/01/01',
    },
    {
        key: 'EndDate',
        value: '2020/01/01',
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-656535","vendors-node_modules_mui_material_Box_Box_js-node_modules_mui_material_Button_Button_js-node_-bde92d"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLDREQUFVO0FBQ3ZCLFlBQVksMERBQW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFlO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ25CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL3BvcHVwLmNzcz9mMmM2Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvYWN0aW9uL2ZpbGxEYXRhQWN0aW9uLnRzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvYWN0aW9uL3NlbGVjdEFjdGlvbi50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvU2V0VmFsdWVTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3BvcHVwL2NvbXBvbmVudHMvVGFiUGFuZWwudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcG9wdXAudHN4Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vLi9zcmMvcG9wdXAvcmVkdWNlcnMvYWxsUmVkdWNlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL3V0aWxzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy91dGlscy90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9yZWFjdC1jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVhY3QtY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JlYWN0LWNocm9tZS1leHRlbnNpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjb25zdCBsb2FkQWxsRmlsbERhdGEgPSAocGF5bG9hZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdMT0FEX0FMTF9GSUxMX0RBVEEnLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUZpbGxEYXRhID0gKHBheWxvYWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFX0ZJTExfREFUQScsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0QWRkID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRUxFQ1RfQUREJyxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3REZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VMRUNUX0RFTEVURScsXG4gICAgICAgIGluZGV4LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdFVwZGF0ZSA9IChpbmRleCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdTRUxFQ1RfVVBEQVRFJyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2VsZWN0RW5hYmxlID0gKGluZGV4LCBlbmFibGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VMRUNUX0VOQUJMRScsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBlbmFibGUsXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0RGF0YSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NFVF9TRUxFQ1RfREFUQScsXG4gICAgICAgIGRhdGEsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IHsgc2V0U3RvcmFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlRmlsbERhdGEgfSBmcm9tICcuLi9hY3Rpb24vZmlsbERhdGFBY3Rpb24nO1xuY29uc3QgU2V0VmFsdWVTZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgeyBzZWxlY3RWYWx1ZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgZmlySW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2VjSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgW2lucHV0VmFsdWVzLCBzZXRJbnB1dFZhbHVlc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgZmlsbERhdGFMaXN0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5maWxsRGF0YSk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVRleHRGaWVsZCA9ICh2YWx1ZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdJbnB1dFZhbHVlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRWYWx1ZXMpLCB7IFt0YXJnZXRdOiB2YWx1ZSB9KTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZXMobmV3SW5wdXRWYWx1ZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICAgICAgLy9jaGVjayBpbnB1dFZhbHVlcyBoYXMgdmFsdWUgLGlmIG5vdCwgcmV0dXJuICxpZiB5ZXMsIHNldFN0b3JhZ2VcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkNvdW50ID0gc2VsZWN0VmFsdWUudHlwZSA9PT0gJ3NpbmdsZScgPyAxIDogMjtcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IE9iamVjdC52YWx1ZXMoaW5wdXRWYWx1ZXMpO1xuICAgICAgICBpZiAoY3VycmVudENvbHVtbi5sZW5ndGggPCB2YWxpZGF0aW9uQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpdGVtIGluIGlucHV0VmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS50cmltKCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbmZpcm0nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YSA9IGZpbGxEYXRhTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzLm1hcCgoY29sTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmtleSA9PT0gY29sTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gaW5wdXRWYWx1ZXNbY29sTmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlRGF0YVwiLCB1cGRhdGVEYXRhKTtcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0U3RvcmFnZSh1cGRhdGVEYXRhKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUZpbGxEYXRhKHVwZGF0ZURhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy9zZXQgaW5wdXQgZGVmYXVsdCB2YWx1ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0lucHV0VmFsdWVzID0ge307XG4gICAgICAgIGZpbGxEYXRhTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lcy5mb3JFYWNoKChjb2xOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2V5ID09PSBjb2xOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0lucHV0VmFsdWVzW2NvbE5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElucHV0VmFsdWVzKG5ld0lucHV0VmFsdWVzKTtcbiAgICB9LCBbZmlsbERhdGFMaXN0LCBzZWxlY3RWYWx1ZV0pO1xuICAgIGlmIChzZWxlY3RWYWx1ZS50eXBlID09PSAnc2luZ2xlJykge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtdDogNCxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0RmllbGQsIHsgaWQ6IFwidGFyZ2V0LXNldFwiLCBsYWJlbDogc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMF0sIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgaGFuZGxlQ2hhbmdlVGV4dEZpZWxkKGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXSk7IH0sIHZhbHVlOiAoX2EgPSBpbnB1dFZhbHVlc1tzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCBpbnB1dFJlZjogZmlySW5wdXRSZWYgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgbXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBzaXplOiAnc21hbGwnLCBvbkNsaWNrOiBoYW5kbGVDb25maXJtIH0sIFwiQ29uZmlybVwiKSkpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIG10OiA0LFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBpZDogXCJ0YXJnZXQtc2V0LWZpcnN0XCIsIGxhYmVsOiBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1swXSwgdmFyaWFudDogXCJvdXRsaW5lZFwiLCBmdWxsV2lkdGg6IHRydWUsIG9uQ2hhbmdlOiAoZSkgPT4geyBoYW5kbGVDaGFuZ2VUZXh0RmllbGQoZS50YXJnZXQudmFsdWUsIHNlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzBdKTsgfSwgdmFsdWU6IChfYiA9IGlucHV0VmFsdWVzW3NlbGVjdFZhbHVlLmNvbHVtbk5hbWVzWzBdXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIGlucHV0UmVmOiBmaXJJbnB1dFJlZiB9KSxcbiAgICAgICAgICAgICAgICBcInxcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRGaWVsZCwgeyBpZDogXCJ0YXJnZXQtc2V0LXNlY29uZFwiLCBsYWJlbDogc2VsZWN0VmFsdWUuY29sdW1uTmFtZXNbMV0sIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgZnVsbFdpZHRoOiB0cnVlLCBvbkNoYW5nZTogKGUpID0+IHsgaGFuZGxlQ2hhbmdlVGV4dEZpZWxkKGUudGFyZ2V0LnZhbHVlLCBzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1sxXSk7IH0sIHZhbHVlOiAoX2MgPSBpbnB1dFZhbHVlc1tzZWxlY3RWYWx1ZS5jb2x1bW5OYW1lc1sxXV0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnLCBpbnB1dFJlZjogc2VjSW5wdXRSZWYgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3g6IHtcbiAgICAgICAgICAgICAgICAgICAgbXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBzaXplOiAnc21hbGwnLCBvbkNsaWNrOiBoYW5kbGVDb25maXJtIH0sIFwiQ29uZmlybVwiKSkpKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU2V0VmFsdWVTZWN0aW9uO1xuLy/lvp5DaHJvbWUgU3RvcmFnZeS4reWPluW+l1RlbXBsYXRl55qE6LOH5paZKCnvvIzoi6XmspLmnInvvIzliYflj5blvpdTZWxlY3REZWZhdWx0RGF0YeeahOizh+aWmVxuLy8o6KiI55WrKemhr+ekuuaJgOaciXNlbGVjdCBOYW1l5ZyoU2VsZWN05LitXG4vL+mBuOaTh3NlbGVjdCBOYW1l5b6M77yM6aGv56S65bCN5oeJ55qEQ29sdW1uIE5hbWVcbi8v5L6d5pOaQ29sdW1uIE5hbWXpoa/npLrlsI3mh4nnmoRWYWx1ZVxuLy/ovLjlhaVWYWx1ZeW+jO+8jOaMieS4i0NvbmZpcm3vvIzku6VzZWxlY3REYXRh55qE5qC85byP77yMa2V554K6c2VsZWN0IE5hbWXvvIx2YWx1ZeeCulZhbHVl77yM5a2Y5YWlQ2hyb21lIFN0b3JhZ2XkuK1cbi8v6Iul5bey57aT5pyJ55u45ZCM55qEa2V577yM5YmH5pu05pawdmFsdWVcbi8v6Iul5rKS5pyJ55u45ZCM55qEa2V577yM5YmH5paw5aKe5LiA562G6LOH5paZXG4vL+avj+asoeacieS/ruaUueaZgu+8jOmDveimgeabtOaWsGxvY2FsU3RvcmFnZURhdGHkuK3nm7jlkIxLZXnnmoRzZWxlY3REYXRh55qEdmFsdWVcbi8v5Lim5LiU5bCHbG9jYWxTdG9yYWdlRGF0YeWtmOWFpUNocm9tZSBTdG9yYWdl5LitXG4vL2NvbnRleHRNZW51cy5vbkNsaWNrZWTkuovku7bop7jnmbzmmYLvvIzkvb/nlKhnZXRTdG9yYWdlKCnlj5blvpfos4fmlpnvvIzkuKblsIfos4fmlpnloavlhaXlsI3mh4nnmoTmrITkvY3kuK1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XG5pbXBvcnQgU2V0VmFsdWVTZWN0aW9uIGZyb20gJy4vU2V0VmFsdWVTZWN0aW9uJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFNlbGVjdERlZmF1bHREYXRhLCBGaWxsRGVmYXVsdERhdGEgfSBmcm9tICcuLi8uLi91dGlscy90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBzZXRTZWxlY3REYXRhIH0gZnJvbSAnLi4vLi9hY3Rpb24vc2VsZWN0QWN0aW9uJztcbmltcG9ydCB7IGdldENvbHVtbnNEYXRhLCBnZXRTdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQgeyBsb2FkQWxsRmlsbERhdGEgfSBmcm9tICcuLi8uL2FjdGlvbi9maWxsRGF0YUFjdGlvbic7XG47XG5jb25zdCBGb3JtU2VjdGlvbiA9ICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgY3VycmVudFNlbGVjdERhdGEgPSAoX2EgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbHVtbnMpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBTZWxlY3REZWZhdWx0RGF0YTtcbiAgICBjb25zdCBbY3VycmVudENvbHVtbiwgc2V0Q3VycmVudENvbHVtbl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHNlbGVjdE5hbWU6ICcnLFxuICAgICAgICBjb2x1bW5OYW1lczogW10sXG4gICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbE5hbWUgPSAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRTZWxlY3REYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3ROYW1lID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4oaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWxlY3REYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldEN1cnJlbnRDb2x1bW4oY3VycmVudFNlbGVjdERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRTZWxlY3REYXRhXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCB7IHN4OiB7IGhlaWdodDogNTAsIHdpZHRoOiAnMTAwJScgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0TGFiZWwsIHsgaWQ6IFwiZm9ybTFcIiB9LCBcInRhcmdldFwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgbGFiZWxJZDogXCJ0YXJnZXQtc2VsZWN0ZWQtbGFiZWxcIiwgaWQ6IFwidGFyZ2V0LXNlbGVjdGVkXCIsIHZhbHVlOiBjdXJyZW50Q29sdW1uLnNlbGVjdE5hbWUsIGxhYmVsOiBcImNvbHVtbnNcIiwgb25DaGFuZ2U6IChlKSA9PiB7IGhhbmRsZUNoYW5nZUNvbE5hbWUoZS50YXJnZXQudmFsdWUpOyB9IH0sIGN1cnJlbnRTZWxlY3REYXRhLm1hcChpdGVtID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIHsga2V5OiBpdGVtLnNlbGVjdE5hbWUsIHZhbHVlOiBpdGVtLnNlbGVjdE5hbWUgfSwgaXRlbS5zZWxlY3ROYW1lKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2V0VmFsdWVTZWN0aW9uLCB7IHNlbGVjdFZhbHVlOiBjdXJyZW50Q29sdW1uIH0pKSkpO1xufTtcbi8vRnVuY3Rpb24gQ29tcG9uZW50IFxuY29uc3QgVGFiUGFuZWwgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXggfSA9IHByb3BzO1xuICAgIGlmICh2YWx1ZSAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIGNoaWxkcmVuKSkpO1xufTtcbi8vRnVuY3Rpb24gQ29tcG9uZW50IOazm+Wei+Wumue+qSBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQPXt9PlxuLy8gY29uc3QgVGFiUGFuZWw6IFJlYWN0LkZDPFRhYlBhbmVsUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4vLyAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzXG4vLyAgIHJldHVybihcbi8vICAgICA8c2VjdGlvbiBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH0+XG4vLyAgICAgICB7Y2hpbGRyZW59XG4vLyAgICAgICA8TXVpRmlsbGVkSW5wdXQvPlxuLy8gICAgIDwvc2VjdGlvbj5cbi8vICAgKVxuLy8gfVxuY29uc3QgQmFzaWNUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgLy9maXJzdCByZW5kZXIgdGhlbiBydW4gdXNlRWZmZWN0IGFuZCBnZXQgc2VsZWN0RGF0YSBmcm9tIGNocm9tZS5zdG9yYWdlXG4gICAgLy9pZiBzZWxlY3REYXRhIGlzIG51bGwsIHNldCBkZWZhdWx0IHZhbHVlIGZyb20gU2VsZWN0RGVmYXVsdERhdGFcbiAgICAvL2dldCBzZWxlY3REYXRhIGZyb20gY2hyb21lLnN0b3JhZ2UgYW5kIGRpc3BhdGNoKHNldFNlbGVjdERhdGEpIHRvIHJlZHV4XG4gICAgLy9pZiBub3QgZmlyc3QgcmVuZGVyIG5vdCBkbyB0aGlzIHVzZUVmZmVjdFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldENvbHVtbnNEYXRhKCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvL2NoZWNrIHJlcyBoYXMgZGF0YVxuICAgICAgICAgICAgLy9pZiBub3Qgc2V0IGRlZmF1bHQgdmFsdWUgdG8gcmVkdXhcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHRcIiwgU2VsZWN0RGVmYXVsdERhdGEpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlbGVjdERhdGEoU2VsZWN0RGVmYXVsdERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hyb21lU3RvcmFnZSBEQVRBXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0RGF0YShyZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFN0b3JhZ2UoKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxEYXRhID0gcmVzICE9PSBudWxsICYmIHJlcyAhPT0gdm9pZCAwID8gcmVzIDogRmlsbERlZmF1bHREYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpcnN0IGxvYWQgZmlsbCBkYXRhJywgZmlsbERhdGEpO1xuICAgICAgICAgICAgZGlzcGF0Y2gobG9hZEFsbEZpbGxEYXRhKGZpbGxEYXRhKSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJzQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoaW5kZXgpO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogM1xuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCB7IHZhbHVlOiBjdXJyZW50UGFnZSwgXCJhcmlhLWxhYmVsXCI6IFwidGFic1wiLCB2YXJpYW50OiBcInNjcm9sbGFibGVcIiwgc2Nyb2xsQnV0dG9uczogZmFsc2UsIHN4OiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7IHN4OiB7IHB4OiAwLjUsIHdpZHRoOiAyLCBmb250U2l6ZTogMiB9LCBsYWJlbDogXCJWYWx1ZVwiLCBpZDogXCJ0YWIxXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMCk7IH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgc3g6IHsgcHg6IDAuNSwgd2lkdGg6IDIsIGZvbnRTaXplOiAyIH0sIGxhYmVsOiBcIlNlbGVjdFwiLCBpZDogXCJ0YWIyXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMSk7IH0gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgc3g6IHsgcHg6IDAuNSwgd2lkdGg6IDIsIGZvbnRTaXplOiAyIH0sIGxhYmVsOiBcIkVuYWJsZVwiLCBpZDogXCJ0YWIyXCIsIFwiYXJpYS1jb250cm9sc1wiOiBcInRhYnNcIiwgb25DbGljazogKCkgPT4geyBoYW5kbGVUYWJzQ2xpY2soMik7IH0gfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbCwgeyB2YWx1ZTogY3VycmVudFBhZ2UsIGluZGV4OiAwIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzeDoge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDNcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtU2VjdGlvbiwgbnVsbCkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJQYW5lbCwgeyB2YWx1ZTogY3VycmVudFBhZ2UsIGluZGV4OiAxIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCwgXCJpdGVtMVwiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiUGFuZWwsIHsgdmFsdWU6IGN1cnJlbnRQYWdlLCBpbmRleDogMiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsIFwiRW5hYmxlXCIpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJhc2ljVGFiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCAnLi9wb3B1cC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vMzAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3JvYm90by80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2Uvcm9ib3RvLzUwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9yb2JvdG8vNzAwLmNzcyc7XG5pbXBvcnQgQmFzaWNUYWIgZnJvbSAnLi9jb21wb25lbnRzL1RhYlBhbmVsJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYWxsUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2FsbFJlZHVjZXInO1xubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcik7XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHsgc3RvcmU6IHN0b3JlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhc2ljVGFiLCBudWxsKSkpKTtcbn07XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCkpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGNvbHVtbnM6IFtdLFxuICAgIGZpbGxEYXRhOiBbXSxcbn07XG5jb25zdCBzZWxlY3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmNvbHVtbnMsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlNFTEVDVF9BRERcIjpcbiAgICAgICAgICAgIC8vIGFkZCBhIG5ldyBzZWxlY3QgaXRlbVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VMRUNUX0RFTEVURVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VMRUNUX1VQREFURVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VMRUNUX0VOQUJMRVwiOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIFwiU0VUX1NFTEVDVF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjdGlvbi5kYXRhXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuY29uc3QgZmlsbERhdGFSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLmZpbGxEYXRhLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJBRERfRklMTF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIGNhc2UgXCJVUERBVEVfRklMTF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjdGlvbi5wYXlsb2FkXTtcbiAgICAgICAgY2FzZSBcIkVOQUJMRV9GSUxMX0RBVEFcIjpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKGNvbHVtbiwgaW5kZXgpID0+IGluZGV4ICE9PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICAgIGNhc2UgXCJERUxFVEVfRklMTF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKChjb2x1bW4sIGluZGV4KSA9PiBpbmRleCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICBjYXNlIFwiTE9BRF9BTExfRklMTF9EQVRBXCI6XG4gICAgICAgICAgICByZXR1cm4gWy4uLmFjdGlvbi5wYXlsb2FkXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuY29uc3QgYWxsUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY29sdW1uczogc2VsZWN0UmVkdWNlcixcbiAgICBmaWxsRGF0YTogZmlsbERhdGFSZWR1Y2VyLFxufSk7XG5leHBvcnQgZGVmYXVsdCBhbGxSZWR1Y2VyO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFN0b3JhZ2UoZGF0YSkge1xuICAgIGNvbnN0IHNldERhdGEgPSB7XG4gICAgICAgIGRhdGEsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHNldERhdGEsICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnZGF0YSddLCAocmVzKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sdW1uc0RhdGEoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBjb2x1bW5zOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sdW1uc0RhdGEoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2NvbHVtbnMnXSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29sdW1uc0RhdGEgPSByZXMuY29sdW1ucyA/IHJlcy5jb2x1bW5zIDogW107XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzOicsIGNvbHVtbnNEYXRhKTtcbiAgICAgICAgICAgIHJlc29sdmUoY29sdW1uc0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4cG9ydCBpbnRlcmZhY2UgQXJyYXk8U2luZ2xlQ29sdW1uPiB7XG4vLyAgIFtpbmRleDogbnVtYmVyIF06IFNpbmdsZUNvbHVtbjtcbi8vICAgbGVuZ3RoOiBudW1iZXI7XG4vLyB9XG4vLyBleHBvcnQgaW50ZXJmYWNlIEFycmF5PFBhaXJDb2x1bW4+IHtcbi8vIH1cbmV4cG9ydCBjb25zdCBTZWxlY3REZWZhdWx0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIHNlbGVjdE5hbWU6ICdVc2VySWQnLFxuICAgICAgICBjb2x1bW5OYW1lczogWycjVXNlcklkJ10sXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3NpbmdsZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdE5hbWU6ICdVc2VyTmFtZScsXG4gICAgICAgIGNvbHVtbk5hbWVzOiBbJyNVc2VyTmFtZSddLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHR5cGU6ICdzaW5nbGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3ROYW1lOiAnZGF0ZScsXG4gICAgICAgIGNvbHVtbk5hbWVzOiBbJ1N0YXJ0RGF0ZScsICdFbmREYXRlJ10sXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogJ3BhaXInLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IEZpbGxEZWZhdWx0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIGtleTogJyNVc2VySWQnLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICcjVXNlck5hbWUnLFxuICAgICAgICB2YWx1ZTogJ1NPREFETScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ1N0YXJ0RGF0ZScsXG4gICAgICAgIHZhbHVlOiAnMjAyMC8wMS8wMScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ0VuZERhdGUnLFxuICAgICAgICB2YWx1ZTogJzIwMjAvMDEvMDEnLFxuICAgIH0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3JlYWN0X2Nocm9tZV9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rcmVhY3RfY2hyb21lX2V4dGVuc2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1ctNjU2NTM1XCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tdWlfbWF0ZXJpYWxfQm94X0JveF9qcy1ub2RlX21vZHVsZXNfbXVpX21hdGVyaWFsX0J1dHRvbl9CdXR0b25fanMtbm9kZV8tYmRlOTJkXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BvcHVwL3BvcHVwLnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9