"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMailingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_mailing_dto_1 = require("./create-mailing.dto");
class UpdateMailingDto extends (0, swagger_1.PartialType)(create_mailing_dto_1.CreateMailingDto) {
}
exports.UpdateMailingDto = UpdateMailingDto;
//# sourceMappingURL=update-mailing.dto.js.map