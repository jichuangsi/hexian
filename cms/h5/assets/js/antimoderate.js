(function () {
    console.log(333)
    function l(l) {
        for (v = 0; v < l; ++v) D.f.push(L);
        ++L
    }
    for (var D = {
            c: [256, 256, 200, 256, 72, 200, 79, 256, 149, 72, 15, 200, 132, 79, 36, 256, 198, 149, 108, 72, 42, 15, 240, 200, 164, 132, 104, 79, 56, 36, 17, 256, 226, 198, 172, 149, 127, 108, 89, 72, 56, 42, 28, 15, 3, 240, 219, 200, 181, 164, 148, 132, 118, 104, 91, 79, 67, 56, 46, 36, 26, 17, 9, 256, 241, 226, 212, 198, 185, 172, 161, 149, 138, 127, 117, 108, 98, 89, 81, 72, 64, 56, 49, 42, 35, 28, 22, 15, 9, 3, 251, 240, 229, 219, 209, 200, 190, 181, 172, 164, 156, 148, 140, 132, 125, 118, 111, 104, 98, 91, 85, 79, 73, 67, 62, 56, 51, 46, 41, 36, 31, 26, 22, 17, 13, 9, 5, 256, 249, 241, 233, 226, 219, 212, 205, 198, 191, 185, 179, 172, 166, 161, 155, 149, 143, 138, 133, 127, 122, 117, 112, 108, 103, 98, 94, 89, 85, 81, 76, 72, 68, 64, 60, 56, 53, 49, 45, 42, 38, 35, 31, 28, 25, 22, 18, 15, 12, 9, 6, 3, 1, 251, 245, 240, 235, 229, 224, 219, 214, 209, 204, 200, 195, 190, 186, 181, 177, 172, 168, 164, 160, 156, 152, 148, 144, 140, 136, 132, 129, 125, 121, 118, 114, 111, 107, 104, 101, 98, 94, 91, 88, 85, 82, 79, 76, 73, 70, 67, 64, 62, 59, 56, 54, 51, 48, 46, 43, 41, 38, 36, 33, 31, 29, 26, 24, 22, 19, 17, 15, 13, 11, 9, 7, 5, 3],
            f: [9, 11, 12, 13, 13, 14, 14],
            h: function (l, v, L) {
                var B = document.createElement("canvas"),
                    J = new Image;
                J.onload = function () {
                    w = l.width;
                    h = l.height;
                    B.style.width = w + "px";
                    B.style.height = h + "px";
                    B.width = w;
                    B.height = h;
                    var v = B.getContext("2d");
                    v.clearRect(0, 0, w, h);
                    v.drawImage(J, 0, 0, w, h);
                    radius = Math.sqrt(w * h) / Math.sqrt(J.naturalWidth * J.naturalHeight) * (L || 1);
                    if (!(isNaN(radius) || 1 > radius)) {
                        radius |= 0;
                        var v = B.getContext("2d").getImageData(0, 0, w, h),
                            c = v.data,
                            x, C, a, d, e, M, f, g, k, y, z, A, m, n, p, r, t, u, E;
                        x = radius + radius + 1;
                        var N = w - 1,
                            P = h - 1,
                            q = radius + 1,
                            F = q * (q + 1) / 2,
                            G = {
                                r: 0,
                                b: 0,
                                a: 0,
                                g: 0,
                                next: null
                            },
                            b = G;
                        for (a = 1; a < x; a++)
                            if (b = b.next = {
                                    r: 0,
                                    b: 0,
                                    a: 0,
                                    g: 0,
                                    next: null
                                }, a == q) var K = b;
                        b.next = G;
                        b = a = null;
                        M = e = 0;
                        var H = D.c[radius],
                            I = D.f[radius];
                        for (C = 0; C < h; C++) {
                            m = n = p = f = g = k = 0;
                            y = q * (r = c[e]);
                            z = q * (t = c[e + 1]);
                            A = q * (u = c[e + 2]);
                            f += F * r;
                            g += F * t;
                            k += F * u;
                            b = G;
                            for (a = 0; a < q; a++) b.r = r, b.b = t, b.a = u, b = b.next;
                            for (a = 1; a < q; a++) d = e + ((N < a ? N : a) << 2), f += (b.r = r = c[d]) * (E = q - a), g += (b.b = t = c[d + 1]) * E, k += (b.a = u = c[d + 2]) * E, m += r, n += t, p += u, b = b.next;
                            a = G;
                            b = K;
                            for (x = 0; x < w; x++) c[e] = f * H >> I, c[e + 1] = g * H >> I, c[e + 2] = k * H >> I, f -= y, g -= z, k -= A, y -= a.r, z -= a.b, A -= a.a, d = M + ((d = x + radius + 1) < N ? d : N) << 2, m += a.r = c[d], n += a.b = c[d + 1], p += a.a = c[d + 2], f += m, g += n, k += p, a = a.next, y += r = b.r, z += t = b.b, A += u = b.a, m -= r, n -= t, p -= u, b = b.next, e += 4;
                            M += w
                        }
                        for (x = 0; x < w; x++) {
                            n = p = m = g = k = f = 0;
                            e = x << 2;
                            y = q * (r = c[e]);
                            z = q * (t = c[e + 1]);
                            A = q * (u = c[e + 2]);
                            f += F * r;
                            g += F * t;
                            k += F * u;
                            b = G;
                            for (a = 0; a < q; a++) b.r = r, b.b = t, b.a = u, b = b.next;
                            d = w;
                            for (a = 1; a <= radius; a++) e = d + x << 2, f += (b.r = r = c[e]) * (E = q - a), g += (b.b = t = c[e + 1]) * E, k += (b.a = u = c[e + 2]) * E, m += r, n += t, p += u, b = b.next, a < P && (d += w);
                            e = x;
                            a = G;
                            b = K;
                            for (C = 0; C < h; C++) d = e << 2, c[d] = f * H >> I, c[d + 1] = g * H >> I, c[d + 2] = k * H >> I, f -= y, g -= z, k -= A, y -= a.r, z -= a.b, A -= a.a, d = x + ((d = C + q) < P ? d : P) * w << 2, f += m += a.r = c[d], g += n += a.b = c[d + 1], k += p += a.a = c[d + 2], a = a.next, y += r = b.r, z += t = b.b, A += u = b.a, m -= r, n -= t, p -= u, b = b.next, e += w
                        }
                        var O = l.getAttribute("src");
                        null != O && "" != O && (K = new Image, K.onload = function () {
                            l.src = O
                        }, K.src = O);
                        B.getContext("2d").putImageData(v, 0, 0);
                        l.src = B.toDataURL()
                    }
                };
                J.src = v
            }
        }, L = 15, v = 0; v < D.c.length;) D.c[v++] += 256;
    l(4);
    l(4);
    l(7);
    l(9);
    l(14);
    l(18);
    l(27);
    l(37);
    l(54);
    l(74);
    AntiModerate = {
        process: D.h
    }
})();