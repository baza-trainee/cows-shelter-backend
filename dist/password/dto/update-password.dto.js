"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_password_dto_1 = require("./create-password.dto");
class UpdatePasswordDto extends (0, swagger_1.PartialType)(create_password_dto_1.CreatePasswordDto) {
}
exports.UpdatePasswordDto = UpdatePasswordDto;
//# sourceMappingURL=update-password.dto.js.map