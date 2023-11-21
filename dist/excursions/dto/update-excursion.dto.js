"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExcursionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_excursion_dto_1 = require("./create-excursion.dto");
class UpdateExcursionDto extends (0, mapped_types_1.PartialType)(create_excursion_dto_1.CreateExcursionDto) {
}
exports.UpdateExcursionDto = UpdateExcursionDto;
//# sourceMappingURL=update-excursion.dto.js.map