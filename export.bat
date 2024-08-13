@echo off
call tiddlywiki --output "wiki" --render "[!is[system]]" "[encodeuricomponent[]addprefix[static/]addsuffix[.html]]" "text/plain" "$:/core/templates/static.tiddler.html"
call tiddlywiki --output "wiki" --render "$:/core/templates/static.template.html" "static.html" "text/plain"
call tiddlywiki --output "wiki" --render "$:/core/templates/static.template.css" "static/static.css" "text/plain"