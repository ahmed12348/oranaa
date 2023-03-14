<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = ['full_name','email','code','date_of_birth','level'];

    public static function studentsQuery($query)
    {
        $search_term = request('q', '');
        $selectedLevel = request('level');
        $sort_direction = request('sort_direction', 'desc');
        if (!in_array($sort_direction, ['asc', 'desc'])) {
            $sort_direction = 'desc';
        }

        $sort_field = request('sort_field', 'created_at');
        if (!in_array($sort_field, ['full_name', 'level', 'address', 'phone_number', 'created_at'])) {
            $sort_field = 'created_at';
        }
        $query->with(['levels'])
            ->when($selectedLevel, function ($query) use ($selectedLevel) {
                $query->where('level', $selectedLevel);
            })

            ->orderBy($sort_field, $sort_direction)
            ->search(trim($search_term));
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }

    public function scopeSearch($query, $term)
    {
        $term = "%$term%";

        $query->where(function ($query) use ($term) {
            $query->where('name', 'like', $term)
                ->orWhere('email', 'like', $term)
                ->orWhere('address', 'like', $term)
                ->orWhere('phone_number', 'like', $term)
                ->orWhereHas('class', function ($query) use ($term) {
                    $query->where('name', 'like', $term);
                })
                ->orWhereHas('section', function ($query) use ($term) {
                    $query->where('name', 'like', $term);
                });
        });
    }

    public function scopeStudentsQuery($query)
    {
        $search_term = request('q', '');

        $selectedLevel = request('Level');
        $sort_direction = request('sort_direction', 'desc');
        if (!in_array($sort_direction, ['asc', 'desc'])) {
            $sort_direction = 'desc';
        }
        $sort_field = request('sort_field', 'created_at');
        if (!in_array($sort_field, ['full_name', 'level', 'address', 'phone_number', 'created_at'])) {
            $sort_field = 'created_at';
        }
        $query->with(['levels'])
            ->when($selectedLevel, function ($query) use ($selectedLevel) {
                $query->where('level', $selectedLevel);
            })

            ->orderBy($sort_field, $sort_direction)
            ->search(trim($search_term));
    }
}
