<template>
<div>
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Prducts</h1>
    <!-- Product add modal -->
    <b-modal id="modal-Productadd" title="Add Product" ref="modal-Productadd" centered hide-footer>
        <section id="Product-add-frm-blk">
            <div>

                <b-form @submit.prevent="showAddForm">
                    <!--name -->
                    <b-form-group label="Product Name" label-for="task-title">
                        <b-form-input id="task-title" autofocus trim placeholder="Product Name" v-model="ProductName" name="Product-name" />
                    </b-form-group>
                    <!-- detail -->
                    <b-form-group label="Product detail" label-for="task-detail">
                        <b-form-input id="task-detail" autofocus trim placeholder="Product detail" v-model="Productdetail" name="Product-detail" />
                    </b-form-group>
                    <!-- price -->
                    <b-form-group label="Product price" label-for="task-price">
                        <b-form-input id="task-price" autofocus trim placeholder="Product price" v-model="Productprice" name="Product-price" />
                    </b-form-group>
                    <!-- Form Actions -->
                    <div class="d-flex mt-2">
                        <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="warning" class="mr-2" type="submit">
                            Add Product
                        </b-button>

                    </div>
                </b-form>
            </div>
        </section>
    </b-modal>
    <!-- Product edit modal -->
    <b-modal id="modal-Productedit" title="Edit Product" ref="modal-Productedit" centered hide-footer>
        <section id="Product-edit-frm-blk">
            <div>

                <b-form @submit.prevent="updateSave">
                    <!--name -->
                    <b-form-group label="Product Name" label-for="task-title">
                        <b-form-input id="task-title" autofocus trim placeholder="Product Name" v-model="ProductName" name="Product-name" />
                    </b-form-group>
                    <!-- detail -->
                    <b-form-group label="Product detail" label-for="task-detail">
                        <b-form-input id="task-detail" autofocus trim placeholder="Product detail" v-model="Productdetail" name="Product-detail" />
                    </b-form-group>
                    <!-- price -->
                    <b-form-group label="Product price" label-for="task-price">
                        <b-form-input id="task-price" autofocus trim placeholder="Product price" v-model="Productprice" name="Product-price" />
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
    <!-- Product delete modal -->
    <b-modal id="modal-Productdel" title="confirm delete Product" centered>
        <section id="Product-del-frm-blk">
            <div>
                Are you sure to remove this Product
            </div>
        </section>
    </b-modal>

    <br>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Products</h6>
        </div>
        <div class="card-body">

            <div class="row" style="margin:15px">
                <div class="col-sm">
                    <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" v-b-modal.modal-Productadd>
                        <!-- <feather-icon icon="VideoIcon" class="mr-50" /> -->
                        <span class="align-middle"> Add Product</span>

                    </b-button>
                </div>

            </div>
            <div class="table-responsive ">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>details</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>details</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr :v-bind="rows" v-for="(data) in rows" :key="data.id" :id="data.id">
                            <td>{{data.id}}</td>
                            <td>{{data.name}}</td>
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
    name: 'Products',
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
            ProductName: "",
            Productdetail: "",
            Productprice: "",
            ProductId: "",

        }

    },

    methods: {
        baseModuleUrl() {
            return "products";
        },
        showAddForm() {
            var token = localStorage.getItem('token')
            const Product = {
                name: this.ProductName,
                detail: this.Productdetail,
                price: this.Productprice
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
                    axios.post(this.baseModuleUrl(), Product, {
                    headers
                })

                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {

                            console.log(res.data);
                            this.rows = res.data.data;
                            this.ProductName = "";
                            this.Productdetail = "";
                            this.Productprice = "";
                            this.$refs['modal-Productadd'].hide()
                            // this.hide();
                            // this.bvModal.hide();
                        });
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });
        },
        openEdit(objid) {
            //load Product by id
            var token = localStorage.getItem('token')
            const Product = {
                name: this.ProductName
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.get(this.baseModuleUrl() + "/" + objid, {
                    headers
                })
                .then(res => {
                    // console.log(res.data);
                    this.ProductName = res.data.data.name;
                    this.Productprice = res.data.data.price;
                    this.Productdetail = res.data.data.detail;
                    this.ProductId = objid;
                    // console.log("id:"+this.ProductId+" name:"+this.ProductName);
                    this.$refs['modal-Productedit'].show();
                })
                .catch(error => {
                    this.errorMessage = error.message;
                });

        },
        updateSave() {
            var token = localStorage.getItem('token')
            const Product = {
                id: this.ProductId,
                name: this.ProductName,
                detail: this.Productdetail,
                price: this.Productprice
            };
            const headers = {
                "Authorization": "Bearer " + token
            };
            axios.put(this.baseModuleUrl() + "/" + this.ProductId, Product, {
                    headers
                })
                .then(response => {
                    axios.get(this.baseModuleUrl(), {
                            headers
                        })
                        .then(res => {
                            this.rows = res.data.data;
                            this.$refs['modal-Productedit'].hide()
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
