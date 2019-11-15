// ぽよん
$(function () {
    $('.modal-new-open').on('click', function () {
        $('.modal-new').fadeIn();
        return false;
    });
    $('.modal-new-close').on('click', function () {
        $('.modal-new').fadeOut();
        return false;
    });
});

// here
$(function () {
    $('.modal-here-open').on('click', function () {
        $('.modal-here').fadeIn();
        return false;
    });
    $('.modal-here-close').on('click', function () {
        $('.modal-here').fadeOut();
        return false;
    });
});

// form
$(function () {
    $('.modal-form-open').on('click', function () {
        $('.modal-form').fadeIn();
        return false;
    });
    $('.modal-form-close').on('click', function () {
        $('.modal-form').fadeOut();
        return false;
    });
});


$(function () {
    $('.modal-m-open').on('click', function () {
        $('.modal-menu').fadeIn();
        return false;
    });
    $('.modal-m-close').on('click', function () {
        $('.modal-menu').fadeOut();
        return false;
    });
});

// --------------------------------------------
// スクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 100;
        var speed = 600;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});



// --------------------------------------

function header_dayo() {
    var html = "";
    html += '<header id="header">';
    html += '<nav>';
    html += '<ul>';
    html += '<font size="2">';
    html += '<li class=""><a href="../index.html">一覧</a></li>';
    html += '<li>';
    html += '<div class="content">';
    html += '<a class="modal-new-open" href="">更新履歴</a>';
    html += '</div>';
    html += '<div class="modal modal-new">';
    html += '<div class="modal_n_i modal-new-close"></div>';
    html += '<div class="modal_n_c">';
    htmk += '<p>2019.11.15　PHPの内容を追加</p>';
    html += '<p>2019.11.14 　TOPにjavaとPHPを追加 内容はjavaのみ</p>';
    // html += '<p>2019.11.09 　studioちょっと更新</p>';
    // html += '<p>2019.11.05 　js5&jqueryちょっと更新</p>';
    // html += '<p>2019.11.03 　htm&css、js5&jquery更新</p>';
    // html += '<p>2019.11.1 　とりあえず公開</p>';
    html += '<a class="modal-new-close" href="">閉じる</a>';
    html += '</div>';
    html += '</div>';
    html += '</li>';
    html += '<li>';
    html += '<div class="content">';
    html += '<a class="modal-here-open" href=""> ここ何？</a>';
    html += '</div>';
    html += '<div class="modal modal-here">';
    html += '<div class="modal_h_i modal-here-close"></div>';
    html += '<div class="modal_h_c">';
    html += '<p id="modal-h-text">後藤の後藤による後藤のための備忘録<br><br>';
    html += 'ターゲット：後藤　目的：脳みそのUSB(?)ほしい<br>';
    html += 'クレーム云々は受け付けてないけど<br>';
    html += 'ちゃまは何かあったら教えてね♡<br>';
    html += '他の方も何かあればフォームからどうぞ<br>';
    html += 'スマホ対応はしていません<br>';
    html += 'ラーメン食べたい</p>';
    html += '<a class="modal-here-close" href="">閉じる</a>';
    html += '</div>';
    html += '</div>';
    html += '</li>';
    html += '<li>';
    html += '<div class="content">';
    html += '<a class="modal-form-open" href="#">フォーム</a>';
    html += '</div>';
    html += '<div class="modal modal-form">';
    html += '<div class="modal_f_i modal-form-close"></div>';
    html += '<div class="modal_f_c">';
    html += '<pre>作ってはみたけどいらなくね？直接言ってくれ';
    html += 'なんもないのでタスクリスト';
    html += '・コードに色つける';
    html += '・flaskとかhtml&cssとかのコード欄 言語で背景の色変える？コードに色つけてから検討';
    html += '・途中で挟む画像の幅大きくする？';
    html += '・ボタンの形変更';
    html += '・top以外のヘッダーの内容統一するよ';
    html += '・下段(JS5とか)のページは内容書くときに整えます';
    html += '・内容自体はぼちぼち更新</pre>';
    html += '<a class="modal-form-close" href="">閉じる</a>';
    html += '</div>';
    html += '</div>';
    html += '</li>';
    html += '</font>';
    html += '</ul>';
    html += '</nav>';
    html += '</header>';
    document.write(html);
}

// html += '';
