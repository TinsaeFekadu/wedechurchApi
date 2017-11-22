<h1>Please fill the form</h1>
<form method="POST" action="/again">
    {!! csrf_field() !!}
    <input type="text" name="id">
    <input type="text" name="name">
    <input type="text" name="father name"><br><br>
    <input type="text" name="sex">
    <input type="integer" name="phone number"><br><br>
    <input type="submit" value="create">
</form>