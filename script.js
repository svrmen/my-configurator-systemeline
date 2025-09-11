document.addEventListener('DOMContentLoaded', () => {
  // ================= CONFIG (с тарифами) =================
  const config = {
    maxStraightLength: 3, // м — соединитель каждые 3 м (гор/верт)

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

    connectors: { perStraight: 1, perAngle: 1, perTee: 1, perOutlet: 1, perConnection: 1, perCableTerminal: 1 },
    fasteners:  { perStraight: 1, perAngle: 1, perTee: 2, perOutlet: 2, perCableTerminal: 2 }
  };

  // Утилиты цен
  const priceOr0 = (v) => (typeof v === 'number' && isFinite(v)) ? v : 0;
  const getPricePerMeterStraight = (mat, curr) => priceOr0(config.materials[mat]?.straight?.[curr]?.pricePerMeter);
  const getPriceAngle = (mat, curr) => priceOr0(config.materials[mat]?.angle?.[curr]?.price);
  const getPriceTee = (mat, curr) => priceOr0(config.materials[mat]?.tee?.[curr]?.price);
  const getPriceTransformer = (mat, curr) => priceOr0(config.materials[mat]?.transformer?.[curr]?.price);
  const getPriceGRSH = (mat, curr) => priceOr0(config.materials[mat]?.grsh?.[curr]?.price);
  const getPriceConnector = (mat, curr) => priceOr0(config.materials[mat]?.connector?.[curr]?.price);
  const getPriceFastener = (mat, curr) => priceOr0(config.materials[mat]?.fastener?.[curr]?.price);
  const getPriceOutlet = (mat, outletCurr) => priceOr0(config.materials[mat]?.outlet?.[outletCurr]?.price);
  const getPriceCableTerminal = (mat, curr) => priceOr0(config.materials[mat]?.cableTerminal?.[curr]?.price);

  // ================= DOM =================
  const form = document.getElementById('busbar-form');
  const resultDiv = document.getElementById('calculation-result');
  const componentsDiv = document.getElementById('components-list');
  const totalPriceDiv = document.getElementById('total-price');

  const segmentsContainer = document.getElementById('segments-container');
  const addSegmentBtn = document.getElementById('add-segment');
  const removeSegmentBtn = document.getElementById('remove-segment');

  const currentSelect = document.getElementById('current');
  const materialSelect = document.getElementById('material');
  const startPointSelect = document.getElementById('start-point');
  const endPointSelect = document.getElementById('end-point');
  const totalLengthInput = document.getElementById('total-length');
  const mountingStepInput = document.getElementById('mounting-step');
  const mountingStepVertInput = document.getElementById('mounting-step-vert');
  const baseHeightInput = document.getElementById('base-height');
  const ipSelect = document.getElementById('ip');
  const fireproofSelect = document.getElementById('fireproof');

  const initialBlockSelect = document.getElementById('initial-block');
  const initialRiserDh = document.getElementById('initial-riser-dh');
  const initialRiserSupport = document.getElementById('initial-riser-support');
  const initialRiserThroughSlab = document.getElementById('initial-riser-through-slab');

  const finalBlockSelect = document.getElementById('final-block');
  const finalRiserDh = document.getElementById('final-riser-dh');
  const finalRiserSupport = document.getElementById('final-riser-support');
  const finalRiserThroughSlab = document.getElementById('final-riser-through-slab');

  const exportExcelBtn = document.getElementById('export-excel');
  const errorMessage = document.querySelector('.error-message');

  const canvasWrapper = document.getElementById('canvas-wrapper');
  const canvas = document.getElementById('busbar-canvas');
  const ctx = canvas.getContext('2d');

  const splitter = document.getElementById('splitter');
  const splitRoot = document.getElementById('split-root');

  // ================= State =================
  let lastCalculation = null;
  let viewMode = 'iso';
  const viewport = { scale: 1, minScale: 0.25, maxScale: 6, panX: 0, panY: 0, showGrid: false };
  const cos30 = Math.sqrt(3)/2, sin30 = 0.5, DRAW_SCALE_MPP = 30;
  let lastBounds = { minX: 0, minY: 0, maxX: 800, maxY: 600 };

  // Retina/resize
  function resizeCanvasToWrapper(){
    const dpr = window.devicePixelRatio || 1;
    const { clientWidth, clientHeight } = canvasWrapper;
    canvas.width = Math.max(1, Math.floor(clientWidth * dpr));
    canvas.height = Math.max(1, Math.floor(clientHeight * dpr));
    canvas.style.width = clientWidth + 'px';
    canvas.style.height = clientHeight + 'px';
    ctx.setTransform(1,0,0,1,0,0);
    ctx.scale(dpr, dpr);
    redraw();
  }
  new ResizeObserver(resizeCanvasToWrapper).observe(canvasWrapper);

  // Splitter
  (function initSplitter(){
    let dragging=false;
    splitter.addEventListener('mousedown', ()=>{ dragging=true; splitter.classList.add('dragging'); document.body.style.cursor='col-resize'; });
    window.addEventListener('mouseup', ()=>{ dragging=false; splitter.classList.remove('dragging'); document.body.style.cursor=''; });
    window.addEventListener('mousemove', (e)=>{
      if(!dragging) return;
      const rect=splitRoot.getBoundingClientRect();
      const minLeft=360, maxLeft=rect.width-320;
      let x=e.clientX-rect.left; x=Math.max(minLeft, Math.min(maxLeft, x));
      splitRoot.style.gridTemplateColumns=`${x}px 8px 1fr`;
      resizeCanvasToWrapper();
    });
  })();

  // UI events
  materialSelect.addEventListener('change', updateCurrentOptions);
  startPointSelect.addEventListener('change', updateConnectionTypes);
  endPointSelect.addEventListener('change', updateConnectionTypes);
  segmentsContainer.addEventListener('change', onSegmentChange);
  addSegmentBtn.addEventListener('click', addSegment);
  removeSegmentBtn.addEventListener('click', removeSegment);
  totalLengthInput.addEventListener('change', distributeLengths);

  form.addEventListener('submit', calculateAndDraw);
  exportExcelBtn.addEventListener('click', exportToExcel);

  initialBlockSelect.addEventListener('change', () => {
    const show = initialBlockSelect.value === 'riserUp' || initialBlockSelect.value === 'riserDown';
    initialRiserDh.disabled = !show;
    initialRiserSupport.disabled = !show;
    initialRiserThroughSlab.disabled = !show;
  });
  finalBlockSelect.addEventListener('change', () => {
    const show = finalBlockSelect.value === 'riserUp' || finalBlockSelect.value === 'riserDown';
    finalRiserDh.disabled = !show;
    finalRiserSupport.disabled = !show;
    finalRiserThroughSlab.disabled = !show;
  });

  function updateCurrentOptions(){
    const isCopper = materialSelect.value === 'copper';
    document.querySelectorAll('.copper-only').forEach(opt => { opt.style.display = isCopper ? 'block' : 'none'; });
    if (!isCopper && currentSelect.value === '6300') currentSelect.value = '5000';
    updateConnectionTypes();
  }
  function updateConnectionTypes(){}

  function onSegmentChange(e){
    if (e.target.classList.contains('block-type')){
      const seg = e.target.closest('.segment-input');
      const dirGroup = seg.querySelector('.direction-group');
      const branchGroup = seg.querySelector('.branch-group');
      const outletGroup = seg.querySelector('.outlet-group');
      const riserGroup = seg.querySelector('.riser-group');

      const bt = e.target.value;
      dirGroup.style.display   = bt !== 'none' ? 'block' : 'none';
      branchGroup.style.display= bt === 'tee' ? 'block' : 'none';
      outletGroup.style.display= bt === 'outlet' ? 'block' : 'none';
      riserGroup.style.display = (bt === 'riserUp' || bt === 'riserDown') ? 'block' : 'none';

      const angleInput = seg.querySelector('.angle');
      if (angleInput) angleInput.disabled = bt !== 'angle';
    }
    updateTotalLength();
  }

  function showError(message){
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(()=>errorMessage.style.display='none', 6000);
  }

  function updateTotalLength(){
    const total = Array.from(document.querySelectorAll('.segment-length')).reduce((s,i)=>s+(parseFloat(i.value)||0),0);
    totalLengthInput.value = total.toFixed(1);
  }
  function distributeLengths(){
    const total = parseFloat(totalLengthInput.value) || 0;
    const inputs = document.querySelectorAll('.segment-length');
    if (!inputs.length) return;
    const per = total/inputs.length;
    inputs.forEach(i => i.value = per.toFixed(1));
  }

  function addSegment(){
    if (segmentsContainer.children.length >= 20){ showError('Максимальное количество сегментов: 20'); return; }
    const newId = segmentsContainer.children.length + 1;
    const autoLen = (parseFloat(totalLengthInput.value)/newId || 1).toFixed(1);

    const div = document.createElement('div');
    div.className = 'segment-input';
    div.dataset.id = newId;
    div.innerHTML = `
      <label>Сегмент ${newId} (длина, м):</label>
      <input type="number" class="segment-length" min="0.4" max="500" step="0.1" value="${autoLen}" required>

      <label>Тип блока после сегмента:</label>
      <select class="block-type">
        <option value="none">Нет</option>
        <option value="angle">Угловой поворот</option>
        <option value="tee">Т-образный отвод</option>
        <option value="outlet">Отводной блок с выключателем</option>
        <option value="riserUp">Подъём (вертикальный)</option>
        <option value="riserDown">Спуск (вертикальный)</option>
      </select>

      <div class="direction-group" style="display:none">
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

      <div class="branch-group" style="display:none; margin-top:10px; padding:10px; background:#e8f4fc; border-radius:4px;">
        <h4>Ответвление:</h4>
        <div class="input-group">
          <label>Длина ответвления (м):</label>
          <input type="number" class="branch-length" min="0.4" max="200" step="0.1" value="5">
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

      <div class="outlet-group" style="display:none; margin-top:10px; padding:10px; background:#e0f7fa; border-radius:4px;">
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

      <div class="riser-group" style="display:none; margin-top:10px; padding:10px; background:#fff3cd; border-radius:4px;">
        <h4>Параметры подъёма/спуска:</h4>
        <div class="grid-3">
          <div class="input-group">
            <label>Δh (м):</label>
            <input type="number" class="riser-dh" min="0.1" max="50" step="0.1" value="1.0">
          </div>
          <div class="input-group">
            <label>Тип крепления:</label>
            <select class="riser-support">
              <option value="rod">Штанга</option>
              <option value="cable">Трос</option>
              <option value="rack">Стойка</option>
            </select>
          </div>
          <div class="input-group">
            <label><input type="checkbox" class="riser-through-slab"> Проход через перекрытие</label>
          </div>
        </div>
      </div>
    `;
    segmentsContainer.appendChild(div);
    updateTotalLength();
  }
  function removeSegment(){
    if (segmentsContainer.children.length <= 1){ showError('Должен остаться хотя бы один сегмент'); return; }
    segmentsContainer.removeChild(segmentsContainer.lastChild);
    updateTotalLength();
  }

  // Read + validate
  function getSegmentsData(){
    return Array.from(document.querySelectorAll('.segment-input[data-id]')).map(seg=>{
      const blockType = seg.querySelector('.block-type').value;
      const isR = (blockType==='riserUp'||blockType==='riserDown');
      const dh = parseFloat(seg.querySelector('.riser-dh')?.value)||0;
      return {
        id: seg.dataset.id,
        length: parseFloat(seg.querySelector('.segment-length').value) || 0,
        blockType,
        direction: seg.querySelector('.direction')?.value || null,
        angle: parseFloat(seg.querySelector('.angle')?.value) || 90,
        branch: blockType==='tee' ? {
          length: parseFloat(seg.querySelector('.branch-length').value) || 0,
          endPoint: seg.querySelector('.branch-end-point').value
        } : null,
        outlet: blockType==='outlet' ? { current: seg.querySelector('.outlet-current').value } : null,
        riser: isR ? {
          deltaH: (blockType==='riserDown'?-1:+1)*Math.abs(dh||0),
          supportType: seg.querySelector('.riser-support')?.value || 'rod',
          throughSlab: !!seg.querySelector('.riser-through-slab')?.checked
        } : null
      };
    });
  }
  function getInitialRiserData(){
    const t = initialBlockSelect.value;
    if (t!=='riserUp' && t!=='riserDown') return null;
    const dh = Math.abs(parseFloat(initialRiserDh.value)||0); if (dh<=0) return null;
    return { deltaH:(t==='riserDown'?-1:+1)*dh, supportType: initialRiserSupport.value, throughSlab: !!initialRiserThroughSlab.checked, type:t };
  }
  function getFinalRiserData(){
    const t = finalBlockSelect.value;
    if (t!=='riserUp' && t!=='riserDown') return null;
    const dh = Math.abs(parseFloat(finalRiserDh.value)||0); if (dh<=0) return null;
    return { deltaH:(t==='riserDown'?-1:+1)*dh, supportType: finalRiserSupport.value, throughSlab: !!finalRiserThroughSlab.checked, type:t };
  }
  function validateTotalLength(segments){
    const total = segments.reduce((s,seg)=>s+seg.length,0);
    const inputTotal = parseFloat(totalLengthInput.value)||0;
    if (Math.abs(total - inputTotal) > 0.1){
      throw new Error(`Сумма длин сегментов (${total.toFixed(1)} м) не равна общей длине (${inputTotal} м)`);
    }
  }

  // Calc components
  function calculateComponents(segments, current, material, startPoint, endPoint, stepH, stepV, baseHeight, initialRiser, finalRiser){
    const components = [];
    let connectorCount = 0;
    let fastenerCount = 0;
    let totalVerticalLength = 0;

    if (startPoint !== 'none'){
      if (startPoint === 'transformer'){
        components.push({ type:'Блок подключения к трансформатору (начальный)', price: getPriceTransformer(material, current) });
        connectorCount += config.connectors.perConnection;
      } else if (startPoint === 'grsh'){
        components.push({ type:'Блок подключения к ГРЩ (начальный)', price: getPriceGRSH(material, current) });
        connectorCount += config.connectors.perConnection;
      }
    }

    if (initialRiser && Math.abs(initialRiser.deltaH)>0){
      const dh = Math.abs(initialRiser.deltaH);
      components.push({ type:'Угловая секция перехода H→V (начало)', price: getPriceAngle(material, current) });
      connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

      components.push({ type:'Прямая секция (вертикаль, начальный участок)', length: dh, price: getPricePerMeterStraight(material, current)*dh });
      totalVerticalLength += dh;

      const innerConn = Math.max(0, Math.ceil(dh / config.maxStraightLength) - 1);
      connectorCount += innerConn;
      fastenerCount += Math.ceil(dh / stepV);

      components.push({ type:'Угловая секция перехода V→H (после начального вертикального)', price: getPriceAngle(material, current) });
      connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

      connectorCount += config.connectors.perConnection;
    }

    segments.forEach((seg,i)=>{
      components.push({ type:'Прямая секция', length: seg.length, price: getPricePerMeterStraight(material, current)*seg.length });

      connectorCount += Math.max(0, Math.ceil(seg.length / config.maxStraightLength) - 1);
      fastenerCount += Math.ceil(seg.length / stepH);

      if (seg.blockType !== 'none' && i < segments.length-1){
        connectorCount += config.connectors.perConnection;

        if (seg.blockType === 'angle'){
          components.push({ type:`Угловая секция (${seg.angle}°)`, price: getPriceAngle(material, current) });
          connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

        } else if (seg.blockType === 'tee'){
          components.push({ type:'Т-образный отвод', price: getPriceTee(material, current) });
          connectorCount += config.connectors.perTee; fastenerCount += config.fasteners.perTee;

          if (seg.branch && seg.branch.length>0){
            components.push({ type:'Прямая секция ответвления', length: seg.branch.length, price: getPricePerMeterStraight(material, current)*seg.branch.length });
            fastenerCount += Math.ceil(seg.branch.length / stepH);

            if (seg.branch.endPoint === 'transformer'){
              components.push({ type:'Блок подключения к трансформатору (ответвление)', price: getPriceTransformer(material, current) });
              connectorCount += config.connectors.perConnection;
            } else if (seg.branch.endPoint === 'grsh'){
              components.push({ type:'Блок подключения к ГРЩ (ответвление)', price: getPriceGRSH(material, current) });
              connectorCount += config.connectors.perConnection;
            } else if (seg.branch.endPoint === 'endcap'){
              components.push({ type:'Концевая заглушка (ответвление)', price: 0 });
              connectorCount += config.connectors.perConnection;
            }
          }

        } else if (seg.blockType === 'outlet'){
          components.push({ type:`Отводной блок с выключателем ${seg.outlet.current}A`, price: getPriceOutlet(material, seg.outlet.current) });
          connectorCount += config.connectors.perOutlet; fastenerCount += config.fasteners.perOutlet;

        } else if (seg.blockType === 'riserUp' || seg.blockType === 'riserDown'){
          const dh = Math.abs(seg.riser?.deltaH || 0);
          if (dh>0){
            components.push({ type:'Угловая секция перехода H→V', price: getPriceAngle(material, current) });
            connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

            components.push({ type:'Прямая секция (вертикаль)', length: dh, price: getPricePerMeterStraight(material, current)*dh });
            totalVerticalLength += dh;

            const innerConn = Math.max(0, Math.ceil(dh / config.maxStraightLength) - 1);
            connectorCount += innerConn;
            fastenerCount += Math.ceil(dh / stepV);

            components.push({ type:'Угловая секция перехода V→H', price: getPriceAngle(material, current) });
            connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;
          }
        }
        connectorCount += config.connectors.perConnection;
      } else if (i < segments.length-1){
        connectorCount += config.connectors.perConnection;
      }
    });

    if (finalRiser && Math.abs(finalRiser.deltaH)>0){
      const dh = Math.abs(finalRiser.deltaH);
      connectorCount += config.connectors.perConnection;

      components.push({ type:'Угловая секция перехода H→V (конец)', price: getPriceAngle(material, current) });
      connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

      components.push({ type:'Прямая секция (вертикаль, конечный участок)', length: dh, price: getPricePerMeterStraight(material, current)*dh });
      totalVerticalLength += dh;

      const innerConn = Math.max(0, Math.ceil(dh / config.maxStraightLength) - 1);
      connectorCount += innerConn;
      fastenerCount += Math.ceil(dh / stepV);

      components.push({ type:'Угловая секция перехода V→H (после конечного вертикального)', price: getPriceAngle(material, current) });
      connectorCount += config.connectors.perAngle; fastenerCount += config.fasteners.perAngle;

      connectorCount += config.connectors.perConnection;
    }

    if (endPoint !== 'none'){
      if (endPoint === 'transformer'){
        components.push({ type:'Блок подключения к трансформатору (конечный)', price: getPriceTransformer(material, current) });
        connectorCount += config.connectors.perConnection;
      } else if (endPoint === 'grsh'){
        components.push({ type:'Блок подключения к ГРЩ (конечный)', price: getPriceGRSH(material, current) });
        connectorCount += config.connectors.perConnection;
      } else if (endPoint === 'endcap'){
        components.push({ type:'Концевая заглушка (конец трассы)', price: 0 });
        connectorCount += config.connectors.perConnection;
      }
    }

    if (connectorCount>0){
      components.push({ type:'Соединительные блоки', quantity: connectorCount, price: getPriceConnector(material, current)*connectorCount });
    }
    if (fastenerCount>0){
      components.push({ type:'Крепления', quantity: fastenerCount, price: getPriceFastener(material, current)*fastenerCount });
    }

    const totalPrice = components.reduce((s,c)=>s+(c.price||0),0);
    return { components, totalPrice, totalVerticalLength };
  }

  // ================= Output =================
  function displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof, segments, stepH, stepV, baseHeight, totalVerticalLength){
    const totalLength = segments.reduce((s,seg)=>s+seg.length,0);
    const connectorItem = components.find(c=>c.type==='Соединительные блоки');
    const fastenerItem = components.find(c=>c.type==='Крепления');
    const fmtPoint = (p)=>p==='transformer'?'Трансформатор':p==='grsh'?'ГРЩ':p==='endcap'?'Концевая заглушка':'Нет';

    resultDiv.innerHTML = `
      <p><strong>Номинальный ток:</strong> ${current} A</p>
      <p><strong>Материал:</strong> ${material==='aluminum'?'Алюминий':'Медь'}</p>
      <p><strong>Начальная точка:</strong> ${fmtPoint(startPoint)}</p>
      <p><strong>Конечная точка:</strong> ${fmtPoint(endPoint)}</p>
      <p><strong>Базовая высота:</strong> ${baseHeight} м</p>
      <p><strong>Общая длина (горизонталь):</strong> ${totalLength.toFixed(1)} м</p>
      <p><strong>Суммарная вертикальная длина:</strong> ${totalVerticalLength.toFixed(1)} м</p>
      <p><strong>Количество сегментов:</strong> ${segments.length}</p>
      <p><strong>Шаг креплений (гор.):</strong> ${stepH} м</p>
      <p><strong>Шаг креплений (верт.):</strong> ${stepV} м</p>
      <p><strong>Соединительные блоки:</strong> ${connectorItem?.quantity||0} шт</p>
      <p><strong>Крепления:</strong> ${fastenerItem?.quantity||0} шт</p>
      <p><strong>Степень защиты:</strong> ${ip}</p>
      <p><strong>Огнестойкость:</strong> ${fireproof==='yes'?'Да (180 мин)':'Нет'}</p>
    `;

    componentsDiv.innerHTML = '<h4>Спецификация:</h4>';
    components.forEach(c=>{
      const el = document.createElement('div');
      el.className = 'component-item';
      const details = [];
      if (c.length)   details.push(`Длина: ${c.length} м`);
      if (c.quantity) details.push(`Количество: ${c.quantity}`);
      el.innerHTML = `<span>${c.type}${details.length?` (${details.join(', ')})`:''}</span><span>${(c.price||0).toLocaleString('ru-RU')} руб</span>`;
      componentsDiv.appendChild(el);
    });

    totalPriceDiv.innerHTML = `
      <strong>Итоговая стоимость:</strong> ${totalPrice.toLocaleString('ru-RU')} руб (без НДС)
      <br><small>Цены не заданы в конфигурации — расчёт выполнен без тарифов.</small>
    `;
  }

  // ================= Drawing =================
  let isPanning=false, lastMouse={x:0,y:0};
  canvas.addEventListener('mousedown',(e)=>{ isPanning=true; lastMouse={x:e.offsetX,y:e.offsetY}; canvas.style.cursor='grabbing'; });
  window.addEventListener('mouseup',()=>{ isPanning=false; canvas.style.cursor='default'; });
  canvas.addEventListener('mousemove',(e)=>{
    if(!isPanning) return;
    const dx=e.offsetX-lastMouse.x, dy=e.offsetY-lastMouse.y;
    lastMouse={x:e.offsetX,y:e.offsetY};
    viewport.panX += dx; viewport.panY += dy; redraw();
  });
  canvas.addEventListener('wheel',(e)=>{
    e.preventDefault();
    const { left, top } = canvas.getBoundingClientRect();
    zoomAt(e.clientX-left, e.clientY-top, e.deltaY<0?1.1:(1/1.1));
  }, { passive:false });

  document.querySelector('.canvas-toolbar').addEventListener('click',(e)=>{
    const btn = e.target.closest('button[data-action]'); if(!btn) return;
    switch(btn.dataset.action){
      case 'mode-plan': viewMode='plan'; fitToContent(); break;
      case 'mode-iso':  viewMode='iso';  fitToContent(); break;
      case 'zoom-in':   zoomAt(canvas.clientWidth/2, canvas.clientHeight/2, 1.1); break;
      case 'zoom-out':  zoomAt(canvas.clientWidth/2, canvas.clientHeight/2, 1/1.1); break;
      case 'reset':     viewport.scale=1; viewport.panX=0; viewport.panY=0; redraw(); break;
      case 'fit':       fitToContent(); break;
      case 'grid':      viewport.showGrid=!viewport.showGrid; redraw(); break;
      case 'fullscreen': toggleFullscreen(); break;
      case 'png':       downloadPNG(); break;
    }
  });

  function toggleFullscreen(){
    const host = document.querySelector('.drawing-section');
    if (!document.fullscreenElement) host.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
  function downloadPNG(){
    const a = document.createElement('a');
    a.download = `busbar_${viewMode}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  }
  function zoomAt(px,py,f){
    const old = viewport.scale;
    const ns = Math.max(viewport.minScale, Math.min(viewport.maxScale, old*f));
    const k = ns/old;
    viewport.panX = px - k*(px - viewport.panX);
    viewport.panY = py - k*(py - viewport.panY);
    viewport.scale = ns;
    redraw();
  }

  const colors = {
    busbarBase: '#005BAC',
    busbarAbove: '#78BE20',
    busbarBelow: '#e67e22',
    accent: '#78BE20',
    transformerBody: '#009739',
    grshBody: '#333333',
    connector: '#808080',
    tee: '#2ecc71',
    outlet: '#f39c12',
    fastener: '#e74c3c',
    text: '#2c3e50',
    outline: '#000'
  };
  const busbarThickness = 12;
  function colorForHeight(z, baseZ){ return Math.abs(z-baseZ)<1e-6 ? colors.busbarBase : (z>baseZ?colors.busbarAbove:colors.busbarBelow); }

  function redraw(){
    ctx.save(); ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.restore();
    ctx.save(); ctx.translate(viewport.panX, viewport.panY); ctx.scale(viewport.scale, viewport.scale);
    if (viewport.showGrid) drawGrid();
    if (lastCalculation){ if (viewMode==='plan') drawPlan(lastCalculation); else drawIso(lastCalculation); }
    else { ctx.fillStyle='#95a5a6'; ctx.font='14px Segoe UI'; ctx.fillText('Заполните параметры и нажмите «Рассчитать».', 20, 30); }
    ctx.restore();
  }
  function drawGrid(){
    const stepPx = DRAW_SCALE_MPP;
    const W=canvas.clientWidth, H=canvas.clientHeight;
    const inv = 1/viewport.scale, vx0=-viewport.panX*inv, vy0=-viewport.panY*inv, vx1=vx0+W*inv, vy1=vy0+H*inv;
    const sx = Math.floor(vx0/stepPx)*stepPx, sy = Math.floor(vy0/stepPx)*stepPx;
    ctx.save(); ctx.lineWidth=1; ctx.strokeStyle='rgba(0,0,0,0.06)';
    for(let x=sx;x<vx1+stepPx;x+=stepPx){ ctx.beginPath(); ctx.moveTo(x,vy0-stepPx); ctx.lineTo(x,vy1+stepPx); ctx.stroke(); }
    for(let y=sy;y<vy1+stepPx;y+=stepPx){ ctx.beginPath(); ctx.moveTo(vx0-stepPx,y); ctx.lineTo(vx1+stepPx,y); ctx.stroke(); }
    ctx.restore();
  }

  let lastBoundsTmp = {minX:0,minY:0,maxX:0,maxY:0};
  function resetBounds(){ lastBoundsTmp = {minX:Infinity,minY:Infinity,maxX:-Infinity,maxY:-Infinity}; }
  function applyBounds(x,y){ lastBoundsTmp.minX=Math.min(lastBoundsTmp.minX,x); lastBoundsTmp.minY=Math.min(lastBoundsTmp.minY,y); lastBoundsTmp.maxX=Math.max(lastBoundsTmp.maxX,x); lastBoundsTmp.maxY=Math.max(lastBoundsTmp.maxY,y); }

  // -------- План (вид сверху) --------
  function drawPlan(state){
    const { segments, startPoint, endPoint, mountingStep, baseHeight, initialRiser, finalRiser } = state;
    const scale = DRAW_SCALE_MPP;
    resetBounds();

    let x = 80, y = canvas.clientHeight/2;
    let z = baseHeight;
    let dir = {x:1,y:0};

    function drawDevice(type, px,py, isStart){
      const w=90,h=60;
      if (type==='transformer'){
        ctx.fillStyle=colors.transformerBody; ctx.fillRect(px-w/2,py-h/2,w,h);
        ctx.strokeStyle='#fff'; ctx.lineWidth=2;
        ctx.beginPath(); ctx.arc(px-15,py,12,0,Math.PI*2); ctx.stroke();
        ctx.beginPath(); ctx.arc(px+15,py,12,0,Math.PI*2); ctx.stroke();
        ctx.fillStyle='#fff'; ctx.font='bold 12px Segoe UI'; ctx.textAlign='center';
        ctx.fillText('ТР', px, py+h/2-10);
      } else { // ГРЩ
        ctx.fillStyle=colors.grshBody; ctx.fillRect(px-w/2,py-h/2,w,h);
        ctx.strokeStyle=colors.accent; ctx.lineWidth=2; ctx.strokeRect(px-w/2+10, py-h/2+10, w-20, h-20);
        ctx.fillStyle=colors.accent; ctx.fillRect(px-15, py-8, 30, 16);
        ctx.fillStyle='#fff'; ctx.font='bold 12px Segoe UI'; ctx.textAlign='center';
        ctx.fillText('ГРЩ', px, py+h/2-10);
      }
      applyBounds(px-w/2,py-h/2); applyBounds(px+w/2,py+h/2);
      return { x: isStart ? px + w/2 : px - w/2, y: py };
    }
    function drawEndcap(px,py, d){ const w=10,h=22; ctx.save(); ctx.translate(px,py); ctx.rotate(Math.atan2(d.y,d.x)); ctx.fillStyle='#6c757d'; ctx.fillRect(0,-h/2,w,h); ctx.restore(); applyBounds(px-12,py-12); applyBounds(px+12,py+12); }
    function drawConnector(px,py){ const s=12; ctx.fillStyle=colors.connector; ctx.fillRect(px-s/2,py-s/2,s,s); ctx.strokeStyle=colors.outline; ctx.strokeRect(px-s/2,py-s/2,s,s); applyBounds(px-8,py-8); applyBounds(px+8,py+8); }
    function drawFastener(px,py, d){ const len=20, perp={x:-d.y,y:d.x}; ctx.beginPath(); ctx.moveTo(px-(perp.x*len)/2, py-(perp.y*len)/2); ctx.lineTo(px+(perp.x*len)/2, py+(perp.y*len)/2); ctx.strokeStyle=colors.fastener; ctx.lineWidth=3; ctx.stroke(); applyBounds(px-12,py-12); applyBounds(px+12,py+12); }
    function drawSeg(px,py,len,d,zCur){
      const ex=px+len*scale*d.x, ey=py+len*scale*d.y;
      ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(ex,ey);
      ctx.lineWidth=busbarThickness; ctx.strokeStyle=colorForHeight(zCur, baseHeight); ctx.stroke();
      if(len>=1){ ctx.fillStyle=colors.text; ctx.font='12px Segoe UI'; ctx.textAlign='center'; ctx.textBaseline='bottom'; ctx.fillText(`${len.toFixed(1)} м`, (px+ex)/2, (py+ey)/2-10); }
      applyBounds(px,py); applyBounds(ex,ey);
      return {x:ex,y:ey};
    }
    function drawRiserIcon(px,py, sign, dh){
      ctx.beginPath(); ctx.arc(px,py,10,0,Math.PI*2); ctx.fillStyle='#ffd166'; ctx.fill(); ctx.strokeStyle='#b8860b'; ctx.stroke();
      ctx.fillStyle='#7d5a00'; ctx.font='bold 12px Segoe UI'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(sign>0?'↑':'↓', px, py);
      ctx.fillStyle=colors.text; ctx.font='12px Segoe UI'; ctx.textAlign='left'; ctx.fillText(`${sign>0?'+':'-'}${dh.toFixed(1)} м`, px+12, py-12);
      applyBounds(px-12,py-12); applyBounds(px+44,py+12);
    }

    if (startPoint!=='none'){ const cp = drawDevice(startPoint, x,y,true); x=cp.x; y=cp.y; drawConnector(x,y); x+=6*dir.x; y+=6*dir.y; }

    if (initialRiser && Math.abs(initialRiser.deltaH)>0){
      drawConnector(x,y);
      drawRiserIcon(x,y, initialRiser.deltaH>0?+1:-1, Math.abs(initialRiser.deltaH));
      z += initialRiser.deltaH;
      drawConnector(x,y);
    }

    segments.forEach((seg,i)=>{
      const end = drawSeg(x,y, seg.length, dir, z);

      const cntF = Math.floor(seg.length / mountingStep);
      for(let j=1;j<=cntF;j++){ const fx=end.x-(seg.length-j*mountingStep)*DRAW_SCALE_MPP*dir.x; const fy=end.y-(seg.length-j*mountingStep)*DRAW_SCALE_MPP*dir.y; drawFastener(fx,fy,dir); }

      const inner = Math.ceil(seg.length / config.maxStraightLength) - 1;
      for(let j=1;j<=inner;j++){ const cx=end.x-(seg.length-j*config.maxStraightLength)*DRAW_SCALE_MPP*dir.x; const cy=end.y-(seg.length-j*config.maxStraightLength)*DRAW_SCALE_MPP*dir.y; drawConnector(cx,cy); }

      x=end.x; y=end.y;

      if (seg.blockType!=='none' && i<segments.length-1){
        drawConnector(x,y);
        if (seg.blockType==='angle'){
          switch(seg.direction){ case 'right':dir={x:1,y:0};break; case 'left':dir={x:-1,y:0};break; case 'up':dir={x:0,y:-1};break; case 'down':dir={x:0,y:1};break; }
          ctx.fillStyle=colors.accent; ctx.font='bold 13px Segoe UI'; ctx.fillText(`${seg.angle}°`, x+10, y-10);
        } else if (seg.blockType==='tee'){
          let bdir={x:0,y:1}; if(seg.direction==='right')bdir={x:1,y:0}; if(seg.direction==='left')bdir={x:-1,y:0}; if(seg.direction==='up')bdir={x:0,y:-1};
          ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2); ctx.fillStyle=colors.tee; ctx.fill();
          drawSeg(x,y, seg.branch?seg.branch.length:0, bdir, z);
          ctx.fillStyle=colors.text; ctx.font='bold 12px Segoe UI'; ctx.textAlign='center'; ctx.fillText('Т-отвод', x, y-12);
        } else if (seg.blockType==='outlet'){
          ctx.fillStyle=colors.outlet; ctx.fillRect(x-11,y-11,22,22); ctx.strokeStyle=colors.outline; ctx.strokeRect(x-11,y-11,22,22);
          ctx.fillStyle='#fff'; ctx.font='bold 10px Segoe UI'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText((seg.outlet?.current||'')+'A', x,y);
        } else if (seg.blockType==='riserUp' || seg.blockType==='riserDown'){
          const dh = Math.abs(seg.riser?.deltaH||0);
          if (dh>0){ drawRiserIcon(x,y, seg.blockType==='riserUp'?+1:-1, dh); z += (seg.blockType==='riserUp'?+1:-1)*dh; drawConnector(x,y); }
        }
      }
    });

    if (finalRiser && Math.abs(finalRiser.deltaH)>0){
      drawConnector(x,y);
      drawRiserIcon(x,y, finalRiser.deltaH>0?+1:-1, Math.abs(finalRiser.deltaH));
      z += finalRiser.deltaH;
      drawConnector(x,y);
    }

    if (endPoint!=='none'){
      drawConnector(x,y);
      if (endPoint==='endcap'){ const w=10,h=22; ctx.save(); ctx.translate(x,y); ctx.rotate(Math.atan2(dir.y,dir.x)); ctx.fillStyle='#6c757d'; ctx.fillRect(0,-h/2,w,h); ctx.restore(); }
      else { const cp = drawDevice(endPoint, x+40*dir.x, y, false); x=cp.x; y=cp.y; }
    }

    lastBounds = { minX:lastBoundsTmp.minX-40, minY:lastBoundsTmp.minY-40, maxX:lastBoundsTmp.maxX+40, maxY:lastBoundsTmp.maxY+40 };
  }

  // -------- Изометрия (порт — центр верхней грани) --------
  function drawIso(state){
    const { segments, startPoint, endPoint, mountingStep, mountingStepVert, baseHeight, initialRiser, finalRiser } = state;
    const scale = DRAW_SCALE_MPP;
    resetBounds();

    let X=0, Y=0, Z=baseHeight; // в метрах
    let dir = {x:1,y:0,z:0};
    const origin = { x:200, y: canvas.clientHeight/2 };
    const project = (x,y,z)=>({ x: origin.x + scale*((x-y)*Math.sqrt(3)/2), y: origin.y + scale*((x+y)*0.5 - z) });

    // служебные
    function applyB(p){ applyBounds(p.x, p.y); }
    function drawConnectorIso(px,py){ const s=10; ctx.fillStyle=colors.connector; ctx.fillRect(px-s/2,py-s/2,s,s); ctx.strokeStyle=colors.outline; ctx.strokeRect(px-s/2,py-s/2,s,s); applyBounds(px-8,py-8); applyBounds(px+8,py+8); }
    function drawFastenerIso(x,y,z,d,dist){
      const p = project(x+dist*d.x, y+dist*d.y, z+dist*d.z);
      ctx.beginPath(); ctx.moveTo(p.x-6,p.y); ctx.lineTo(p.x+6,p.y); ctx.moveTo(p.x,p.y-6); ctx.lineTo(p.x,p.y+6);
      ctx.strokeStyle=colors.fastener; ctx.lineWidth=2; ctx.stroke();
      applyBounds(p.x-8,p.y-8); applyBounds(p.x+8,p.y+8);
    }
    function drawSegIso(x,y,z,len,d){
      const x2=x+len*d.x, y2=y+len*d.y, z2=z+len*d.z;
      const p1=project(x,y,z), p2=project(x2,y2,z2);
      ctx.beginPath(); ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y);
      ctx.lineWidth=busbarThickness; ctx.strokeStyle=colorForHeight(z, baseHeight); ctx.stroke();
      if(len>=1){ ctx.fillStyle=colors.text; ctx.font='12px Segoe UI'; ctx.textAlign='center'; ctx.textBaseline='bottom'; ctx.fillText(`${len.toFixed(1)} м`, (p1.x+p2.x)/2, (p1.y+p2.y)/2-10); }
      applyB(p1); applyB(p2);
      return {x:x2,y:y2,z:z2};
    }
    function drawRiserIso(x,y,z, dh){
      const sign=Math.sign(dh), L=Math.abs(dh);
      const p1=project(x,y,z), p2=project(x,y,z+dh);
      ctx.beginPath(); ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y);
      ctx.lineWidth=busbarThickness; ctx.strokeStyle=colorForHeight(z+sign*0.0001, baseHeight); ctx.stroke();

      const inner = Math.max(0, Math.ceil(L / config.maxStraightLength) - 1);
      for(let j=1;j<=inner;j++){ const pp=project(x,y,z + sign*j*config.maxStraightLength); drawConnectorIso(pp.x, pp.y); }

      ctx.fillStyle='#7d5a00'; ctx.font='bold 12px Segoe UI'; ctx.textAlign='left';
      ctx.fillText(`${sign>0?'+':'-'}${L.toFixed(1)} м`, p1.x+10, (p1.y+p2.y)/2 - 6);
      applyB(p1); applyB(p2);
    }

    // Параллелепипед
    function drawBoxIso(cx,cy,cz, sx,sy,sz, baseColor, label){
      const P = (x,y,z)=>project(x,y,z);
      const minx=cx - sx/2, maxx=cx + sx/2;
      const miny=cy - sy/2, maxy=cy + sy/2;
      const minz=cz - sz/2, maxz=cz + sz/2;

      const v000=P(minx,miny,minz), v001=P(minx,miny,maxz), v010=P(minx,maxy,minz), v011=P(minx,maxy,maxz);
      const v100=P(maxx,miny,minz), v101=P(maxx,miny,maxz), v110=P(maxx,maxy,minz), v111=P(maxx,maxy,maxz);

      const shade=(hex,k)=>{const n=parseInt(hex.slice(1),16);let r=(n>>16)&255,g=(n>>8)&255,b=n&255;r=Math.max(0,Math.min(255,Math.round(r*(1+k))));g=Math.max(0,Math.min(255,Math.round(g*(1+k))));b=Math.max(0,Math.min(255,Math.round(b*(1+k))));return `rgb(${r},${g},${b})`;};
      const cTop = shade(baseColor, +0.15), cRight = shade(baseColor, -0.10), cLeft = shade(baseColor, -0.20);

      // Левая
      ctx.beginPath(); ctx.moveTo(v011.x,v011.y); ctx.lineTo(v111.x,v111.y); ctx.lineTo(v110.x,v110.y); ctx.lineTo(v010.x,v010.y); ctx.closePath();
      ctx.fillStyle=cLeft; ctx.fill(); ctx.strokeStyle='#222'; ctx.lineWidth=1; ctx.stroke();
      // Правая
      ctx.beginPath(); ctx.moveTo(v101.x,v101.y); ctx.lineTo(v111.x,v111.y); ctx.lineTo(v110.x,v110.y); ctx.lineTo(v100.x,v100.y); ctx.closePath();
      ctx.fillStyle=cRight; ctx.fill(); ctx.strokeStyle='#222'; ctx.stroke();
      // Верхняя
      ctx.beginPath(); ctx.moveTo(v001.x,v001.y); ctx.lineTo(v101.x,v101.y); ctx.lineTo(v111.x,v111.y); ctx.lineTo(v011.x,v011.y); ctx.closePath();
      ctx.fillStyle=cTop; ctx.fill(); ctx.strokeStyle='#222'; ctx.stroke();

      const pLabel = P(cx, cy, maxz+0.01);
      ctx.fillStyle='#fff'; ctx.font='bold 12px Segoe UI'; ctx.textAlign='center'; ctx.fillText(label, pLabel.x, pLabel.y-6);

      applyB(v000); applyB(v111);
    }

    // Устройство: порт в центре ВЕРХНЕЙ грани
    function drawDeviceIso(type, topX, topY, topZ){
      const dims = (type==='grsh')
        ? { sx:0.6, sy:0.6, sz:2.3, color:colors.grshBody, label:'ГРЩ' }
        : { sx:1.0, sy:1.0, sz:1.4, color:colors.transformerBody, label:'ТР' };

      // Центр коробки так, чтобы её верх совпал с (topX, topY, topZ)
      const cx = topX;
      const cy = topY;
      const cz = topZ - dims.sz/2;

      drawBoxIso(cx, cy, cz, dims.sx, dims.sy, dims.sz, dims.color, dims.label);

      // Порт подключения — центр верхней грани
      return { x: topX, y: topY, z: topZ };
    }

    // ==== последовательность ====
    if (startPoint!=='none'){
      const port = drawDeviceIso(startPoint, X, Y, Z);  // верх устройства = текущей высоте трассы
      const p=project(port.x,port.y,port.z); drawConnectorIso(p.x,p.y);
      // небольшое смещение по текущему горизонтальному направлению
      X += 0.2*dir.x; Y += 0.2*dir.y;
    }

    if (initialRiser && Math.abs(initialRiser.deltaH)>0){
      const p0=project(X,Y,Z); drawConnectorIso(p0.x,p0.y);
      drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // H→V маркер
      drawRiserIso(X,Y,Z, initialRiser.deltaH);
      Z += initialRiser.deltaH;
      const pt=project(X,Y,Z); drawConnectorIso(pt.x,pt.y);
      drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // V→H маркер
    }

    segments.forEach((seg,i)=>{
      const end = drawSegIso(X,Y,Z, seg.length, dir);

      const cntF = Math.floor(seg.length / mountingStep);
      for(let j=1;j<=cntF;j++) drawFastenerIso(X,Y,Z,dir, j*mountingStep);

      const inner = Math.ceil(seg.length / config.maxStraightLength) - 1;
      for(let j=1;j<=inner;j++){ const sp=project(X+j*config.maxStraightLength*dir.x, Y+j*config.maxStraightLength*dir.y, Z+j*config.maxStraightLength*dir.z); drawConnectorIso(sp.x,sp.y); }

      X=end.x; Y=end.y; Z=end.z;

      if (seg.blockType!=='none' && i<segments.length-1){
        const sp = project(X,Y,Z); drawConnectorIso(sp.x,sp.y);

        if (seg.blockType==='angle'){
          switch(seg.direction){ case 'right':dir={x:1,y:0,z:0};break; case 'left':dir={x:-1,y:0,z:0};break; case 'up':dir={x:0,y:-1,z:0};break; case 'down':dir={x:0,y:1,z:0};break; }
          ctx.fillStyle=colors.accent; ctx.font='bold 13px Segoe UI'; ctx.fillText(`${seg.angle}°`, sp.x+10, sp.y-10);

        } else if (seg.blockType==='tee'){
          ctx.beginPath(); ctx.arc(sp.x,sp.y,8,0,Math.PI*2); ctx.fillStyle=colors.tee; ctx.fill();
          let bdir={x:0,y:1,z:0}; if(seg.direction==='right')bdir={x:1,y:0,z:0}; if(seg.direction==='left')bdir={x:-1,y:0,z:0}; if(seg.direction==='up')bdir={x:0,y:-1,z:0};
          drawSegIso(X,Y,Z, seg.branch?seg.branch.length:0, bdir);
          ctx.fillStyle=colors.text; ctx.font='bold 12px Segoe UI'; ctx.fillText('Т-отвод', sp.x+10, sp.y-8);

        } else if (seg.blockType==='outlet'){
          ctx.fillStyle=colors.outlet; ctx.fillRect(sp.x-10,sp.y-10,20,20); ctx.strokeStyle=colors.outline; ctx.strokeRect(sp.x-10,sp.y-10,20,20);
          ctx.fillStyle='#fff'; ctx.font='bold 10px Segoe UI'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText((seg.outlet?.current||'')+'A', sp.x, sp.y);

        } else if (seg.blockType==='riserUp' || seg.blockType==='riserDown'){
          const dh = Math.abs(seg.riser?.deltaH||0);
          if (dh>0){
            drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // H→V
            drawRiserIso(X,Y,Z, seg.blockType==='riserUp'?+dh:-dh);
            Z += (seg.blockType==='riserUp'?+dh:-dh);
            const sp2=project(X,Y,Z); drawConnectorIso(sp2.x,sp2.y);
            drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // V→H
          }
        }
      }
    });

    if (finalRiser && Math.abs(finalRiser.deltaH)>0){
      const p0=project(X,Y,Z); drawConnectorIso(p0.x,p0.y);
      drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // H→V
      drawRiserIso(X,Y,Z, finalRiser.deltaH);
      Z += finalRiser.deltaH;
      const pTop=project(X,Y,Z); drawConnectorIso(pTop.x,pTop.y);
      drawSegIso(X,Y,Z,0.2,{x:0,y:0,z:0}); // V→H
    }

    if (endPoint!=='none'){
      const port = drawDeviceIso(endPoint, X, Y, Z); // порт на верхушке в (X,Y,Z)
      const p=project(port.x,port.y,port.z); drawConnectorIso(p.x,p.y);
    }

    lastBounds = { minX:lastBoundsTmp.minX-40, minY:lastBoundsTmp.minY-40, maxX:lastBoundsTmp.maxX+40, maxY:lastBoundsTmp.maxY+40 };
  }

  function fitToContent(){
    if (!lastCalculation){ redraw(); return; }
    const W=canvas.clientWidth, H=canvas.clientHeight;
    viewport.panX=0; viewport.panY=0; viewport.scale=1; redraw();

    const w=Math.max(200, lastBounds.maxX-lastBounds.minX);
    const h=Math.max(200, lastBounds.maxY-lastBounds.minY);
    const s=Math.min(viewport.maxScale, Math.max(viewport.minScale, Math.min(W/w, H/h)));
    viewport.scale=s;

    const cx=(lastBounds.minX+lastBounds.maxX)/2, cy=(lastBounds.minY+lastBounds.maxY)/2;
    viewport.panX = W/2 - cx*s;
    viewport.panY = H/2 - cy*s;

    redraw();
  }

  // =============== Excel export (план + изометрия) ===============
  async function exportToExcel(){
    if (!lastCalculation){ showError('Сначала выполните расчёт'); return; }
    try{
      const prev={mode:viewMode, scale:viewport.scale, panX:viewport.panX, panY:viewport.panY, grid:viewport.showGrid};

      viewMode='plan'; viewport.showGrid=false; fitToContent();
      const planPNG = canvas.toDataURL('image/png');

      viewMode='iso'; viewport.showGrid=false; fitToContent();
      const isoPNG = canvas.toDataURL('image/png');

      viewMode=prev.mode; viewport.scale=prev.scale; viewport.panX=prev.panX; viewport.panY=prev.panY; viewport.showGrid=prev.grid; redraw();

      const { projectName, components, totalPrice, current, material, ip, fireproof } = lastCalculation;

      const rows = [
        [`Наименование проекта:`, projectName||'', "", "", "", ""],
        ["1) Данная спецификация может быть использована для формирования бюджета на закупку шинопровода, но не может быть использована для размещения заказа.", "", "", "", "", ""],
        ["2) Спецификация является упрощенной и может корректироваться с получением дополнительных исходных данных.", "", "", "", "", ""],
        ["3) Для заказа: подготовить трассы, получить заказную спецификацию и запросить КП в Центре Поддержки Клиентов.", "", "", "", "", ""],
        ["", "", "", "", "ИТОГО:", totalPrice.toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2})],
        [],
        ["", `Шинопровод МГ - SystemeLine BDW ${current}A 3L+N+PE (${material==='aluminum'?'AL':'Cu'}), ${material==='aluminum'?'Алюминий':'Медь'}, ${ip}${fireproof==='yes'?', огнестойкое исполнение':''}`],
        [],
        ["Референс","Описание","Количество","Ед. изм.","Тариф, руб. без НДС","Сумма, руб. без НДС"]
      ];
      components.forEach(c=>{
        let qty = c.quantity || 1;
        let unit = c.length ? 'метр' : 'штука';
        let unitPrice;
        if (c.length){ qty=c.length; unitPrice=(c.price/(c.length||1))||0; }
        else if (c.quantity){ unitPrice=(c.price/(c.quantity||1))||0; }
        else { unitPrice=c.price||0; }
        rows.push(["", c.type, typeof qty==='number'?qty:String(qty), unit, Number(unitPrice).toFixed(2), (c.price||0).toLocaleString('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2})]);
      });

      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet('Спецификация');
      rows.forEach(r=>ws.addRow(r));
      ws.mergeCells(1,1,1,6);
      ws.mergeCells(2,1,2,6);
      ws.mergeCells(3,1,3,6);
      ws.mergeCells(4,1,4,6);
      ws.mergeCells(7,2,7,6);
      ws.columns = [{width:14},{width:60},{width:12},{width:10},{width:20},{width:22}];
      ws.getRow(9).font = {bold:true};

      const wsImg = wb.addWorksheet('Чертежи');
      const imgPlan = wb.addImage({ base64: planPNG, extension:'png' });
      const imgIso  = wb.addImage({ base64: isoPNG,  extension:'png' });

      const w = Math.max(600, canvas.clientWidth);
      const h = Math.max(300, canvas.clientHeight);
      wsImg.addImage(imgPlan, { tl:{col:0,row:0}, ext:{width:w, height:h} });
      wsImg.addImage(imgIso,  { tl:{col:0,row: Math.ceil(h/18)+2}, ext:{width:w, height:h} });

      const buf = await wb.xlsx.writeBuffer();
      saveAs(new Blob([buf], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}), `Спецификация_${(projectName||'шинопровод')}.xlsx`);
    }catch(err){
      console.error(err);
      showError('Ошибка при формировании Excel: ' + (err.message||err));
    }
  }

  // =============== Main ===============
  function calculateAndDraw(e){
    e?.preventDefault?.();
    errorMessage.style.display='none';
    try{
      const projectName = document.getElementById('project-name').value;
      const current = currentSelect.value;
      const material = materialSelect.value;
      const startPoint = startPointSelect.value;
      const endPoint = endPointSelect.value;
      const ip = ipSelect.value;
      const fireproof = fireproofSelect.value;
      const mountingStep = parseFloat(mountingStepInput.value)||1;
      const mountingStepVert = parseFloat(mountingStepVertInput.value)||1;
      const baseHeight = parseFloat(baseHeightInput.value)||0;

      const segments = getSegmentsData();
      validateTotalLength(segments);
      const initialRiser = getInitialRiserData();
      const finalRiser = getFinalRiserData();

      const { components, totalPrice, totalVerticalLength } =
        calculateComponents(segments, current, material, startPoint, endPoint, mountingStep, mountingStepVert, baseHeight, initialRiser, finalRiser);

      displayResults(components, totalPrice, current, material, startPoint, endPoint, ip, fireproof,
        segments, mountingStep, mountingStepVert, baseHeight, totalVerticalLength);

      lastCalculation = {
        projectName, components, totalPrice, current, material, startPoint, endPoint,
        ip, fireproof, segments, mountingStep, mountingStepVert, baseHeight, totalVerticalLength,
        initialRiser, finalRiser
      };
      redraw();
      fitToContent();
    }catch(err){
      showError(err.message||String(err));
    }
  }

  // init
  updateCurrentOptions();
  resizeCanvasToWrapper();
  try{
    const segments = getSegmentsData();
    lastCalculation = {
      projectName:'', components:[], totalPrice:0,
      current: currentSelect.value, material: materialSelect.value,
      startPoint: startPointSelect.value, endPoint: endPointSelect.value,
      ip: ipSelect.value, fireproof: fireproofSelect.value,
      segments,
      mountingStep: parseFloat(mountingStepInput.value)||1,
      mountingStepVert: parseFloat(mountingStepVertInput.value)||1,
      baseHeight: parseFloat(baseHeightInput.value)||0,
      totalVerticalLength: 0,
      initialRiser: getInitialRiserData(),
      finalRiser: getFinalRiserData()
    };
    redraw(); setTimeout(()=>fitToContent(),50);
  }catch(_){}
});
