@extends('layout.layout')
@section('content')
<div class="container">
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <p class="card-header text-success h5 border-top-0 border-right-0 border-left-0" style="background-color: rgb(191, 255, 184); border: solid 1px rgb(72, 224, 112);">
                    Create an article
                </p>
                <div class="card-body">
                    <form method="POST" action="{{ route('articleStore') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="Title">Title</label>
                            <input type="text" name="title" id="Title" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Enter a article Title">
                            @if($errors->has('title'))
                            @foreach ($errors->get('title') as $message)
                                <p class="text-danger">{{$message}}</p>
                            @endforeach
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="Descript">Descript</label>
                            <textarea name="descript" id="Descript" class="form-control rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Enter a article Descript"></textarea>
                            @if($errors->has('descript'))
                            @foreach ($errors->get('descript') as $message)
                                <p class="text-danger">{{$message}}</p>
                            @endforeach
                            @endif
                        </div>
                        <div class="form-group">
                            <img src="" id="Preview" class="img-fluid" style="display: none;">
                        </div>
                        <input type="file" name="img" id="IMG" style="display: none;">
                        <button id="InputFileButton" class="btn btn-outline-success">Upload an Image</button>
                            @if($errors->has('img'))
                            @foreach ($errors->get('img') as $message)
                                <p class="text-danger">{{$message}}</p>
                            @endforeach
                            @endif
                        <div class="form-group">
                          <label for="Category">Select a category</label>
                          <select class="form-control rounded-0 border-top-0 border-right-0 border-left-0" name="category" id="Category">
                            @foreach ($categories as $categorie)
                                <option value={{$categorie->id}}>{{$categorie->name}}</option>
                            @endforeach
                          </select>
                            @if($errors->has('category'))
                            @foreach ($errors->get('category') as $message)
                                <p class="text-danger">{{$message}}</p>
                            @endforeach
                            @endif
                        </div>
                        <button class="btn btn-success mt-2">Publish</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script src={{asset('js/InputHandler.js')}}></script>
@stop