<template>
<div>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">gradeitem</h1>
    <!-- gradeitem add modal -->
    <b-modal id="modal-gradeitemadd" title="Add gradeitem" ref="modal-gradeitemadd" centered hide-footer>
        <section id="gradeitem-add-frm-blk">
            <div>

                <b-form @submit.prevent="showAddForm">
                    <!--name -->
                    <b-form-group label="gradeitem Name" label-for="task-title">
                        <b-form-input v-validate="{ required: true }" id="task-title" autofocus trim placeholder="gradeitem Name" v-model="gradeitemName" name="gradeitem-name" />
                    </b-form-group>
                    <!--  -->
                    <b-form-group label="gradeitem max_degree" label-for="task-max_degree">
                        <b-form-input id="task-max_degree" autofocus trim placeholder="gradeitem max_degree"
                                      v-model="gradeitemMax_degree" name="gradeitem-max_degree" />
                    </b-form-group>
                    <!--  -->
                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="mr-2" type="submit">
                            Add gradeitem
                        </b-button>

                    </div>
                </b-form>
            </div>
        </section>
    </b-modal>
    <!-- gradeitem edit modal -->
    <b-modal id="modal-gradeitemedit" title="Edit gradeitem" ref="modal-gradeitemedit" centered hide-footer>
        <section id="gradeitem-edit-frm-blk">
            <div>

                <b-form @submit.prevent="updateSave">
                    <!--name -->
                    <b-form-group label="gradeitem Name" label-for="task-title">
                        <b-form-input id="task-name" autofocus trim placeholder="gradeitem Name" v-model="gradeitemName" name="gradeitem-name" />
                    </b-form-group>
                    <!-- max_degree -->
                    <b-form-group label="gradeitem max_degree" label-for="task-max_degree">
                        <b-form-input id="task-max_degree" autofocus trim placeholder="gradeitem max_degree" v-model="gradeitemMax_degree" name="gradeitem-max_degree" />
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
    <!-- gradeitem delete modal -->
    <b-modal id="modal-gradeitemdel" title="confirm delete gradeitem" centered>
        <section id="gradeitem-del-frm-blk">
            <div>
                Are you sure to remove this gradeitem
            </div>
        </section>
    </b-modal>

    <br>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">gradeitems</h6>
        </div>
        <div class="card-body">

            <div class="row" style="margin:15px">
                <div class="col-sm">
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" v-b-modal.modal-gradeitemadd>
                        <!-- <feather-icon icon="VideoIcon" class="mr-50" /> -->
                        <span class="align-middle"> Add gradeitem</span>

                    </b-button>
                </div>

            </div>
            <div class="table-responsive ">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>max_degree</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :v-bind="rows" v-for="(data) in rows" :key="data.id" :id="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.name}}</td>
                            <td>{{data.max_degree}}</td>
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
    name: 'gradeitems',
    directives: {
        Ripple,
        'b-modal': VBModal
    },
    components: {
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
            gradeitemName: "",
            gradeitemMax_degree: "",
            gradeitemId: "",

        }

    },

    methods: {
        baseModuleUrl() {
            return "gradeitems";
        },
        showAddForm() {
            var token = localStorage.getItem('token')
            const gradeitem = {
                name: this.gradeitemName,
                max_degree: this.gradeitemMax_degree,
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.post(this.baseModuleUrl(), gradeitem, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {

                            console.log(res.data);
                            this.rows = res.data.data;

                            this.gradeitemName = "";
                            this.gradeitemMax_degree = "";
                            this.$refs['modal-gradeitemadd'].hide()
                            // this.hide();
                            // this.bvModal.hide();
                        });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });
        },
        openEdit(objid) {
            //load gradeitem by id
            var token = localStorage.getItem('token')
            const gradeitem = {
                name: this.gradeitemName
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.get(this.baseModuleUrl() + "/" + objid, {
                    headers
                })
                .then(res => {
                    // console.log(res.data);
                    this.gradeitemName = res.data.data.name;
                    this.gradeitemMax_degree = res.data.data.max_degree;
                    this.gradeitemId = objid;
                    // console.log("id:"+this.gradeitemId+" name:"+this.gradeitemName);
                    this.$refs['modal-gradeitemedit'].show();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });

        },
        updateSave() {
            var token = localStorage.getItem('token')
            const gradeitem = {
                id: this.gradeitemId,
                name: this.gradeitemName,
                max_degree: this.gradeitemMax_degree,
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.put(this.baseModuleUrl() + "/" + this.gradeitemId, gradeitem, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {
                            this.rows = res.data.data;
                            this.$refs['modal-gradeitemedit'].hide()
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
            })
            .then(response => {
                this.rows = response.data.data;
            });
    },
}
</script>
