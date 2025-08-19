document.addEventListener('DOMContentLoaded', function () {
    // =========================
    // КОНФИГУРАЦИЯ (цены и нормы)
    // =========================
    const config = {
        maxStraightLength: 3, // максимальная длина одного прямого элемента (м) до вставки соединителя
        materials: {
            aluminum: {
                straight: {
                    '400': { pricePerMeter: 70680 },
                    '500': { pricePerMeter: 70680 },
                    '630': { pricePerMeter: 70680 },
                    '800': { pricePerMeter: 70680 },
                    '1000': { pricePerMeter: 81420 },
                    '1250': { pricePerMeter: 101880 },
                    '1600': { pricePerMeter: 130200 },
                    '2000': { pricePerMeter: 162000 },
                    '2500': { pricePerMeter: 206400 },
                    '3200': { pricePerMeter: 264600 },
                    '4000': { pricePerMeter: 331200 },
                    '5000': { pricePerMeter: 413400 }
                },
                angle: {
                    '400': { price: 16380 },
                    '500': { price: 16380 },
                    '630': { price: 16380 },
                    '800': { price: 16380 },
                    '1000': { price: 20220 },
                    '1250': { price: 23100 },
                    '1600': { price: 31740 },
                    '2000': { price: 36540 },
                    '2500': { price: 40380 },
                    '3200': { price: 48060 },
                    '4000': { price: 51960 },
                    '5000': { price: 55860 }
                },
                tee: {
                    '400': { price: 18500 },
                    '500': { price: 18500 },
                    '630': { price: 21000 },
                    '800': { price: 24500 },
                    '1000': { price: 28500 },
                    '1250': { price: 32000 },
                    '1600': { price: 39500 },
                    '2000': { price: 48000 },
                    '2500': { price: 59000 },
                    '3200': { price: 72000 },
                    '4000': { price: 89000 },
                    '5000': { price: 110000 }
                },
                transformer: {
                    '400': { price: 535200 },
                    '500': { price: 535200 },
                    '630': { price: 535200 },
                    '800': { price: 535200 },
                    '1000': { price: 621600 },
                    '1250': { price: 754800 },
                    '1600': { price: 825600 },
                    '2000': { price: 957600 },
                    '2500': { price: 1155600 },
                    '3200': { price: 1902000 },
                    '4000': { price: 2105400 },
                    '5000': { price: 2235600 }
                },
                grsh: {
                    '400': { price: 31740 },
                    '500': { price: 31740 },
                    '630': { price: 31740 },
                    '800': { price: 31740 },
                    '1000': { price: 41340 },
                    '1250': { price: 48120 },
                    '1600': { price: 46560 },
                    '2000': { price: 80760 },
                    '2500': { price: 101940 },
                    '3200': { price: 113520 },
                    '4000': { price: 130800 },
                    '5000': { price: 152400 }
                },
                connector: {
                    '400': { price: 30360 },
                    '500': { price: 30360 },
                    '630': { price: 30360 },
                    '800': { price: 30360 },
                    '1000': { price: 35220 },
                    '1250': { price: 40740 },
                    '1600': { price: 48780 },
                    '2000': { price: 62280 },
                    '2500': { price: 85560 },
                    '3200': { price: 103380 },
                    '4000': { price: 139800 },
                    '5000': { price: 164400 }
                },
                fastener: {
                    '400': { price: 4200 },
                    '500': { price: 4200 },
                    '630': { price: 4200 },
                    '800': { price: 4200 },
                    '1000': { price: 4356 },
                    '1250': { price: 4530 },
                    '1600': { price: 4818 },
                    '2000': { price: 5166 },
                    '2500': { price: 6420 },
                    '3200': { price: 6960 },
                    '4000': { price: 7860 },
                    '5000': { price: 9420 }
                },
                outlet: {
                    '125': { price: 91560 },
                    '160': { price: 91560 },
                    '250': { price: 91560 },
                    '400': { price: 188400 },
                    '500': { price: 188400 },
                    '630': { price: 188400 },
                    '800': { price: 427800 },
                    '1000': { price: 427800 },
                    '1250': { price: 427800 },
                    '1600': { price: 479400 }
                },
                cableTerminal: {
                    '400': { price: 122400 },
                    '500': { price: 122400 },
                    '630': { price: 122400 },
                    '800': { price: 122400 },
                    '1000': { price: 136800 },
                    '1250': { price: 156000 },
                    '1600': { price: 178200 },
                    '2000': { price: 201000 },
                    '2500': { price: 242400 },
                    '3200': { price: 277800 },
                    '4000': { price: 305400 },
                    '5000': { price: 366600 }
                }
            },
            copper: {
                straight: {
                    '400': { pricePerMeter: 104100 },
                    '500': { pricePerMeter: 117180 },
                    '630': { pricePerMeter: 140400 },
                    '800': { pricePerMeter: 168600 },
                    '1000': { pricePerMeter: 210000 },
                    '1250': { pricePerMeter: 259800 },
                    '1600': { pricePerMeter: 343800 },
                    '2000': { pricePerMeter: 431400 },
                    '2500': { pricePerMeter: 534600 },
                    '3200': { pricePerMeter: 691800 },
                    '4000': { pricePerMeter: 949800 },
                    '5000': { pricePerMeter: 1153800 },
                    '6300': { pricePerMeter: 1794600 }
                },
                angle: {
                    '400': { price: 71200 },
                    '500': { price: 72200 },
                    '630': { price: 79600 },
                    '800': { price: 78780 },
                    '1000': { price: 97740 },
                    '1250': { price: 107460 },
                    '1600': { price: 144000 },
                    '2000': { price: 131400 },
                    '2500': { price: 153600 },
                    '3200': { price: 195000 },
                    '4000': { price: 182400 },
                    '5000': { price: 162000 },
                    '6300': { price: 204600 }
                },
                tee: {
                    '400': { price: 17500 },
                    '500': { price: 19000 },
                    '630': { price: 20500 },
                    '800': { price: 22500 },
                    '1000': { price: 26500 },
                    '1250': { price: 29500 },
                    '1600': { price: 38000 },
                    '2000': { price: 43000 },
                    '2500': { price: 47000 },
                    '3200': { price: 55000 },
                    '4000': { price: 59000 },
                    '5000': { price: 63500 },
                    '6300': { price: 80000 }
                },
                transformer: {
                    '400': { price: 806400 },
                    '500': { price: 806400 },
                    '630': { price: 806400 },
                    '800': { price: 806400 },
                    '1000': { price: 807000 },
                    '1250': { price: 945000 },
                    '1600': { price: 1082400 },
                    '2000': { price: 1219800 },
                    '2500': { price: 1794000 },
                    '3200': { price: 1977600 },
                    '4000': { price: 2165400 },
                    '5000': { price: 2398200 },
                    '6300': { price: 3186600 }
                },
                grsh: {
                    '400': { price: 22320 },
                    '500': { price: 26580 },
                    '630': { price: 29340 },
                    '800': { price: 33420 },
                    '1000': { price: 43500 },
                    '1250': { price: 50640 },
                    '1600': { price: 49020 },
                    '2000': { price: 85020 },
                    '2500': { price: 107280 },
                    '3200': { price: 119460 },
                    '4000': { price: 138000 },
                    '5000': { price: 160200 },
                    '6300': { price: 192600 }
                },
                connector: {
                    '400': { price: 33780 },
                    '500': { price: 33780 },
                    '630': { price: 33840 },
                    '800': { price: 37320 },
                    '1000': { price: 43560 },
                    '1250': { price: 50340 },
                    '1600': { price: 64920 },
                    '2000': { price: 83820 },
                    '2500': { price: 116820 },
                    '3200': { price: 142200 },
                    '4000': { price: 191400 },
                    '5000': { price: 228600 },
                    '6300': { price: 330600 }
                },
                fastener: {
                    '400': { price: 4002 },
                    '500': { price: 4002 },
                    '630': { price: 4002 },
                    '800': { price: 4002 },
                    '1000': { price: 4002 },
                    '1250': { price: 4314 },
                    '1600': { price: 4590 },
                    '2000': { price: 4920 },
                    '2500': { price: 4920 },
                    '3200': { price: 6660 },
                    '4000': { price: 7500 },
                    '5000': { price: 9000 },
                    '6300': { price: 9000 }
                },
                outlet: {
                    '125': { price: 91560 },
                    '160': { price: 91560 },
                    '250': { price: 91560 },
                    '400': { price: 188400 },
                    '500': { price: 188400 },
                    '630': { price: 385800 },
                    '800': { price: 427800 },
                    '1000': { price: 427800 },
                    '1250': { price: 427800 },
                    '1600': { price: 479400 }
                },
                cableTerminal: {
                    '400': { price: 110880 },
                    '500': { price: 115260 },
                    '630': { price: 118800 },
                    '800': { price: 124200 },
                    '1000': { price: 139200 },
                    '1250': { price: 157800 },
                    '1600': { price: 181200 },
                    '2000': { price: 204000 },
                    '2500': { price: 245400 },
                    '3200': { price: 282000 },
                    '4000': { price: 309600 },
                    '5000': { price: 340800 },
                    '6300': { price: 375000 }
                }
            }
        },
        connectors: {
            perStraight: 1,
            perAngle: 1,
            perTee: 1,
            perOutlet: 1,
            perConnection: 1,
            perCableTerminal: 1
        },
        fasteners: {
            perStraight: 1,
            perAngle: 1,
            perTee: 2,
            perOutlet: 2,
            perCableTerminal: 2
        }
    };

    // =========================
    // ПОЛУЧЕНИЕ DOM
    // =========================
    const form = document.getElementById('busbar-form');
    const resultDiv = document.getElementById('calculation-result');
    const componentsDiv = document.getElementById('components-list');
    const totalPriceDiv = document.getElementById('total-price');
    const canvas = document.getElementById('busbar-canvas');
    const ctx = canvas.getContext('2d');
    const segmentsContainer = document.getElementById('segments-container');
    const addSegmentBtn = document.getElementById('add-segment');
    const removeSegmentBtn = document.getElementById('remove-segment');
    const totalLengthInput = document.getElementById('total-length');
    const currentSelect = document.getElementById('current');
    const materialSelect = document.getElementById('material');
    const mountingStepInput = document.getElementById('mounting-step');
    const errorMessage = document.querySelector('.error-message');
    const startPointSelect = document.getElementById('start-point');
    const endPointSelect = document.getElementById('end-point');
    const exportExcelBtn = document.getElementById('export-excel');

    // Глобальное хранилище последнего расчёта
    let lastCalculation = null;

    // =========================
    // ИНИЦИАЛИЗАЦИЯ СОБЫТИЙ
    // =========================
    materialSelect.addEventListener('change', updateCurrentOptions);
    startPointSelect.addEventListener('change', updateConnectionTypes);
    endPointSelect.addEventListener('change', updateConnectionTypes);
    segmentsContainer.addEventListener('change', handleSegmentChange);
    addSegmentBtn.addEventListener('click', addSegment);
    removeSegmentBtn.addEventListener('click', removeSegment);
    totalLengthInput.addEventListener('change', distributeLengths);
    form.addEventListener('submit', calculateAndDraw);
    exportExcelBtn.addEventListener('click', exportToExcel);

    // =========================
    // ВСПОМОГАТЕЛЬНЫЕ UI-ФУНКЦИИ
    // =========================
    function updateCurrentOptions() {
        const isCopper = materialSelect.value === 'copper';
        document.querySelectorAll('.copper-only').forEach(opt => {
            opt.style.display = isCopper ? 'block' : 'none';
        });
        if (!isCopper && currentSelect.value === '6300') currentSelect.value = '5000';
        updateConnectionTypes();
    }

    function updateConnectionTypes() {
        // зарезервировано для логики ограничения типов окончания по материалу
        const isCopper = materialSelect.value === 'copper';
        const endPoint = endPointSelect.value;
        Array.from(endPointSelect.options).forEach(option => {
            if (option.value === 'cable') {
                option.disabled = !isCopper;
                if (!isCopper && endPoint === 'cable') endPointSelect.value = 'none';
            }
        });
    }

    function updateBlockControls(select) {
        const segment = select.closest('.segment-input');
        const directionGroup = segment.querySelector('.direction-group');
        const branchGroup = segment.querySelector('.branch-group');
        const outletGroup = segment.querySelector('.outlet-group');
        const cableTerminalGroup = segment.querySelector('.cable-terminal-group');

        directionGroup.style.display = select.value !== 'none' ? 'block' : 'none';
        branchGroup.style.display = select.value === 'tee' ? 'block' : 'none';
        outletGroup.style.display = select.value === 'outlet' ? 'block' : 'none';
        if (cableTerminalGroup) {
            cableTerminalGroup.style.display = select.value === 'cable-terminal' ? 'block' : 'none';
        }
        const angleInput = segment.querySelector('.angle');
        if (angleInput) angleInput.disabled = select.value !== 'angle';
    }

    function handleSegmentChange(e) {
        if (e.target.classList.contains('block-type')) updateBlockControls(e.target);
        updateTotalLength();
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => (errorMessage.style.display = 'none'), 5000);
    }

    function updateTotalLength() {
        const total = Array.from(document.querySelectorAll('.segment-length')).reduce(
            (sum, input) => sum + (parseFloat(input.value) || 0),
            0
        );
        totalLengthInput.value = total.toFixed(1);
    }

    function distributeLengths() {
        const total = parseFloat(totalLengthInput.value) || 0;
        const inputs = document.querySelectorAll('.segment-length');
        if (!inputs.length) return;
        const lengthPerSegment = total / inputs.length;
        inputs.forEach(input => (input.value = lengthPerSegment.toFixed(1)));
    }

    function addSegment() {
        if (segmentsContainer.children.length >= 10) {
            showError('Максимальное количество сегментов: 10');
            return;
        }
        const newId = segmentsContainer.children.length + 1;
        const newSegment = document.createElement('div');
        newSegment.className = 'segment-input';
        newSegment.dataset.id = newId;
        const autoLen = (parseFloat(totalLengthInput.value) / newId || 1).toFixed(1);

        newSegment.innerHTML = `
            <label>Сегмент ${newId} (длина, м):</label>
            <input type="number" class="segment-length" min="0.4" max="50" step="0.1" value="${autoLen}" required>

            <label>Тип блока после сегмента:</label>
            <select class="block-type">
                <option value="none">Нет</option>
                <option value="angle">Угловой поворот</option>
                <option value="tee">Т-образный отвод</option>
                <option value="outlet">Отводной блок с выключателем</option>
            </select>

            <div class="direction-group" style="display: none;">
                <label>Направление:</label>
                <select class="direction">
                    <option value="right">Вправо</option>
                    <option value="left">Влево</option>
                    <option value="up">Вверх</option>
                    <option value="down">Вниз</option>
                </select>
                <label class="angle-label">Угол (°):</label>
                <input type="number" class="angle" min="0" max="90" value="90" disabled>
            </div>

            <div class="branch-group" style="display: none; margin-top: 10px; padding: 10px; background: #e8f4fc; border-radius: 4px;">
                <h4>Ответвление:</h4>
                <div class="input-group">
                    <label>Длина ответвления (м):</label>
                    <input type="number" class="branch-length" min="0.4" max="50" step="0.1" value="5">
                </div>
                <div class="input-group">
                    <label>Конечная точка ответвления:</label>
                    <select class="branch-end-point">
                        <option value="none">Нет</option>
                        <option value="transformer">Трансформатор</option>
                        <option value="grsh">ГРЩ</option>
                        <option value="endcap">Концевая заглушка</option>
                    </select>
                </div>
            </div>

            <div class="outlet-group" style="display: none; margin-top: 10px; padding: 10px; background: #e0f7fa; border-radius: 4px;">
                <h4>Отводной блок с выключателем:</h4>
                <div class="input-group">
                    <label>Номинал блока (A):</label>
                    <select class="outlet-current">
                        <option value="125">125</option>
                        <option value="160">160</option>
                        <option value="250">250</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="630">630</option>
                        <option value="800">800</option>
                        <option value="1000">1000</option>
                        <option value="1250">1250</option>
                        <option value="1600">1600</option>
                    </select>
                </div>
            </div>
        `;
        segmentsContainer.appendChild(newSegment);
        updateTotalLength();
    }

    function removeSegment() {
        if (segmentsContainer.children.length <= 1) {
            showError('Должен остаться хотя бы один сегмент');
            return;
        }
        segmentsContainer.removeChild(segmentsContainer.lastChild);
        updateTotalLength();
    }

    // =========================
    // ПОЛУЧЕНИЕ ДАННЫХ И ВАЛИДАЦИЯ
    // =========================
    function getSegmentsData() {
        return Array.from(document.querySelectorAll('.segment-input')).map(segment => {
            const blockType = segment.querySelector('.block-type').value;
            return {
                id: segment.dataset.id,
                length: parseFloat(segment.querySelector('.segment-length').value) || 0,
                blockType,
                direction: segment.querySelector('.direction')?.value || null,
                angle: parseFloat(segment.querySelector('.angle')?.value) || 90,
                branch:
                    blockType === 'tee'
                        ? {
                              length: parseFloat(segment.querySelector('.branch-length').value) || 0,
                              endPoint: segment.querySelector('.branch-end-point').value
                          }
                        : null,
                outlet:
                    blockType === 'outlet'
                        ? {
                              current: segment.querySelector('.outlet-current').value
                          }
                        : null,
                cableTerminal:
                    blockType === 'cable-terminal'
                        ? {
                              type: segment.querySelector('.cable-type')?.value || null
                          }
                        : null
            };
        });
    }

    function validateTotalLength(segments) {
        const total = segments.reduce((sum, seg) => sum + seg.length, 0);
        const inputTotal = parseFloat(totalLengthInput.value);
        if (Math.abs(total - inputTotal) > 0.1) {
            throw new Error(`Сумма длин сегментов (${total.toFixed(1)} м) не равна общей длине (${inputTotal} м)`);
        }
    }

    // =========================
    // РАСЧЁТ СПЕЦИФИКАЦИИ И СТОИМОСТИ
    // =========================
    function calculateComponents(segments, current, material, startPoint, endPoint, mountingStep) {
        const components = [];
        const materialConfig = config.materials[material];
        let connectorCount = 0;
        let fastenerCount = 0;

        // Начальная точка
        if (startPoint !== 'none') {
            if (startPoint === 'transformer' || startPoint === 'grsh') {
                const typeRu = startPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
                const price = materialConfig[startPoint][current].price;
                components.push({
                    type: `Блок подключения к ${typeRu} (начальный)`,
                    price
                });
                connectorCount += config.connectors.perConnection;
            }
        }

        // Сегменты
        segments.forEach((segment, i) => {
            // Прямая секция
            const straightPrice = materialConfig.straight[current].pricePerMeter * segment.length;
            components.push({
                type: 'Прямая секция',
                length: segment.length,
                price: straightPrice
            });

            // Соединители внутри прямого участка (каждые maxStraightLength м)
            const connectorsForStraight = Math.max(0, Math.ceil(segment.length / config.maxStraightLength) - 1);
            connectorCount += connectorsForStraight;

            // Крепления для прямого участка
            fastenerCount += Math.ceil(segment.length / mountingStep);

            // Блок после сегмента (если не последний)
            if (segment.blockType !== 'none' && i < segments.length - 1) {
                connectorCount += config.connectors.perConnection;

                let blockPrice = 0;
                let blockType = '';

                if (segment.blockType === 'angle') {
                    blockPrice = materialConfig.angle[current].price;
                    blockType = `Угловая секция (${segment.angle}°)`;
                    connectorCount += config.connectors.perAngle;
                    fastenerCount += config.fasteners.perAngle;
                } else if (segment.blockType === 'tee') {
                    blockPrice = materialConfig.tee[current].price;
                    blockType = `Т-образный отвод`;
                    connectorCount += config.connectors.perTee;
                    fastenerCount += config.fasteners.perTee;

                    // Ответвление
                    if (segment.branch && segment.branch.length > 0) {
                        const branchPrice = materialConfig.straight[current].pricePerMeter * segment.branch.length;
                        components.push({
                            type: 'Прямая секция ответвления',
                            length: segment.branch.length,
                            price: branchPrice
                        });

                        fastenerCount += Math.ceil(segment.branch.length / mountingStep);

                        if (segment.branch.endPoint && segment.branch.endPoint !== 'none') {
                            if (segment.branch.endPoint === 'transformer' || segment.branch.endPoint === 'grsh') {
                                const typeRu = segment.branch.endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
                                const price = materialConfig[segment.branch.endPoint][current].price;
                                components.push({
                                    type: `Блок подключения к ${typeRu} (ответвление)`,
                                    price
                                });
                                connectorCount += config.connectors.perConnection;
                            } else if (segment.branch.endPoint === 'endcap') {
                                components.push({
                                    type: 'Концевая заглушка (ответвление)',
                                    price: 0
                                });
                                connectorCount += config.connectors.perConnection;
                            }
                        }
                    }
                } else if (segment.blockType === 'outlet') {
                    blockPrice = materialConfig.outlet[segment.outlet.current].price;
                    blockType = `Отводной блок с выключателем ${segment.outlet.current}A`;
                    connectorCount += config.connectors.perOutlet;
                    fastenerCount += config.fasteners.perOutlet;
                } else if (segment.blockType === 'cable-terminal') {
                    // Если когда-нибудь появится в UI
                    const price = materialConfig.cableTerminal[current].price;
                    blockType = `Кабельный терминал`;
                    blockPrice = price;
                    connectorCount += config.connectors.perCableTerminal;
                    fastenerCount += config.fasteners.perCableTerminal;
                }

                components.push({
                    type: blockType,
                    price: blockPrice
                });

                // Межсекционный соединитель после блока
                connectorCount += config.connectors.perConnection;
            } else if (i < segments.length - 1) {
                // Если блока нет, но сегменты соединяются
                connectorCount += config.connectors.perConnection;
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            if (endPoint === 'transformer' || endPoint === 'grsh') {
                const typeRu = endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
                const price = materialConfig[endPoint][current].price;
                components.push({
                    type: `Блок подключения к ${typeRu} (конечный)`,
                    price
                });
                connectorCount += config.connectors.perConnection;
            } else if (endPoint === 'endcap') {
                components.push({
                    type: 'Концевая заглушка (конец трассы)',
                    price: 0
                });
                connectorCount += config.connectors.perConnection;
            }
        }

        // Сводные позиции по соединителям и креплениям
        if (connectorCount > 0) {
            components.push({
                type: 'Соединительные блоки',
                quantity: connectorCount,
                price: (config.materials[material].connector[current].price || 0) * connectorCount
            });
        }
        if (fastenerCount > 0) {
            components.push({
                type: 'Крепления',
                quantity: fastenerCount,
                price: (config.materials[material].fastener[current].price || 0) * fastenerCount
            });
        }

        const totalPrice = components.reduce((sum, c) => sum + (c.price || 0), 0);
        return { components, totalPrice };
    }

    // =========================
    // ОТОБРАЖЕНИЕ РЕЗУЛЬТАТОВ
    // =========================
    function displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, mountingStep) {
        const totalLength = segments.reduce((sum, seg) => sum + seg.length, 0);
        const connectorItem = components.find(c => c.type === 'Соединительные блоки');
        const fastenerItem = components.find(c => c.type === 'Крепления');

        const formatPoint = point => {
            if (point === 'transformer') return 'Трансформатор';
            if (point === 'grsh') return 'ГРЩ';
            if (point === 'endcap') return 'Концевая заглушка';
            return 'Нет';
        };

        resultDiv.innerHTML = `
            <p><strong>Номинальный ток:</strong> ${current} A</p>
            <p><strong>Материал:</strong> ${material === 'aluminum' ? 'Алюминий' : 'Медь'}</p>
            <p><strong>Начальная точка:</strong> ${formatPoint(startPoint)}</p>
            <p><strong>Конечная точка:</strong> ${formatPoint(endPoint)}</p>
            <p><strong>Общая длина:</strong> ${totalLength.toFixed(1)} м</p>
            <p><strong>Количество сегментов:</strong> ${segments.length}</p>
            <p><strong>Шаг креплений:</strong> ${mountingStep} м</p>
            <p><strong>Соединительные блоки:</strong> ${connectorItem?.quantity || 0} шт</p>
            <p><strong>Крепления:</strong> ${fastenerItem?.quantity || 0} шт</p>
            <p><strong>Степень защиты:</strong> ${ip}</p>
            <p><strong>Огнестойкость:</strong> ${fireproof === 'yes' ? 'Да (180 мин)' : 'Нет'}</p>
        `;

        componentsDiv.innerHTML = '<h4>Спецификация:</h4>';
        components.forEach(comp => {
            const div = document.createElement('div');
            div.className = 'component-item';
            const details = [];
            if (comp.length) details.push(`Длина: ${comp.length} м`);
            if (comp.quantity) details.push(`Количество: ${comp.quantity}`);
            div.innerHTML = `
                <span>${comp.type}${details.length ? ` (${details.join(', ')})` : ''}</span>
                <span>${(comp.price || 0).toLocaleString('ru-RU')} руб</span>
            `;
            componentsDiv.appendChild(div);
        });

        totalPriceDiv.innerHTML = `
            <strong>Итоговая стоимость:</strong> ${totalPrice.toLocaleString('ru-RU')} руб (без НДС)
            <br><small>Цены указаны в рублях и могут меняться</small>
        `;
    }

    // =========================
    // ОТРИСОВКА (Canvas) — фирменные цвета System Electric
    // =========================
    function drawBusbar(segments, startPoint, endPoint, mountingStep) {
        // Очистка
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Параметры отрисовки
        const scale = 30; // 1 м = 30 px
        const busbarThickness = 12;
        const colors = {
            busbar: '#005BAC',          // фирменный синий
            accent: '#78BE20',          // фирменный зелёный
            transformerBody: '#009739', // зелёный для трансформатора
            grshBody: '#333333',        // тёмно-серый для ГРЩ
            connector: '#808080',       // серый соединитель
            tee: '#2ecc71',
            outlet: '#f39c12',
            branch: '#9b59b6',
            fastener: '#e74c3c',
            text: '#2c3e50',
            outline: '#000000'
        };

        // ===== Вспомогательные рисовалки =====
        function drawTransformer(x, y, isStart) {
            const w = 90, h = 60;
            ctx.fillStyle = colors.transformerBody;
            ctx.fillRect(x - w / 2, y - h / 2, w, h);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            // две катушки
            ctx.beginPath();
            ctx.arc(x - 15, y, 12, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x + 15, y, 12, 0, Math.PI * 2);
            ctx.stroke();
            // подпись
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText('ТР', x, y + h / 2 - 10);

            // точка подключения
            return {
                x: isStart ? x + w / 2 : x - w / 2,
                y
            };
        }

        function drawGRSH(x, y, isStart) {
            const w = 90, h = 60;
            ctx.fillStyle = colors.grshBody;
            ctx.fillRect(x - w / 2, y - h / 2, w, h);
            ctx.strokeStyle = colors.accent;
            ctx.lineWidth = 2;
            ctx.strokeRect(x - w / 2 + 10, y - h / 2 + 10, w - 20, h - 20);
            ctx.fillStyle = colors.accent;
            ctx.fillRect(x - 15, y - 8, 30, 16);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.fillText('ГРЩ', x, y + h / 2 - 10);

            return {
                x: isStart ? x + w / 2 : x - w / 2,
                y
            };
        }

        function drawEndcap(x, y, direction) {
            // простая заглушка — прямоугольная накладка на торце
            const w = 10, h = 22;
            ctx.save();
            ctx.translate(x, y);
            const angle = Math.atan2(direction.y, direction.x);
            ctx.rotate(angle);
            ctx.fillStyle = '#6c757d';
            ctx.fillRect(0, -h / 2, w, h);
            ctx.restore();
        }

        function drawDevice(x, y, type, isStart, direction) {
            if (type === 'transformer') return drawTransformer(x, y, isStart);
            if (type === 'grsh') return drawGRSH(x, y, isStart);
            if (type === 'endcap') {
                drawEndcap(x, y, direction || { x: 1, y: 0 });
                return { x, y };
            }
            return { x, y };
        }

        function drawSegment(x, y, length, direction, color = colors.busbar) {
            const endX = x + length * scale * direction.x;
            const endY = y + length * scale * direction.y;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = busbarThickness;
            ctx.strokeStyle = color;
            ctx.lineCap = 'butt';
            ctx.stroke();

            // Подпись длины (для >= 1м)
            if (length >= 1) {
                ctx.fillStyle = colors.text;
                ctx.font = '12px Segoe UI';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(`${length.toFixed(1)} м`, (x + endX) / 2, (y + endY) / 2 - 10);
            }
            return { x: endX, y: endY };
        }

        function drawConnector(x, y) {
            const size = 12;
            ctx.fillStyle = colors.connector;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.strokeStyle = colors.outline;
            ctx.lineWidth = 1;
            ctx.strokeRect(x - size / 2, y - size / 2, size, size);
        }

        function drawFastener(x, y, direction) {
            const len = 20;
            const perp = { x: -direction.y, y: direction.x };
            ctx.beginPath();
            ctx.moveTo(x - (perp.x * len) / 2, y - (perp.y * len) / 2);
            ctx.lineTo(x + (perp.x * len) / 2, y + (perp.y * len) / 2);
            ctx.strokeStyle = colors.fastener;
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        function drawTurn(x, y, angle, turnDirection, currentDir) {
    // Абсолютные направления (визуально на экране)
    let newDir = currentDir;
    switch (turnDirection) {
        case 'right':
            newDir = { x: 1, y: 0 };   // вправо по экрану
            break;
        case 'left':
            newDir = { x: -1, y: 0 };  // влево по экрану
            break;
        case 'up':
            newDir = { x: 0, y: -1 };  // вверх по экрану
            break;
        case 'down':
            newDir = { x: 0, y: 1 };   // вниз по экрану
            break;
    }

    // Рисуем угол (короткий стык между текущим и новым направлением)
    ctx.beginPath();
    ctx.moveTo(x - 15 * currentDir.x, y - 15 * currentDir.y);
    ctx.lineTo(x, y);
    ctx.lineTo(x + 15 * newDir.x, y + 15 * newDir.y);
    ctx.lineWidth = busbarThickness;
    ctx.strokeStyle = colors.busbar;
    ctx.stroke();

    // Крепления
    drawFastener(x, y, currentDir);
    drawFastener(x, y, newDir);

    // Подпись угла
    ctx.fillStyle = colors.accent;
    ctx.font = 'bold 13px Segoe UI';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`${angle}°`, x + 10, y - 10);

    return newDir;
}

        function drawTee(x, y, direction, branchLength) {
            // центральный узел
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = colors.tee;
            ctx.fill();

            // направление отвода
            let branchDir = { x: 0, y: 1 };
            switch (direction) {
                case 'right':
                    branchDir = { x: 1, y: 0 };
                    break;
                case 'left':
                    branchDir = { x: -1, y: 0 };
                    break;
                case 'up':
                    branchDir = { x: 0, y: -1 };
                    break;
                case 'down':
                    branchDir = { x: 0, y: 1 };
                    break;
            }

            drawSegment(x, y, branchLength, branchDir, colors.branch);

            ctx.fillStyle = colors.text;
            ctx.font = 'bold 12px Segoe UI';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText('Т-отвод', x, y - 12);
        }

        function drawOutlet(x, y, current) {
            const size = 22;
            ctx.fillStyle = colors.outlet;
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.strokeStyle = colors.outline;
            ctx.lineWidth = 1;
            ctx.strokeRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 10px Segoe UI';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(current + 'A', x, y);
        }

        // ===== Основной алгоритм отрисовки трассы =====
        let x = 80;
        let y = canvas.height / 2;
        let direction = { x: 1, y: 0 }; // вправо

        // Начальное устройство (если есть)
        if (startPoint !== 'none') {
            const deviceCenterX = x;
            const deviceCenterY = y;
            const connectPoint = drawDevice(deviceCenterX, deviceCenterY, startPoint, true, direction);
            // Соединитель у края устройства
            x = connectPoint.x;
            y = connectPoint.y;
            drawConnector(x, y);
            x += 6 * direction.x;
            y += 6 * direction.y;
        }

        // Сегменты
        segments.forEach((segment, i) => {
            // Прямая секция
            const endPos = drawSegment(x, y, segment.length, direction);
            // Крепления вдоль сегмента
            const fastenerCount = Math.floor(segment.length / mountingStep);
            for (let j = 1; j <= fastenerCount; j++) {
                const fx = endPos.x - (segment.length - j * mountingStep) * scale * direction.x;
                const fy = endPos.y - (segment.length - j * mountingStep) * scale * direction.y;
                drawFastener(fx, fy, direction);
            }
            // Соединители через каждые maxStraightLength
            const innerConn = Math.ceil(segment.length / config.maxStraightLength) - 1;
            for (let j = 1; j <= innerConn; j++) {
                const cx = endPos.x - (segment.length - j * config.maxStraightLength) * scale * direction.x;
                const cy = endPos.y - (segment.length - j * config.maxStraightLength) * scale * direction.y;
                drawConnector(cx, cy);
            }

            x = endPos.x;
            y = endPos.y;

            // Узел после сегмента (если не последний)
            if (segment.blockType !== 'none' && i < segments.length - 1) {
                drawConnector(x, y);

                if (segment.blockType === 'angle') {
                    direction = drawTurn(x, y, segment.angle, segment.direction, direction);
                } else if (segment.blockType === 'tee') {
                    drawTee(x, y, segment.direction, segment.branch ? segment.branch.length : 0);
                } else if (segment.blockType === 'outlet') {
                    drawOutlet(x, y, segment.outlet.current);
                }
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            drawConnector(x, y);
            x += 6 * direction.x;
            y += 6 * direction.y;
            // Сместим центр конечного устройства по направлению трассы
            const deviceCenterX = x + 40 * direction.x;
            const deviceCenterY = y + 40 * direction.y * 0; // по центру
            drawDevice(endPoint === 'endcap' ? x : deviceCenterX, deviceCenterY, endPoint, false, direction);
        }

        // Автомасштабирование по ширине
        const neededWidth = x + 120;
        if (neededWidth > canvas.width) {
            canvas.width = neededWidth;
            // перерисуем с учётом нового размера
            drawBusbar(segments, startPoint, endPoint, mountingStep);
        }
    }

    // =========================
    // ЭКСПОРТ В EXCEL
    // =========================
    function exportToExcel() {
        if (!lastCalculation) {
            showError('Сначала выполните расчет');
            return;
        }

        const { projectName, components, totalPrice, current, material, ip, fireproof } = lastCalculation;

        const data = [
            [`Наименование проекта:`, projectName || '', "", "", "", ""],
            ["1) Данная спецификация может быть использована для формирования бюджета на закупку шинопровода, но не может быть использована для размещения заказа.", "", "", "", "", ""],
            ["2) Спецификация является упрощенной и может корректироваться с получением дополнительных исходных данных. Разница между бюджетной оценкой и заказной спецификацией может достигать 5% в большую или меньшую сторону.", "", "", "", "", ""],
            ["3) В случае размещения заказа необходимо подготовить трассы шинопровода, получить заказную спецификацию с поэлементным перечнем трассы и запрос КП через Центр Поддержки Клиентов: support@systeme.ru", "", "", "", "", ""],
            ["", "", "", "", "ИТОГО:", totalPrice.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })],
            [],
            ["", `Шинопровод МГ - SystemeLine BDW ${current}A 3L+N+PE (шина ${material === 'aluminum' ? 'AL' : 'Cu'}), ${material === 'aluminum' ? 'Алюминий' : 'Медь'}, ${ip}${fireproof === 'yes' ? ', огнестойкое исполнение' : ''}`],
            [],
            ["Референс", "Описание", "Количество", "Ед. изм.", "Тариф, руб. без НДС, от " + new Date().toLocaleDateString('ru-RU'), "Сумма, руб. без НДС"]
        ];

        components.forEach(comp => {
            let qty = comp.quantity || 1;
            let unit = comp.length ? 'метр' : 'штука';
            let unitPrice;

            if (comp.length) {
                qty = comp.length;
                unitPrice = (comp.price / comp.length) || 0;
            } else if (comp.quantity) {
                unitPrice = (comp.price / comp.quantity) || 0;
            } else {
                unitPrice = comp.price || 0;
            }

            data.push([
                "",
                comp.type,
                typeof qty === 'number' ? qty : String(qty),
                unit,
                Number(unitPrice).toFixed(2),
                (comp.price || 0).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            ]);
        });

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Спецификация");

        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(
            { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } },
            { s: { r: 1, c: 0 }, e: { r: 1, c: 5 } },
            { s: { r: 2, c: 0 }, e: { r: 2, c: 5 } },
            { s: { r: 3, c: 0 }, e: { r: 3, c: 5 } },
            { s: { r: 6, c: 1 }, e: { r: 6, c: 5 } }
        );

        XLSX.writeFile(wb, `Спецификация_${(projectName || 'шинопровод')}.xlsx`);
    }

    // =========================
    // ГЛАВНАЯ ТОЧКА — РАСЧЁТ + ОТРИСОВКА
    // =========================
    function calculateAndDraw(e) {
        e.preventDefault();
        errorMessage.style.display = 'none';
        try {
            const projectName = document.getElementById('project-name').value;
            const current = currentSelect.value;
            const material = materialSelect.value;
            const startPoint = startPointSelect.value;
            const endPoint = endPointSelect.value;
            const ip = document.getElementById('ip').value;
            const fireproof = document.getElementById('fireproof').value;
            const mountingStep = parseFloat(mountingStepInput.value) || 1;

            const segments = getSegmentsData();
            validateTotalLength(segments);

            const { components, totalPrice } = calculateComponents(
                segments, current, material, startPoint, endPoint, mountingStep
            );

            displayResults(
                components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, mountingStep
            );

            drawBusbar(segments, startPoint, endPoint, mountingStep);

            lastCalculation = {
                projectName,
                components,
                totalPrice,
                current,
                material,
                startPoint,
                endPoint,
                ip,
                fireproof,
                segments,
                mountingStep
            };
        } catch (err) {
            showError(err.message || String(err));
        }
    }

    // =========================
    // СТАРТОВАЯ ИНИЦИАЛИЗАЦИЯ
    // =========================
    updateCurrentOptions();

    // Пробная первичная отрисовка по дефолтным данным формы
    try {
        const segments = getSegmentsData();
        drawBusbar(segments, startPointSelect.value, endPointSelect.value, parseFloat(mountingStepInput.value) || 1);
    } catch (_) {
        // молча игнорируем, пока пользователь не нажал "Рассчитать"
    }
});
