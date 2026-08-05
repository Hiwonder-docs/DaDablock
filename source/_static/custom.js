// Preserve QR codes that point to the former combined-kit documentation.
(function redirectLegacyQrCode() {
    const targetPage = 'https://wiki.hiwonder.com/projects/DaDablock/en/ultimate-kit/'
        + 'docs/3_Advanced_Kit_Creative_Builds.html#';
    const oldAnchors = [
        'assembly-guide', 'id4', 'id11', 'id18',
        'id25', 'id32', 'id39', 'id46',
        'id53', 'id60', 'id67', 'id74',
    ];
    const routes = {
        '4. Standard Kit Creative Builds.html': [
            'assembly-guide', 'id4', 'id10', 'id16',
            'id22', 'id28', 'id34', 'id40',
            'id46', 'id52', 'id58', 'id64',
        ],
        '5. Advanced Kit Creative Builds.html': [
            'id70', 'id75', 'id81', 'id87',
            'id93', 'id99', 'id105', 'id111',
            'id117', 'id123', 'id129', 'id135',
        ],
        '6. Ultimate Kit Creative Builds.html': [
            'id141', 'id147', 'id153', 'id159',
            'id165', 'id171', 'id177', 'id183',
            'id189', 'id195', 'id201', 'id207',
        ],
    };

    let filename;
    try {
        filename = decodeURIComponent(window.location.pathname.split('/').pop());
    } catch (error) {
        return;
    }

    const targets = routes[filename];
    const anchorIndex = oldAnchors.indexOf(window.location.hash.slice(1));
    if (targets && anchorIndex !== -1) {
        window.location.replace(targetPage + targets[anchorIndex]);
    }
}());

function initMenu() {
    var nav_sidebar = document.querySelector('.wy-nav-side');
    var nav_search = nav_sidebar.querySelector('.wy-side-scroll .wy-side-nav-search');
    var returnLink = document.createElement('div');
    returnLink.innerHTML = `
        <div class="main-project-link" style="
            margin: 0 10px 10px 10px;
            background: #f8f9fa;
            border-radius: 4px;
        ">
            <a href="https://wiki.hiwonder.com/en/latest/"
               style="
                   display: block;
                   padding: 8px;
                   background: #343131;
                   color: white;
                   text-decoration: none;
                   border-radius: 4px;
                   font-weight: bold;
                   text-align: center;
                   transition: background 0.3s;
               ">
                ← Homepage
            </a>
        </div>
    `;

    let node = returnLink.firstElementChild;
    nav_search.insertBefore(node, nav_search.firstChild);

    // 绑定 hover
    let a = node.querySelector("a");
    a.addEventListener("mouseenter", () => a.style.background = "#F98800");
    a.addEventListener("mouseleave", () => a.style.background = "#343131");


    // 单页面菜单展开
    const alreadyItems = document.querySelector('.toctree-l2.current');
    if (alreadyItems) {
        alreadyItems.classList.remove('current');
        alreadyItems.classList.add('h-current');
    }

    // 事件委托绑定到父级
    const menuContainer = document.querySelector('.wy-menu-vertical > .current');
    if (menuContainer) {
        menuContainer.addEventListener('click', function(e) {
            const target = e.target.closest('.toctree-l2>a');
            if (target) {
                console.log(1);
                target.parentNode.classList.toggle('h-current');
            }
        });
    }

    // Download 标题
    const download_p = document.querySelector('.wy-menu-vertical > p:nth-of-type(2)');
    // 创建svg元素
    var i = document.createElement('i');
    var space = document.createTextNode(' ');
    i.className = 'fa fa-cloud-download';
    i.setAttribute('aria-hidden', 'true');
    // 将path添加到svg
    if (download_p){
        download_p.appendChild(space);
        download_p.appendChild(i);
        const download_lias = document.querySelectorAll('.wy-menu-vertical > ul:nth-of-type(2) > li.toctree-l1 a');
        download_lias.forEach(download_lia => {
            // 检查是否是目标链接
            if (download_lia) {
                download_lia.setAttribute('target', '_blank');
                // 将i插入到a标签的文本内容前面
                var new_i = document.createElement('i');
                var new_space = document.createTextNode(' ');
                new_i.className = 'fa fa-cloud-download';
                new_i.setAttribute('aria-hidden', 'true');
                download_lia.appendChild(new_space);
                download_lia.appendChild(new_i);
            }
        });
    }
}

// 根据场景选择执行时机
function sortVersionSelector() {
    const select = document.querySelector('.version-switch select');
    if (!select) {
        return false;
    }

    const versionOrder = new Map([
        ['latest', 0],
        ['standard-kit', 1],
        ['advanced-kit', 2],
        ['ultimate-kit', 3],
    ]);
    const selectedValue = select.value;
    const options = Array.from(select.options).map((option, index) => ({
        option,
        index,
        rank: versionOrder.get(option.textContent.trim().toLowerCase())
            ?? Number.MAX_SAFE_INTEGER,
    }));

    options
        .sort((left, right) => left.rank - right.rank || left.index - right.index)
        .forEach(({ option }) => select.appendChild(option));
    select.value = selectedValue;

    return true;
}

function initVersionSelector() {
    if (sortVersionSelector()) {
        return;
    }

    const observer = new MutationObserver(() => {
        if (sortVersionSelector()) {
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
}

if (document.readyState === 'complete') {
    initMenu();
    initVersionSelector();
} else {
    window.addEventListener('load', initMenu);
    window.addEventListener('load', initVersionSelector);
}
