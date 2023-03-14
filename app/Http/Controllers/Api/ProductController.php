<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Serializers\ProductSerializer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Product;
use League\CommonMark\CommonMarkConverter;


class ProductController extends Controller
{

    public function index()
    {
        return Product::with(['categories' => function($query) {
            $query->select('id', 'name');
        }])->get();
    }

    public function show(ProductRequest $product)
    {
        $product->load('categories:id,name');

        return $product;
    }

//    public function store(ProductRequest $request)
//    {
//
//        $converter = new CommonMarkConverter(['html_input' => 'escape', 'allow_unsafe_links' => false]);
//
//        $product = Product::create([
//            'name' => $request->get('name'),
//            'price' => $request->get('price'),
//            'url' => $request->get('url'),
//            'description' => $converter->convert($request->get('description'))->getContent(),
//        ]);
//        $serializer = new ProductSerializer($product);
//        return $this->response->setData(['product' => $serializer->getData()]);
//    }

//    public function update(ProductRequest $request, int $id): JsonResponse
//    {
//        $converter = new CommonMarkConverter(['html_input' => 'escape', 'allow_unsafe_links' => false]);
//
//        $product = Product::findOrFail($id);
//        $product->name = $request->get('name');
//        $product->url = $request->get('url');
//        $product->price = $request->get('price');
//        $product->description = $converter->convert($request->get('description'))->getContent();
//        $product->save();
//
//        return new JsonResponse(
//            [
//                'product' => (new ProductSerializer($product))->getData(),
//            ]
//        );
//    }
}
