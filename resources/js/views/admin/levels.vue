<template>
<div>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">level</h1>
    <!-- level add modal -->
    <b-modal id="modal-leveladd" title="Add level" ref="modal-leveladd" centered hide-footer>
        <section id="level-add-frm-blk">
            <div>
                <b-form @submit.prevent="showAddForm">
                    <!--name -->
                    <b-form-group label="level Name" label-for="task-title">
                        <b-form-input id="task-name" autofocus trim placeholder="level Name" v-model="levelName" name="level-name" />
                    </b-form-group>
                    <!-- desc -->
                    <b-form-group label="level desc" label-for="task-desc">
                        <b-form-input id="task-desc" autofocus trim placeholder="level desc" v-model="levelDesc" name="level-desc" />
                    </b-form-group>
                    <!-- number -->
                    <b-form-group label="level number" label-for="task-number">
                        <b-form-input id="task-number" autofocus trim placeholder="level number" v-model="levelNumber" name="level-number" />
                    </b-form-group>
                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="mr-2" type="submit">
                            Add level
                        </b-button>

                    </div>
                </b-form>
            </div>
        </section>
    </b-modal>
    <!-- level edit modal -->
    <b-modal id="modal-leveledit" title="Edit level" ref="modal-leveledit" centered hide-footer>
        <section id="level-edit-frm-blk">
            <div>

                <b-form @submit.prevent="updateSave">
                    <!--name -->
                    <b-form-group label="level Name" label-for="task-title">
                        <b-form-input id="task-title" autofocus trim placeholder="level Name" v-model="levelName" name="level-name" />
                    </b-form-group>
                    <!-- desc -->
                    <b-form-group label="level desc" label-for="task-desc">
                        <b-form-input id="task-desc" autofocus trim placeholder="level desc" v-model="levelDesc" name="level-desc" />
                    </b-form-group>
                    <!-- number -->
                    <b-form-group label="level number" label-for="task-number">
                        <b-form-input id="task-number" autofocus trim placeholder="level number" v-model="levelNumber" name="level-number" />
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
    <!-- level delete modal -->
    <b-modal id="modal-leveldel" title="confirm delete level" centered>
        <section id="level-del-frm-blk">
            <div>
                Are you sure to remove this level
            </div>
        </section>
    </b-modal>

    <br>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">levels</h6>
        </div>
        <div class="card-body">

            <div class="row" style="margin:15px">
                <div class="col-sm">
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" v-b-modal.modal-leveladd>
                        <!-- <feather-icon icon="VideoIcon" class="mr-50" /> -->
                        <span class="align-middle"> Add level</span>

                    </b-button>
                </div>

            </div>
            <div class="table-responsive ">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>desc</th>
                            <th>number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :v-bind="rows" v-for="(data) in rows" :key="data.id" :id="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.name}}</td>
                            <td>{{data.desc}}</td>
                            <td>{{data.number}}</td>
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
    name: 'levels',
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
            levelName: "",
            levelDesc: "",
            levelNumber: "",
            levelId: "",

        }

    },

    methods: {
        baseModuleUrl() {
            return "levels";
        },
        showAddForm() {
            var token = localStorage.getItem('token')
            const level = {
                name: this.levelName,
                desc: this.levelDesc,
                // desc: this.leveldesc,
                number: this.levelNumber
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.post(this.baseModuleUrl(), level, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {

                            console.log(res.data);
                            this.rows = res.data.data;

                            this.levelName = "";
                            this.levelDesc = "";
                            this.levelNumber = "";
                            this.$refs['modal-leveladd'].hide()
                            // this.hide();
                            // this.bvModal.hide();
                        });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });
        },
        openEdit(objid) {
            //load level by id
            var token = localStorage.getItem('token')
            const level = {
                name: this.levelName
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.get(this.baseModuleUrl() + "/" + objid, {
                    headers
                })
                .then(res => {
                    // console.log(res.data);
                    this.levelName = res.data.data.name;
                    this.levelNumber = res.data.data.number;
                    this.levelDesc = res.data.data.desc;
                    this.levelId = objid;
                    // console.log("id:"+this.levelId+" name:"+this.levelName);
                    this.$refs['modal-leveledit'].show();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });

        },
        updateSave() {
            var token = localStorage.getItem('token')
            const level = {
                id: this.levelId,
                name: this.levelName,
                desc: this.levelDesc,
                number: this.levelNumber
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.put(this.baseModuleUrl() + "/" + this.levelId, level, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {
                            this.rows = res.data.data;
                            this.$refs['modal-leveledit'].hide()
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
