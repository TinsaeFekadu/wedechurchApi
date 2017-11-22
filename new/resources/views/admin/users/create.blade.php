<form method="POST" action="/users">
    {!! csrf_field() !!}
    <input type="text" name="name"><br><br>
    <input type="email" name="email"><br><br>
    <input type="password" name="password"><br><br>
    <input type="submit" value="create">
</form>