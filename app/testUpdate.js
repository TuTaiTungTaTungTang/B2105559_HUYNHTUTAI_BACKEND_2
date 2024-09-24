const MongoDB = require("./app/utils/mongodb.util");
const ContactService = require("./app/services/contact.servicee");
const config = require("./app/config");

async function testUpdate() {
    try {
        // Kết nối đến cơ sở dữ liệu
        const client = await MongoDB.connect(config.db.uri);
        const contactService = new ContactService(client);

        // ID của liên hệ cần cập nhật
        const idToUpdate = "66f081225ab577cbde86d6b1"; // Thay đổi ID này cho phù hợp
        const updateData = {
            name: "Nguyen Nhat Trong",
            email: "trongb2105557@student.ctu.edu.vn",
            address: "Hau Giang",
            phone: "0987654321",
            favorite: false,
        };

        // Gọi hàm update
        const updatedContact = await contactService.update(idToUpdate, updateData);

        // Kiểm tra kết quả
        if (updatedContact) {
            console.log("Contact updated successfully:", updatedContact);
        } else {
            console.log("Contact not found or update failed.");
        }
    } catch (error) {
        console.error("Error during update:", error);
    }
}

// Gọi hàm kiểm tra
testUpdate();