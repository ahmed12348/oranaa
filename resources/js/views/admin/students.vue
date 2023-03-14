<template>
<div>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Student</h1>
    <!-- student add modal -->
    <b-modal id="modal-studentadd" title="Add student" ref="modal-studentadd" centered hide-footer>
        <section id="student-add-frm-blk">
            <div>

                <b-form @submit.prevent="showAddForm">
                    <!--name -->
                    <b-form-group label="student full_name" label-for="task-title">
                        <b-form-input id="task-full_name" autofocus trim placeholder="student full_name" v-model="studentfull_name" name="student-full_name" />
                    </b-form-group>
                    <!-- detail -->
                    <b-form-group label="student email" label-for="task-email">
                        <b-form-input id="task-email" autofocus trim placeholder="student email" v-model="studentemail" name="student-email" />
                    </b-form-group>
                    <!-- price -->
                    <b-form-group label="student code" label-for="task-code">
                        <b-form-input id="task-code" autofocus trim placeholder="student code" v-model="studentcode" name="student-code" />
                    </b-form-group>

                    <b-form-group label="student date_of_birth" label-for="task-date_of_birth">
                        <b-form-datepicker id="example-datepicker" v-model="studentdate_of_birth" class="mt-2"></b-form-datepicker>
                    </b-form-group>

                    <b-form-group label="student level" label-for="student-level">
                        <b-form-select id="student-level"  v-model="studentlevel"
                                       value-field="id"
                                       text-field="name"
                                       :options="levels" ></b-form-select>
                    </b-form-group>
                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="mr-2" type="submit">
                            Add student
                        </b-button>

                    </div>
                </b-form>
            </div>
        </section>
    </b-modal>
    <!-- student edit modal -->
    <b-modal id="modal-studentedit" title="Edit student" ref="modal-studentedit" centered hide-footer>
        <section id="student-edit-frm-blk">
            <div>

                <b-form @submit.prevent="updateSave">
                    <!--name -->
                    <b-form-group label="student full_name" label-for="task-title">
                        <b-form-input id="task-full_name" autofocus trim placeholder="student full_name" v-model="studentfull_name" name="student-full_name" />
                    </b-form-group>
                    <!-- detail -->
                    <b-form-group label="student email" label-for="task-email">
                        <b-form-input id="task-email" autofocus trim placeholder="student email" v-model="studentemail" name="student-email" />
                    </b-form-group>
                    <!-- price -->
                    <b-form-group label="student code" label-for="task-code">
                        <b-form-input id="task-code" autofocus trim placeholder="student code" v-model="studentcode" name="student-code" />
                    </b-form-group>

                    <b-form-group label="student date_of_birth" label-for="task-date_of_birth">
                        <b-form-datepicker id="example-datepicker" v-model="studentdate_of_birth" class="mb-2"></b-form-datepicker>
                    </b-form-group>

                    <b-form-group label="student level" label-for="student-level">
                        <b-form-select id="student-level" n v-model="studentlevel"
                                       :reduce="(option) => option.id" :options="levels" />
                    </b-form-group>
                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success" class="mr-2" type="submit">
                            Save
                        </b-button>
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="mr-2" type="submit">
                            Cancel
                        </b-button>
                    </div>
                </b-form>
            </div>
        </section>
    </b-modal>
    <!-- student delete modal -->
    <b-modal id="modal-studentdel" title="confirm delete student" centered>
        <section id="student-del-frm-blk">
            <div>
                Are you sure to remove this student
            </div>
        </section>
    </b-modal>

    <br>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">students</h6>
        </div>
        <div class="card-body">

            <div class="row" style="margin:15px">
                <div class="col-sm">
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" v-b-modal.modal-studentadd>
                        <!-- <feather-icon icon="VideoIcon" class="mr-50" /> -->
                        <span class="align-middle"> Add student</span>

                    </b-button>
                </div>

            </div>
            <div class="table-responsive ">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Full Name</th>

                            <th>details</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :v-bind="rows" v-for="(data) in rows" :key="data.id" :id="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.full_name}}</td>
                            <td>{{data.detail}}</td>
                            <td>{{data.price}}</td>
                            <td>
                                <b-button variant="info" @click="openEdit(data.id)">
                                    <i class="fas fa-solid fa-eye"></i>
                                </b-button>
                                <b-button variant="warning" @click="openEdit(data.id)">
                                    <i class="fas fa-solid fa-pen"></i>
                                </b-button>
                                <b-button variant="danger" @click="deleteConfirm(data.id,data.name)">
                                    <i class="fas fa-solid fa-trash"></i>
                                </b-button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import VueGoodTablePlugin from 'vue-good-table'
import { BFormDatepicker } from 'bootstrap-vue'


import {
    BModal,
    VBModal,
    ModalPlugin,
    BAlert,
    BSidebar,
    BForm,
    // BFormGroup,
    // BFormInput,
    BFormFile,
    // BAvatar,
    BButton,
    BFormInvalidFeedback,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
} from 'bootstrap-vue'
import {
    VueGoodTable
} from 'vue-good-table'

import vSelect from 'vue-select'

import Ripple from 'vue-ripple-directive'
Vue.use(ModalPlugin)

export default {
    name: 'students',
    directives: {
        Ripple,
        'b-modal': VBModal
    },
    components: {
        BFormDatepicker,
        BModal,
        VBModal,
        ModalPlugin,
        BAlert,
        BSidebar,
        BForm,
        // BFormGroup,
        // BFormInput,
        BFormFile,
        // BAvatar,
        BButton,
        BFormInvalidFeedback,
        // VueGoodTable,
        BAvatar,
        BBadge,
        BPagination,
        BFormGroup,
        BFormInput,
        BFormSelect,
        BDropdown,
        BDropdownItem,
        // vSelect,
    },
    data() {
        return {
            rows: [],
            token: localStorage.getItem('token'),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            studentfull_name: "",
            studentemail: "",
            studentcode: "",
            studentdate_of_birth: "",
            studentlevel: "",
            studentId: "",

            selected: null,
            levels: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]

        }

    },

    methods: {
        baseModuleUrl() {
            return "students";
        },
        showAddForm() {
            var token = localStorage.getItem('token')
            const student = {
                full_name: this.studentfull_name,
                email: this.studentemail,
                code: this.studentcode,
                date_of_birth: this.studentdate_of_birth,
                level: this.studentlevel
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.post(this.baseModuleUrl(), student, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {

                            console.log(res.data);
                            this.rows = res.data.data;
                                this.studentfull_name= "";
                                this.studentemail= "";
                                this.studentcode= "";
                                this.studentdate_of_birth= "";
                                this.studentlevel= "";
                            this.$refs['modal-studentadd'].hide()
                            // this.hide();
                            // this.bvModal.hide();
                        });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });
        },
        openEdit(objid) {
            //load student by id
            var token = localStorage.getItem('token')
            const student = {
                name: this.studentfull_name
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.get(this.baseModuleUrl() + "/" + objid, {
                    headers
                })
                .then(res => {
                    // console.log(res.data);
                    this.studentfull_name = res.data.data.full_name;
                    this.studentemail = res.data.data.email;
                    this.studentcode = res.data.data.code;
                    this.studentdate_of_birth = res.data.data.date_of_birth;
                    this.studentlevel = res.data.data.level;
                    this.studentId = objid;
                    // console.log("id:"+this.studentId+" name:"+this.studentfull_name);
                    this.$refs['modal-studentedit'].show();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });

        },
        updateSave() {
            var token = localStorage.getItem('token')
            const student = {
                id: this.studentId,
                full_name: this.studentfull_name,
                email: this.studentemail,
                code: this.studentcode,
                date_of_birth: this.studentdate_of_birth,
                level: this.studentlevel
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.put(this.baseModuleUrl() + "/" + this.studentId, student, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {
                            this.rows = res.data.data;
                            this.$refs['modal-studentedit'].hide()
                        });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });

        },
        showMsgBoxOne() {
            this.boxOne = ''
            this.$bvModal
                .msgBoxConfirm('Are you sure?', {
                    cancelVariant: 'outline-secondary',
                })
                .then(value => {
                    this.boxOne = value
                    console.log(value);
                })
        },
        deleteConfirm(objid, objname) {
            console.log("objid:" + objid)
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Are you sure you want to delete "' + objname + '"?', {
                    title: 'Please Confirm',
                    size: 'sm',
                    okVariant: 'primary',
                    okTitle: 'Yes',
                    cancelTitle: 'No',
                    cancelVariant: 'outline-secondary',
                    hideHeaderClose: false,
                    centered: true,
                })
                .then(value => {
                    this.boxTwo = value;
                    if (value) {
                        //selected item objid
                        var token = localStorage.getItem('token');
                        const headers = {
                            "Authorization": "Bearer " + token
                        };
                        axios.delete(this.baseModuleUrl() + '/' + objid, {
                                headers
                            })
                            .then(response => {
                                axios.get(this.baseModuleUrl(), {
                                        headers
                                    })
                                    .then(res => {
                                        // console.log(res.data);
                                        this.rows = res.data.data;
                                    });
                            })
                            .catch(error => {
                                this.errorMessage = error.message;
                            });

                    }
                    console.log(value);
                })
        },
    },
    mounted() {
        $('#dataTable').DataTable();
    },
    created() {
        const headers = this.headers;
        axios.get(this.baseModuleUrl(), {
                headers
            }).then(response => {
                this.rows = response.data.data;
            });
        axios.get("/levels", {
            headers
        }).then(response => {
            this.levels = response.data.data;
        });
    },
}
</script>
