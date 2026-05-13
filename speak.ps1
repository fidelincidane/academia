param([string]$Text)

if (-not $Text) {
  $Text = $input | Out-String
}

if ($Text) {
  Add-Type -AssemblyName System.Speech -ErrorAction Stop
  $voice = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $voice.Speak($Text.Trim())
}
