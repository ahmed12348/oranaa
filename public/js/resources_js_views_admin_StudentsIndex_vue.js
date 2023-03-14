"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_StudentsIndex_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      students: {},
      levels: [],
      courses: [],
      paginate: 10,
      search: "",
      classes: {},
      selectedLevel: "",
      selectedSection: "",
      sections: {},
      checked: [],
      selectPage: false,
      selectAll: false,
      sort_direction: "desc",
      sort_field: "created_at",
      url: "",
      getStudentsUrl: "",
      getStudentsUrlWithoutPaginate: ""
    };
  },
  watch: {
    paginate: function paginate(value) {
      this.getStudents();
    },
    search: function search(value) {
      this.getStudents();
    },
    selectedLevel: function selectedLevel(value) {
      var _this = this;
      this.selectedSection = "";
      axios.get("/students?level=" + this.selectedLevel).then(function (response) {
        _this.students = response.data.data;
      });
      // this.getStudents();
    },

    selectedSection: function selectedSection(value) {
      this.getStudents();
    },
    selectPage: function selectPage(value) {
      var _this2 = this;
      this.checked = [];
      if (value) {
        this.students.data.forEach(function (student) {
          _this2.checked.push(student.id);
        });
      } else {
        this.checked = [];
        this.selectAll = false;
      }
    },
    checked: function checked(value) {
      this.url = "/api/students/export/" + this.checked;
    }
  },
  methods: {
    selectAllRecords: function selectAllRecords() {
      var _this3 = this;
      axios.get(this.getStudentsUrlWithoutPaginate).then(function (response) {
        // console.log(response.data);
        _this3.checked = [];
        response.data.data.forEach(function (student) {
          _this3.checked.push(student.id);
        });
        _this3.selectAll = true;
      });
    },
    change_sort: function change_sort(field) {
      if (this.sort_field == field) {
        this.sort_direction = this.sort_direction == "asc" ? "desc" : "asc";
      } else {
        this.sort_field = field;
      }
      this.getStudents();
    },
    deleteSingleRecord: function deleteSingleRecord(student_id) {
      var _this4 = this;
      axios["delete"]("/api/student/delete/" + student_id).then(function (response) {
        _this4.checked = _this4.checked.filter(function (id) {
          return id != student_id;
        });
        _this4.$toast.success("Student Deleted Successfully");
        _this4.getStudents();
      });
    },
    deleteRecords: function deleteRecords() {
      var _this5 = this;
      axios["delete"]("/api/students/massDestroy/" + this.checked).then(function (response) {
        if (response.status == 204) {
          _this5.$toast.success("Selected Students were Deleted Successfully");
          _this5.checked = [];
          _this5.getStudents();
        }
      });
    },
    isChecked: function isChecked(student_id) {
      return this.checked.includes(student_id);
    },
    getStudents: function getStudents() {
      var _this6 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.getStudentsUrlWithoutPaginate = "/StudentsIndex?";
      // "q=" +
      // this.search +
      // "&sort_direction=" +
      // this.sort_direction +
      // "&sort_field=" +
      // this.sort_field;

      this.getStudentsUrl = this.getStudentsUrlWithoutPaginate.concat("&paginate=" + this.paginate + "&page=" + page);
      axios.get(this.getStudentsUrl).then(function (response) {
        _this6.students = response.data;
      });
    }
  },
  mounted: function mounted() {
    var _this7 = this;
    axios.get("/levels").then(function (response) {
      _this7.levels = response.data.data;
    });
    this.getStudents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-content-center mb-2"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", [_c("div", {
    staticClass: "d-flex align-items-center ml-4"
  }, [_c("label", {
    staticClass: "text-nowrap mr-2 mb-0",
    attrs: {
      "for": "paginate"
    }
  }, [_vm._v("Per Page")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paginate,
      expression: "paginate"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.paginate = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: "10"
    }
  }, [_vm._v("10")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "20"
    }
  }, [_vm._v("20")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "30"
    }
  }, [_vm._v("30")])])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center ml-4"
  }, [_c("label", {
    staticClass: "text-nowrap mr-2 mb-0",
    attrs: {
      "for": "paginate"
    }
  }, [_vm._v("FilterBy Levels")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedLevel,
      expression: "selectedLevel"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedLevel = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("All Class")]), _vm._v(" "), _vm._l(_vm.levels, function (item) {
    return _c("option", {
      key: item.id,
      domProps: {
        value: item.id
      }
    }, [_vm._v("\n                                " + _vm._s(item.name) + "\n                            ")]);
  })], 2)])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "dropdown ml-4"
  }, [_vm.checked.length > 0 ? _c("button", {
    staticClass: "btn btn-secondary dropdown-toggle",
    attrs: {
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                            With Checked (" + _vm._s(_vm.checked.length) + ")\n                        ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown-menu"
  }, [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#",
      onclick: "confirm('Are you sure you wanna delete this Record?') || event.stopImmediatePropagation()",
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteRecords.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                                Delete\n                            ")]), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: _vm.url,
      type: "button"
    }
  }, [_vm._v("\n                                Export\n                            ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.search,
      expression: "search",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "search",
      placeholder: "Search by name,email,phone,or address..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      change: function change($event) {
        _vm.search = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm.selectPage ? _c("div", {
    staticClass: "col-md-10 mb-2"
  }, [_vm.selectAll || _vm.students.meta.total == _vm.checked.length ? _c("div", [_vm._v("\n                You are currently selecting all\n                "), _c("strong", [_vm._v(_vm._s(_vm.checked.length))]), _vm._v(" items.\n            ")]) : _c("div", [_vm._v("\n                You have selected "), _c("strong", [_vm._v(_vm._s(_vm.checked.length))]), _vm._v(" items,\n                Do you want to Select All\n                "), _c("strong", [_vm._v(_vm._s(_vm.students.meta.total))]), _vm._v("?\n                "), _c("a", {
    staticClass: "ml-2",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.selectAllRecords.apply(null, arguments);
      }
    }
  }, [_vm._v("Select All")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body table-responsive p-0"
  }, [_c("table", {
    staticClass: "table table-hover"
  }, [_c("tbody", [_c("tr", [_c("th", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectPage,
      expression: "selectPage"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.selectPage) ? _vm._i(_vm.selectPage, null) > -1 : _vm.selectPage
    },
    on: {
      change: function change($event) {
        var $$a = _vm.selectPage,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.selectPage = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.selectPage = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.selectPage = $$c;
        }
      }
    }
  })]), _vm._v(" "), _c("th", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.change_sort("name");
      }
    }
  }, [_vm._v("Student's Name")]), _vm._v(" "), _vm.sort_direction == "desc" && _vm.sort_field == "name" ? _c("span", [_vm._v("↑")]) : _vm._e(), _vm._v(" "), _vm.sort_direction == "asc" && _vm.sort_field == "name" ? _c("span", [_vm._v("↓")]) : _vm._e()]), _vm._v(" "), _c("th", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.change_sort("email");
      }
    }
  }, [_vm._v("Email")]), _vm._v(" "), _vm.sort_direction == "desc" && _vm.sort_field == "email" ? _c("span", [_vm._v("↑")]) : _vm._e(), _vm._v(" "), _vm.sort_direction == "asc" && _vm.sort_field == "email" ? _c("span", [_vm._v("↓")]) : _vm._e()]), _vm._v(" "), _c("th", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.change_sort("address");
      }
    }
  }, [_vm._v("Address")]), _vm._v(" "), _vm.sort_direction == "desc" && _vm.sort_field == "address" ? _c("span", [_vm._v("↑")]) : _vm._e(), _vm._v(" "), _vm.sort_direction == "asc" && _vm.sort_field == "address" ? _c("span", [_vm._v("↓")]) : _vm._e()]), _vm._v(" "), _c("th", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.change_sort("phone_number");
      }
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _vm.sort_direction == "desc" && _vm.sort_field == "phone_number" ? _c("span", [_vm._v("↑")]) : _vm._e(), _vm._v(" "), _vm.sort_direction == "asc" && _vm.sort_field == "phone_number" ? _c("span", [_vm._v("↓")]) : _vm._e()]), _vm._v(" "), _c("th", [_c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.change_sort("created_at");
      }
    }
  }, [_vm._v("Created At")]), _vm._v(" "), _vm.sort_direction == "desc" && _vm.sort_field == "created_at" ? _c("span", [_vm._v("↑")]) : _vm._e(), _vm._v(" "), _vm.sort_direction == "asc" && _vm.sort_field == "created_at" ? _c("span", [_vm._v("↓")]) : _vm._e()]), _vm._v(" "), _c("th", [_vm._v("Class")]), _vm._v(" "), _c("th", [_vm._v("Section")]), _vm._v(" "), _c("th", [_vm._v("Action")])]), _vm._v(" "), _vm._l(_vm.students.data, function (student) {
    return _c("tr", {
      key: student.id,
      "class": _vm.isChecked(student.id) ? "table-primary" : ""
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.checked,
        expression: "checked"
      }],
      attrs: {
        type: "checkbox"
      },
      domProps: {
        value: student.id,
        checked: Array.isArray(_vm.checked) ? _vm._i(_vm.checked, student.id) > -1 : _vm.checked
      },
      on: {
        change: function change($event) {
          var $$a = _vm.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = student.id,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.checked = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.checked = $$c;
          }
        }
      }
    })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.address))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.phone_number))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.created_at))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student["class"]))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(student.section))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        onclick: "confirm('Are you sure you wanna delete this Record?') || event.stopImmediatePropagation()"
      },
      on: {
        click: function click($event) {
          return _vm.deleteSingleRecord(student.id);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "col-sm-6 offset-5"
  }, [_c("pagination", {
    attrs: {
      data: _vm.students
    },
    on: {
      "pagination-change-page": _vm.getStudents
    }
  })], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/admin/StudentsIndex.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/admin/StudentsIndex.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentsIndex.vue?vue&type=template&id=342435ea& */ "./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea&");
/* harmony import */ var _StudentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentsIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/StudentsIndex.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentsIndex_vue_vue_type_template_id_342435ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentsIndex.vue?vue&type=template&id=342435ea& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/StudentsIndex.vue?vue&type=template&id=342435ea&");


/***/ })

}]);