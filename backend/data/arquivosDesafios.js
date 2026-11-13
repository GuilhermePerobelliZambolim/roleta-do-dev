import desafiosPHP from "./php.json" with { type: "json"};
import desafiosCPP from "./cpp.json" with { type: "json"};
import desafiosCSHARP from "./csharp.json" with { type: "json"};
import desafiosJAVA from "./java.json" with { type: "json"};
import desafiosJS from "./javascript.json" with { type: "json"};
import desafiosPY from "./python.json" with { type: "json"};

const desafios = {
    javascript: desafiosJS,
    python: desafiosPY,
    java: desafiosJAVA,
    csharp: desafiosCSHARP,
    cpp: desafiosCPP,
    php: desafiosPHP
};

export default desafios;