# Windows PowerShell 에서 보낼 때
# 사용법: .\curl.ps1 https://<내-n8n-주소>  [test|prod]
param([Parameter(Mandatory=$true)][string]$Base, [string]$Mode = "test")
$path = if ($Mode -eq "prod") { "webhook" } else { "webhook-test" }
$body = '{ "words": ["고양이", "커피", "회의"] }'
Invoke-RestMethod -Method Post -Uri "$Base/$path/hackers-words" -ContentType "application/json; charset=utf-8" -Body ([System.Text.Encoding]::UTF8.GetBytes($body))
