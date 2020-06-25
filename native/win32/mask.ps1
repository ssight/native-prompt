Add-Type -AssemblyName System.Windows.Forms;
Add-Type -AssemblyName System.Drawing;

$form = New-Object System.Windows.Forms.Form;
$form.Size = New-Object System.Drawing.Size(300, 200);
$form.Text = $args[0];
$form.FormBorderStyle = "FixedDialog";
$form.MaximizeBox = $false;
$form.MinimizeBox = $false;
$form.StartPosition = "CenterScreen";

$ok = New-Object System.Windows.Forms.Button;
$ok.Size = New-Object System.Drawing.Size(75, 23);
$ok.Location = New-Object System.Drawing.Point(75, 120);
$ok.DialogResult = [System.Windows.Forms.DialogResult]::OK;
$ok.Text = "OK";
$form.AcceptButton = $ok;
$form.Controls.Add($ok);

$cancel = New-Object System.Windows.Forms.Button;
$cancel.Size = New-Object System.Drawing.Size(75, 23);
$cancel.Location = New-Object System.Drawing.Point(150, 120);
$cancel.Text = "Cancel";
$cancel.DialogResult = [System.Windows.Forms.DialogResult]::Cancel;
$form.CancelButton = $cancel;
$form.Controls.Add($cancel);

$text = New-Object System.Windows.Forms.Label;
$text.Location = New-Object System.Drawing.Point(10, 20);
$text.Size = New-Object System.Drawing.Size(280, 40);
$text.Text = $args[1];
$form.Controls.Add($text);

$textbox = New-Object System.Windows.Forms.TextBox;
$textbox.Text = $args[2];
$textbox.PasswordChar = "*";
$textbox.Location = New-Object System.Drawing.Point(10, 60);
$textbox.Size = New-Object System.Drawing.Size(260, 20);
$form.Controls.Add($textbox);

$form.Topmost = $true;

$form.Add_Shown({ $textbox.Select() });
$result = $form.ShowDialog();

if ($result -eq [System.Windows.Forms.DialogResult]::OK)
{
    $inputText = $textbox.Text
    echo "RETURN$inputText";
}

echo "CLOSE";