
const width = 600;
const height = 800;

const left = window.innerWidth / 2 - width / 2;
const top = window.innerHeight / 2 - height / 2;

const ignoreList = ["react-renderer-attached", ];

export function open(url: string, label: string) {
  const popup = window.open(url, '', `width=${width}, 
          height=${height}, top=${top}, left=${left}`);

  popup.addEventListener("message", (m) => {
    if (m.data && (m.data.source === "react-devtools-hook" || m.data.target === "metamask-contentscript" || m.data.target === "metamask-inpage" || m.data.target === "inpage")) return;

    console.log(label, m)
  });

  return popup;
}
