// script.js
document.addEventListener("DOMContentLoaded", () => {
  // ----- ここから編集してください -----
  // 各アプリの情報を記述します。
  // id: HTML要素のID接頭辞として使用 (ユニークな文字列にしてください)
  // name: アプリの正式名称
  // description: アプリの簡単な紹介文
  // images: 表示する画像の配列。各画像は { src: "画像のパス", caption: "画像の説明文" } の形式です。
  //         画像パスは "images/ファイル名.png" のように指定します。
  // appUrl: アプリへジャンプするためのURL
  const appsData = [
    {
      id: "chinese-conversation-master", // 例: アプリ1のID
      name: "App①教科書の会話文",
      description:
        "各課の会話文が各ページに掲載されており、それぞれ音声の確認ができます。",
      images: [
        // { src: "images/honbunIni.jpg", caption: "初期表示画面：最初の学習内容が表示されます。" },
        {
          src: "images/会話初期画面.jpg",
          caption: "先頭の第1課の内容が選択されています。学びたい課を選択できます。中国語の文章をクリックすると中国語の音色が流れます。",
        },
        {
          src: "images/会話音声入力.jpg",
          caption:
            "PRACTICEボタンをクリックすると音声入力モードになります。例文を音声入力するとあなたの発音を評価してくれます。上部の音声入力練習記録をコピー　ボタンをキリックするとクリップボードに練習記録をコピーできます。",
        },
        {
          src: "images/会話動画.jpg",
          caption:
            "上部の動画を見るボタンをクリックするとリアルな会話動画が再生されます。字幕付きなので、視覚的にも内容を理解できます。",
        },
        
        // { src: "images/app1_screen3.png", caption: "テスト結果：間違えた単語を復習できます。" }
      ],
      appUrl:
        "https://tamagenai.github.io/SUWENJIDA/", // あなたのアプリ1への実際のURLに置き換えてください
    },
    {
      id: "pinyin-trainer", // 例: アプリ2のID
      name: "App②単語カード",

      description:
        "単語学習画面は、主に以下の3つのエリアに分かれています。上部メニュー: 「テストモードへ」の切り替え、レッスン選択、一覧表示。中央「カード」画面: 単語の学習エリア。下部メニュー: 「学習」「My帳」「検索」「登録」の主要機能。",
      images: [
        {
          src: "images/単語初期画面.jpg",
          caption: "初期画面　先頭のレッスンの日本語訳がカード形式で表示されます。カードの表を日本語訳にするか中国語にするかの選択もできます。",
        },
        
        {
          src: "images/単語カード.jpg",
          caption:
            "日本語が表示されたカードをクリックすれば、中国語が表示され、同時に中国語の音声が流れます。個々の単語の右端に表示されている☆マークをクリックすればMy単語帳に登録できます。",
        },
        {
          src: "images/単語一覧.jpg",
          caption: "一覧ボタンをクリックすれば、その課で学習する単語一覧が表示されます。個々の単語の右端に表示されている☆マークをクリックすればMy単語帳に登録できます。",
        },
        {
          src: "images/単語テスト.jpg",
          caption:
            "上部のテストモードへボタンをクリックするとテストモードになります。表示されている日本語の中国語をピンイン入力します。",
        },
        {
          src: "images/単語単語帳.jpg",
          caption:
            "下部メニューの「My帳」をクリックすれば、登録されているMy単語帳が表示されます。フラッシュカード形式と、一覧形式で表示できます。",
        },
        
      ],
      appUrl: "https://script.google.com/macros/s/AKfycbwNN5TZUNfbX8WMikWSUJASJ_WkNBvHQtR4iFq60m1-R6Baru8WjErJd8cFfa0H4RA/exec", // あなたのアプリ2への実際のURLに置き換えてください
    },
    {
      id: "sentence-builder", // 例: アプリ3のID
      name: "App③トレーニングクイズ（4択問題）",
      description:
        "各々の課で学習したことを4択問題のクイズ形式で表示するアプリです。",
      images: [
        {
          src: "images/４択初期画面.jpg",
          caption: "クイズ一覧画面が表示されます。学習したいレッスンを選んでタップしましょう。",
        },
        {
          src: "images/４択問題.jpg",
          caption: "問題が表示されて、それに対する解答が表示されます。正しいものを選択してタップする。",
        },
        {
          src: "images/４択問題正解.jpg",
          caption: "正しいものを選択してタップしたときの表示例です。",
        },
        
      ],
      appUrl:
        "https://tamagenai.github.io/SUWEN26Quiz4taku/", // あなたのアプリ3への実際のURLに置き換えてください
    },
    {
        id: "conversation-practice", // 例: アプリ4のID
        name: "App④置き換え練習",
        description: "各々の学習ポイントの説明と、その例文で構成されます。",
        images: [
            { src: "images/ポイント初期画面.jpg",
              caption: "アプリの初期画面です。先頭の課の学習ポイントが一覧形式で表示されます。"
            },
            { src: "images/ポイントお気に入り追加.jpg",
              caption: "一覧形式で表示された学習ポイントをタップすると、その学習ポイントの例文が表示されます。☆マークをクリックすればMy勉強帳に登録できます。"
            },
            { src: "images/ポイント勉強一覧.jpg",
              caption: "上部にあるMy帳（勉強ツール）をクリックすれば、登録されている勉強帳が表示されます。フラッシュカード形式と、一覧形式で表示できます。"
            },
            { src: "images/ポイント勉強カード.jpg",
              caption: "フラッシュカードをタップしたときの表示例です。カードの表を中国語にするか、日本語にするかの選択ができます。"
            },
           
        ],
        appUrl: "https://script.google.com/macros/s/AKfycbyX4CrVdxgkCVHVEde3UQcCDsBHm5peVgzzlmYxo2P7W74hH-c9OPDB89oEK_ownWg/exec" // あなたのアプリ4への実際のURLに置き換えてください
    }
  ];
  // ----- ここまで編集してください -----

  const appListContainer = document.getElementById("app-list-container");
  if (!appListContainer) {
    console.error(
      'Error: App list container (id="app-list-container") not found in HTML.',
    );
    return;
  }

  appsData.forEach((appData) => {
    const showcaseItem = createAppShowcaseElement(appData);
    appListContainer.appendChild(showcaseItem);
  });

  function createAppShowcaseElement(appData) {
    const item = document.createElement("div");
    item.className = "app-showcase-item";
    item.id = `${appData.id}-showcase`;

    const nameElement = document.createElement("h2");
    nameElement.className = "app-name";
    nameElement.textContent = appData.name;
    item.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "app-description";
    descriptionElement.textContent = appData.description;
    item.appendChild(descriptionElement);

    const sliderElement = document.createElement("div");
    sliderElement.className = "image-slider";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const imageElement = document.createElement("img");
    imageElement.className = "slider-image";
    imageElement.alt = `${appData.name} screenshot`; // 初期alt
    imageContainer.appendChild(imageElement);
    sliderElement.appendChild(imageContainer);

    const captionElement = document.createElement("p");
    captionElement.className = "image-caption";
    sliderElement.appendChild(captionElement);

    const controlsElement = document.createElement("div");
    controlsElement.className = "slider-controls";
    const prevButton = document.createElement("button");
    prevButton.className = "prev-btn";
    prevButton.textContent = "◀ Back";
    const nextButton = document.createElement("button");
    nextButton.className = "next-btn";
    nextButton.textContent = "Next ▶";
    controlsElement.appendChild(prevButton);
    controlsElement.appendChild(nextButton);
    sliderElement.appendChild(controlsElement);

    item.appendChild(sliderElement);

    const linkElement = document.createElement("a");
    linkElement.className = "app-link";
    // linkElement.href = appData.appUrl;
    linkElement.textContent = `「${appData.name}」へ`;
    // linkElement.target = '_blank'; // 新しいタブで開く
    // linkElement.rel = 'noopener noreferrer'; // セキュリティ対策
    // iPhoneでの動作を考慮し、クリックイベントで window.open を使用
    linkElement.addEventListener("click", (event) => {
      event.preventDefault(); // aタグのデフォルトの遷移を防ぎます

      // window.open() を使用して新しいタブで開く
      // 'noopener,noreferrer' はセキュリティ上の推奨事項です
      const newWindow = window.open(
        appData.appUrl,
        "_blank",
        "noopener,noreferrer",
      );

      // ポップアップがブロックされた場合のフォールバック（任意）
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        // ユーザーに通知するか、同じウィンドウで開くなどの代替手段を検討
        // alert('新しいタブを開けませんでした。ポップアップブロックの設定を確認してください。\nまたは、以下のURLを直接ブラウザで開いてください：\n' + appData.appUrl);
        // もしポップアップブロックで開けない場合、同じタブで開くことを試みる
        // window.location.href = appData.appUrl;
      }
    });
    item.appendChild(linkElement);

    // スライダーの状態とロジック
    let currentImageIndex = 0;

    function updateSliderDisplay() {
      if (!appData.images || appData.images.length === 0) {
        imageContainer.innerHTML =
          '<p style="padding: 20px; color: #777;">このアプリの画像はまだありません。</p>';
        captionElement.textContent = "";
        prevButton.style.display = "none"; // 画像がない場合はボタンも非表示
        nextButton.style.display = "none";
        return;
      }

      imageElement.style.display = "block"; // 画像がある場合は表示
      prevButton.style.display = "inline-block";
      nextButton.style.display = "inline-block";

      const currentImage = appData.images[currentImageIndex];
      imageElement.src = currentImage.src;
      imageElement.alt =
        currentImage.caption ||
        `${appData.name} screen ${currentImageIndex + 1}`;
      captionElement.textContent = currentImage.caption || "";

      prevButton.disabled = currentImageIndex === 0;
      nextButton.disabled = currentImageIndex === appData.images.length - 1;
    }

    prevButton.addEventListener("click", () => {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        updateSliderDisplay();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentImageIndex < appData.images.length - 1) {
        currentImageIndex++;
        updateSliderDisplay();
      }
    });

    // スワイプ機能
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // スワイプと判定する最小距離 (px)

    imageContainer.addEventListener(
      "touchstart",
      (e) => {
        if (!appData.images || appData.images.length <= 1) return;
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    imageContainer.addEventListener("touchend", (e) => {
      if (!appData.images || appData.images.length <= 1) return;
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) >= swipeThreshold) {
        if (swipeDistance < 0) {
          // 左スワイプ (Next)
          if (currentImageIndex < appData.images.length - 1) {
            currentImageIndex++;
          }
        } else {
          // 右スワイプ (Back)
          if (currentImageIndex > 0) {
            currentImageIndex--;
          }
        }
        updateSliderDisplay();
      }
    }

    updateSliderDisplay(); // 初期表示
    return item;
  }
});
