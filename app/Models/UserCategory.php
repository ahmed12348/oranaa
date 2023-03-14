<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCategory extends Model
{
    use HasFactory;
    public $guarded = [];
    protected $table = 'user_category';

    // public function histories()
    // {
    //     return $this->hasMany(IssuingQuotationDetails::class, "quotation_id");
    // }
    // public function opportunity()
    // {
    //     return $this->belongsTo(RegisterOpportunity::class, "opportunity_id");
    // }

}
