document.addEventListener('DOMContentLoaded', function() {
    // Обновлённая конфигурация цен
    const config = {
        maxStraightLength: 3,
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

    // Получение DOM-элементов
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

    // Глобальная переменная для хранения последних данных расчета
    let lastCalculation = null;

    // Инициализация событий
    materialSelect.addEventListener('change', updateCurrentOptions);
    startPointSelect.addEventListener('change', updateConnectionTypes);
    endPointSelect.addEventListener('change', updateConnectionTypes);
    segmentsContainer.addEventListener('change', handleSegmentChange);
    addSegmentBtn.addEventListener('click', addSegment);
    removeSegmentBtn.addEventListener('click', removeSegment);
    totalLengthInput.addEventListener('change', distributeLengths);
    form.addEventListener('submit', calculateAndDraw);
    exportExcelBtn.addEventListener('click', exportToExcel);

    // Обновление доступных токов при смене материала
    function updateCurrentOptions() {
        const isCopper = materialSelect.value === 'copper';
        document.querySelectorAll('.copper-only').forEach(opt => {
            opt.style.display = isCopper ? 'block' : 'none';
        });
        if (!isCopper && currentSelect.value === '6300') currentSelect.value = '5000';
        updateConnectionTypes();
    }

    // Обновление типов подключений в зависимости от материала
    function updateConnectionTypes() {
        const isCopper = materialSelect.value === 'copper';
        const startPoint = startPointSelect.value;
        const endPoint = endPointSelect.value;
        
        // Обновление конечных точек
        Array.from(endPointSelect.options).forEach(option => {
            if (option.value === 'cable') {
                option.disabled = !isCopper;
                if (!isCopper && endPoint === 'cable') endPointSelect.value = 'none';
            }
        });
    }

    // Обновление элементов управления для блоков
    function updateBlockControls(select) {
        const segment = select.closest('.segment-input');
        const directionGroup = segment.querySelector('.direction-group');
        const branchGroup = segment.querySelector('.branch-group');
        const outletGroup = segment.querySelector('.outlet-group');
        const cableTerminalGroup = segment.querySelector('.cable-terminal-group');
        
        directionGroup.style.display = select.value !== 'none' ? 'block' : 'none';
        branchGroup.style.display = select.value === 'tee' ? 'block' : 'none';
        outletGroup.style.display = select.value === 'outlet' ? 'block' : 'none';
        cableTerminalGroup && (cableTerminalGroup.style.display = select.value === 'cable-terminal' ? 'block' : 'none');
        segment.querySelector('.angle').disabled = select.value !== 'angle';
    }

    // Обработка изменений в сегментах
    function handleSegmentChange(e) {
        if (e.target.classList.contains('block-type')) updateBlockControls(e.target);
        updateTotalLength();
    }

    // Показать ошибку
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => errorMessage.style.display = 'none', 5000);
    }

    // Обновить общую длину
    function updateTotalLength() {
        const total = Array.from(document.querySelectorAll('.segment-length'))
            .reduce((sum, input) => sum + parseFloat(input.value || 0), 0);
        totalLengthInput.value = total.toFixed(1);
    }

    // Распределить длину между сегментами
    function distributeLengths() {
        const total = parseFloat(totalLengthInput.value) || 0;
        const inputs = document.querySelectorAll('.segment-length');
        const lengthPerSegment = total / inputs.length;
        inputs.forEach(input => input.value = lengthPerSegment.toFixed(1));
    }

    // Добавить новый сегмент
    function addSegment() {
        if (segmentsContainer.children.length >= 10) {
            showError('Максимальное количество сегментов: 10');
            return;
        }
        
        const newId = segmentsContainer.children.length + 1;
        const newSegment = document.createElement('div');
        newSegment.className = 'segment-input';
        newSegment.dataset.id = newId;
        newSegment.innerHTML = `
            <label>Сегмент ${newId} (длина, м):</label>
            <input type="number" class="segment-length" min="0.4" max="50" step="0.1" value="${(parseFloat(totalLengthInput.value)/newId).toFixed(1)}" required>
            
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

    // Удалить последний сегмент
    function removeSegment() {
        if (segmentsContainer.children.length <= 1) {
            showError('Должен остаться хотя бы один сегмент');
            return;
        }
        segmentsContainer.removeChild(segmentsContainer.lastChild);
        updateTotalLength();
    }

    // Основная функция расчета и отрисовки
    function calculateAndDraw(e) {
        e.preventDefault();
        errorMessage.style.display = 'none';
        
        try {
            const projectName = document.getElementById('project-name').value;
            const current = document.getElementById('current').value;
            const material = document.getElementById('material').value;
            const startPoint = document.getElementById('start-point').value;
            const endPoint = document.getElementById('end-point').value;
            const ip = document.getElementById('ip').value;
            const fireproof = document.getElementById('fireproof').value;
            const mountingStep = parseFloat(mountingStepInput.value) || 1;
            
            const segments = getSegmentsData();
            validateTotalLength(segments);
            
            const { components, totalPrice } = calculateComponents(
                segments, current, material, startPoint, endPoint, mountingStep
            );
            displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, mountingStep);
            drawBusbar(segments, startPoint, endPoint, mountingStep);
            
            // Сохраняем данные для экспорта
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
            
        } catch (error) {
            showError(error.message);
        }
    }

    // Получить данные сегментов
    function getSegmentsData() {
        return Array.from(document.querySelectorAll('.segment-input')).map(segment => ({
            id: segment.dataset.id,
            length: parseFloat(segment.querySelector('.segment-length').value) || 0,
            blockType: segment.querySelector('.block-type').value,
            direction: segment.querySelector('.direction')?.value || null,
            angle: segment.querySelector('.angle')?.value || null,
            branch: segment.querySelector('.block-type').value === 'tee' ? {
                length: parseFloat(segment.querySelector('.branch-length').value) || 0,
                endPoint: segment.querySelector('.branch-end-point').value
            } : null,
            outlet: segment.querySelector('.block-type').value === 'outlet' ? {
                current: segment.querySelector('.outlet-current').value
            } : null,
            cableTerminal: segment.querySelector('.block-type').value === 'cable-terminal' ? {
                type: segment.querySelector('.cable-type').value
            } : null
        }));
    }

    // Проверка соответствия общей длины
    function validateTotalLength(segments) {
        const total = segments.reduce((sum, seg) => sum + seg.length, 0);
        const inputTotal = parseFloat(totalLengthInput.value);
        if (Math.abs(total - inputTotal) > 0.1) {
            throw new Error(`Сумма длин сегментов (${total.toFixed(1)} м) не равна общей длине (${inputTotal} м)`);
        }
    }

    // Расчет компонентов и стоимости
    function calculateComponents(segments, current, material, startPoint, endPoint, mountingStep) {
        const components = [];
        const materialConfig = config.materials[material];
        let connectorCount = 0;
        let fastenerCount = 0;

        // Начальная точка
        if (startPoint !== 'none') {
            const type = startPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
            const price = materialConfig[startPoint][current].price;
            components.push({ 
                type: `Блок подключения к ${type} (начальный)`, 
                price 
            });
            connectorCount += config.connectors.perConnection;
        }

        // Обработка сегментов
        segments.forEach((segment, i) => {
            // Прямая секция
            const straightPrice = materialConfig.straight[current].pricePerMeter * segment.length;
            components.push({ 
                type: 'Прямая секция', 
                length: segment.length, 
                price: straightPrice 
            });

            // Соединительные блоки для прямого участка
            const connectorsForStraight = Math.max(0, Math.ceil(segment.length / config.maxStraightLength) - 1);
            connectorCount += connectorsForStraight;

            // Крепления для прямого участка
            fastenerCount += Math.ceil(segment.length / mountingStep);

            // Блок после сегмента
            if (segment.blockType !== 'none' && i < segments.length - 1) {
                connectorCount += config.connectors.perConnection;

                let blockPrice = 0;
                let blockType = '';
                
                if (segment.blockType === 'angle') {
                    blockPrice = materialConfig.angle[current].price;
                    blockType = `Угловая секция (${segment.angle}°)`;
                    connectorCount += config.connectors.perAngle;
                    fastenerCount += config.fasteners.perAngle;
                } 
                else if (segment.blockType === 'tee') {
                    blockPrice = materialConfig.tee[current].price;
                    blockType = `Т-образный отвод`;
                    connectorCount += config.connectors.perTee;
                    fastenerCount += config.fasteners.perTee;
                    
                    // Ответвление
                    if (segment.branch.length > 0) {
                        const branchPrice = materialConfig.straight[current].pricePerMeter * segment.branch.length;
                        components.push({ 
                            type: 'Прямая секция ответвления', 
                            length: segment.branch.length, 
                            price: branchPrice 
                        });
                        
                        fastenerCount += Math.ceil(segment.branch.length / mountingStep);
                        
                        if (segment.branch.endPoint !== 'none') {
                            const type = segment.branch.endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
                            const price = materialConfig[segment.branch.endPoint][current].price;
                            components.push({ 
                                type: `Блок подключения к ${type} (ответвление)`, 
                                price 
                            });
                            connectorCount += config.connectors.perConnection;
                        }
                    }
                } 
                else if (segment.blockType === 'outlet') {
                    blockPrice = materialConfig.outlet[segment.outlet.current].price;
                    blockType = `Отводной блок с выключателем ${segment.outlet.current}A`;
                    connectorCount += config.connectors.perOutlet;
                    fastenerCount += config.fasteners.perOutlet;
                }
                
                components.push({ 
                    type: blockType, 
                    price: blockPrice 
                });
                
                connectorCount += config.connectors.perConnection;
            } 
            else if (i < segments.length - 1) {
                // Соединитель между прямыми сегментами
                connectorCount += config.connectors.perConnection;
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            const type = endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
            const price = materialConfig[endPoint][current].price;
            components.push({ 
                type: `Блок подключения к ${type} (конечный)`, 
                price 
            });
            connectorCount += config.connectors.perConnection;
        }

        // Добавление соединителей и креплений
        if (connectorCount > 0) {
            components.push({
                type: 'Соединительные блоки',
                quantity: connectorCount,
                price: materialConfig.connector[current].price * connectorCount
            });
        }

        if (fastenerCount > 0) {
            components.push({
                type: 'Крепления',
                quantity: fastenerCount,
                price: materialConfig.fastener[current].price * fastenerCount
            });
        }

        const totalPrice = components.reduce((sum, comp) => sum + comp.price, 0);
        return { components, totalPrice };
    }

    // Отображение результатов
    function displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, mountingStep) {
        const totalLength = segments.reduce((sum, seg) => sum + seg.length, 0);
        const connectorItem = components.find(c => c.type === 'Соединительные блоки');
        const fastenerItem = components.find(c => c.type === 'Крепления');
        
        // Форматирование точек подключения
        const formatPoint = (point) => {
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
            let details = '';
            if (comp.length) details += `Длина: ${comp.length} м, `;
            if (comp.quantity) details += `Количество: ${comp.quantity}, `;
            div.innerHTML = `
                <span>${comp.type}${details ? ` (${details.slice(0, -2)})` : ''}</span>
                <span>${comp.price.toLocaleString('ru-RU')} руб</span>
            `;
            componentsDiv.appendChild(div);
        });

        totalPriceDiv.innerHTML = `
            <strong>Итоговая стоимость:</strong> ${totalPrice.toLocaleString('ru-RU')} руб (без НДС)
            <br><small>Цены указаны в рублях и могут меняться</small>
        `;
    }

    // Отрисовка шинопровода с исправленными направлениями
    function drawBusbar(segments, startPoint, endPoint, mountingStep) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = 30;
        const busbarHeight = 12;
        const colors = {
            busbar: '#3498db', transformer: '#8e44ad', grsh: '#e67e22',
            connector: '#808080', angle: '#e74c3c', tee: '#2ecc71',
            outlet: '#f39c12', branch: '#9b59b6', fastener: '#e74c3c', text: '#2c3e50'
        };

        // Функция рисования трансформатора или ГРЩ с черной окантовкой
        function drawDevice(x, y, type, isStart) {
            const width = type === 'transformer' ? 100 : 60;
            const height = 40;
            
            // Определяем точку подключения на краю устройства
            const connectionX = isStart ? x + width/2 : x - width/2;
            const connectionY = y;
            
            // Рисуем основную часть
            ctx.fillStyle = type === 'transformer' ? colors.transformer : colors.grsh;
            ctx.fillRect(x - width/2, y - height/2, width, height);
            
            // Черная окантовка
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.strokeRect(x - width/2, y - height/2, width, height);
            
            // Текст внутри
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            if (type === 'transformer') {
                ctx.fillText('ТРАНСФОРМАТОР', x, y);
            } else {
                ctx.fillText('ГРЩ', x, y);
            }
            
            // Возвращаем точку подключения на краю устройства
            return { x: connectionX, y: connectionY };
        }

        // Функция рисования прямой секции
        function drawSegment(x, y, length, direction, color = colors.busbar) {
            const endX = x + length * scale * direction.x;
            const endY = y + length * scale * direction.y;
            
            // Рисуем шинопровод
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = busbarHeight;
            ctx.strokeStyle = color;
            ctx.stroke();
            
            // Подпись длины
            if (length >= 1) {
                ctx.fillStyle = colors.text;
                ctx.font = '12px Arial';
                ctx.fillText(`${length.toFixed(1)} м`, (x + endX)/2 - 20, (y + endY)/2 - 10);
            }
            
            return { x: endX, y: endY };
        }

        // Функция рисования соединительного блока (квадратный, серый)
        function drawConnector(x, y) {
            const size = 12;
            ctx.fillStyle = colors.connector;
            ctx.fillRect(x - size/2, y - size/2, size, size);
        }

        // Функция рисования крепления (красная линия поперек шинопровода)
        function drawFastener(x, y, direction) {
            const length = 20;
            
            // Вычисляем перпендикулярное направление
            let perpDirection = { x: -direction.y, y: direction.x };
            
            // Рисуем линию
            ctx.beginPath();
            ctx.moveTo(x - perpDirection.x * length/2, y - perpDirection.y * length/2);
            ctx.lineTo(x + perpDirection.x * length/2, y + perpDirection.y * length/2);
            ctx.strokeStyle = colors.fastener;
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // Функция рисования угла 90 градусов (исправленные направления)
        function drawTurn(x, y, angle, direction, currentDir) {
            let newDir = currentDir;
            
            // Определяем новое направление на основе выбора пользователя
            switch(direction) {
                case 'right': 
                    // Поворот направо: (x, y) -> (y, -x)
                    newDir = { x: currentDir.y, y: -currentDir.x };
                    break;
                case 'left': 
                    // Поворот налево: (x, y) -> (-y, x)
                    newDir = { x: -currentDir.y, y: currentDir.x };
                    break;
                case 'up': 
                    // Поворот вверх: (x, y) -> (0, -1)
                    newDir = { x: 0, y: -1 };
                    break;
                case 'down': 
                    // Поворот вниз: (x, y) -> (0, 1)
                    newDir = { x: 0, y: 1 };
                    break;
            }
            
            // Рисуем две линии для угла
            ctx.beginPath();
            // Первая часть угла (текущее направление)
            ctx.moveTo(x - 15 * currentDir.x, y - 15 * currentDir.y);
            ctx.lineTo(x, y);
            // Вторая часть угла (новое направление)
            ctx.lineTo(x + 15 * newDir.x, y + 15 * newDir.y);
            ctx.lineWidth = busbarHeight;
            ctx.strokeStyle = colors.busbar;
            ctx.stroke();
            
            // Крепления
            drawFastener(x, y, currentDir);
            drawFastener(x, y, newDir);
            
            // Подпись угла
            ctx.fillStyle = colors.angle;
            ctx.font = 'bold 14px Arial';
            ctx.fillText(`${angle}°`, x + 20, y - 10);
            
            return newDir;
        }

        // Функция рисования Т-образного отвода
        function drawTee(x, y, direction, branchLength) {
            // Рисуем центральный узел
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = colors.tee;
            ctx.fill();
            
            // Определяем направление ответвления
            let branchDir;
            switch(direction) {
                case 'right': branchDir = {x: 1, y: 0}; break;
                case 'left': branchDir = {x: -1, y: 0}; break;
                case 'up': branchDir = {x: 0, y: -1}; break;
                case 'down': branchDir = {x: 0, y: 1}; break;
            }
            
            // Рисуем ответвление
            drawSegment(x, y, branchLength, branchDir, colors.branch);
            
            // Подпись
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Т-отвод', x - 20, y - 15);
        }

        // Функция рисования отводного блока
        function drawOutlet(x, y, current) {
            const size = 20;
            // Рисуем блок
            ctx.fillStyle = colors.outlet;
            ctx.fillRect(x - size/2, y - size/2, size, size);
            
            // Черная окантовка
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.strokeRect(x - size/2, y - size/2, size, size);
            
            // Текст
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(current + 'A', x, y);
        }

        // Основной цикл рисования
        let x = 80, y = canvas.height / 2;
        let direction = { x: 1, y: 0 };

        // Начальная точка
        if (startPoint !== 'none') {
            // Рисуем устройство и получаем точку подключения на его краю
            const deviceCenterX = x;
            const deviceCenterY = y;
            const connectionPoint = drawDevice(deviceCenterX, deviceCenterY, startPoint, true);
            
            // Начинаем шинопровод с края устройства
            x = connectionPoint.x;
            y = connectionPoint.y;
            
            // Рисуем соединитель
            drawConnector(x, y);
            
            // Сдвигаемся от края устройства
            x += 5 * direction.x;
            y += 5 * direction.y;
        }

        // Обработка сегментов
        segments.forEach((segment, i) => {
            // Прямая секция
            const endPos = drawSegment(x, y, segment.length, direction);
            x = endPos.x; 
            y = endPos.y;

            // Крепления
            const fastenerCount = Math.floor(segment.length / mountingStep);
            for (let j = 1; j <= fastenerCount; j++) {
                const fx = x - (segment.length - j * mountingStep) * scale * direction.x;
                const fy = y - (segment.length - j * mountingStep) * scale * direction.y;
                drawFastener(fx, fy, direction);
            }

            // Соединительные блоки
            const connectorCount = Math.ceil(segment.length / config.maxStraightLength) - 1;
            for (let j = 1; j <= connectorCount; j++) {
                const cx = x - (segment.length - j * config.maxStraightLength) * scale * direction.x;
                const cy = y - (segment.length - j * config.maxStraightLength) * scale * direction.y;
                drawConnector(cx, cy);
            }

            // Блок после сегмента
            if (segment.blockType !== 'none' && i < segments.length - 1) {
                drawConnector(x, y);

                if (segment.blockType === 'angle') {
                    direction = drawTurn(x, y, segment.angle, segment.direction, direction);
                } else if (segment.blockType === 'tee') {
                    drawTee(x, y, segment.direction, segment.branch.length);
                } else if (segment.blockType === 'outlet') {
                    drawOutlet(x, y, segment.outlet.current);
                }
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            // Рисуем соединитель в конце шинопровода
            drawConnector(x, y);
            
            // Сдвигаемся к краю устройства
            x += 5 * direction.x;
            y += 5 * direction.y;
            
            // Рисуем устройство и получаем точку подключения на его краю
            const deviceCenterX = endPoint === 'endcap' ? x : x + 40 * direction.x;
            const deviceCenterY = y;
            drawDevice(deviceCenterX, deviceCenterY, endPoint, false);
        }

        // Автомасштабирование
        const neededWidth = x + 200;
        const neededHeight = Math.max(canvas.height, 800);
        if (neededWidth > canvas.width || neededHeight > canvas.height) {
            canvas.width = Math.max(canvas.width, neededWidth);
            canvas.height = Math.max(canvas.height, neededHeight);
            drawBusbar(segments, startPoint, endPoint, mountingStep);
        }
    }

    // Функция экспорта в Excel
    function exportToExcel() {
        if (!lastCalculation) {
            showError('Сначала выполните расчет');
            return;
        }
        
        const { projectName, components, totalPrice, current, material, ip, fireproof } = lastCalculation;
        
        // Форматирование данных для Excel
        const data = [
            [`Наименование проекта:`, projectName, "", "", "", ""],
            ["1) Данная спецификация может быть использована для формирования бюджета на закупку шинопровода, но не может быть использована для размещения заказа.", "", "", "", "", ""],
            ["2) Спецификация является упрощенной и может корректироваться с получением дополнительных исходных данных. Разница между бюджетной оценкой и заказной спецификацией может достигать 5% в большую или меньшую сторону.", "", "", "", "", ""],
            ["3) В случае размещения заказа необходимо подготовить трассы шинопровода, получить заказную спецификацию с поэлементным перечнем трассы и запрос КП через Центр Поддержки Клиентов: support@systeme.ru", "", "", "", "", ""],
            ["", "", "", "", "ИТОГО:", totalPrice.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2})],
            [],
            ["", `Шинопровод МГ - SystemeLine BDW ${current}A 3L+N+PE (шина ${material === 'aluminum' ? 'AL' : 'Cu'}), ${material === 'aluminum' ? 'Алюминий' : 'Медь'}, ${ip}${fireproof === 'yes' ? ', огнестойкое исполнение' : ''}`],
            [],
            ["Референс", "Описание", "Количество", "Ед. изм.", "Тариф, руб. без НДС, от " + new Date().toLocaleDateString('ru-RU'), "Сумма, руб. без НДС"]
        ];

        // Добавление компонентов
        components.forEach(comp => {
            let quantity = comp.quantity || 1;
            let unit = comp.length ? 'метр' : 'штука';
            let unitPrice = comp.price;
            
            if (comp.length) {
                quantity = comp.length;
                unitPrice = (comp.price / comp.length).toFixed(2);
            } else if (comp.quantity) {
                unitPrice = (comp.price / comp.quantity).toFixed(2);
            } else {
                unitPrice = comp.price.toFixed(2);
            }

            data.push([
                "",
                comp.type,
                quantity,
                unit,
                unitPrice,
                comp.price.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2})
            ]);
        });

        // Создание книги Excel
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Спецификация");
        
        // Объединение ячеек для заголовка
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(
            {s: {r: 0, c: 0}, e: {r: 0, c: 5}},
            {s: {r: 1, c: 0}, e: {r: 1, c: 5}},
            {s: {r: 2, c: 0}, e: {r: 2, c: 5}},
            {s: {r: 3, c: 0}, e: {r: 3, c: 5}},
            {s: {r: 6, c: 1}, e: {r: 6, c: 5}}
        );
        
        // Экспорт файла
        XLSX.writeFile(wb, `Спецификация_${projectName || 'шинопровода'}.xlsx`);
    }

    // Инициализация
    updateCurrentOptions();
});
