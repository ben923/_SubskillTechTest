@extends('layout.layout')
@section('content')
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card">
            {{-- {{dump(asset(json_decode($article->IMG)[0]))}} --}}
                <img class="card-img-top" src={{asset(json_decode($article->IMG)[0])}}>
            </div>
        </div>
    </div>
</div>
@stop