Get-ChildItem "./inputs" | 
Foreach-Object {
    node index.js $_.FullName
}