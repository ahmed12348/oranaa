<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'url' => 'required|url',
            'slug' => 'required|max:100|unique:products,',
            'description' => 'required|string',
        ];
    }

    public function messages()
    {
        return [

            'logo.required_without' => 'الصورة  مطلوب',
            'required' => 'هذا الحقل مطلوب',
            'in' => 'القيم المدخلة غير صحيحة ',
            'email.email' => 'البريد الالكتوني غير صحيح',
            'string' => 'هذا الحقل لابد ان يكون احرف ',
            'name.string' => ' الاسم لابد ان يكون احرف ',
            'max' => 'هذا الحقل طويل ',
            'category_id.exists' => 'القسم غير موجود ',
            'address.string'=> ' العنوان لابد ان يكون احرف',
            'email.unique' => 'هذا الايميل مستخدم من قبل ',
            'mobile.unique' => 'هذا الهاتف مستخدم من قبل ',
        ];
    }
}
