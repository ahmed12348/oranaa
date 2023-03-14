@extends('layouts.app')

@section('content')
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

<!-- Main content -->
   <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">TRANSACTION REPORT</h3>
            </div>
              <div class="row  mt-3">
                  <label for="type" class=" ml-5 form-label">Distributor</label>
                  <div class="col-md-5  ml-1  mb-0 ">
                      <input type="search" name="search" id="search" class="d-block w-100 form-control">
                  </div>
              </div>

              <div class="row date mt-3">
                  <label for="type" class="ml-5 form-label">Date From  </label>
                  <div class="col-md-2 ml-1 mb-0 textDirection">
{{--                      <label for="type" class="form-label">From Date</label>--}}
                      <input type="date" name="from_date" id="from_date" class="d-block w-100 form-control">
                  </div>
                  <label for="type" class=" form-label">To</label>
                  <div class="col-md-2 mb-0 textDirection">
{{--                      <label for="type" class="form-label">To</label>--}}
                      <input type="date" name="to_date" id="to_date" class="d-block w-100 form-control">
                  </div>
                  <div class="col-md-1 mb-0 textDirection">
                      <button type="button" id="submit" class="btn btn-primary form-control submit">Filter</button>
                  </div>
              </div>
            <!-- /.card-header -->


            <div class="card-body" id="Table_se">
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Purchaser</th>
                        <th>Distributor</th>
                        <th>Referred Distributors</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Percentage</th>
                        <th>Commission</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($orders as $order)
                        <tr>
                            <td>{{$order->invoice_number}}</td>
                            <td>
                                @foreach($order->purchaser->users_purchaser as $users_purchaser)
                                    <?php $user_id=$users_purchaser->pivot->user_id;
                                    $user_name=\App\Models\User::where('id',$user_id)->pluck('username')->first();?>
                                    {{$user_name}}
                                @endforeach
                            </td>
                            <td>
                                @foreach($order->purchaser->users_distributor as $users_distributor)
                                    <?php $user_id=$users_distributor->pivot->user_id;
                                    $user_name=\App\Models\User::where('id',$user_id)->pluck('username')->first();?>
                                    {{$user_name}}
                                @endforeach
                            </td>
                            <td>
                                {{$ref_count=$order->purchaser->referrals->count()}}
                            </td>
                            <td>{{$order->order_date}}</td>
                            <td>
                                <?php $price=$order->items[0]->price;
                                $qantity=$order->items[0]->pivot->qantity;?>
                                {{$order_total=$price*$qantity}}
                            </td>
                            <td>

                                @if($ref_count <= 5)
                                    {{$percentage=5}}%
                                @elseif($ref_count >= 5 && $ref_count <= 10)
                                    {{$percentage=10}}%
                                @elseif($ref_count  >= 11 && $ref_count <= 20)
                                    {{$percentage=15}}%
                                @elseif($ref_count >= 21 && $ref_count <= 30)
                                    {{$percentage=20}}%
                                @elseif( $ref_count >= 31)
                                    {{$percentage=30}}%
                                @endif
                            </td>
                            <td>{{number_format($percentage*$order_total/100, 2, '.', ' ')}}</td>
                        </tr>
                        {{--                @endforeach--}}
                    @endforeach
                    </tbody>
                </table>
                @if ($orders->hasPages())
                    <div class="pagination-wrapper float-right mt-1">
                        {{ $orders->links() }}
                    </div>
                @endif
            </div>


            <div class="card-body" id="order_table">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Purchaser</th>
                  <th>Distributor</th>
                  <th>Referred Distributors</th>
                  <th>Order Date</th>
                  <th>Order Total</th>
                  <th>Percentage</th>
                  <th>Commission</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach ($orders as $order)
                <tr>
                  <td>{{$order->invoice_number}}</td>
                  <td>
                          @foreach($order->purchaser->users_purchaser as $users_purchaser)
                             <?php $user_id=$users_purchaser->pivot->user_id;
                                  $user_name=\App\Models\User::where('id',$user_id)->pluck('username')->first();?>
                              {{$user_name}}
                          @endforeach
                  </td>
                  <td>
                    @foreach($order->purchaser->users_distributor as $users_distributor)
                        <?php $user_id=$users_distributor->pivot->user_id;
                        $user_name=\App\Models\User::where('id',$user_id)->pluck('username')->first();?>
                        {{$user_name}}
                    @endforeach
                  </td>
                  <td>
                      {{$ref_count=$order->purchaser->referrals->count()}}
                  </td>
                  <td>{{$order->order_date}}</td>
                  <td>
                      <?php $price=$order->items[0]->price;
                      $qantity=$order->items[0]->pivot->qantity;?>
                      {{$order_total=$price*$qantity}}
                  </td>
                    <td>

                        @if($ref_count <= 5)
                        {{$percentage=5}}%
                        @elseif($ref_count >= 5 && $ref_count <= 10)
                        {{$percentage=10}}%
                        @elseif($ref_count  >= 11 && $ref_count <= 20)
                        {{$percentage=15}}%
                        @elseif($ref_count >= 21 && $ref_count <= 30)
                        {{$percentage=20}}%
                        @elseif( $ref_count >= 31)
                        {{$percentage=30}}%
                        @endif
                      </td>
                  <td>{{number_format($percentage*$order_total/100, 2, '.', ' ')}}</td>
                  <td></td>
                </tr>
{{--                @endforeach--}}
                @endforeach
                </tbody>
              </table>
                @if ($orders->hasPages())
                    <div class="pagination-wrapper float-right mt-1">
                        {{ $orders->links() }}
                    </div>
                @endif
            </div>

            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.content-wrapper --

  @endsection
