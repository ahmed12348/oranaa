@php
    $currentLanguage = app()->getLocale();
@endphp
<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label for="">
                @lang('site.name') @lang('site.en')
            </label>
            <input type="text" value="{{ $country->name_en }}" name="name_en" class="form-control" readonly
                id="" required>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label for="">
                @lang('site.name') @lang('site.ar')
            </label>
            <input type="text" value="{{ $country->name_ar }}" name="name_ar" class="form-control" readonly
                id="" required>
        </div>
    </div>
   
</div>
