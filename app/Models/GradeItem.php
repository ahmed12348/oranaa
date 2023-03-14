<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GradeItem extends Model
{
    use HasFactory;
    protected $table = 'grade_items';
    protected $guarded;
//    protected $fillable = ['name','grade_max'];
}
