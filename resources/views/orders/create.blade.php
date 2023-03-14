@php
    $currentLanguage = app()->getLocale();
@endphp

@extends('dashboard-views.layouts.master', [
'parent' => 'country',
'child' => 'create',
])

{{-- Custom Title --}}
@section('title')
    @lang('site.Add') @lang('site.country')
@endsection

{{-- Custom Styles --}}
@section('styles')
@endsection

{{-- Page content --}}
@section('content')

    <section class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <h1>@lang('site.Countries')</h1>
                </div>
                <div class="col-md-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ url()->previous() }}"> @lang('site.Home')</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('country.index') }}">
                                @lang('site.Countries')</a>
                        </li>
                        <li class="breadcrumb-item active"> @lang('site.Add') @lang('site.country')</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    <section class="content service-content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="form-layout">
                        {{-- Form to create country --}}
                        <form action="{{ route('country.store') }}" method="POST" id="commentForm">
                            @csrf
                            <div class="row">

                                {{-- Arabic name --}}
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="Add Service ">@lang('site.arabic_name') </label>
                                        <input type="text" name="name_ar" value="{{ old('name_ar') }}"
                                               class="form-control" placeholder="@lang('site.arabic_name')" required>
                                    </div>
                                    @error('name_ar')
                                    <p class="text-bold text-danger mt-n3 font-n8rem">{{ $message }}</p>
                                    @enderror
                                </div>

                                {{-- English name --}}
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="Add Service ">@lang('site.english_name') </label>
                                        <input type="text" name="name_en" value="{{ old('name_en') }}"
                                               class="form-control" placeholder="@lang('site.english_name')" required>
                                    </div>
                                    @error('name_en')
                                    <p class="text-bold text-danger mt-n3 font-n8rem">{{ $message }}</p>
                                    @enderror
                                </div>

                                {{-- Code --}}
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="Add Service ">@lang('site.country_code') </label>
                                        <input type="text" name="code" value="{{ old('code') }}" class="form-control"
                                               placeholder="@lang('site.country_code')" required>
                                    </div>
                                    @error('code')
                                    <p class="text-bold text-danger mt-n3 font-n8rem">{{ $message }}</p>
                                    @enderror
                                </div>

                                {{-- phone code --}}
                                <div class="col-md-6 col-12">
                                    <div class="form-group">
                                        <label for="Add Service ">@lang('site.country_phone_code') </label>
                                        <input type="text" name="phone_code" value="{{ old('phone_code') }}"
                                               class="form-control" placeholder="@lang('site.country_phone_code')"
                                               required>
                                    </div>
                                    @error('phone_code')
                                    <p class="text-bold text-danger mt-n3 font-n8rem">{{ $message }}</p>
                                    @enderror
                                </div>

                                {{-- Submit button --}}
                                <div class="col-12">
                                    <input type="submit" class="btn btn-success btn-sm shadow-lg"
                                           value="@lang('site.Submit')" data-style="expand-left">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection

{{-- Custom scripts --}}
@section('scripts')
    <script>
        $("#commentForm").validate();
    </script>
@endsection
