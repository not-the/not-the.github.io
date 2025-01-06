/** Modify these for different effects */
const config = {
    // Noise
    noiseScale: 12,
    noise1BlendMode: "color-dodge",
    noise2BlendMode: "hard-mix",
    // noise1BlendMode: "color-dodge",
    // noise2BlendMode: "hard-mix",

    // Filters
    blackReplaceFilter: true,
    CRTFilter: false
}



// PIXI setup
const container = document.getElementById("banner");
// const debug = document.getElementById("debug");
const app = new PIXI.Application();
await app.init({
    background: '#181a30',
    backgroundAlpha: 0,
    resizeTo: container,

    useBackBuffer: true,
    
    antialias: false,
    useContextAlpha: false
});
app.renderer.background.alpha = 0;
container.appendChild(app.canvas);


// Filters
const stageFilters = [
    // new PIXI.filters.ColorReplaceFilter(0xff00ff, 0xffffff, 1), // Replace magenta
    // new PIXI.filters.ColorReplaceFilter(0xffffff, 0x265239, 1), // Replace white
    // new PIXI.filters.ColorReplaceFilter(0x26ff39, 0x000000, 1), // Replace midcolor
]

// Conditional filters
config.blackReplaceFilter && stageFilters.push(new PIXI.filters.ColorReplaceFilter(0x000000, 0x171718, 1)); // Replace blacks
config.CRTFilter && stageFilters.push( // CRT
    new PIXI.filters.CRTFilter({
        curvature: 50,
        lineWidth: 0,
        lineContrast: 0.25,
        verticalLine: false,
        // noise: 0.3,
        // noiseSize: 1.0,
        // seed: 0,
        vignetting: 0,
        // vignettingAlpha: 1.0,
        // vignettingBlur: 0.2,
        time: 0
    })
);

app.stage.filters = stageFilters;


const appSize = {
    width: app.screen.width,
    height: app.screen.height,
}

// Textures
const gridTexture = await PIXI.Assets.load("/assets/canvas/grid8.png");
const simplexTexture = await PIXI.Assets.load("/assets/canvas/simplex1.png");
// const displaceWaterTexture = await PIXI.Assets.load("/assets/canvas/displace_water2.jpg");
// const displaceWaterTexture = await PIXI.Assets.load("/assets/canvas/displace_simplex.png");
const donutTexture = await PIXI.Assets.load("/assets/canvas/donut.png");


// Container
const renderTexture = PIXI.RenderTexture.create({ ...appSize });
const renderSprite = new PIXI.Sprite(renderTexture);

const blendContainer = new PIXI.Container();
app.stage.addChild(blendContainer);


// BG Blobs
// const blobs = new PIXI.TilingSprite({
//     texture: simplexTexture
// });
// blobs.tileScale.x = 12;
// blobs.tileScale.y = 12;
// blobs.tint = 0x2335C0;

// const blobsBlurFilter = new PIXI.BlurFilter();
// blobsBlurFilter.blur = 50;
// blobs.filters = [blobsBlurFilter];

// blendContainer.addChild(blobs);

// Grid
const grid = new PIXI.TilingSprite({
    ...appSize,
    texture: gridTexture
});
grid.x = app.screen.width / 2;
grid.y = app.screen.height / 2;
grid.anchor.set(0.5);
blendContainer.addChild(grid);


// Noise1
const noise1 = new PIXI.TilingSprite({
    texture: simplexTexture,
    blendMode: config.noise1BlendMode
});

noise1.tileScale.x = config.noiseScale;
noise1.tileScale.y = config.noiseScale;
blendContainer.addChild(noise1);

// Noise2
const noise2 = new PIXI.TilingSprite({
    texture: simplexTexture,
    blendMode: config.noise2BlendMode
});
noise2.tileScale.x = config.noiseScale;
noise2.tileScale.y = config.noiseScale;
blendContainer.addChild(noise2);


// Mouse element
const mouseElement = new PIXI.Graphics().circle(0, 0, 175).fill("white");
mouseElement.blendMode = config.noise2BlendMode;

const mouseElementBlurFilter = new PIXI.BlurFilter();
mouseElementBlurFilter.strength = 120;
mouseElement.filters = [mouseElementBlurFilter];

blendContainer.addChild(mouseElement);


// Donut
const donutBlurFilter = new PIXI.BlurFilter();
donutBlurFilter.strength = 100;


// Displacement map element
// const displace = new PIXI.Sprite(displaceWaterTexture);
// // displace.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
// displace.width = app.view.width;
// displace.height = app.view.height;
// displace.padding = 2;
// displace.scale.set(1);
// displace.anchor.set(0.5);

// const displacementFilter = new PIXI.DisplacementFilter({ sprite: displace, scale: { x: app.view.width, y: app.view.height } });
// displace.position = displace.position;

// app.stage.filters = [ displacementFilter ];

// blendContainer.addChild(displace);



// Debug
// const allBlendModes = [
//     'normal',
//     'add',
//     'screen',
//     'darken',
//     'lighten',
//     'color-dodge',
//     'color-burn',
//     'linear-burn',
//     'linear-dodge',
//     'linear-light',
//     'hard-light',
//     'soft-light',
//     'pin-light',
//     'difference',
//     'exclusion',
//     'overlay',
//     'saturation',
//     'color',
//     'luminosity',
//     'add-npm',
//     'subtract',
//     'divide',
//     'vivid-light',
//     'hard-mix',
//     'negation',
// ];
// let blendDropdown = "";
// for(const mode of allBlendModes) {
//     blendDropdown += `<option value="${mode}">${mode}</option>`;
// }

// debug.innerHTML = `
// <div>
//     <p>noise1 blend mode</p>
//     <select name="" id="noise1_blend_mode" value="${noise1.blendMode}">
//         ${blendDropdown}
//     </select>
// </div>

// <div>
//     <p>noise2 blend mode</p>
//     <select name="" id="noise2_blend_mode" value="${noise2.blendMode}">
//         ${blendDropdown}
//     </select>
// </div>

// <div>
//     <p>Mouse circle blend mode</p>
//     <select name="" id="mouse_circle_blend_mode" value="${mouseElement.blendMode}">
//         ${blendDropdown}
//     </select>
// </div>
// `;

// document.getElementById("noise1_blend_mode").addEventListener("change", event => {
//     noise1.blendMode = event.currentTarget.value;
// })
// document.getElementById("noise2_blend_mode").addEventListener("change", event => {
//     noise2.blendMode = event.currentTarget.value;
// })
// document.getElementById("mouse_circle_blend_mode").addEventListener("change", event => {
//     mouseElement.blendMode = event.currentTarget.value;
// })



// Mouse movement
app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.interactive = true;

// Follow the pointer
app.stage.addEventListener('pointermove', event => {
    mouseElement.position.copyFrom(event.global);
});

// Ripple
let rippleID = 0;
const ripples = {};
// app.stage.on('pointerup', rippleHandler);
// app.stage.on('pointerenter', rippleHandler);
// app.stage.on('pointerleave', rippleHandler);
document.getElementById("home").addEventListener("click", rippleHandler);
function rippleHandler(event) {
    requestAnimationFrame(() => {
        // Maximum
        if(Object.keys(ripples).length > 12) return;

        const donut = new PIXI.Sprite(donutTexture);
        donut.blendMode = config.noise2BlendMode;
        donut.anchor.set(0.5);
        // donut.position.copyFrom(event.global);
        donut.position = { x:event.pageX, y:event.pageY };
        donut.alpha = 0.9;
        
        donut.filters = [donutBlurFilter];
    
        blendContainer.addChild(donut);
    
        // Register
        const thisID = rippleID;
        ripples[rippleID] = donut;
        rippleID++;
    
        // Delete later
        setTimeout(() => {
            ripples[thisID].parent.removeChild(ripples[thisID]);
            delete ripples[thisID];
        }, 1500);
    })
}


// Ticker
let elapsed = 0.0;
app.ticker.add(({ deltaTime }) => {
    elapsed += deltaTime;

    // grid.tilePosition.x += deltaTime;
    // grid.tilePosition.y += deltaTime;

    // console.log(elapsed);
    // console.log(Math.sin(elapsed), Math.cos(elapsed));

    // grid.tilePosition.x = -Math.sin(elapsed/80) * 40;
    // grid.tilePosition.y = Math.cos(elapsed/80) * 40;

    // Displacement
    // displace.x = Math.sin(elapsed/1000)*500;
    // displace.y = Math.cos(elapsed/1000)*500;
    // if(rippling) {
    //     displace.scale.x += 0.03;
    //     displace.scale.y += 0.03;
    //     if(displace.scale.x > 40) {
    //         rippling = false;
    //         displace.scale.set(1);
    //     }
    // }


    // Ripples
    for(const id in ripples) {
        const donut = ripples[id];
        donut.scale.x += 0.15;
        donut.scale.y += 0.15;
    }


    // Noise layers
    const dist1 = 600;
    noise1.tilePosition.x = Math.sin(-elapsed/1500) * dist1 - dist1;
    noise1.tilePosition.y = Math.cos(-elapsed/1500) * dist1 - dist1;

    const dist2 = 600;
    noise2.tilePosition.x = -Math.sin(-elapsed/1300) * dist2 - dist2;
    noise2.tilePosition.y = -Math.cos(-elapsed/1300) * dist2 - dist2;

    // Mouse skew
    mouseElement.skew.x = Math.sin(elapsed/100) / 5;
    mouseElement.skew.y = Math.cos(elapsed/80) / 5;
});
