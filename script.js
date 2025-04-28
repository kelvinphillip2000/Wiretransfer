function generateScreenshot() {
    // Get input values
    const senderName = document.getElementById('sender-name').value || 'Jane Smith';
    const senderBank = document.getElementById('sender-bank').value || 'Bank of America';
    const senderRouting = document.getElementById('sender-routing').value || '123456789';
    const recipientName = document.getElementById('recipient-name').value || 'John Doe';
    const recipientBank = document.getElementById('recipient-bank').value || 'Wells Fargo';
    const recipientRouting = document.getElementById('recipient-routing').value || '987654321';
    const amount = document.getElementById('amount').value || '$5,000.00';
    const date = document.getElementById('date').value || '2025-04-29';
    const referenceNumber = document.getElementById('reference-number').value || 'WTX123456789';

    // Update receipt display
    document.getElementById('receipt-sender-name').textContent = senderName;
    document.getElementById('receipt-sender-bank').textContent = senderBank;
    document.getElementById('receipt-sender-routing').textContent = senderRouting;
    document.getElementById('receipt-recipient-name').textContent = recipientName;
    document.getElementById('receipt-recipient-bank').textContent = recipientBank;
    document.getElementById('receipt-recipient-routing').textContent = recipientRouting;
    document.getElementById('receipt-amount').textContent = amount;
    document.getElementById('receipt-date').textContent = date;
    document.getElementById('receipt-reference-number').textContent = referenceNumber;

    // Generate screenshot using html2canvas
    html2canvas(document.getElementById('receipt'), { scale: 2 }).then(canvas => {
        // Create a link to download the image
        const link = document.createElement('a');
        link.download = 'wire_transfer_receipt.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
