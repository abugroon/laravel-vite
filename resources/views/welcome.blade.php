<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
    @production
        @php
            $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);

        @endphp

        <script type="module" src="/build/{{$manifest['js/app.js']['file']}}"></script>
        <link rel="stylesheet" href="/build/{{$manifest['js/app.js']['css'][0]}}">

        @else
            @vite
         @endproduction
</head>
<body class="antialiased">
<div id="app"
     class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
    <main-app></main-app>
</div>
</body>
</html>
