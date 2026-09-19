/**
 * Generates and downloads a .vcf (vCard 3.0) file for Jeff Smith
 */
export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jeff Smith
N:Smith;Jeff;;;
TITLE:Strategic Leader & Customer Support Specialist
EMAIL;TYPE=INTERNET,WORK:projectwellington@gmail.com
TEL;TYPE=CELL,VOICE:+6421525279
ADR;TYPE=WORK:;;Whanganui;;;New Zealand
NOTE:Accomplished strategic leader & technical customer support specialist with 20+ years of experience. Ex-Shopify Support Tech Advisor, Chamber of Commerce CEO, Parkrun Event Director.
URL:${window.location.origin}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Jeff_Smith_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
