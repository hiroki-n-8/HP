let header = document.querySelector('#header');

header.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <div class="navbar-brand">
                        <a href="index.html"><img src="https://github.com/webSiteDev-NH/nagomi/blob/main/image/%E3%81%AA%E3%81%94%E3%81%BF.png?raw=true" alt="訪問看護ステーションなごみ"></a>
                        <div class="text-center text-danger">２４時間３６５日対応</div>
                      </div>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li class="nav-item">
                            <a class="nav-link" href="index.html">サービス案内<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="feature.html">特徴<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="information.html">ステーション案内<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="employment.html">採用情報<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="summary.html">会社概要<span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="policy.html">理念・方針<span class="sr-only">(current)</span></a>
                          </li>
                        </ul>
                        </form>
                      </div>
                    </nav>`

let fotter = document.querySelector('#fotter');

footer.innerHTML = `<div class="container">
                      <div class="row">
                        <div class="col-10 offset-1">
                          <div class="text-center">
                            <div class="footer-title my-3"><strong>訪問看護ステーション なごみ</strong></div>
                            <div class="row text-left my-3">
                              <div class="col-6 col-md-4 offset-md-1">
                                <strong>所在地</strong><br>
                                〒 577-0804<br>
                                東大阪市中小阪1-15-5
                              </div>
                              <div class="col-6 col-md-4 offset-md-2">
                                <strong>お問い合わせ</strong><br>
                                TEL： 06 - 6730 - 8377<br>
                                FAX： 06 - 6730 - 8378
                              </div>
                              <div class="col-6 col-md-4 offset-md-1 mt-3">
                                <strong>営業時間</strong><br>
                                月 〜 金曜日<br>
                                ９：００ 〜 １７：００<br>
                                <small>※夜間・休日の急変など、緊急の場合には携帯電話で連絡がつきます。</small>
                              </div>
                              <div class="col-6 col-md-4 offset-md-2 mt-3">
                                <strong>定休日</strong><br>
                                土・日曜日<br>
                                <small>※医療の場合は相談可</small>
                              </div>
                            </div>
                            <div class="mb-2">
                              <small>&copy; 2021 訪問看護ステーションなごみ All Rights Reserved</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`
