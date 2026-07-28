Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$indexPath = Join-Path $repoRoot 'index.html'
$scriptPath = Join-Path $repoRoot 'assets\script.js'
$cvEnPath = Join-Path $repoRoot 'assets\cv-en.pdf'
$cvEsPath = Join-Path $repoRoot 'assets\cv-es.pdf'
$ogImagePath = Join-Path $repoRoot 'assets\og-cover.png'

function Assert-True {
    param(
        [bool]$Condition,
        [string]$Message
    )

    if (-not $Condition) {
        throw $Message
    }
}

function Assert-FileExists {
    param([string]$Path)

    Assert-True (Test-Path -LiteralPath $Path -PathType Leaf) "Missing required file: $Path"
}

function Assert-Contains {
    param(
        [string]$Content,
        [string]$Needle,
        [string]$Message
    )

    Assert-True ($Content.Contains($Needle)) $Message
}

function Assert-NotContains {
    param(
        [string]$Content,
        [string]$Needle,
        [string]$Message
    )

    Assert-True (-not $Content.Contains($Needle)) $Message
}

Assert-FileExists $indexPath
Assert-FileExists $scriptPath
Assert-FileExists $cvEnPath
Assert-FileExists $cvEsPath
Assert-FileExists $ogImagePath

$indexContent = Get-Content -LiteralPath $indexPath -Raw
$scriptContent = Get-Content -LiteralPath $scriptPath -Raw

# Download wiring
Assert-Contains $indexContent 'id="cvDownload" href="assets/cv-en.pdf"' 'English CV download link is not wired to assets/cv-en.pdf.'
Assert-Contains $scriptContent "lang === 'es' ? 'assets/cv-es.pdf' : 'assets/cv-en.pdf'" 'Language-specific CV download switching is missing.'

# Critical English / Spanish counts
Assert-Contains $scriptContent '"impact.v6": "9 years"' 'English impact years value must be 9 years.'
Assert-Contains $scriptContent '"impact.v6": "9 años"' 'Spanish impact years value must be 9 años.'
Assert-Contains $scriptContent '"impact.m1": "Post-release defects across a 30+ product portfolio"' 'English impact portfolio count must be 30+ products.'
Assert-Contains $scriptContent '"impact.m1": "Defectos posteriores a liberación en portafolio de 30+ productos"' 'Spanish impact portfolio count must be 30+ productos.'
Assert-Contains $scriptContent '9 years across 30+ web, mobile, desktop, and software-delivery initiatives.' 'English hero lead must reflect 9 years and 30+ products.'
Assert-Contains $scriptContent '9 años en 30+ iniciativas web, móviles, de escritorio y de entrega de software.' 'Spanish hero lead must reflect 9 años and 30+ productos.'

# Badge localization
foreach ($key in 'hero.b1', 'hero.b2', 'hero.b3', 'hero.b4', 'hero.b5') {
    Assert-Contains $indexContent "data-i18n=`"$key`"" "Missing localization binding for $key in index.html."
}

Assert-Contains $scriptContent '"hero.b1": "ISTQB Certified"' 'Missing English badge text for hero.b1.'
Assert-Contains $scriptContent '"hero.b1": "Certificación ISTQB"' 'Missing Spanish badge text for hero.b1.'
Assert-Contains $scriptContent '"hero.b2": "30+ Products"' 'Missing English badge text for hero.b2.'
Assert-Contains $scriptContent '"hero.b2": "30+ productos"' 'Missing Spanish badge text for hero.b2.'

# Project CTA and visible stacks localized
Assert-Contains $indexContent 'data-i18n="projects.cta"' 'Project CTA is not localized.'
Assert-Contains $scriptContent '"projects.cta": "View on GitHub ↗"' 'Missing English projects CTA localization.'
Assert-Contains $scriptContent '"projects.cta": "Ver en GitHub ↗"' 'Missing Spanish projects CTA localization.'

foreach ($key in 'projects.s1', 'projects.s2', 'projects.s3', 'projects.s4') {
    Assert-Contains $indexContent "data-i18n=`"$key`"" "Missing localization binding for $key in project stacks."
}

# Experience headers localized
foreach ($key in 'exp.h1r','exp.h1c','exp.h1d','exp.h2r','exp.h2c','exp.h2d','exp.h3r','exp.h3c','exp.h3d','exp.h4r','exp.h4c','exp.h4d','exp.h5r','exp.h5c','exp.h5d','exp.h6r','exp.h6c','exp.h6d') {
    Assert-Contains $indexContent "data-i18n=`"$key`"" "Missing localization binding for $key in experience headers."
}

# Guard against stale product/years values in active site files
Assert-NotContains $indexContent '20+ product portfolio' 'index.html still contains stale 20+ product portfolio wording.'
Assert-NotContains $scriptContent '20+ product portfolio' 'script.js still contains stale 20+ product portfolio wording.'
Assert-NotContains $scriptContent '20+ productos' 'script.js still contains stale 20+ productos wording.'
Assert-NotContains $indexContent '8+ yrs' 'index.html still contains stale 8+ yrs wording.'
Assert-NotContains $scriptContent '8+ years' 'script.js still contains stale 8+ years wording.'
Assert-NotContains $scriptContent '8+ años' 'script.js still contains stale 8+ años wording.'

# Social sharing metadata (LinkedIn / X previews)
$canonicalUrl = 'https://erzascarlettitania.github.io/portfolio/?v=4'
$ogImageUrl = 'https://erzascarlettitania.github.io/portfolio/assets/og-cover.png'
$sharedTitle = 'Liliet de la Caridad González Polanco — Quality Engineering Leader · AI-Enabled Delivery Systems'

Assert-Contains $indexContent "<title>$sharedTitle</title>" 'Document title does not match the current positioning statement.'
Assert-Contains $indexContent "<meta property=`"og:title`" content=`"$sharedTitle`" />" 'og:title does not match the current positioning statement.'
Assert-Contains $indexContent "<meta name=`"twitter:title`" content=`"$sharedTitle`" />" 'twitter:title does not match the current positioning statement.'
Assert-Contains $indexContent "<meta property=`"og:url`" content=`"$canonicalUrl`" />" 'og:url is missing; link previews may resolve stale cached data.'
Assert-Contains $indexContent "<link rel=`"canonical`" href=`"$canonicalUrl`" />" 'Canonical link is missing.'
Assert-Contains $indexContent "<meta property=`"og:image`" content=`"$ogImageUrl`" />" 'og:image is missing; link previews will render without a thumbnail.'
Assert-Contains $indexContent '<meta name="twitter:card" content="summary_large_image" />' 'twitter:card is missing.'
Assert-Contains $indexContent '<meta property="og:image:width" content="1200" />' 'og:image:width is missing.'
Assert-Contains $indexContent '<meta property="og:image:height" content="630" />' 'og:image:height is missing.'

# Guard against the retired positioning statement resurfacing in shared metadata
foreach ($stale in 'AI-Enabled QA Strategist', 'Quality Engineering Architect', 'QA Estrategist', 'Quality Engineering Architec') {
    Assert-NotContains $indexContent $stale "index.html still contains retired positioning wording: $stale."
    Assert-NotContains $scriptContent $stale "script.js still contains retired positioning wording: $stale."
}

Write-Host 'Portfolio validation passed.'
