@extends('layouts.app')

@section('content')

  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
        </div>
      </div>
    </div>
<!-- Main content -->
<section class="content">
      <div class="row">
        <div class="col-12" >
          <div class="card">

            <div class="card-body">
                <div class="wrapper">
                    <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  @endsection
