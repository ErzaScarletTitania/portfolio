Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$validationScript = Join-Path $repoRoot 'scripts\Validate-Portfolio.ps1'

if (-not (Test-Path -LiteralPath $validationScript -PathType Leaf)) {
    throw "Validation script not found: $validationScript"
}

Write-Host 'Running portfolio regression suite...'
& $validationScript
Write-Host 'Portfolio regression suite passed.'
