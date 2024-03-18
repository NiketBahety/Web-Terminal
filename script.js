const banner =
  "\n   _  ___ __       __    ___       __       __      \n  / |/ (_) /_____ / /_  / _ )___ _/ /  ___ / /___ __\n /    / /  '_/ -_) __/ / _  / _ `/ _ \\/ -_) __/ // /\n/_/|_/_/_/\\_\\\\__/\\__/ /____/\\_,_/_//_/\\__/\\__/\\_, / \n                                             /___/  \n";

const addListeners = () => {
  let command = document.getElementById("command");
  let terminal = document.getElementById("terminal");

  const handleEnter = () => {
    let text = command.innerText;
    let line = document.createElement("div");
    line.classList.add("line");
    terminal.appendChild(line);
    line.innerHTML = `<span class="line-heading">guest@niketbahety-portfolio.com</span
      ><span class="text-secondary">:~$</span>`;
    line.innerHTML += `\n<span class="command">${text}</span
        >`;

    console.log(text);
    displayResult(text);

    command.innerText = "";
  };

  document.addEventListener("keypress", (e) => {
    let text = command.innerText;
    const chars = [
      " ",
      ",",
      ";",
      ":",
      '"',
      "?",
      "/",
      "|",
      "_",
      "+",
      "-",
      "=",
      "~",
      "`",
      "'",
      "\\",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "{",
      "}",
      "[",
      "]",
      "<",
      ">",
    ];
    if (e.key === "Enter") {
      document.getElementById("main").scrollTop =
        document.getElementById("main").scrollHeight;
      handleEnter();
    } else if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "A" && e.key <= "Z") ||
      (e.key >= "0" && e.key <= "9") ||
      chars.includes(e.key)
    ) {
      document.getElementById("main").scrollTop =
        document.getElementById("main").scrollHeight;
      text += e.key;
      command.innerText = text;
    }
  });

  document.addEventListener("keydown", (e) => {
    let text = command.innerText;
    if (e.ctrlKey && e.key === "Backspace") {
      document.getElementById("main").scrollTop =
        document.getElementById("main").scrollHeight;
      let arr = text.split(" ");
      arr.pop();
      text = arr.join(" ");
      command.innerText = text;
    } else if (e.key === "Backspace") {
      document.getElementById("main").scrollTop =
        document.getElementById("main").scrollHeight;
      text = text.slice(0, -1);
      command.innerText = text;
    }
  });

  document.addEventListener("paste", async (e) => {
    document.getElementById("main").scrollTop =
      document.getElementById("main").scrollHeight;
    let text = command.innerText;
    text += await navigator.clipboard.readText();
    command.innerText = text;
  });
};

const drawBanner = () => {
  let upd = banner.replaceAll(" ", "&nbsp;");
  let arr = upd.split("\n");
  let div = document.createElement("div");
  div.classList.add("banner");
  document.getElementById("main").prepend(div);

  let time = 0;

  // ASCII Art
  for (let i = 0; i < arr.length; i++) {
    time = i * 200;
    addLine(div, arr[i], time);
  }

  time += 200;

  // Info
  setTimeout(() => {
    let p = document.createElement("p");
    p.classList.add("info");
    document.getElementById("main").append(p);

    p.innerText = "Welcome to my interactive web terminal.";
  }, time);

  time += 200;

  // Info
  setTimeout(() => {
    let p = document.createElement("p");
    p.classList.add("info");
    document.getElementById("main").append(p);

    p.innerHTML = `For a list of available commands, type <span class="command">'help'</span>.`;
  }, time);

  time += 200;

  // Terminal
  setTimeout(() => {
    let div = document.createElement("div");
    div.classList.add("terminal");
    div.id = "terminal";
    document.getElementById("main").append(div);
  }, time);

  time += 200;

  // Command Line
  setTimeout(() => {
    let div = document.createElement("div");
    div.classList.add("line");
    div.id = "command-line";
    document.getElementById("main").append(div);

    div.innerHTML = `<span class="line-heading">guest@niketbahety-portfolio.com</span
        ><span class="text-secondary">:~$</span>
        <span class="command" id="command"></span
        ><span class="text-cursor">█</span>`;
  }, time);

  time += 200;

  // Event listeners
  setTimeout(() => {
    addListeners();
  }, time);
};

const addLine = (div, text, time) => {
  setTimeout(() => {
    let p = document.createElement("p");
    p.innerHTML = text;
    div.append(p);
  }, time);
};

const init = () => {
  for (let i = 0; i < colors.length; i++) {
    let div = document.createElement("div");
    div.classList.add("color");
    div.style.backgroundColor = colors[i].bg;
    document.getElementById("color-options").appendChild(div);
    div.addEventListener("click", () => {
      const root_theme = document.querySelector(":root");
      root_theme.style.setProperty("--bg", colors[i].bg);
      root_theme.style.setProperty("--primary", colors[i].primary);
      root_theme.style.setProperty("--dark", colors[i].dark);
      root_theme.style.setProperty("--secondary", colors[i].secondary);
      root_theme.style.setProperty("--cursor", colors[i].cursor);
      root_theme.style.setProperty("--error", colors[i].error);
      root_theme.style.setProperty("--shadow", colors[i].shadow);
    });
  }
};

drawBanner();
init();

const displayResult = (value) => {
  switch (value) {
    case "help":
      for (let i = 0; i < help.length; i++) {
        setTimeout(() => {
          let p = document.createElement("p");
          p.classList.add("output");
          document.getElementById("terminal").append(p);

          p.innerHTML = help[i].replaceAll("  ", "&nbsp;&nbsp;");
          document.getElementById("main").scrollTop =
            document.getElementById("main").scrollHeight;
        }, i * 200);
      }

      break;

    case "whois":
      for (let i = 0; i < whois.length; i++) {
        setTimeout(() => {
          let p = document.createElement("p");
          p.classList.add("output");
          document.getElementById("terminal").append(p);

          p.innerHTML = whois[i].replaceAll("  ", "&nbsp;&nbsp;");
          document.getElementById("main").scrollTop =
            document.getElementById("main").scrollHeight;
        }, i * 200);
      }

      break;

    case "clear":
      document.getElementById("terminal").innerHTML = "";
      break;

    case "email":
      window.open("mailto:" + emailAddress, "_blank");
      break;

    case "social":
      for (let i = 0; i < social.length; i++) {
        setTimeout(() => {
          let p = document.createElement("p");
          p.classList.add("output");
          document.getElementById("terminal").append(p);

          p.innerHTML = social[i].replaceAll("  ", "&nbsp;&nbsp;");
          document.getElementById("main").scrollTop =
            document.getElementById("main").scrollHeight;
        }, i * 200);
      }
      break;

    case "cp":
      for (let i = 0; i < cp.length; i++) {
        setTimeout(() => {
          let p = document.createElement("p");
          p.classList.add("output");
          document.getElementById("terminal").append(p);

          p.innerHTML = cp[i].replaceAll("  ", "&nbsp;&nbsp;");
          document.getElementById("main").scrollTop =
            document.getElementById("main").scrollHeight;
        }, i * 200);
      }
      break;

    case "projects":
      for (let i = 0; i < projects.length; i++) {
        setTimeout(() => {
          let p = document.createElement("p");
          p.classList.add("output");
          document.getElementById("terminal").append(p);

          p.innerHTML = projects[i].replaceAll("  ", "&nbsp;&nbsp;");
          document.getElementById("main").scrollTop =
            document.getElementById("main").scrollHeight;
        }, i * 200);
      }
      break;

    case "":
      break;

    default:
      let p = document.createElement("p");
      p.classList.add("output");
      p.classList.add("error");
      document.getElementById("terminal").append(p);

      p.innerHTML = `Command not found. For a list of commands, type <span class="command">'help'</span>.`;
  }
};
