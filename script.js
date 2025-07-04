document.addEventListener('DOMContentLoaded', function() {
    // Конфигурация
    const config = {
        maxStraightLength: 3, // Максимальная длина без соединительного блока
        materials: {
            aluminum: {
                straight: {
                    '400': { pricePerMeter: 60420 },
                    '500': { pricePerMeter: 60420 },
                    '630': { pricePerMeter: 79800 },
                    '800': { pricePerMeter: 100200 },
                    '1000': { pricePerMeter: 120600 },
                    '1250': { pricePerMeter: 150000 },
                    '1600': { pricePerMeter: 199800 },
                    '2000': { pricePerMeter: 249600 },
                    '2500': { pricePerMeter: 312000 },
                    '3200': { pricePerMeter: 390000 },
                    '4000': { pricePerMeter: 487200 },
                    '5000': { pricePerMeter: 609000 }
                },
                angle: {
                    '400': { price: 13980 },
                    '500': { price: 13980 },
                    '630': { price: 16740 },
                    '800': { price: 20220 },
                    '1000': { price: 23700 },
                    '1250': { price: 27180 },
                    '1600': { price: 34020 },
                    '2000': { price: 42540 },
                    '2500': { price: 53160 },
                    '3200': { price: 68220 },
                    '4000': { price: 85260 },
                    '5000': { price: 106560 }
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
                    '400': { price: 457200 },
                    '500': { price: 535200 },
                    '630': { price: 642000 },
                    '800': { price: 792600 },
                    '1000': { price: 943200 },
                    '1250': { price: 1179000 },
                    '1600': { price: 1572000 },
                    '2000': { price: 1965000 },
                    '2500': { price: 2457000 },
                    '3200': { price: 3144000 },
                    '4000': { price: 3930000 },
                    '5000': { price: 4914000 }
                },
                grsh: {
                    '400': { price: 104340 },
                    '500': { price: 109200 },
                    '630': { price: 114360 },
                    '800': { price: 119460 },
                    '1000': { price: 124560 },
                    '1250': { price: 129660 },
                    '1600': { price: 134760 },
                    '2000': { price: 139860 },
                    '2500': { price: 144960 },
                    '3200': { price: 150060 },
                    '4000': { price: 155160 },
                    '5000': { price: 160260 }
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
                }
            },
            copper: {
                straight: {
                    '400': { pricePerMeter: 75300 },
                    '500': { pricePerMeter: 85080 },
                    '630': { pricePerMeter: 108600 },
                    '800': { pricePerMeter: 135600 },
                    '1000': { pricePerMeter: 162600 },
                    '1250': { pricePerMeter: 198000 },
                    '1600': { pricePerMeter: 259800 },
                    '2000': { pricePerMeter: 321600 },
                    '2500': { pricePerMeter: 402000 },
                    '3200': { pricePerMeter: 502800 },
                    '4000': { pricePerMeter: 628200 },
                    '5000': { pricePerMeter: 785400 },
                    '6300': { pricePerMeter: 950000 }
                },
                angle: {
                    '400': { price: 13500 },
                    '500': { price: 14520 },
                    '630': { price: 15600 },
                    '800': { price: 17700 },
                    '1000': { price: 21840 },
                    '1250': { price: 24960 },
                    '1600': { price: 34260 },
                    '2000': { price: 39420 },
                    '2500': { price: 43620 },
                    '3200': { price: 51900 },
                    '4000': { price: 56100 },
                    '5000': { price: 60300 },
                    '6300': { price: 75000 }
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
                    '400': { price: 706800 },
                    '500': { price: 818400 },
                    '630': { price: 1010400 },
                    '800': { price: 1263000 },
                    '1000': { price: 1515600 },
                    '1250': { price: 1894200 },
                    '1600': { price: 2526000 },
                    '2000': { price: 3157200 },
                    '2500': { price: 3946800 },
                    '3200': { price: 5061600 },
                    '4000': { price: 6327600 },
                    '5000': { price: 7909200 },
                    '6300': { price: 9500000 }
                },
                grsh: {
                    '400': { price: 102660 },
                    '500': { price: 106740 },
                    '630': { price: 110820 },
                    '800': { price: 114900 },
                    '1000': { price: 118980 },
                    '1250': { price: 123060 },
                    '1600': { price: 127140 },
                    '2000': { price: 131220 },
                    '2500': { price: 135300 },
                    '3200': { price: 139380 },
                    '4000': { price: 143460 },
                    '5000': { price: 147540 },
                    '6300': { price: 160000 }
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
                }
            }
        },
        connectors: {
            perStraight: 1,
            perAngle: 1,
            perTee: 1,
            perOutlet: 1,
            perConnection: 1
        },
        fasteners: {
            perStraight: 1,
            perAngle: 1,
            perTee: 3,
            perOutlet: 3
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

    // Инициализация событий
    materialSelect.addEventListener('change', updateCurrentOptions);
    segmentsContainer.addEventListener('change', handleSegmentChange);
    addSegmentBtn.addEventListener('click', addSegment);
    removeSegmentBtn.addEventListener('click', removeSegment);
    totalLengthInput.addEventListener('change', distributeLengths);
    form.addEventListener('submit', calculateAndDraw);

    // Обновление доступных токов при смене материала
    function updateCurrentOptions() {
        const isCopper = materialSelect.value === 'copper';
        document.querySelectorAll('.copper-only').forEach(opt => {
            opt.style.display = isCopper ? 'block' : 'none';
        });
        if (!isCopper && currentSelect.value === '6300') currentSelect.value = '5000';
    }

    // Обновление элементов управления для блоков
    function updateBlockControls(select) {
        const segment = select.closest('.segment-input');
        const directionGroup = segment.querySelector('.direction-group');
        const branchGroup = segment.querySelector('.branch-group');
        const outletGroup = segment.querySelector('.outlet-group');
        
        directionGroup.style.display = select.value !== 'none' ? 'block' : 'none';
        branchGroup.style.display = select.value === 'tee' ? 'block' : 'none';
        outletGroup.style.display = select.value === 'outlet' ? 'block' : 'none';
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
            
            <div class="branch-group" style="display: none;">
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
                    </select>
                </div>
            </div>
            
            <div class="outlet-group" style="display: none;">
                <h4>Отводной блок:</h4>
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
            const current = document.getElementById('current').value;
            const material = document.getElementById('material').value;
            const startPoint = document.getElementById('start-point').value;
            const endPoint = document.getElementById('end-point').value;
            const ip = document.getElementById('ip').value;
            const fireproof = document.getElementById('fireproof').value;
            const mountingStep = parseFloat(mountingStepInput.value) || 1;
            
            const segments = getSegmentsData();
            validateTotalLength(segments);
            
            const { components, totalPrice } = calculateComponents(segments, current, material, startPoint, endPoint, mountingStep);
            displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, mountingStep);
            drawBusbar(segments, startPoint, endPoint, mountingStep);
            
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

    // Расчет компонентов и стоимости (исправленная логика)
    function calculateComponents(segments, current, material, startPoint, endPoint, mountingStep) {
        const components = [];
        const materialConfig = config.materials[material];
        let connectorCount = 0;
        let fastenerCount = 0;

        // Начальная точка
        if (startPoint !== 'none') {
            const type = startPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
            const price = materialConfig[startPoint][current].price;
            components.push({ type: `Блок подключения к ${type}`, price });
            connectorCount += config.connectors.perConnection;
        }

        // Обработка сегментов
        segments.forEach((segment, i) => {
            // Прямая секция
            const straightPrice = materialConfig.straight[current].pricePerMeter * segment.length;
            components.push({ type: 'Прямая секция', length: segment.length, price: straightPrice });

            // Соединительные блоки через каждые 3 метра (исправленная логика)
            const connectorsForStraight = Math.max(0, Math.ceil(segment.length / config.maxStraightLength) - 1);
            connectorCount += connectorsForStraight;

            // Крепления для прямой секции
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
                    if (segment.branch.length > 0) {
                        const branchPrice = materialConfig.straight[current].pricePerMeter * segment.branch.length;
                        components.push({ type: 'Прямая секция ответвления', length: segment.branch.length, price: branchPrice });
                        fastenerCount += Math.ceil(segment.branch.length / mountingStep);
                        
                        if (segment.branch.endPoint !== 'none') {
                            const type = segment.branch.endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
                            const price = materialConfig[segment.branch.endPoint][current].price;
                            components.push({ type: `Блок подключения к ${type} (ответвление)`, price });
                            connectorCount += config.connectors.perConnection;
                        }
                    }
                } else if (segment.blockType === 'outlet') {
                    blockPrice = materialConfig.tee[current].price * 1.2;
                    blockType = `Отводной блок с выключателем ${segment.outlet.current}A`;
                    connectorCount += config.connectors.perOutlet;
                    fastenerCount += config.fasteners.perOutlet;
                    components.push({ type: `Автоматический выключатель ${segment.outlet.current}A`, price: segment.outlet.current * 50 });
                }
                
                components.push({ type: blockType, price: blockPrice });
                connectorCount += config.connectors.perConnection;
            } else if (i < segments.length - 1) {
                connectorCount += config.connectors.perConnection;
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            const type = endPoint === 'transformer' ? 'трансформатору' : 'ГРЩ';
            const price = materialConfig[endPoint][current].price;
            components.push({ type: `Блок подключения к ${type} (конечный)`, price });
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
        
        resultDiv.innerHTML = `
            <p><strong>Номинальный ток:</strong> ${current} A</p>
            <p><strong>Материал:</strong> ${material === 'aluminum' ? 'Алюминий' : 'Медь'}</p>
            <p><strong>Начальная точка:</strong> ${startPoint === 'transformer' ? 'Трансформатор' : startPoint === 'grsh' ? 'ГРЩ' : 'Нет'}</p>
            <p><strong>Конечная точка:</strong> ${endPoint === 'transformer' ? 'Трансформатор' : endPoint === 'grsh' ? 'ГРЩ' : 'Нет'}</p>
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

    // Отрисовка шинопровода
    function drawBusbar(segments, startPoint, endPoint, mountingStep) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = 30;
        const busbarHeight = 12;
        const colors = {
            busbar: '#3498db', transformer: '#8e44ad', grsh: '#e67e22',
            connector: '#2c3e50', angle: '#e74c3c', tee: '#2ecc71',
            outlet: '#f39c12', branch: '#9b59b6', fastener: '#27ae60', text: '#2c3e50'
        };

        // Вспомогательные функции рисования
        function drawDevice(x, y, type) {
            const size = 60;
            ctx.fillStyle = type === 'transformer' ? colors.transformer : colors.grsh;
            ctx.fillRect(x, y - size/2, size, type === 'grsh' ? size*1.5 : size);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(type === 'transformer' ? 'ТРАНСФОРМАТОР' : 'ГРЩ', x + size/2, y);
            return { x: x + size + 20, y };
        }

        function drawSegment(x, y, length, direction, color = colors.busbar) {
            const endX = x + length * scale * direction.x;
            const endY = y + length * scale * direction.y;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(endX, endY);
            ctx.lineWidth = busbarHeight;
            ctx.strokeStyle = color;
            ctx.stroke();
            
            if (length >= 1) {
                ctx.fillStyle = colors.text;
                ctx.font = '12px Arial';
                ctx.fillText(`${length.toFixed(1)} м`, (x + endX)/2 - 20, (y + endY)/2 - 10);
            }
            return { x: endX, y: endY };
        }

        function drawConnector(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, busbarHeight/2 + 2, 0, Math.PI * 2);
            ctx.fillStyle = colors.connector;
            ctx.fill();
        }

        function drawFastener(x, y) {
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = colors.fastener;
            ctx.fill();
        }

        function drawTurn(x, y, angle, direction) {
            ctx.beginPath();
            ctx.arc(x, y, busbarHeight + 5, 0, Math.PI * 2);
            ctx.strokeStyle = colors.angle;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = colors.angle;
            ctx.font = 'bold 14px Arial';
            ctx.fillText(`${angle}°`, x + 20, y - 10);
            
            switch(direction) {
                case 'right': return { x: 1, y: 0 };
                case 'left': return { x: -1, y: 0 };
                case 'up': return { x: 0, y: -1 };
                case 'down': return { x: 0, y: 1 };
                default: return { x: 1, y: 0 };
            }
        }

        function drawTee(x, y, direction, branchLength) {
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = colors.tee;
            ctx.fill();
            
            let branchDir = {x: 0, y: 0};
            switch(direction) {
                case 'right': branchDir = {x: 1, y: 0}; break;
                case 'left': branchDir = {x: -1, y: 0}; break;
                case 'up': branchDir = {x: 0, y: -1}; break;
                case 'down': branchDir = {x: 0, y: 1}; break;
            }
            
            drawSegment(x, y, branchLength, branchDir, colors.branch);
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Т-отвод', x - 20, y - 15);
        }

        function drawOutlet(x, y, current) {
            const size = 20;
            ctx.beginPath();
            ctx.arc(x, y, size/2, 0, Math.PI * 2);
            ctx.fillStyle = colors.outlet;
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.fillRect(x - size/2, y - size/2, size, size);
            ctx.strokeStyle = colors.outlet;
            ctx.lineWidth = 2;
            ctx.strokeRect(x - size/2, y - size/2, size, size);
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(current + 'A', x, y + 3);
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Отвод', x, y - 15);
        }

        // Основной цикл рисования
        let x = 80, y = canvas.height / 2;
        let direction = { x: 1, y: 0 };

        // Начальная точка
        if (startPoint !== 'none') {
            const pos = drawDevice(x, y, startPoint);
            x = pos.x; y = pos.y;
            drawConnector(x, y);
            x += 15 * direction.x; y += 15 * direction.y;
        }

        // Обработка сегментов
        segments.forEach((segment, i) => {
            // Прямая секция
            const endPos = drawSegment(x, y, segment.length, direction);
            x = endPos.x; y = endPos.y;

            // Крепления
            const fastenerCount = Math.floor(segment.length / mountingStep);
            for (let j = 1; j <= fastenerCount; j++) {
                const fx = x - (segment.length - j*mountingStep) * scale * direction.x;
                const fy = y - (segment.length - j*mountingStep) * scale * direction.y;
                drawFastener(fx, fy);
            }

            // Соединительные блоки (через каждые 3 метра)
            const connectorCount = Math.ceil(segment.length / config.maxStraightLength) - 1;
            for (let j = 1; j <= connectorCount; j++) {
                const cx = x - (segment.length - j*config.maxStraightLength) * scale * direction.x;
                const cy = y - (segment.length - j*config.maxStraightLength) * scale * direction.y;
                drawConnector(cx, cy);
            }

            // Блок после сегмента
            if (segment.blockType !== 'none' && i < segments.length - 1) {
                drawConnector(x, y);
                x += 15 * direction.x; y += 15 * direction.y;

                if (segment.blockType === 'angle') {
                    direction = drawTurn(x, y, segment.angle, segment.direction);
                    drawFastener(x - 10, y - 10);
                    drawFastener(x + 10, y + 10);
                } else if (segment.blockType === 'tee') {
                    drawTee(x, y, segment.direction, segment.branch.length);
                    drawFastener(x - 15, y);
                    drawFastener(x + 15, y);
                    drawFastener(x, y + 15);
                } else if (segment.blockType === 'outlet') {
                    drawOutlet(x, y, segment.outlet.current);
                    drawFastener(x - 15, y);
                    drawFastener(x + 15, y);
                    drawFastener(x, y + 15);
                }

                x += 15 * direction.x; y += 15 * direction.y;
                drawConnector(x, y);
                x += 15 * direction.x; y += 15 * direction.y;
            } else if (i < segments.length - 1) {
                drawConnector(x, y);
                x += 15 * direction.x; y += 15 * direction.y;
            }
        });

        // Конечная точка
        if (endPoint !== 'none') {
            drawConnector(x, y);
            x += 15 * direction.x; y += 15 * direction.y;
            drawDevice(x, y, endPoint);
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
});