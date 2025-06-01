export default async ({ addon }) => {
  while (true) {
    const targetElem = await addon.tab.waitForElement(
      'div[class*="menu-bar_file-group"] > div:last-child:not(.sa-record)',
      { markAsSeen: true }
    );

    if (!document.querySelector('.sa-debug-modal-button')) {
      const button = document.createElement("div");
      button.className = "sa-debug-modal-button " + targetElem.className;
      button.textContent = "デバッグ";
      button.style.cursor = "pointer";

      button.addEventListener("click", () => {
        injectDebugConsole();
      });

      targetElem.parentElement.appendChild(button);
    }
  }

  // 浮動コンソールをページに挿入する関数
  function injectDebugConsole() {
    if (window.__injectedConsole) return;
    window.__injectedConsole = true;

const style = `
  #floatingConsole {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 400px;
    max-height: 60vh;
    background: #111;
    color: #0f0;
    font-family: monospace;
    font-size: 14px;
    border: 1px solid #0f0;
    border-radius: 8px;
    box-shadow: 0 0 10px #0f0;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    resize: both;
    overflow: hidden;
  }
  #floatingConsoleHeader {
    background: #222;
    cursor: move;
    padding: 5px 10px;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #floatingConsoleHeader button {
    background: transparent;
    color: #0f0;
    border: none;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;
  }
  #floatingConsoleLog {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    border-top: 1px solid #0f0;
    border-bottom: 1px solid #0f0;
    background: #000;
  }
  .log-info {
    color: #0f0;
  }
  .log-warn {
    color: #ff0;
  }
  .log-error {
    color: #f00;
  }
  #floatingConsoleInput {
    display: flex;
    border-top: 1px solid #0f0;
  }
  #floatingConsoleInput textarea {
    flex: 1;
    background: #000;
    color: #0f0;
    border: none;
    padding: 10px;
    font-family: monospace;
    resize: none;
    height: 80px;
  }
  #floatingConsoleInput button {
    background: #333;
    color: #0f0;
    border: none;
    padding: 10px;
    cursor: pointer;
    white-space: nowrap;
  }
`;

    const css = document.createElement("style");
    css.textContent = style;
    document.head.appendChild(css);

    const el = document.createElement("div");
    el.id = "floatingConsole";
el.innerHTML = `
  <div id="floatingConsoleHeader">
    <span id="consoleTitle">🖥 Console</span>
    <div>
      <button id="minBtn">∧</button>
      <button id="closeBtn">×</button>
    </div>
  </div>
  <div id="floatingConsoleLog">[Console Ready]</div>
  <div id="floatingConsoleInput">
    <textarea id="floatingConsoleCmd" placeholder="JavaScriptを入力して実行...（実行ボタンかctrl+shift+enterで実行）"></textarea>
    <button id="execBtn">実行</button>
  </div>
`;
    document.body.appendChild(el);

    const logBox = el.querySelector("#floatingConsoleLog");
    const input = el.querySelector("#floatingConsoleCmd");

const log = (msg, type = "info") => {
  const div = document.createElement("div");
  div.className = `log-${type}`;
  div.textContent = "> " + msg;
  logBox.appendChild(div);
  // 区切り線を追加
  const hr = document.createElement("hr");
  hr.style.border = "0";
  hr.style.borderTop = "1px solid #0f0";
  hr.style.margin = "2px 0";
  logBox.appendChild(hr);
  logBox.scrollTop = logBox.scrollHeight;
};

el.querySelector("#execBtn").onclick = () => {
  const code = input.value;
  input.value = "";
  try {
    const result = eval(code);
    log("結果: " + result, "info");
  } catch (e) {
    log("エラー: " + e, "error");
  }
};

    el.querySelector("#closeBtn").onclick = () => {
      el.remove();
      window.__injectedConsole = false;
    };

    let minimized = false;
    const minBtn = el.querySelector("#minBtn");
    const header = el.querySelector("#floatingConsoleHeader");
    const title = el.querySelector("#consoleTitle");

    minBtn.onclick = () => {
      minimized = !minimized;
      logBox.style.display = minimized ? "none" : "block";
      el.querySelector("#floatingConsoleInput").style.display = minimized ? "none" : "flex";
      title.style.display = minimized ? "none" : "inline";
      el.querySelector("#closeBtn").style.display = minimized ? "none" : "inline";
      minBtn.textContent = minimized ? "∨" : "∧";

      if (minimized) {
        el.style.width = "auto";
        el.style.height = "auto";
        el.style.overflow = "visible";
      } else {
        el.style.width = "400px";
        el.style.maxHeight = "60vh";
      }
    };

    // ドラッグ移動
    (function makeDraggable(target, handle) {
      let offsetX = 0, offsetY = 0, dragging = false;
      handle.addEventListener("mousedown", (e) => {
        dragging = true;
        offsetX = e.clientX - target.offsetLeft;
        offsetY = e.clientY - target.offsetTop;
        document.body.style.userSelect = "none";
      });
      document.addEventListener("mousemove", (e) => {
        if (dragging) {
          target.style.left = (e.clientX - offsetX) + "px";
          target.style.top = (e.clientY - offsetY) + "px";
          target.style.right = "auto";
          target.style.bottom = "auto";
        }
      });
      document.addEventListener("mouseup", () => {
        dragging = false;
        document.body.style.userSelect = "";
      });
    })(el, header);

// consoleフックもタイプ別に変更
const hookConsole = (name) => {
  const original = console[name];
  console[name] = function (...args) {
    original.apply(console, args);
    let type = "info";
    if (name === "warn") type = "warn";
    if (name === "error") type = "error";
    log(`[${name}] ` + args.join(" "), type);
  };
};
["log", "warn", "error"].forEach(hookConsole);

// window.onerrorのログ
window.onerror = (msg, src, line, col, err) => {
  log(`[onerror] ${msg} @ ${line}:${col}`, "error");
};
window.addEventListener("unhandledrejection", (e) => {
  log(`[unhandledrejection] ${e.reason}`, "error");
});
    input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.ctrlKey && e.shiftKey) {
    e.preventDefault(); // 改行を防ぐ（必要なら外してもOK）
    el.querySelector("#execBtn").click();
  }
});

  }
};
