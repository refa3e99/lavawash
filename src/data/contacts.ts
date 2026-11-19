export const CONTACTS = {
  phoneDisplay: "+962 7 9640 7049",
  phoneNumber: "+962796407049",
  whatsappNumber: "962796407049",
  instagramHandle: "@lavawash.jo",
  instagramUrl: "https://www.instagram.com/lavawash.jo",
  tiktokHandle: "@lavawash.jo",
  tiktokUrl: "https://www.tiktok.com/@lavawash.jo",
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
