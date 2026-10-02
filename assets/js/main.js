/* 10 Million Reach — site scripts */
/* Contact form: paste a Formspree (or similar) endpoint here to receive briefs by email. Leave empty for demo mode. */
const FORM_ENDPOINT = '';

/* ======================= MOCKUP GENERATOR ======================= */
const M = {};
const chrome = url => `<div class="chrome"><i></i><i></i><i></i><span class="url">${url}</span></div>`;
const wrapMk = (url, inner, bg) => `<div class="mk">${chrome(url)}<div class="canvas" style="background:${bg||'#fff'}">${inner}</div></div>`;
const spark = (pts, c, w=100, h=40, fill=true) => {
  const max = Math.max(...pts), min = Math.min(...pts), n = pts.length - 1;
  const xy = pts.map((p,i)=>[(i/n*w).toFixed(1), (h - (p-min)/(max-min||1)*(h-4) - 2).toFixed(1)]);
  const line = xy.map(p=>p.join(',')).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="width:100%;height:100%;display:block">
    ${[.25,.5,.75].map(g=>`<line x1="0" x2="${w}" y1="${h*g}" y2="${h*g}" stroke="#E7E9EE" stroke-width=".4"/>`).join('')}
    ${fill?`<polygon points="0,${h} ${line} ${w},${h}" fill="${c}" opacity=".12"/>`:''}
    <polyline points="${line}" fill="none" stroke="${c}" stroke-width="1.2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
    <circle cx="${xy[n][0]}" cy="${xy[n][1]}" r="1.6" fill="${c}"/></svg>`;
};

/* Modern marketing site */
M.siteAfter = o => wrapMk(o.url, `
<div style="position:absolute;inset:0;background:#FBFAF8;padding:2.4em 3.4em;display:flex;flex-direction:column;gap:2.2em">
  <div style="display:flex;justify-content:space-between;align-items:center">
    <b class="hd" style="font-size:1.5em">${o.name}</b>
    <div style="display:flex;gap:2.2em;color:#555">${o.nav.map(n=>`<span>${n}</span>`).join('')}</div>
    <span style="background:${o.c};color:#fff;padding:.7em 1.4em;border-radius:99em;font-weight:600">${o.cta}</span>
  </div>
  <div style="display:grid;grid-template-columns:1.05fr 1fr;gap:3.4em;align-items:stretch;flex:1;min-height:0">
    <div style="display:flex;flex-direction:column;justify-content:center">
      <div style="font-size:.9em;color:${o.c};font-weight:600;letter-spacing:.12em;text-transform:uppercase">${o.tag}</div>
      <div class="hd" style="font-size:4em;margin-top:.35em">${o.h}</div>
      <div style="color:#666;margin-top:1.1em;font-size:1.2em;line-height:1.45;max-width:26em">${o.sub}</div>
      <div style="display:flex;gap:.8em;margin-top:1.8em">
        <span style="background:#111;color:#fff;padding:.9em 1.6em;border-radius:99em;font-weight:600">${o.cta} →</span>
        <span style="border:1px solid #ddd;padding:.9em 1.6em;border-radius:99em">${o.cta2}</span>
      </div>
      <div style="display:flex;gap:2.6em;margin-top:2.4em;padding-top:1.4em;border-top:1px solid #eee">
        ${o.stats.map(s=>`<div><b class="hd" style="font-size:1.9em">${s[0]}</b><div style="color:#888;margin-top:.3em">${s[1]}</div></div>`).join('')}
      </div>
    </div>
    <div style="border-radius:1.4em;background:${o.c};position:relative;overflow:hidden">
      <div style="position:absolute;width:70%;aspect-ratio:1;border-radius:50%;border:1.5em solid rgba(255,255,255,.14);right:-15%;top:-12%"></div>
      <div style="position:absolute;width:44%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.16);left:12%;bottom:12%"></div>
      <div style="position:absolute;left:8%;top:10%;background:#fff;border-radius:1em;padding:1em 1.2em;box-shadow:0 1em 2em rgba(0,0,0,.18);min-width:42%">
        <div style="color:#888;font-size:.85em">${o.card[0]}</div><b class="hd" style="font-size:1.7em;display:block;margin-top:.3em">${o.card[1]}</b>
        <div style="height:2.6em;margin-top:.6em">${spark([3,4,3.6,5,5.4,6.2,7,8.4],o.c)}</div>
      </div>
      <div style="position:absolute;right:8%;bottom:9%;background:#111;color:#fff;border-radius:99em;padding:.7em 1.2em;font-weight:600">★ ${o.badge}</div>
    </div>
  </div>
</div>`);

M.siteBefore = o => wrapMk(o.url.replace('https://',''), `
<div style="position:absolute;inset:0;background:#E7E3D9;font-family:'Times New Roman',Times,serif;color:#222;display:flex;flex-direction:column">
  <div style="background:linear-gradient(#3b5998,#22396b);color:#fff;padding:1.2em 1.6em;display:flex;justify-content:space-between;align-items:end">
    <div style="font-size:2.4em;font-weight:bold;text-shadow:2px 2px 0 #000">${o.name}<span style="font-size:.4em;font-weight:normal;margin-left:.6em">"Quality Since 2004"</span></div>
    <div style="font-size:1em">Call Now: 0300-XXXXXXX</div>
  </div>
  <div style="background:#C9C2B0;padding:.5em 1.6em;font-size:1.05em;color:#00f;text-decoration:underline;display:flex;gap:1.2em;flex-wrap:wrap">${['Home','About Us','Our Services','Gallery','Downloads','Testimonials','FAQ','Contact Us'].map(x=>`<span>${x}</span>`).join(' | ')}</div>
  <div style="background:#FFF59A;color:#C00;font-weight:bold;padding:.4em 1.6em;font-size:1.05em;white-space:nowrap;overflow:hidden">*** WELCOME TO OUR OFFICIAL WEBSITE!!! *** Special offer this month only *** Click here for more details ***</div>
  <div style="display:grid;grid-template-columns:22% 1fr 20%;gap:1em;padding:1em 1.6em;flex:1;min-height:0">
    <div style="background:#F4F1EA;border:1px solid #aaa;padding:.8em">
      <b style="display:block;background:#3b5998;color:#fff;padding:.3em .5em;margin:-.8em -.8em .6em">Quick Links</b>
      ${['» Services','» Packages','» Our Team','» Branches','» Photo Gallery','» News','» Careers','» Downloads','» Sitemap'].map(x=>`<div style="color:#00c;text-decoration:underline;margin:.35em 0">${x}</div>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:.8em;min-height:0">
      <div style="flex:1;background:repeating-linear-gradient(45deg,#bbb,#bbb 6px,#c6c6c6 6px,#c6c6c6 12px);border:2px solid #888;display:grid;place-items:center;font-size:1.4em;color:#444;position:relative">
        IMAGE SLIDER
        <span style="position:absolute;left:.5em;top:45%;font-size:1.4em">◀</span><span style="position:absolute;right:.5em;top:45%;font-size:1.4em">▶</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.5em">${[1,2,3,4].map(i=>`<div style="background:#fff;border:1px solid #aaa;padding:.5em;font-size:.85em"><b style="color:#900">Service ${i}</b><br>Lorem text about our services. Read more...</div>`).join('')}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:.8em">
      <div style="background:#fff;border:1px dashed #900;padding:.7em;text-align:center"><b>Visitor Counter</b><div style="font:bold 1.6em monospace;background:#000;color:#0f0;margin-top:.3em">004821</div></div>
      <div style="background:#fff;border:1px solid #aaa;padding:.7em;font-size:.9em"><b>Latest News</b><br>Website updated!<br>New branch opening soon<br><span style="color:#00c;text-decoration:underline">more...</span></div>
      <div style="background:#ffd;border:1px solid #cc0;padding:.7em;font-size:.9em;text-align:center">Best viewed in<br>1024×768</div>
    </div>
  </div>
  <div style="background:#333;color:#aaa;padding:.6em 1.6em;font-size:.85em">Copyright © 2011 ${o.name}. All Rights Reserved. | Designed by WebMaster</div>
</div>`, '#E7E3D9');

/* Product dashboard */
M.dashAfter = o => wrapMk(o.url, `
<div style="position:absolute;inset:0;display:grid;grid-template-columns:17% 1fr;background:#F6F7F9">
  <div style="background:${o.side||'#0E1320'};color:#fff;padding:1.6em 1.2em;display:flex;flex-direction:column;gap:.4em">
    <b class="hd" style="font-size:1.25em;margin-bottom:1.2em;display:flex;align-items:center;gap:.5em"><i style="width:1.2em;height:1.2em;border-radius:.35em;background:${o.c};display:inline-block"></i>${o.name}</b>
    ${o.nav.map((n,i)=>`<div style="padding:.65em .8em;border-radius:.5em;${i===0?`background:rgba(255,255,255,.1);color:#fff`:'color:rgba(255,255,255,.55)'}">${n}</div>`).join('')}
  </div>
  <div style="padding:1.6em 2em;display:flex;flex-direction:column;gap:1.2em;min-width:0">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div><div style="color:#888">${o.crumb}</div><b class="hd" style="font-size:1.9em;display:block;margin-top:.2em">${o.title}</b></div>
      <div style="display:flex;gap:.6em"><span style="border:1px solid #DDE0E6;background:#fff;padding:.6em 1em;border-radius:.6em">This month ▾</span><span style="background:${o.c};color:#fff;padding:.6em 1.1em;border-radius:.6em;font-weight:600">${o.action}</span></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.9em">
      ${o.kpis.map(k=>`<div style="background:#fff;border:1px solid #E6E8EC;border-radius:.8em;padding:1em"><div style="color:#888">${k[0]}</div><b class="hd" style="font-size:1.9em;display:block;margin-top:.35em">${k[1]}</b><span style="color:${k[2][0]==='−'&&!k[3]?'#D9443A':'#0E9F6E'};font-weight:600;font-size:.9em">${k[2]}</span></div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:.9em;flex:1;min-height:0">
      <div style="background:#fff;border:1px solid #E6E8EC;border-radius:.8em;padding:1em;display:flex;flex-direction:column">
        <div style="display:flex;justify-content:space-between"><b>${o.chart}</b><span style="color:#888">Last 12 weeks</span></div>
        <div style="flex:1;margin-top:.6em;min-height:0">${spark(o.series,o.c,200,70)}</div>
      </div>
      <div style="background:#fff;border:1px solid #E6E8EC;border-radius:.8em;padding:1em;overflow:hidden">
        <b>${o.list}</b>
        ${o.rows.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:.62em 0;border-bottom:1px solid #F0F1F4"><span>${r[0]}</span><span style="padding:.25em .7em;border-radius:99em;font-size:.85em;font-weight:600;background:${r[2]}1f;color:${r[2]}">${r[1]}</span></div>`).join('')}
      </div>
    </div>
  </div>
</div>`, '#F6F7F9');

M.sheetBefore = o => wrapMk(o.file, `
<div style="position:absolute;inset:0;background:#fff;font-family:Calibri,Arial,sans-serif;display:flex;flex-direction:column;color:#000">
  <div style="background:#217346;color:#fff;padding:.5em 1em;font-size:.95em">${o.file} - Excel &nbsp;&nbsp; <span style="opacity:.75">(Read-Only) [Compatibility Mode]</span></div>
  <div style="background:#F3F3F3;border-bottom:1px solid #ccc;padding:.4em 1em;display:flex;gap:.9em;font-size:.85em;color:#333">${['File','Home','Insert','Page Layout','Formulas','Data','Review','View'].map(x=>`<span>${x}</span>`).join('')}</div>
  <div style="display:flex;border-bottom:1px solid #ccc;font-size:.85em"><span style="width:5em;padding:.3em;border-right:1px solid #ccc;color:#666">F17</span><span style="padding:.3em .6em;color:#333">=SUM(F2:F16)-VLOOKUP(B17,'Copy of Sheet1 (2)'!A:F,6,0)</span></div>
  <div style="flex:1;overflow:hidden;display:grid;grid-template-columns:3em repeat(${o.cols.length},1fr);grid-template-rows:repeat(${o.data.length+1},1fr);font-size:.88em">
    <div style="background:#E9E9E9;border:1px solid #d0d0d0"></div>
    ${o.cols.map((c,i)=>`<div style="background:#E9E9E9;border:1px solid #d0d0d0;text-align:center;line-height:1.85em;color:#444">${String.fromCharCode(65+i)}</div>`).join('')}
    ${o.data.map((row,ri)=>`<div style="background:#E9E9E9;border:1px solid #d0d0d0;text-align:center;line-height:1.85em;color:#444">${ri+1}</div>`+row.map((cell,ci)=>{
      const hl = ri===0 ? 'font-weight:bold;background:#DDEBF7' : (o.hl[`${ri},${ci}`]||'');
      return `<div style="border:1px solid #E2E2E2;padding:0 .4em;display:flex;align-items:center;white-space:nowrap;overflow:hidden;${hl}">${cell}</div>`;
    }).join('')).join('')}
  </div>
  <div style="background:#F3F3F3;border-top:1px solid #ccc;display:flex;gap:.2em;font-size:.82em;padding:0 .6em">${o.tabs.map((t,i)=>`<span style="padding:.4em .9em;${i===0?'background:#fff;color:#217346;font-weight:bold;border-bottom:2px solid #217346':'color:#444'}">${t}</span>`).join('')}</div>
</div>`);

/* AI chatbot */
M.chatAfter = o => wrapMk(o.url, `
<div style="position:absolute;inset:0;background:#F4F6FA;display:grid;grid-template-columns:1fr 38%;gap:2em;padding:2em 2.6em">
  <div style="display:flex;flex-direction:column;gap:1em;justify-content:center">
    <b class="hd" style="font-size:1.4em">${o.name}</b>
    <div class="hd" style="font-size:3.3em;margin-top:.4em">Claims and quotes, answered in seconds.</div>
    <div style="color:#666;font-size:1.15em;max-width:24em;line-height:1.45">Ask Amal, our assistant, anything about your policy. Available 24/7 in English and Urdu.</div>
    <div style="display:flex;gap:1.6em;margin-top:1em">${[['42s','avg. resolution'],['24/7','availability'],['2','languages']].map(s=>`<div><b class="hd" style="font-size:1.8em">${s[0]}</b><div style="color:#888">${s[1]}</div></div>`).join('')}</div>
  </div>
  <div style="background:#fff;border-radius:1.2em;box-shadow:0 1.4em 3em rgba(19,49,92,.18);display:flex;flex-direction:column;overflow:hidden">
    <div style="background:${o.c};color:#fff;padding:1em 1.2em;display:flex;align-items:center;gap:.7em"><i style="width:2.2em;height:2.2em;border-radius:50%;background:rgba(255,255,255,.2);display:grid;place-items:center;font-style:normal;font-weight:700">A</i><div><b>Amal · AI assistant</b><div style="font-size:.85em;opacity:.8">● Online, replies instantly</div></div></div>
    <div style="flex:1;padding:1em;display:flex;flex-direction:column;gap:.7em;font-size:1.02em">
      <div style="align-self:flex-end;background:#EEF1F7;padding:.7em .9em;border-radius:1em 1em .2em 1em;max-width:80%">My car was hit in a parking lot. How do I file a claim?</div>
      <div style="background:${o.c}12;padding:.7em .9em;border-radius:1em 1em 1em .2em;max-width:88%">Sorry to hear that. I found your motor policy <b>MT-20418</b>. Upload 2 photos of the damage and I’ll open the claim now.</div>
      <div style="display:flex;gap:.4em;flex-wrap:wrap">${['📷 Upload photos','Talk to an agent','Nearest workshop'].map(x=>`<span style="border:1px solid ${o.c}55;color:${o.c};padding:.4em .8em;border-radius:99em;font-size:.9em">${x}</span>`).join('')}</div>
      <div style="background:${o.c}12;padding:.7em .9em;border-radius:1em 1em 1em .2em;max-width:88%">Claim <b>CL-88213</b> opened ✓. A surveyor will call you within 4 hours.</div>
    </div>
    <div style="border-top:1px solid #eee;padding:.8em 1em;color:#aaa;display:flex;justify-content:space-between">Type a message…<span style="color:${o.c};font-weight:700">➤</span></div>
  </div>
</div>`, '#F4F6FA');

M.chatBefore = o => wrapMk(o.url.replace('https://',''), `
<div style="position:absolute;inset:0;background:#fff;font-family:Arial,sans-serif;color:#333;display:flex;flex-direction:column">
  <div style="background:#13315C;color:#fff;padding:1em 1.6em;font-size:1.4em;font-weight:bold">${o.name} — Customer Support</div>
  <div style="padding:1.6em 2.4em;display:grid;grid-template-columns:1.2fr 1fr;gap:2em;flex:1">
    <div>
      <div style="font-size:1.6em;font-weight:bold;margin-bottom:.6em">Contact Us</div>
      <div style="background:#FFF4E5;border:1px solid #F0B35B;padding:.8em;margin-bottom:1em;font-size:.95em">⚠ Due to high volume, responses may take <b>48–72 working hours</b>. Please do not submit multiple requests.</div>
      ${['Full Name *','Policy Number *','CNIC *','Email *','Category (select)'].map(l=>`<div style="margin-bottom:.6em"><div style="font-size:.9em">${l}</div><div style="border:1px solid #999;height:1.9em;background:#fafafa"></div></div>`).join('')}
      <div style="font-size:.9em">Describe your issue *</div><div style="border:1px solid #999;height:4.5em;background:#fafafa"></div>
      <span style="display:inline-block;margin-top:.8em;background:#ddd;border:1px solid #999;padding:.4em 1.2em">Submit</span>
    </div>
    <div style="font-size:.95em;line-height:1.6">
      <b>Helpline (9am–5pm, Mon–Fri)</b><br>UAN: 111-XXX-XXX<br><span style="color:#888">Average wait time: 23 minutes</span><br><br>
      <b>Download Forms</b><br>${['Claim_Form_v3_FINAL.pdf','Policy_Change_Request.doc','Complaint_Form.pdf'].map(f=>`<span style="color:#00c;text-decoration:underline">${f}</span>`).join('<br>')}<br><br>
      <b>FAQs</b><br><span style="color:#888">Page under construction</span>
    </div>
  </div>
</div>`);

/* E-commerce */
M.shopAfter = o => wrapMk(o.url, `
<div style="position:absolute;inset:0;background:#F7F4EF;padding:1.8em 2.6em;display:flex;flex-direction:column;gap:1.4em">
  <div style="display:flex;justify-content:space-between;align-items:center"><b class="hd" style="font-size:1.6em">${o.name}</b><div style="display:flex;gap:2em;color:#666"><span style="color:#111;font-weight:600">Living</span><span>Dining</span><span>Bedroom</span><span>Outdoor</span></div><span style="background:#111;color:#fff;padding:.6em 1.1em;border-radius:99em">Cart · 2</span></div>
  <div style="display:flex;justify-content:space-between;align-items:end"><div class="hd" style="font-size:2.8em">Living room</div><div style="display:flex;gap:.5em">${['Sofas','Armchairs','Tables','Under $900'].map((x,i)=>`<span style="padding:.5em 1em;border-radius:99em;border:1px solid ${i===0?'#111':'#ddd'};${i===0?'background:#111;color:#fff':''}">${x}</span>`).join('')}</div></div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.2em;flex:1;min-height:0">
    ${[['Arlo 3-seat sofa','$1,240','#C8B8A0'],['Nori lounge chair','$560','#8C9A86'],['Tide coffee table','$380','#B49478'],['Moss modular','$2,180','#6F7C70']].map(p=>`
    <div style="display:flex;flex-direction:column;gap:.6em;min-height:0">
      <div style="flex:1;border-radius:1em;background:${p[2]};position:relative;overflow:hidden">
        <div style="position:absolute;left:14%;right:14%;bottom:18%;height:30%;background:rgba(255,255,255,.35);border-radius:.8em .8em .3em .3em"></div>
        <div style="position:absolute;left:10%;right:10%;bottom:12%;height:12%;background:rgba(0,0,0,.12);border-radius:.4em"></div>
        <span style="position:absolute;top:.8em;left:.8em;background:#fff;padding:.3em .7em;border-radius:99em;font-size:.85em">Ships in 5 days</span>
      </div>
      <div style="display:flex;justify-content:space-between"><b>${p[0]}</b><span>${p[1]}</span></div>
      <span style="color:#888">4 colours · ★ 4.8</span>
    </div>`).join('')}
  </div>
</div>`, '#F7F4EF');

M.shopBefore = o => wrapMk(o.url.replace('https://',''), `
<div style="position:absolute;inset:0;background:#fff;font-family:Verdana,sans-serif;color:#333;font-size:.92em">
  <div style="background:#5A3E2B;color:#fff;padding:.8em 1.4em;display:flex;justify-content:space-between"><b style="font-size:1.5em">${o.name} Furniture Store</b><span>My Account | Wishlist | Cart (0) | Login</span></div>
  <div style="background:#E8DCCB;padding:.4em 1.4em;display:flex;gap:1em;flex-wrap:wrap">${['HOME','SOFA','BED','TABLE','CHAIR','OFFICE','DECOR','SALE!!!','NEW','CLEARANCE','BRANDS'].map(x=>`<span>${x}</span>`).join('')}</div>
  <div style="padding:1em 1.4em;display:grid;grid-template-columns:repeat(5,1fr);gap:.7em">
    ${Array.from({length:10}).map((_,i)=>`<div style="border:1px solid #ccc;padding:.5em;text-align:center"><div style="height:4.6em;background:#ddd"></div><div style="font-size:.85em;margin:.3em 0">Item #${4810+i} Sofa Wooden Modern...</div><b style="color:#c00">Rs. ${(48+i*7)},999</b><div style="background:#eee;border:1px solid #aaa;margin-top:.3em;font-size:.8em">Add to Cart</div></div>`).join('')}
  </div>
  <div style="position:absolute;left:28%;right:28%;top:24%;background:#fff;border:3px solid #c00;box-shadow:0 0 0 999em rgba(0,0,0,.45);padding:1.4em;text-align:center">
    <span style="position:absolute;right:.6em;top:.3em;font-size:1.2em">✕</span>
    <b style="font-size:1.6em;color:#c00">SIGN UP NOW!!</b><div style="margin:.6em 0">Get 5% off on your first order*</div>
    <div style="border:1px solid #999;height:2em"></div><div style="background:#c00;color:#fff;margin-top:.6em;padding:.4em">SUBSCRIBE</div><div style="font-size:.75em;color:#888;margin-top:.4em">*Terms and conditions apply</div>
  </div>
</div>`);

/* Social campaign grid */
M.socialAfter = o => wrapMk('instagram.com/'+o.handle, `
<div style="position:absolute;inset:0;background:#fff;padding:1.6em 2.4em;display:grid;grid-template-columns:28% 1fr;gap:2em">
  <div style="display:flex;flex-direction:column;gap:.8em">
    <div style="width:5.4em;height:5.4em;border-radius:50%;background:${o.c};display:grid;place-items:center;color:#fff" class="hd"><span style="font-size:1.8em">K</span></div>
    <b class="hd" style="font-size:1.6em">${o.name}</b>
    <div style="color:#666;line-height:1.45">Clean skincare for humid climates. Dermatologist-tested.</div>
    <div style="display:flex;gap:1.4em;margin-top:.4em">${[['412K','followers'],['8.9%','engagement']].map(s=>`<div><b class="hd" style="font-size:1.5em">${s[0]}</b><div style="color:#888">${s[1]}</div></div>`).join('')}</div>
    <div style="margin-top:auto;background:#F6F2F3;border-radius:.8em;padding:.9em"><div style="color:#888">Campaign reach</div><b class="hd" style="font-size:1.8em;display:block;margin-top:.2em">10.8M</b><div style="height:2.4em;margin-top:.4em">${spark([1,1.6,2.2,3.4,4.8,6.6,8.4,10.8],o.c)}</div></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:.6em">
    ${[['Glow, not grease.','#F3D9DF'],['SPF 50. Weightless.',o.c],['','#2A1B20'],['Made for 38°C days.','#E9C8B0'],['','#F3D9DF'],['Your skin, decoded.',o.c]].map((t,i)=>`
      <div style="background:${t[1]};border-radius:.5em;position:relative;overflow:hidden;color:${['#F3D9DF','#E9C8B0'].includes(t[1])?'#2A1B20':'#fff'}">
        ${t[0]?`<div class="hd" style="position:absolute;left:.8em;top:.8em;right:.8em;font-size:1.45em">${t[0]}</div>`:`<div style="position:absolute;left:30%;right:30%;top:22%;bottom:16%;border-radius:1.2em 1.2em .5em .5em;background:${o.c};opacity:.85"></div><div style="position:absolute;left:36%;right:36%;top:14%;height:12%;border-radius:.4em;background:#fff;opacity:.8"></div>`}
        <span style="position:absolute;left:.8em;bottom:.7em;font-size:.85em;font-weight:600;opacity:.85">▶ ${['1.2M','2.4M','860K','1.9M','740K','3.1M'][i]}</span>
      </div>`).join('')}
  </div>
</div>`);

M.socialBefore = o => wrapMk('instagram.com/'+o.handle, `
<div style="position:absolute;inset:0;background:#fff;padding:1.6em 2.4em;display:grid;grid-template-columns:28% 1fr;gap:2em;font-family:Arial,sans-serif">
  <div style="display:flex;flex-direction:column;gap:.8em">
    <div style="width:5.4em;height:5.4em;border-radius:50%;background:#ccc"></div>
    <b style="font-size:1.4em">kora_skincare_official1</b>
    <div style="color:#666">🌸✨ Best products!! DM for price 💯 Cash on delivery available 🚚</div>
    <div style="display:flex;gap:1.4em">${[['9.8K','followers'],['0.6%','engagement']].map(s=>`<div><b style="font-size:1.3em">${s[0]}</b><div style="color:#888">${s[1]}</div></div>`).join('')}</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:.6em">
    ${[['#FF00AA','MEGA SALE 50% OFF!!!','Impact,sans-serif','#FFFF00'],['#7FDBFF','new stock arrived','Comic Sans MS,cursive','#003'],['#ddd','','',''],['#2ECC40','Eid Mubarak from team kora','Georgia,serif','#fff'],['#FFDC00','DM FOR PRICE','Impact,sans-serif','#f00'],['#B10DC9','giveaway?? 🎁','Arial','#fff']].map((t,i)=>`
      <div style="background:${t[0]};border-radius:.2em;position:relative;overflow:hidden;display:grid;place-items:center;text-align:center;padding:.6em">
        <span style="font-family:${t[2]};color:${t[3]};font-size:1.4em;font-weight:bold;text-shadow:1px 1px 0 #000">${t[1]||'<span style="color:#888;text-shadow:none;font-size:.7em">blurry product photo</span>'}</span>
        <span style="position:absolute;left:.6em;bottom:.5em;font-size:.85em;color:#333;background:rgba(255,255,255,.8);padding:0 .3em">♥ ${[38,12,21,44,9,67][i]}</span>
      </div>`).join('')}
  </div>
</div>`);

/* ======================= DATA ======================= */
const SERVICES = [
  {id:'marketing', t:'Marketing & Brand Building', s:'Positioning, identity, content and performance campaigns across Meta, Google, TikTok and LinkedIn, built to turn attention into revenue.',
   long:'We find the one idea your market will remember, express it in an identity that holds up everywhere, then put it in front of the right people at a cost you can scale. Brand and performance run as one plan, so awareness and conversions grow together.',
   kpi:[['4.6×','avg. ROAS'],['10M+','monthly reach']],
   subs:[['Brand strategy','Positioning, audience research, messaging architecture and naming.'],['Visual identity','Logo systems, typography, colour, guidelines and brand assets.'],['Performance ads','Meta, Google, TikTok and LinkedIn campaigns with daily optimisation.'],['Social & content','Content calendars, short-form video, creator partnerships.'],['Email & CRM','Lifecycle journeys, segmentation and retention automation.'],['Analytics','Attribution, live dashboards and monthly growth reviews.']],
   stack:['Meta Ads','Google Ads','TikTok','LinkedIn','GA4','HubSpot','Klaviyo','Looker Studio'], cs:'kora'},
  {id:'web', t:'Web Development', s:'Fast, secure, conversion-focused websites and web apps, engineered to load in under a second and rank from day one.',
   long:'Your website is your hardest-working salesperson. We build it to be fast, accessible and easy for your team to update, with analytics and SEO foundations wired in before launch.',
   kpi:[['0.9s','median load'],['98','avg. Lighthouse']],
   subs:[['Marketing websites','Headless CMS builds your team can edit without a developer.'],['E-commerce','Shopify, WooCommerce and custom storefronts with optimised checkout.'],['Web applications','Portals, dashboards and SaaS products built on modern frameworks.'],['Integrations','CRM, ERP, payment gateways and third-party APIs.'],['Performance','Core Web Vitals, caching, image pipelines and CDN setup.'],['Care plans','Hosting, security patching, backups and monthly improvements.']],
   stack:['Next.js','React','Node.js','Laravel','Shopify','WordPress','Sanity','AWS'], cs:'sable'},
  {id:'uiux', t:'UI/UX Design', s:'Research-led product and interface design that makes complex things feel simple and turns visitors into customers.',
   long:'We design from evidence: user interviews, analytics and usability tests. The result is an interface that feels obvious to your customers and a design system your engineers can build from without guesswork.',
   kpi:[['+48%','avg. conversion lift'],['3 wks','to tested prototype']],
   subs:[['UX research','Interviews, journey mapping, heatmaps and usability testing.'],['Product design','Web and mobile app interfaces from wireframe to high fidelity.'],['Design systems','Reusable components, tokens and documentation in Figma.'],['Prototyping','Clickable prototypes to validate ideas before they are built.'],['Conversion design','Landing pages and funnels designed around one clear action.'],['Accessibility','WCAG 2.2 audits and remediation for inclusive products.']],
   stack:['Figma','Maze','Hotjar','Framer','Lottie','Storybook'], cs:'sable'},
  {id:'seo', t:'Search Engine Optimisation', s:'Technical, on-page and content SEO that puts your brand on page one for the searches your customers actually make.',
   long:'Rankings are earned with a sound technical base, content that answers real questions and authority from sites that matter. We handle all three and report on the metric that counts: qualified organic leads.',
   kpi:[['+212%','organic growth'],['1,300+','page-one keywords']],
   subs:[['Technical SEO','Crawlability, site speed, schema markup and indexation fixes.'],['Keyword strategy','Intent mapping and topic clusters built around revenue.'],['Content','Articles, service pages and guides written by subject specialists.'],['Local SEO','Google Business Profile, citations and review generation.'],['Link building','Digital PR and editorial links from relevant publications.'],['AI search','Optimisation for AI Overviews, ChatGPT and Perplexity answers.']],
   stack:['Ahrefs','Semrush','Search Console','Screaming Frog','Surfer','Schema.org'], cs:'marigold'}
];
const HOME_SVC = [...SERVICES.map(s=>({t:s.t.replace('Search Engine Optimisation','SEO'),s:s.s,h:'#services'})),{t:'Ready-made Solutions',s:'Real estate and fuel station management portals, plus AI chatbots, deployed under your brand in weeks instead of months.',h:'#solutions'}];

const PRODUCTS = [
  {id:'realestate', tag:'Real Estate Management Portal', t:'Run every listing, lead and lease from one screen.',
   s:'A complete operating system for brokerages, developers and property managers: inventory, CRM, bookings, payments, tenants and owner reporting.',
   bullets:['Lead capture from portals, ads and WhatsApp','Inventory with floor plans and live availability','Installment plans and payment reminders'],
   mods:['Listings & inventory','Lead CRM & auto-assign','Site visits & bookings','Installment plans','Tenant & lease management','Maintenance requests','Owner & investor portal','Agent commissions'],
   cs:'northline', time:'Live in 4–6 weeks',
   mock:()=>M.dashAfter({url:'portal.northlinerealty.com',name:'Northline',c:'#0F766E',side:'#0B2B28',nav:['Overview','Listings','Leads','Bookings','Tenants','Payments','Reports'],crumb:'Overview',title:'Sales pipeline',action:'+ New listing',
     kpis:[['Active listings','1,284','+6.2%'],['New leads','3,912','+31%'],['Avg. response','14 min','−97%',1],['Collections','$4.8M','+18%']],chart:'Leads vs. site visits',series:[20,24,22,30,34,33,41,46,52,55,61,70],list:'Hot leads',rows:[['Ayesha K. · 3-bed','Visit today','#0F766E'],['Omar R. · Plot 14','Negotiation','#B45309'],['Sana M. · Apt 9C','Booked','#0E9F6E'],['Bilal T. · Villa','New','#2F6FEB']]})},
  {id:'fuel', tag:'Fuel Station Operation Management Portal', t:'Every litre, shift and rupee accounted for, in real time.',
   s:'Centralised control for fuel retailers: tank levels, nozzle sales, shift handovers, credit customers, lubricants, deliveries and head-office reporting across every site.',
   bullets:['Tank dip and nozzle reconciliation','Shift cash handover with variance alerts','Fleet and credit customer accounts'],
   mods:['Tank & dip monitoring','Nozzle & meter readings','Shift handover','Cash & card reconciliation','Credit & fleet accounts','Lubricant & shop POS','Supplier deliveries','Multi-site HQ reports'],
   cs:'petrolink', time:'Live in 3–5 weeks',
   mock:()=>M.dashAfter({url:'ops.petrolinkfuels.com',name:'PetroLink',c:'#C2410C',side:'#2A1208',nav:['Network','Stations','Tanks','Shifts','Credit','Deliveries','Reports'],crumb:'Network · 46 stations',title:'Today’s operations',action:'Export',
     kpis:[['Litres sold','412,860','+4.1%'],['Variance','0.08%','−61%',1],['Open shifts','92','On time'],['Credit due','$218K','−22%',1]],chart:'Daily litres sold',series:[30,34,31,36,38,37,41,40,44,47,46,51],list:'Tank alerts',rows:[['Station 12 · HSD','Reorder','#B45309'],['Station 07 · PMG','Normal','#0E9F6E'],['Station 31 · HOBC','Low','#D9443A'],['Station 22 · PMG','Delivery 4pm','#2F6FEB']]})},
  {id:'chatbot', tag:'AI Chatbots', t:'An assistant that answers, books and sells around the clock.',
   s:'Custom AI agents trained on your products, policies and data. They live on your website, WhatsApp and Instagram, resolve routine questions and hand complex cases to your team with full context.',
   bullets:['Trained on your documents and FAQs','WhatsApp, web, Instagram and Messenger','Hands off to humans with full history'],
   mods:['Knowledge-base training','WhatsApp Business API','Website widget','Lead qualification','Bookings & payments','CRM & helpdesk sync','English, Urdu & Arabic','Conversation analytics'],
   cs:'crescent', time:'Live in 2–4 weeks',
   mock:()=>M.chatAfter({url:'crescentinsure.com/help',name:'Crescent Insurance',c:'#13315C'})}
];

const CASES = [
 {id:'northline', name:'Northline Realty', c:'#0F5E57', cats:['solutions','uiux'], tagline:'Real Estate Portal · UI/UX',
  headline:'From 9-hour lead replies to 14 minutes, and 38% more closed deals.',
  sum:'A fast-growing brokerage was losing buyers to slower spreadsheets and missed calls. We deployed our Real Estate Management Portal under their brand and redesigned the way agents work.',
  meta:{Industry:'Real estate brokerage',Market:'Residential & commercial',Duration:'14 weeks',Services:'RE Portal, UI/UX, Automation'},
  kpis:[['−97%','Lead response time'],['+38%','Closed deals in 6 months'],['3,900','Leads routed per month'],['100%','Inventory visibility']],
  business:['Northline Realty is a mid-sized brokerage with 120 agents selling and leasing residential and commercial inventory for eleven developers. Leads arrive from property portals, Meta ads, walk-ins and WhatsApp.','The firm had doubled in two years. Its systems had not changed since it had twelve agents.'],
  problem:'Leads lived in a shared spreadsheet, inventory in another, and payment plans in a third. Agents double-booked units, buyers waited hours for a reply, and management had no reliable view of the pipeline until the month closed.',
  pains:[['9 hrs','Average first response to a new lead'],['17%','Bookings later found to be double-sold'],['6 days','To produce the monthly sales report']],
  approach:[['Process mapping','We shadowed agents, sales managers and accounts for a week and mapped every step from lead to handover, including the workarounds.'],['Configure the platform','Our Real Estate Management Portal was configured to Northline’s inventory structure, payment plans and commission rules, then branded end to end.'],['Redesign the agent workspace','We designed a mobile-first agent view with one inbox for every channel, live availability and one-tap site-visit booking.'],['Migrate, train, launch','Four years of data were cleaned and migrated. We trained every agent in small groups and ran the old and new systems in parallel for two weeks.']],
  deliv:['Branded Real Estate Management Portal','Unified lead inbox (portals, ads, WhatsApp)','Round-robin lead routing with SLA alerts','Live inventory with floor plans and holds','Installment plans and automated reminders','Agent mobile app (iOS & Android)','Owner and developer reporting portal','Data migration and team training'],
  mock:'dash',
  after:()=>PRODUCTS[0].mock(),
  before:()=>M.sheetBefore({file:'LEADS_MASTER_final_v7.xlsx',cols:['Date','Client','Phone','Project','Unit','Agent','Status'],data:[['Date','Client','Phone','Project','Unit','Agent','Status'],['03/02','Ayesha K','0321-xxx','Skyline','9C','Hamza','called?'],['03/02','Omar R','0300-xxx','Palm Ct','14','—','NEW'],['03/02','Sana M','0333-xxx','Skyline','9C','Ali','BOOKED'],['04/02','Bilal','0345-xxx','Villas','V2','Hamza','follow up'],['04/02','#N/A','#N/A','Skyline','9C','Sara','BOOKED'],['04/02','Faraz','0312-xxx','Palm Ct','?','','no answer'],['05/02','Hina S','0300-xxx','Villas','V7','Ali','send PP'],['05/02','Usman','0321-xxx','Skyline','12A','—','NEW'],['05/02','Rabia','—','Palm Ct','18','Sara','lost'],['06/02','Kamran','0333-xxx','Villas','V2','Ali','BOOKED']],hl:{'3,6':'background:#FFC7CE;color:#9C0006','5,6':'background:#FFC7CE;color:#9C0006','5,1':'color:#C00','2,5':'background:#FFEB9C','8,5':'background:#FFEB9C','10,6':'background:#FFC7CE;color:#9C0006'},tabs:['Leads','Leads (old)','Inventory','Copy of Sheet1 (2)']}),
  ba:'A shared Excel sheet with colour-coded cells became a live sales pipeline with routing, availability and SLAs.',
  bars:[['First response to a lead','9 hrs','14 min',540,14,'min'],['Monthly closed deals','64','88',64,88,''],['Double-sold units per quarter','22','0',22,0,''],['Monthly report preparation','6 days','Real-time',6,0.1,'days']],
  outcome:'Northline now runs its entire sales operation from one portal. Response time fell from hours to minutes, double-selling stopped, and leadership reviews the pipeline daily instead of monthly.'},

 {id:'kora', name:'Kora Skincare', c:'#B23A62', cats:['marketing'], tagline:'Brand Building · Performance Marketing',
  headline:'A rebrand and launch campaign that reached 10.8 million people in 90 days.',
  sum:'A promising D2C skincare label looked like every other seller on Instagram. We rebuilt the brand, then launched it with a full-funnel campaign that made it the name customers searched for.',
  meta:{Industry:'D2C beauty & skincare',Market:'Pakistan & GCC',Duration:'90-day launch',Services:'Brand, Content, Paid social, Influencer'},
  kpis:[['10.8M','Unique people reached'],['4.7×','Return on ad spend'],['+412K','New followers'],['−58%','Cost per acquisition']],
  business:['Kora makes lightweight, dermatologist-tested skincare formulated for hot, humid climates. The products were strong and repeat customers loved them.','Almost all sales came from word of mouth and a small Instagram page managed by the founders.'],
  problem:'The brand had no consistent identity. Every post used a different colour, font and tone, ads were boosted posts with no targeting, and customers could not tell Kora apart from resellers and copycats.',
  pains:[['0.6%','Instagram engagement rate'],['$21','Cost to acquire a customer'],['1.3×','Return on ad spend']],
  approach:[['Find the one idea','Interviews with 40 customers surfaced a single insight: they wanted skincare that does not feel heavy in the heat. That became the brand promise, “Made for 38°C days.”'],['Rebuild the identity','New wordmark, a warm rose palette, packaging refresh and a content system so every post is instantly recognisable as Kora.'],['Launch full-funnel','Creator videos for reach, educational carousels for consideration and retargeted offers for conversion across Meta and TikTok.'],['Optimise daily','Over 220 creative variants were tested. Budgets moved every morning towards the ads with the lowest cost per purchase.']],
  deliv:['Brand positioning and messaging','Logo, palette and brand guidelines','Packaging refresh for 9 SKUs','Instagram and TikTok content system','42 creator partnerships','220+ ad creative variants','Shopify landing pages','Live ROAS dashboard'],
  mock:'social',
  after:()=>M.socialAfter({name:'Kora Skincare',c:'#B23A62',handle:'koraskin'}),
  before:()=>M.socialBefore({name:'Kora',handle:'kora_skincare_official1'}),
  ba:'Inconsistent, sale-driven posts became a recognisable brand system with a single promise.',
  bars:[['Return on ad spend','1.3×','4.7×',1.3,4.7,'×'],['Instagram followers','9.8K','422K',9.8,422,'K'],['Engagement rate','0.6%','8.9%',0.6,8.9,'%'],['Cost per acquisition','$21','$8.80',21,8.8,'$']],
  outcome:'Kora went from an unknown label to one of the most-searched skincare names in its category. Retail chains now approach the brand, rather than the other way round.'},

 {id:'petrolink', name:'PetroLink Fuels', c:'#B4461F', cats:['solutions','web'], tagline:'Fuel Station Portal · Web Development',
  headline:'46 stations, one live dashboard, and fuel losses cut by 61%.',
  sum:'A regional fuel retailer was reconciling 46 stations with paper registers and WhatsApp photos. We deployed our Fuel Station Operation Management Portal and connected every site to head office.',
  meta:{Industry:'Fuel retail',Market:'46 stations, 3 regions',Duration:'12 weeks',Services:'Fuel Portal, Integrations, Training'},
  kpis:[['−61%','Unexplained fuel variance'],['Same day','Network reconciliation'],['−22%','Overdue credit balances'],['46/46','Stations live']],
  business:['PetroLink operates 46 company-owned fuel stations across three regions, selling petrol, diesel, high-octane fuel and lubricants, with a growing base of fleet and credit customers.','Each station runs three shifts a day, which means roughly 4,000 shift handovers a month.'],
  problem:'Dip readings, nozzle meters and cash were recorded on paper and sent to head office as photos. Reconciliation took three days, variances were discovered too late to investigate, and credit customers were often billed late or incorrectly.',
  pains:[['0.21%','Unexplained fuel variance'],['3 days','To reconcile the network'],['$280K','Overdue credit balances']],
  approach:[['Site audits','Our team visited 8 representative stations to document how shifts, dips, deliveries and credit sales actually worked on the forecourt.'],['Configure the portal','The Fuel Station Operation Management Portal was set up with PetroLink’s products, price zones, tank calibrations and approval rules.'],['Forecourt-first design','We designed a tablet app that shift managers can complete in under four minutes, with photo capture and automatic variance checks.'],['Phased rollout','Pilot at 6 stations, refine, then roll out region by region with on-site training and a support hotline.']],
  deliv:['Branded Fuel Station Operation Portal','Shift handover tablet app','Tank dip and nozzle reconciliation','Variance alerts by SMS and email','Fleet and credit customer accounts','Supplier delivery tracking','Head-office multi-site reporting','ERP integration and training'],
  mock:'dash',
  after:()=>PRODUCTS[1].mock(),
  before:()=>M.sheetBefore({file:'DAILY_SALE_ALL_STATIONS (3).xls',cols:['Stn','Product','Open dip','Close dip','Meter','Cash','Diff'],data:[['Stn','Product','Open dip','Close dip','Meter','Cash','Diff'],['07','PMG','14,220','9,810','4,402','1,218,400','-8'],['07','HSD','18,900','12,150','6,744','?','#REF!'],['12','PMG','11,040','6,320','4,690','1,301,200','-30'],['12','HSD','pending','','6,120','','—'],['22','PMG','9,880','5,470','4,401','1,219,000','-9'],['22','HOBC','2,400','1,980','412','see photo','-8'],['31','HSD','16,300','10,020','6,250','1,729,800','-30'],['31','PMG','13,700','','','','missing'],['44','PMG','12,600','8,140','4,452','1,232,700','-8'],['44','HSD','17,450','11,210','6,198','1,715,600','-42']],hl:{'2,6':'background:#FFC7CE;color:#9C0006','3,6':'background:#FFEB9C','4,2':'background:#FFEB9C','7,6':'background:#FFEB9C','8,6':'background:#FFC7CE;color:#9C0006','10,6':'background:#FFC7CE;color:#9C0006','2,5':'color:#C00'},tabs:['Daily','Monthly','Credit A/C','Old Sheet DO NOT USE']}),
  ba:'Paper registers and a shared spreadsheet became a live network view with automatic variance checks.',
  bars:[['Unexplained fuel variance','0.21%','0.08%',0.21,0.08,'%'],['Network reconciliation','72 hrs','6 hrs',72,6,'hrs'],['Overdue credit balances','$280K','$218K',280,218,'K'],['Shift handover time','25 min','4 min',25,4,'min']],
  outcome:'Head office now sees every tank, shift and credit account across 46 stations as it happens. The reduction in fuel losses paid for the project within five months.'},

 {id:'marigold', name:'Marigold Dental', c:'#6B3FA0', cats:['seo','web','uiux'], tagline:'SEO · Web Development · UI/UX',
  headline:'Page one for 1,300 keywords and 3.4× more online bookings.',
  sum:'A nine-clinic dental group had a slow, dated website that Google ignored. We rebuilt it for speed and conversion, then ran a local SEO programme for every clinic.',
  meta:{Industry:'Healthcare · Dental',Market:'9 clinics, 4 cities',Duration:'6-month programme',Services:'SEO, Web build, UX, Local SEO'},
  kpis:[['+212%','Organic traffic'],['3.4×','Online bookings'],['1,300+','Page-one keywords'],['0.9s','Page load (from 7.8s)']],
  business:['Marigold Dental runs nine clinics across four cities, offering general, cosmetic and orthodontic treatment. Most new patients search online for a dentist “near me”.','The group spent heavily on paid search because organic traffic brought almost nothing.'],
  problem:'The site took nearly eight seconds to load on mobile, had one generic page for all nine clinics and no way to book online. Competitors with fewer clinics outranked Marigold in every city.',
  pains:[['7.8s','Mobile page load time'],['41','Keywords on page one'],['1.2%','Visitor-to-booking rate']],
  approach:[['Technical and content audit','We crawled 640 URLs, found 212 duplicate pages and mapped 2,800 keywords by treatment, city and patient intent.'],['Rebuild for speed and booking','A new headless website with a page per clinic and treatment, real-time appointment booking and a 0.9-second load time.'],['Local SEO for every clinic','Optimised Google Business Profiles, consistent citations and a review programme that added 1,900 genuine reviews.'],['Content that answers patients','Dentist-reviewed guides on costs, procedures and aftercare that now rank for thousands of questions.']],
  deliv:['UX research and new information architecture','Headless website with 9 clinic pages','Online booking integrated with clinic software','Technical SEO fixes and schema markup','42 treatment and city landing pages','60 dentist-reviewed articles','Google Business Profile optimisation','Monthly rankings and leads dashboard'],
  mock:'site',
  after:()=>M.siteAfter({url:'marigolddental.com',name:'Marigold',c:'#6B3FA0',nav:['Treatments','Clinics','Pricing','Reviews'],cta:'Book a visit',cta2:'Find a clinic',tag:'9 clinics · Open 7 days',h:'Healthy smiles, booked in a minute.',sub:'Gentle, transparent dental care with upfront pricing. Choose a clinic and a time that suits you.',stats:[['4.9★','1,900 reviews'],['9','clinics'],['15k','patients/yr']],card:['Next available','Today, 4:30 pm'],badge:'Top-rated in 4 cities'}),
  before:()=>M.siteBefore({url:'https://marigold-dental-clinic.com.pk',name:'Marigold Dental Clinic'}),
  ba:'A slow, cluttered site with no booking became a fast clinic finder with real-time appointments.',
  bars:[['Monthly organic visitors','18.4K','57.4K',18.4,57.4,'K'],['Online bookings per month','310','1,054',310,1054,''],['Keywords on page one','41','1,312',41,1312,''],['Mobile load time','7.8s','0.9s',7.8,0.9,'s']],
  outcome:'Organic search is now Marigold’s largest source of new patients. The group cut its paid search budget by 40% and still books more appointments than ever.'},

 {id:'crescent', name:'Crescent Insurance', c:'#13315C', cats:['solutions','uiux'], tagline:'AI Chatbot · Conversation Design',
  headline:'An AI assistant that resolves 72% of customer queries in under a minute.',
  sum:'A growing insurer’s support team was overwhelmed by routine questions. We built Amal, an AI assistant trained on their policies, and put it on the website and WhatsApp.',
  meta:{Industry:'Insurance',Market:'Motor, health & travel',Duration:'10 weeks',Services:'AI Chatbot, Conversation UX, Integrations'},
  kpis:[['72%','Queries resolved by AI'],['42s','Average resolution'],['+31%','Online policy sales'],['4.7/5','Customer rating']],
  business:['Crescent Insurance sells motor, health and travel policies to individuals and small businesses, with 380,000 active policyholders.','Customers contact the company by phone, email and increasingly WhatsApp.'],
  problem:'A 40-person call centre handled 60,000 contacts a month, most of them the same twenty questions. Wait times reached 23 minutes, email replies took up to three days, and after-hours enquiries were lost entirely.',
  pains:[['23 min','Average phone wait'],['48–72 hrs','Email response time'],['0%','Queries handled after hours']],
  approach:[['Analyse 12 months of tickets','We clustered 600,000 past conversations to find the intents that drive most volume and the ones that need a human.'],['Design the conversations','Tone, flows and hand-off rules were written with Crescent’s compliance team so every answer is accurate and approved.'],['Build and train Amal','An AI assistant trained on policy documents, connected to the policy and claims systems so it can look up and act, not just answer.'],['Launch and improve weekly','Live on web and WhatsApp in English and Urdu, with weekly reviews of unresolved conversations to close gaps.']],
  deliv:['AI assistant trained on 1,200 documents','WhatsApp Business API integration','Website chat widget','Policy lookup and claims filing','Quote and purchase flow','Human hand-off with full context','English and Urdu support','Conversation analytics dashboard'],
  mock:'chat',
  after:()=>PRODUCTS[2].mock(),
  before:()=>M.chatBefore({url:'https://crescentinsure.com/contact',name:'Crescent Insurance'}),
  ba:'A static contact form with a 72-hour wait became an assistant that files claims in seconds.',
  bars:[['Average time to resolution','23 min','42 sec',1380,42,'s'],['Contacts handled by agents','60K','16.8K',60,16.8,'K'],['Online policy sales','2,100','2,750',2100,2750,''],['Customer satisfaction','3.1','4.7',3.1,4.7,'/5']],
  outcome:'Amal now handles most routine conversations end to end. Crescent’s agents focus on complex claims and sales, and customers get answers at 2am as quickly as at 2pm.'},

 {id:'sable', name:'Sable & Co', c:'#3E3A33', cats:['uiux','web','marketing'], tagline:'UI/UX · E-commerce · CRO',
  headline:'A storefront redesign that lifted checkout conversion by 48%.',
  sum:'A premium furniture brand was selling beautiful products through a cluttered, discount-driven store. We redesigned the shopping experience around how people really buy furniture.',
  meta:{Industry:'Furniture & home',Market:'Online + 3 showrooms',Duration:'16 weeks',Services:'UX research, UI design, Shopify build'},
  kpis:[['+48%','Checkout conversion'],['+36%','Average order value'],['−41%','Cart abandonment'],['2.1×','Mobile revenue']],
  business:['Sable & Co designs and manufactures mid-to-premium furniture sold through three showrooms and an online store. Online sales were about a fifth of revenue.','The products photographed well and reviews were excellent, but online growth had stalled for two years.'],
  problem:'The store was built like a discount catalogue: tiny images, cryptic product names, a newsletter pop-up on every page and a seven-step checkout. Shoppers browsed, then left to visit a showroom or a competitor.',
  pains:[['78%','Cart abandonment rate'],['7 steps','To complete checkout'],['0.9%','Mobile conversion rate']],
  approach:[['Research real buyers','Fourteen interviews and 3,000 session recordings showed people needed size, material and delivery confidence before paying.'],['Redesign the journey','Large lifestyle imagery, room-based navigation, clear dimensions and delivery dates on every product page.'],['Simplify checkout','Checkout reduced from seven steps to two, with guest checkout, installments and saved carts across devices.'],['Test and iterate','Twelve A/B tests after launch refined product pages, filters and the cart, each shipped only when it won.']],
  deliv:['UX research and journey maps','Design system with 80 components','Responsive storefront UI','Room-based navigation and filters','Two-step Shopify checkout','Installment payments integration','3D and AR product previews','A/B testing programme'],
  mock:'shop',
  after:()=>M.shopAfter({url:'sableandco.com/living',name:'Sable & Co'}),
  before:()=>M.shopBefore({url:'https://sable-furniture.pk/shop',name:'Sable'}),
  ba:'A crowded discount catalogue became a calm, room-led store that gives buyers confidence to check out.',
  bars:[['Checkout conversion','1.4%','2.07%',1.4,2.07,'%'],['Average order value','$640','$870',640,870,'$'],['Cart abandonment','78%','46%',78,46,'%'],['Monthly mobile revenue','$92K','$193K',92,193,'K']],
  outcome:'Online is now Sable’s fastest-growing channel, and showroom staff use the new site with customers to configure orders on the spot.'}
];

/* ---------- Industry cases added + social & leads data for every case ---------- */
CASES.push(
 {id:'coralcove', name:'Coral Cove Resort', c:'#0F6A73', cats:['web','marketing','seo'], tagline:'Hotel · Website · Social · SEO',
  headline:'Direct bookings up 164% and $210K a year saved in OTA commission.',
  sum:'A 64-room beach resort was paying travel sites for four out of five bookings. We rebuilt its website around direct booking and turned Instagram into its biggest sales channel.',
  meta:{Industry:'Hotels & hospitality',Market:'Beach resort, 64 rooms',Duration:'6-month programme',Services:'Website, Booking engine, Social, SEO, OTA'},
  kpis:[['+164%','Direct bookings'],['$210K','OTA commission saved a year'],['+86K','Instagram followers'],['4.8★','Guest rating, up from 4.3']],
  business:['Coral Cove is a family-owned beach resort with 64 rooms, a lagoon pool and a seafood restaurant. Most guests are families and couples on short breaks.','Occupancy was healthy, but profit per room was shrinking every year.'],
  problem:'82% of bookings came through Booking.com, Expedia and Agoda at up to 18% commission. The website was slow, had no real booking engine and the Instagram page posted twice a month with stock photos.',
  pains:[['82%','Bookings through travel sites'],['18%','Commission on each OTA booking'],['1.1%','Website booking conversion']],
  approach:[['Guest research','We surveyed 600 past guests and found most booked on OTAs only because the hotel site felt untrustworthy and slow.'],['Direct-booking website','A fast new website with a commission-free booking engine, best-rate guarantee and room upgrades at checkout.'],['Instagram as a sales channel','Daily reels of sunsets, rooms and food, creator stays and a link-in-bio straight to booking.'],['Search & OTA balance','Local SEO and Google Hotel ads for direct traffic, while OTA listings were tuned to fill only low-demand dates.']],
  deliv:['Direct-booking website','Commission-free booking engine','Best-rate guarantee & upsells','Instagram, TikTok & Facebook management','12 creator partnerships','Google Hotel ads & Meta ads','Local SEO & Google Business Profile','WhatsApp concierge chatbot'],
  mock:'site',
  after:()=>M.siteAfter({url:'coralcoveresort.com',name:'Coral Cove',c:'#0F6A73',nav:['Rooms','Dining','Experiences','Offers'],cta:'Book direct',cta2:'View rooms',tag:'Best rate when you book direct',h:'Your sea-view escape starts here.',sub:'64 rooms, a lagoon pool and sunsets you will talk about for years.',stats:[['4.8★','3,200 reviews'],['64','rooms'],['−15%','vs. OTA price']],card:['Tonight from','$180 / night'],badge:'Book direct, save 15%'}),
  before:()=>M.siteBefore({url:'https://coralcove-resort-hotel.com',name:'Coral Cove Resort & Hotel'}),
  ba:'A slow brochure site with a phone number became a booking engine that sells rooms directly.',
  bars:[['Direct bookings per month','140','370',140,370,''],['Share of bookings made direct','18%','46%',18,46,'%'],['Website booking conversion','1.1%','3.4%',1.1,3.4,'%'],['Reply time to guest enquiries','6 hrs','2 min',360,2,'min']],
  outcome:'Coral Cove now earns almost half of its bookings directly. The commission it no longer pays covers the entire marketing programme twice over.'},
 {id:'saffron', name:'Saffron Street', c:'#9C3B1E', cats:['marketing','web','seo'], tagline:'Restaurant · Social · Online ordering',
  headline:'Online orders tripled across 7 branches in five months.',
  sum:'A popular casual-dining chain was invisible online and losing margin to delivery apps. We launched direct ordering and a content engine that made it the most-followed food brand in its city.',
  meta:{Industry:'Restaurants',Market:'7 branches, 2 cities',Duration:'5 months',Services:'Social, Online ordering, Local SEO, Delivery apps'},
  kpis:[['3.1×','Online orders'],['−27%','Delivery-app commission paid'],['+212K','Followers across channels'],['#1','Google Maps in 5 of 7 areas']],
  business:['Saffron Street serves South Asian street food in a fast-casual format across seven branches. Lunch and late-night delivery drive most of its revenue.','Customers loved the food, but most found it only through delivery apps.'],
  problem:'Delivery apps took up to 30% of every online order. Each branch ran its own social page with inconsistent photos, there was no way to order directly, and weekday dine-in was half empty.',
  pains:[['9%','Online orders placed directly'],['30%','Commission on app orders'],['4.1★','Average Google rating']],
  approach:[['One brand, seven branches','A single content system and posting calendar replaced seven separate pages.'],['Direct ordering','A branded ordering site and WhatsApp ordering with a loyalty reward for every direct order.'],['Food that stops the scroll','Weekly shoots producing reels, carousels and stories, plus local food creators every month.'],['Win the map','Optimised Google Business Profiles and a review programme for every branch.']],
  deliv:['Branded online ordering site','WhatsApp ordering & loyalty','Instagram, TikTok & WhatsApp management','Weekly food shoots & reels','24 creator collaborations','Local SEO for 7 branches','Delivery-app menu optimisation','Weekday dine-in campaigns'],
  mock:'site',
  after:()=>M.siteAfter({url:'saffronstreet.com',name:'Saffron Street',c:'#9C3B1E',nav:['Menu','Branches','Deals','Catering'],cta:'Order now',cta2:'Find a branch',tag:'7 branches · Open till 2 am',h:'Street food, straight to your door.',sub:'Order direct and earn a free meal every 8 orders. Delivered in 30 minutes or less.',stats:[['4.7★','8,400 reviews'],['7','branches'],['30 min','delivery']],card:['Orders today','1,284'],badge:'Free meal every 8th order'}),
  before:()=>M.siteBefore({url:'https://saffronstreetfood.pk',name:'Saffron Street Food'}),
  ba:'A static menu page became an ordering site that keeps the margin delivery apps used to take.',
  bars:[['Direct online orders a month','4,200','13,000',4200,13000,''],['Share of orders placed direct','9%','38%',9,38,'%'],['Average Google rating','4.1','4.7',4.1,4.7,''],['Weekday dine-in covers','180','265',180,265,'']],
  outcome:'Saffron Street now sells more online directly than through all delivery apps combined, and its weekday dine-in is fuller than its weekends used to be.'},
 {id:'brightway', name:'Brightway Institute', c:'#34358F', cats:['marketing','web','solutions'], tagline:'Education · Lead generation · Admissions',
  headline:'Enrolments up 2.4× with an admissions funnel that replies in minutes.',
  sum:'A professional training institute was buying leads it never followed up. We built an admissions funnel, managed its social channels and halved the cost of every enquiry.',
  meta:{Industry:'Education & training',Market:'3 campuses + online',Duration:'2 intakes (8 months)',Services:'Social, Ads, Admissions CRM, Chatbot'},
  kpis:[['2.4×','Enrolments per intake'],['−52%','Cost per enquiry'],['14 min','Enquiry response time'],['+58K','Social followers']],
  business:['Brightway runs 16-week programmes in data, design and digital marketing for graduates and working professionals, on three campuses and online.','Its outcomes were strong, but few people outside its alumni had heard of it.'],
  problem:'Enquiries arrived through forms, calls and Facebook messages, and took over a day to get a reply. Most went cold. Social pages were dormant and ad spend went to boosted posts with no tracking.',
  pains:[['26 hrs','Average reply to an enquiry'],['$23','Cost per enquiry'],['7%','Enquiry-to-enrolment rate']],
  approach:[['Student stories','We interviewed 30 alumni and built the content strategy around their career outcomes.'],['Admissions funnel','A CRM that captures every enquiry, scores it and triggers WhatsApp follow-up within minutes.'],['Always-on social','Reels, live Q&As and alumni spotlights on Instagram, YouTube and Facebook.'],['Intake campaigns','Meta and Google campaigns timed to each intake, with open-day registrations tracked to enrolment.']],
  deliv:['Programme landing pages','Admissions CRM & lead scoring','WhatsApp follow-up automation','AI chatbot for fees & eligibility','Instagram, YouTube & Facebook management','Alumni video series','Intake ad campaigns','Open-day event funnels'],
  mock:'site',
  after:()=>M.siteAfter({url:'brightway.edu',name:'Brightway',c:'#34358F',nav:['Programmes','Outcomes','Campuses','Fees'],cta:'Apply now',cta2:'Download brochure',tag:'Next intake: 10 January',h:'Career-ready skills in 16 weeks.',sub:'Live classes, real projects and mentors from top companies. Weekend and evening batches.',stats:[['87%','hired in 6 months'],['16','weeks'],['4.9★','alumni rating']],card:['Seats left this intake','38 of 120'],badge:'Scholarships up to 30%'}),
  before:()=>M.siteBefore({url:'https://brightway-institute.edu.pk',name:'Brightway Institute'}),
  ba:'A brochure website with a contact form became a programme site built to capture and convert enquiries.',
  bars:[['Enrolments per intake','180','432',180,432,''],['Cost per enquiry','$23','$11',23,11,'$'],['Reply time to enquiries','26 hrs','14 min',1560,14,'min'],['Open-day attendance','120','410',120,410,'']],
  outcome:'Brightway now fills every intake before the deadline, and its admissions team spends its time on conversations instead of chasing cold leads.'}
);
const IND_NAMES={hotel:'Hotels',restaurant:'Restaurants',realestate:'Real estate',health:'Healthcare',ecommerce:'E-commerce & retail',education:'Education',services:'Professional services',other:'Energy & industry'};
const CASE_EXTRA={
 northline:{ind:'realestate',theme:'realestate',
  social:{ch:['fb','ig','yt'],f:['6.2K','48K'],eng:['0.9%','5.8%'],posts:26,reach:'1.1M',p:['Just listed: Skyline corner unit','Saturday open house','How installment plans work']},
  leads:{u:'qualified buyer leads',s:[210,220,205,260,340,420,510,590,660,720,780,840],src:[['Property portals',31],['Meta lead ads',27],['Organic search',18],['WhatsApp & chatbot',16],['Referrals',8]],cpl:['$14.20','$5.10'],cl:'Cost per lead'}},
 kora:{ind:'ecommerce',theme:'ecommerce',ov:{c2:'#F3D9DF',cat:'Skincare brand',tag:'Made for 38°C days.',cta:'Shop now'},
  social:{ch:['ig','tt','fb'],f:['9.8K','422K'],eng:['0.6%','8.9%'],posts:48,reach:'10.8M',p:['Glow, not grease.','SPF 50. Weightless.','Made for 38°C days.']},
  leads:{u:'orders from social & search',s:[380,410,395,620,980,1450,1980,2400,2760,3050,3300,3520],src:[['Instagram',38],['TikTok',24],['Meta ads',20],['Organic search',10],['Email & WhatsApp',8]],cpl:['$21','$8.80'],cl:'Cost per customer'}},
 petrolink:{ind:'other',theme:'other',ov:{cat:'Fuel retailer',tag:'Fuel you can count on.',cta:'Open a fleet account',c2:'#F2B33D'},
  social:{ch:['li','fb','wa'],f:['1.4K','16K'],eng:['0.4%','3.9%'],posts:16,reach:'240K',p:['46 stations, one standard','Fleet cards for growing businesses','Meet our forecourt heroes']},
  leads:{u:'fleet account enquiries',s:[6,5,7,9,14,19,24,28,31,35,38,41],src:[['Google search',36],['LinkedIn',28],['Website forms',20],['WhatsApp',10],['Referrals',6]],cpl:['$96','$38'],cl:'Cost per enquiry'}},
 marigold:{ind:'health',theme:'health',ov:{cat:'Dental group',tag:'Healthy smiles, booked in a minute.'},
  social:{ch:['ig','fb','yt'],f:['3.1K','38K'],eng:['1.1%','6.2%'],posts:20,reach:'620K',p:['What a cleaning really involves','Meet Dr. Sana, orthodontist','Book online in 60 seconds']},
  leads:{u:'online patient bookings',s:[310,300,325,390,480,590,700,800,880,950,1010,1054],src:[['Organic search',46],['Google Maps',22],['Instagram & Facebook',14],['Google ads',12],['Referrals',6]],cpl:['$19','$7.40'],cl:'Cost per booking'}},
 crescent:{ind:'services',theme:'services',ov:{cat:'Insurance company',tag:'Cover that answers back.',cta:'Get a quote',c2:'#8FB8DE'},
  social:{ch:['fb','li','wa'],f:['22K','96K'],eng:['0.7%','4.4%'],posts:24,reach:'1.8M',p:['File a claim in 60 seconds','Travel cover, explained','Meet Amal, our AI assistant']},
  leads:{u:'policy enquiries',s:[1800,1750,1900,2100,2500,2900,3300,3600,3900,4100,4300,4500],src:[['AI chatbot',34],['Google search',24],['Meta ads',18],['LinkedIn',12],['WhatsApp',12]],cpl:['$12','$4.60'],cl:'Cost per enquiry'}},
 sable:{ind:'ecommerce',theme:'ecommerce',ov:{cat:'Furniture brand',tag:'Furniture for slow living.',c2:'#C8B8A0'},
  social:{ch:['ig','fb','yt'],f:['14K','91K'],eng:['1.2%','5.4%'],posts:30,reach:'1.4M',p:['The Arlo sofa, styled 3 ways','Inside our workshop','Your room, before & after']},
  leads:{u:'online orders',s:[620,600,640,700,820,980,1120,1260,1380,1480,1560,1640],src:[['Instagram',30],['Google Shopping',26],['Organic search',18],['Meta ads',16],['Email',10]],cpl:['$34','$19'],cl:'Cost per order'}},
 coralcove:{ind:'hotel',theme:'hotel',
  social:{ch:['ig','tt','fb'],f:['11K','97K'],eng:['1.3%','7.1%'],posts:36,reach:'2.6M',p:['Golden hour, every hour.','Your table by the sea is ready.','Book direct, save 15%']},
  leads:{u:'direct booking enquiries',s:[180,170,190,240,320,410,520,610,690,760,820,880],src:[['Instagram',28],['Google search & Maps',26],['Meta ads',18],['WhatsApp & chatbot',16],['TikTok',12]],cpl:['$11','$3.90'],cl:'Cost per enquiry'}},
 saffron:{ind:'restaurant',theme:'restaurant',ov:{cat:'Street food chain',tag:'Street food, done right.',cta:'Order now'},
  social:{ch:['ig','tt','wa'],f:['18K','230K'],eng:['1.0%','9.4%'],posts:60,reach:'4.2M',p:['Chaat so good it trends','Late-night menu is live','Free meal every 8th order']},
  leads:{u:'direct online orders',s:[380,410,400,700,1250,1900,2600,3200,3800,4300,4700,4940],src:[['Instagram',32],['TikTok',22],['Google Maps',20],['WhatsApp',16],['Meta ads',10]],cpl:['$4.80','$1.60'],cl:'Cost per order'}},
 brightway:{ind:'education',theme:'education',ov:{tag:'Learn what is next.'},
  social:{ch:['ig','yt','fb'],f:['7.4K','65K'],eng:['0.8%','6.6%'],posts:28,reach:'1.9M',p:['From zero to data analyst','Live Q&A: is UX for you?','Open day this Saturday']},
  leads:{u:'admission enquiries',s:[420,400,450,620,900,1240,1480,1700,1860,1980,2100,2240],src:[['Meta ads',30],['Instagram',22],['Google search',20],['YouTube',14],['WhatsApp',14]],cpl:['$23','$11'],cl:'Cost per enquiry'}}
};
CASES.forEach(c=>Object.assign(c,CASE_EXTRA[c.id]||{}));

const CAT_NAMES = {all:'All work',marketing:'Marketing',web:'Web Development',uiux:'UI/UX',seo:'SEO',solutions:'Solutions'};
const $ = (s,el=document)=>el.querySelector(s), $$ = (s,el=document)=>[...el.querySelectorAll(s)];
;
/* ======================= RENDER ======================= */
const arrow = `<svg width="18" height="18"><use href="#arr"/></svg>`;
const check = `<svg><use href="#chk"/></svg>`;

$('#marq').innerHTML = (()=>{const w=['Brand Strategy','Performance Marketing','Web Development','UI/UX Design','SEO','AI Chatbots','Real Estate Portal','Fuel Station Portal','Content Studio','Analytics'];return [...w,...w].map(x=>`<span>${x}</span>`).join('')})();

$('#svcList').innerHTML = HOME_SVC.map((s,i)=>`
  <a class="svc-row rv" href="${s.h}"><span class="ix">0${i+1}</span><h3>${s.t}</h3><p>${s.s}</p><span class="go">${arrow}</span></a>`).join('');

$('#prodGrid').innerHTML = PRODUCTS.map(p=>`
  <a class="prod rv" href="#solutions">
    <span class="tag">${p.tag}</span>
    <div class="screen"><div>${p.mock()}</div></div>
    <h3>${p.t}</h3>
    <ul>${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    <div class="foot"><span class="mono muted" style="font-size:12px">${p.time}</span><span class="link-arrow">Explore ${arrow}</span></div>
  </a>`).join('');

const caseCard = c => `
  <a class="case-card rv" href="#case-${c.id}" data-cats="${c.cats.join(' ')}" data-ind="${c.ind}" style="--cc:${c.c}">
    <div class="thumb"><span class="big">${c.tagline}</span>${c.after()}</div>
    <div class="meta"><div><h3>${c.name}</h3><p class="muted" style="margin-top:6px;font-size:15px;max-width:44ch">${c.headline}</p></div><span class="res">${c.kpis[0][0]}<br><span class="muted" style="font-weight:500;font-size:11px">${c.kpis[0][1]}</span></span></div>
  </a>`;
$('#homeCases').innerHTML = CASES.slice(0,4).map(caseCard).join('');
$('#allCases').innerHTML = CASES.map(caseCard).join('');

// filters: industry + service
let fI='all', fS='all';
const fBtn=(attr,k,v,n,on)=>`<button type="button" data-${attr}="${k}" class="${on?'on':''}">${v}<span>${n}</span></button>`;
$('#filters').innerHTML = `<div class="frow"><span class="flab">Industry</span>${[['all','All industries'],...Object.entries(IND_NAMES)].map(([k,v])=>fBtn('fi',k,v,k==='all'?CASES.length:CASES.filter(c=>c.ind===k).length,k==='all')).join('')}</div>
  <div class="frow"><span class="flab">Service</span>${Object.entries(CAT_NAMES).map(([k,v])=>fBtn('f',k,k==='all'?'All services':v,k==='all'?CASES.length:CASES.filter(c=>c.cats.includes(k)).length,k==='all')).join('')}</div>`;
$('#filters').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.dataset.fi){fI=b.dataset.fi; $$('#filters [data-fi]').forEach(x=>x.classList.toggle('on',x===b));}
  if(b.dataset.f){fS=b.dataset.f; $$('#filters [data-f]').forEach(x=>x.classList.toggle('on',x===b));}
  let shown=0; $$('#allCases .case-card').forEach(card=>{const ok=(fI==='all'||card.dataset.ind===fI)&&(fS==='all'||card.dataset.cats.split(' ').includes(fS)); card.classList.toggle('hide',!ok); if(ok) shown++;});
  $('#noCases').hidden=shown>0;
});

$('#svcBlocks').innerHTML = SERVICES.map((s,i)=>{
  const cs = CASES.find(c=>c.id===s.cs);
  return `<div class="svc-block" id="svc-${s.id}">
    <div class="side">
      <span class="ix">0${i+1} / 04</span>
      <h2>${s.t}</h2>
      <p>${s.long}</p>
      <div class="kpi">${s.kpi.map(k=>`<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:30px"><a href="#contact" class="btn sm">Get a proposal <span class="arr">→</span></a><a href="#case-${cs.id}" class="btn ghost sm">Case: ${cs.name}</a></div>
    </div>
    <div>
      <div class="sub-grid">${s.subs.map(x=>`<div class="sub rv"><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join('')}</div>
      <div class="stack">${s.stack.map(x=>`<span class="pill">${x}</span>`).join('')}</div>
    </div>
  </div>`}).join('');

$('#solBlocks').innerHTML = PRODUCTS.map((p,i)=>{
  const cs = CASES.find(c=>c.id===p.cs);
  return `<div class="sol" id="sol-${p.id}">
    <div>
      <span class="eyebrow">${p.tag}</span>
      <h2>${p.t}</h2>
      <p class="lead">${p.s}</p>
      <ul class="mods">${p.mods.map((m,j)=>`<li><b>${String(j+1).padStart(2,'0')}</b>${m}</li>`).join('')}</ul>
      <div class="row"><a href="#contact" class="btn">Book a demo <span class="arr">→</span></a><a href="#case-${cs.id}" class="btn ghost">See it at ${cs.name}</a></div>
      <p class="mono muted" style="font-size:12px;margin-top:20px">${p.time} · Your branding · Training included · Cloud or on-premise</p>
    </div>
    <div class="sol-media rv">${p.mock()}</div>
  </div>`}).join('');

const needs=['Brand & Marketing','Web Development','UI/UX Design','SEO','Real Estate Portal','Fuel Station Portal','AI Chatbot'];
$('#needChips').innerHTML = needs.map((n,i)=>`<input type="checkbox" id="need-${i}" name="need" value="${n}"><label for="need-${i}">${n}</label>`).join('');
$('#budgetChips').innerHTML = ['Under $2K','$2K–5K','$5K–15K','$15K+'].map((n,i)=>`<input type="radio" id="bud-${i}" name="budget" value="${n}"><label for="bud-${i}">${n}</label>`).join('');

/* ---------- Case detail ---------- */

const CH_NAME={ig:'Instagram',fb:'Facebook',li:'LinkedIn',wa:'WhatsApp Business',tt:'TikTok',yt:'YouTube',x:'X'};
function caseTheme(c){return window.PVX?PVX.theme(c.theme,{name:c.name,c:c.c,...(c.ov||{}),posts:c.social.p,fol:c.social.f[1]}):null;}
function calendar(c){
  const N=c.social.posts, types=[['Reel','var(--cc)'],['Carousel','var(--accent)'],['Story','var(--signal)'],['Post','var(--good)']];
  const days=Array.from({length:28},()=>[]);
  for(let i=0;i<N;i++){days[Math.floor(i*28/N)].push(types[(i*5+Math.floor(i/3))%4]);}
  return `<div class="cal"><div class="cal-top"><b>Posting calendar · a typical month</b><div class="cal-leg">${types.map(t=>`<span><i style="background:${t[1]}"></i>${t[0]}</span>`).join('')}</div></div>
   <div class="cal-grid">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<span class="cal-d">${d}</span>`).join('')}
   ${days.map((d,i)=>`<div class="cal-c"><span>${i+1}</span>${d.slice(0,3).map(t=>`<i style="background:${t[1]}" title="${t[0]}">${t[0]}</i>`).join('')}${d.length>3?`<em>+${d.length-3}</em>`:''}</div>`).join('')}</div></div>`;
}
function socialSec(c){
  if(!c.social) return '';
  const s=c.social, t=caseTheme(c), chs=s.ch.map(k=>CH_NAME[k]);
  return `<div class="cs-sec"><div class="lab"><b>06</b>Social media<br>we manage</div><div class="body">
    <p>We run ${c.name}’s ${chs.slice(0,-1).join(', ')} and ${chs[chs.length-1]} every day: strategy, content, posting, replies and monthly reporting.</p>
    <div class="soc-stats">
      <div><span>Followers</span><b>${s.f[1]}</b><em>from ${s.f[0]}</em></div>
      <div><span>Engagement rate</span><b>${s.eng[1]}</b><em>from ${s.eng[0]}</em></div>
      <div><span>Posts a month</span><b>${s.posts}</b><em>across ${s.ch.length} channels</em></div>
      <div><span>Monthly reach</span><b>${s.reach}</b><em>people</em></div>
    </div>
    <div class="soc-stage" style="--cc:${c.c}"><div class="pv"><div class="pvx">${t?PVX.social(t,s.ch):''}</div></div></div>
    <div style="--cc:${c.c}">${calendar(c)}</div>
  </div></div>`;
}
function niceTop(v){const p=Math.pow(10,Math.floor(Math.log10(v||1))),f=v/p; return (f<=1?1:f<=1.5?1.5:f<=2?2:f<=2.5?2.5:f<=3?3:f<=4?4:f<=5?5:f<=6?6:f<=8?8:10)*p;}
function leadsSec(c){
  if(!c.leads) return '';
  const L=c.leads, s=L.s, st=3, before=Math.round((s[0]+s[1]+s[2])/3), after=s[s.length-1], mult=(after/before).toFixed(1);
  const W=760,H=270,pl=52,pr=12,pt=26,pb=34, top=niceTop(Math.max(...s)), n=s.length, bw=(W-pl-pr)/n;
  const y=v=>pt+(1-v/top)*(H-pt-pb), fmt=v=>v>=1000?(v/1000).toFixed(v>=10000?0:1)+'K':v;
  const svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Monthly ${L.u} over 12 months">
    ${[0,.5,1].map(f=>`<line x1="${pl}" x2="${W-pr}" y1="${y(top*f)}" y2="${y(top*f)}" stroke="var(--line)"/><text x="${pl-8}" y="${y(top*f)+4}" text-anchor="end">${fmt(top*f)}</text>`).join('')}
    ${s.map((v,i)=>`<rect x="${pl+i*bw+bw*.18}" y="${y(v)}" width="${bw*.64}" height="${H-pb-y(v)}" rx="3" fill="${i<st?'var(--muted)':'var(--accent)'}" opacity="${i<st?.4:1}"/>`).join('')}
    <text x="${pl+(n-1)*bw+bw/2}" y="${y(after)-8}" text-anchor="middle" style="fill:var(--ink);font-weight:600">${fmt(after)}</text>
    <line x1="${pl+st*bw}" x2="${pl+st*bw}" y1="${pt-14}" y2="${H-pb}" stroke="var(--ink)" stroke-dasharray="3 4"/>
    <text x="${pl+st*bw+6}" y="${pt-4}" style="fill:var(--ink);font-weight:600">We started</text>
    ${s.map((v,i)=>`<text x="${pl+i*bw+bw/2}" y="${H-12}" text-anchor="middle">${i===0?'Month 1':i+1}</text>`).join('')}
  </svg>`;
  const cols=['var(--accent)','var(--cc)','var(--signal)','var(--good)','var(--muted)'];
  return `<div class="cs-sec"><div class="lab"><b>07</b>Leads &amp;<br>enquiries</div><div class="body" style="--cc:${c.c}">
    <p>Monthly ${L.u}, before and after we started.</p>
    <div class="soc-stats">
      <div><span>Before (monthly avg.)</span><b>${before.toLocaleString()}</b><em>${L.u}</em></div>
      <div><span>After 9 months</span><b>${after.toLocaleString()}</b><em>${L.u}</em></div>
      <div><span>Growth</span><b class="g">${mult}×</b><em>more every month</em></div>
      <div><span>${L.cl}</span><b>${L.cpl[1]}</b><em>from ${L.cpl[0]}</em></div>
    </div>
    <div class="lead-chart">${svg}</div>
    <div class="src"><b>Where leads come from now</b>
      <div class="src-bar">${L.src.map((r,i)=>`<i style="width:${r[1]}%;background:${cols[i]}" title="${r[0]} ${r[1]}%"></i>`).join('')}</div>
      <div class="src-leg">${L.src.map((r,i)=>`<span><i style="background:${cols[i]}"></i>${r[0]} <b>${r[1]}%</b></span>`).join('')}</div></div>
  </div></div>`;
}
function fmtDelta(b,a){const p=Math.round((a-b)/b*100);return (p>0?'↑ ':'↓ ')+Math.abs(p)+'%'}
function renderCase(id){
  const i = CASES.findIndex(c=>c.id===id); if(i<0) return false;
  const c = CASES[i], nx = CASES[(i+1)%CASES.length];
  $('#caseDetail').innerHTML = `
  <div class="cs-hero" style="--cc:${c.c}">
    <div class="wrap">
      <a href="#work" class="back">← All case studies</a>
      <h1>${c.headline}</h1>
      <p class="sum">${c.sum}</p>
      <dl class="cs-meta">${['Client',...Object.keys(c.meta)].slice(0,4).map(k=>`<div><dt>${k}</dt><dd>${k==='Client'?c.name:c.meta[k]}</dd></div>`).join('')}</dl>
      <div class="mk-wrap">${c.after()}</div>
    </div>
  </div>
  <div class="wrap">
    <div class="cs-kpis rv">${c.kpis.map(k=>`<div><b>${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>

    <div class="cs-sec"><div class="lab"><b>01</b>The business</div><div class="body">${c.business.map((p,j)=>`<p class="${j?'sm':''}">${p}</p>`).join('')}
      <p class="sm" style="margin-top:22px"><span class="pill">${c.meta.Industry}</span> <span class="pill">${c.meta.Market}</span> <span class="pill">${c.meta.Services}</span></p></div></div>

    <div class="cs-sec"><div class="lab"><b>02</b>Problem statement</div><div class="body"><p>${c.problem}</p>
      <div class="pains">${c.pains.map(p=>`<div class="pain"><b>${p[0]}</b><span>${p[1]}</span></div>`).join('')}</div></div></div>

    <div class="cs-sec"><div class="lab"><b>03</b>Our approach</div><div class="body"><div class="appr">${c.approach.map((a,j)=>`<div class="a"><span class="n">Step ${j+1}</span><div><h4>${a[0]}</h4><p>${a[1]}</p></div></div>`).join('')}</div></div></div>

    <div class="cs-sec"><div class="lab"><b>04</b>Deliverables</div><div class="body"><ul class="deliv">${c.deliv.map(d=>`<li>${check}<span>${d}</span></li>`).join('')}</ul></div></div>

    <div class="cs-sec"><div class="lab"><b>05</b>Redesign<br>before / after</div><div class="body">
      <div class="ba" style="--x:50%">
        <div class="layer after">${c.after()}</div>
        <div class="before" aria-hidden="true">${c.before()}</div>
        <span class="lbl l">Before</span><span class="lbl r">After</span>
        <div class="handle"><i>⇆</i></div>
        <input type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after" id="ba-${c.id}">
      </div>
      <div class="ba-note"><span>${c.ba}</span><span class="mono">Drag to compare</span></div>
    </div></div>

    ${socialSec(c)}
    ${leadsSec(c)}
    <div class="cs-sec"><div class="lab"><b>08</b>Results</div><div class="body">
      <div class="bars">${c.bars.map(b=>{const mx=Math.max(b[3],b[4]);return `
        <div class="bar-row"><div class="top"><b>${b[0]}</b><span class="d up">${fmtDelta(b[3],b[4])}</span></div>
          <div class="bar-track">
            <div class="bar"><span>Before</span><span class="t"><i data-w="${(b[3]/mx*100).toFixed(1)}"></i></span><span class="val">${b[1]}</span></div>
            <div class="bar af"><span>After</span><span class="t"><i data-w="${Math.max(b[4]/mx*100,1).toFixed(1)}"></i></span><span class="val">${b[2]}</span></div>
          </div></div>`}).join('')}</div>
      <p class="quote" style="margin-top:56px">${c.outcome}</p>
      <a href="#contact" class="btn" style="margin-top:32px">Get results like ${c.name} <span class="arr">→</span></a>
    </div></div>

    <a class="next-case" href="#case-${nx.id}"><span class="eyebrow">Next case study</span><h2>${nx.name} →</h2><p class="muted" style="margin-top:14px;max-width:56ch">${nx.headline}</p></a>
  </div>`;
  const ba = $('.ba'), inp = $('.ba input');
  inp.addEventListener('input',()=>ba.style.setProperty('--x',inp.value+'%'));
  requestAnimationFrame(()=>setTimeout(()=>$$('.bar .t i').forEach(x=>x.style.width=x.dataset.w+'%'),150));
  return c;
}

/* ======================= ROUTER ======================= */
const TITLES={home:'10 Million Reach',services:'Services · 10 Million Reach',solutions:'Solutions · 10 Million Reach',work:'Case Studies · 10 Million Reach',pricing:'Pricing · 10 Million Reach',about:'About · 10 Million Reach',contact:'Contact · 10 Million Reach'};
function route(){
  let h = (location.hash||'#home').slice(1) || 'home';
  let view = h, title;
  if(h.startsWith('case-')){ const c = renderCase(h.slice(5)); if(c){view='case';title=c.name+' · Case Study'} else view='home'; }
  if(!$(`[data-view="${view}"]`)) view='home';
  $$('.view').forEach(v=>{const on=v.dataset.view===view; v.hidden=!on; if(on){v.style.animation='none';v.offsetHeight;v.style.animation=''}});
  $$('.nav a').forEach(a=>a.classList.toggle('on', a.dataset.nav===view || (view==='case'&&a.dataset.nav==='work')));
  document.title = title || TITLES[view];
  closeMenu();
  window.scrollTo({top:0,behavior:'instant'});
  setupReveal(); setupCounters();
}
window.addEventListener('hashchange',route);

/* ======================= MOTION ======================= */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let io;
function setupReveal(){
  io && io.disconnect();
  io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
  if(reduce) return;
  $$('.view:not([hidden]) .rv').forEach((el,i)=>{
    if(el.getBoundingClientRect().top > innerHeight*0.92){ el.classList.add('pre'); el.style.transitionDelay = (i%3*70)+'ms'; io.observe(el); }
  });
}
let cio;
function animateCount(el){
  const end=parseFloat(el.dataset.count), dec=+(el.dataset.dec||0), t0=performance.now(), dur=1600;
  const step=t=>{const p=Math.min((t-t0)/dur,1), e=1-Math.pow(1-p,4); el.textContent=(end*e).toFixed(dec); if(p<1) requestAnimationFrame(step)};
  reduce ? el.textContent=end.toFixed(dec) : requestAnimationFrame(step);
}
function setupCounters(){
  cio && cio.disconnect();
  cio = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animateCount(e.target);cio.unobserve(e.target)}}),{threshold:.4});
  $$('.view:not([hidden]) [data-count]').forEach(el=>{el.textContent=parseFloat(el.dataset.count).toFixed(+(el.dataset.dec||0)); cio.observe(el)});
}

/* Reach counter */
(()=>{
  const el=$('#reachNum'); let v=10482316; const fmt=n=>n.toLocaleString('en-US');
  if(reduce){el.textContent=fmt(v);return}
  const t0=performance.now(), dur=2400;
  const step=t=>{const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3); el.textContent=fmt(Math.round(v*e)); if(p<1) requestAnimationFrame(step); else setInterval(()=>{v+=Math.floor(Math.random()*37)+4; el.textContent=fmt(v)},1100)};
  requestAnimationFrame(step);
})();

/* Concentric reach rings: signal spreading outward, dots = people reached */
function ringField(canvas, opts){
  const ctx=canvas.getContext('2d'); let w,h,dpr,dots=[];
  const size=()=>{dpr=Math.min(devicePixelRatio||1,2); const r=canvas.getBoundingClientRect(); w=r.width;h=r.height; canvas.width=w*dpr;canvas.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    dots=Array.from({length:opts.dots},()=>({a:Math.random()*Math.PI*2,r:.18+Math.random()*.82,s:(Math.random()*.0016+.0004)*(Math.random()<.5?-1:1),z:Math.random()}))};
  size(); new ResizeObserver(size).observe(canvas);
  const col=()=>getComputedStyle(document.documentElement).getPropertyValue(opts.var).trim()||'#2F6FEB';
  let t=0, visible=true;
  new IntersectionObserver(e=>visible=e[0].isIntersecting).observe(canvas);
  const draw=()=>{
    if(visible && !document.hidden){
      ctx.clearRect(0,0,w,h); const c=col(), cx=w*(opts.cx||.5), cy=h*(opts.cy||.5), R=Math.hypot(w,h)*(opts.scale||.5);
      ctx.strokeStyle=c; ctx.fillStyle=c;
      for(let i=0;i<5;i++){ const p=((t*0.0022)+i/5)%1; ctx.globalAlpha=(1-p)*opts.alpha; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(cx,cy,p*R,0,Math.PI*2); ctx.stroke(); }
      ctx.globalAlpha=opts.alpha*.35; [.33,.66,1].forEach(f=>{ctx.setLineDash([2,6]);ctx.beginPath();ctx.arc(cx,cy,f*R*.92,0,Math.PI*2);ctx.stroke()}); ctx.setLineDash([]);
      dots.forEach(d=>{ if(!reduce) d.a+=d.s; const x=cx+Math.cos(d.a)*d.r*R*.92, y=cy+Math.sin(d.a)*d.r*R*.92; ctx.globalAlpha=(.3+d.z*.7)*opts.alpha; ctx.beginPath(); ctx.arc(x,y,1+d.z*1.8,0,Math.PI*2); ctx.fill(); });
      ctx.globalAlpha=1; t++;
    }
    if(!reduce) requestAnimationFrame(draw);
  };
  draw();
}
ringField($('#rings'),{var:'--accent',dots:90,alpha:.9,scale:.36});
$$('.cta-rings').forEach(c=>ringField(c,{var:'--accent',dots:60,alpha:.8,cx:.85,cy:.5,scale:.55}));

/* Header border on scroll */
addEventListener('scroll',()=>$('#hdr').classList.toggle('scrolled',scrollY>8),{passive:true});

/* Cursor follower on case cards */
(()=>{
  const cur=$('#cursor'); if(matchMedia('(hover:none)').matches) return;
  document.addEventListener('mousemove',e=>{
    const on=!!e.target.closest('.case-card .thumb');
    cur.classList.toggle('on',on);
    cur.style.left=e.clientX+'px'; cur.style.top=e.clientY+'px';
  });
})();

/* Magnetic buttons */
if(!reduce && matchMedia('(hover:hover)').matches){
  document.addEventListener('mousemove',e=>{
    const b=e.target.closest('.btn'); $$('.btn.mag').forEach(x=>{if(x!==b){x.style.transform='';x.classList.remove('mag')}});
    if(!b) return; const r=b.getBoundingClientRect();
    b.classList.add('mag'); b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`;
  });
}

/* Mobile menu */
const burger=$('#burger'), mnav=$('#mnav');
function closeMenu(){mnav.classList.remove('open');burger.setAttribute('aria-expanded','false')}
burger.addEventListener('click',()=>{const o=mnav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});

/* Theme toggle */
(()=>{
  const root=document.documentElement;
  try{const s=localStorage.getItem('10mr-theme'); if(s) root.dataset.theme=s}catch(e){}
  $('#themeBtn').addEventListener('click',()=>{
    const dark = root.dataset.theme ? root.dataset.theme==='dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark?'light':'dark';
    try{localStorage.setItem('10mr-theme',root.dataset.theme)}catch(e){}
  });
})();

/* Copy email */
$('#copyMail').addEventListener('click',e=>{
  const t=$('#mail').textContent, b=e.currentTarget;
  const ok=()=>{b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1600)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents($('#mail'));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected'};
  try{navigator.clipboard.writeText(t).then(ok,sel)}catch(_){sel()}
});

/* Contact form */
$('#cform').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.target, err=$('#ferr');
  const name=f.name.value.trim(), email=f.email.value.trim(), need=$$('input[name=need]:checked',f).map(x=>x.value);
  if(!name){err.textContent='Add your name so we know who to reply to.';f.name.focus();return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err.textContent='Enter a valid email address, like you@company.com.';f.email.focus();return}
  if(!need.length){err.textContent='Choose at least one service you need.';return}
  err.textContent='';
  const done=()=>{$('#formBody').hidden=true; $('#formDone').hidden=false;
    $('#doneTitle').textContent=`Thank you, ${name.split(' ')[0]}.`;
    $('#doneText').textContent=`Your brief for ${need.join(', ')} is with our team. A growth lead will reply to ${email} within one business day.`;};
  if(!FORM_ENDPOINT){done();return;}
  const btn=f.querySelector('[type=submit]'); btn.disabled=true;
  const fd=new FormData(f); fd.set('needs',need.join(', '));
  fetch(FORM_ENDPOINT,{method:'POST',body:fd,headers:{Accept:'application/json'}})
    .then(r=>{if(!r.ok) throw 0; done();})
    .catch(()=>{err.textContent='We could not send your brief. Please email hello@10millionreach.com instead.';})
    .finally(()=>{btn.disabled=false;});
  return;
  $('#doneTitle').textContent=`Thank you, ${name.split(' ')[0]}.`;
  $('#doneText').textContent=`Your brief for ${need.join(', ')} is with our team. A growth lead will reply to ${email} within one business day.`;
});
$('#formReset').addEventListener('click',()=>{$('#cform').reset();$('#formBody').hidden=false;$('#formDone').hidden=true});

route();
;
(()=>{
const CORE = {
 web:{g:'build',n:'Website Development',d:'A fast, conversion-focused website on a CMS your team can edit.',setup:1800,mo:0,lift:.10,ramp:2,
   tiers:['Up to 8 pages, contact forms, analytics','Up to 20 pages, blog, CRM integration','Unlimited pages, custom features, A/B testing'],
   ao:[['care','Care & hosting plan',0,120,0],['ml','Multilingual (EN · UR · AR)',450,0,.02],['blog','Blog & content hub',350,0,.01],['cwv','Speed guarantee (Core Web Vitals)',300,0,.01]],
   ms:[6,'Website live','Your new website launches with tracking, SEO foundations and lead capture in place.']},
 webapp:{g:'build',n:'Web App Development',d:'Custom portals, dashboards and customer-facing apps.',setup:6500,mo:0,lift:.06,ramp:3,
   tiers:['MVP, one user role, core workflows','Multi-role app with integrations','Enterprise build with SSO, audit logs and SLAs'],
   ao:[['mob','Companion mobile app (iOS + Android)',4500,0,.03],['api','Third-party integrations',1200,0,.01],['sup','Maintenance & support',0,350,0]],
   ms:[12,'Web app MVP live','The first release is in your customers’ hands and the feedback loop begins.']},
 ecom:{g:'build',n:'E-commerce Store',d:'Shopify or custom storefront with an optimised two-step checkout.',setup:3200,mo:0,lift:.12,ramp:2,
   tiers:['Up to 100 products, standard theme','Up to 1,000 products, custom design','Headless store, multi-currency, B2B pricing'],
   ao:[['pay','Local payment gateways & COD',400,0,.02],['inst','Installments (BNPL)',300,0,.02],['care2','Store care plan',0,180,0]],
   ms:[7,'Store live','Your storefront launches with payments, shipping rules and conversion tracking.']},
 seo:{g:'search',n:'SEO',d:'Technical, on-page and content SEO for the searches your customers make.',setup:0,mo:600,lift:.20,ramp:6,
   tiers:['15 keywords · 2 articles a month','40 keywords · 6 articles a month','100+ keywords · 12 articles a month'],
   ao:[['local','Local SEO & Google Business Profile',0,200,.05,1],['links','Digital PR & link building',0,350,.04],['tech','Technical audit & fixes',500,0,.02]],
   ms:[13,'First page-one rankings','Priority keywords start reaching page one of Google.']},
 aiseo:{g:'search',n:'AI SEO (AISEO)',d:'Get your brand cited in Google AI Overviews, ChatGPT, Gemini and Perplexity answers.',setup:0,mo:450,lift:.08,ramp:5,
   tiers:['25 tracked AI prompts','75 prompts + entity building','200 prompts + AI-ready content hub'],
   ao:[['schema','Structured data & entity setup',400,0,.01],['llms','AI crawler optimisation (llms.txt)',250,0,.01],['mon','AI answer monitoring',0,90,0]],
   ms:[17,'Cited in AI answers','Your brand starts appearing in AI search answers for your target questions.']},
 brand:{g:'brand',n:'Brand Building',d:'Positioning, identity and guidelines that make you instantly recognisable.',setup:2400,mo:0,lift:.06,ramp:6,
   tiers:['Logo, colour palette and typography','Full identity system and brand guidelines','Strategy, naming, identity and packaging'],
   ao:[['strat','Brand strategy workshop',800,0,.02],['print','Print & signage collateral',900,0,.01],['film','60-second brand film',1500,0,.02]],
   ms:[3,'Brand identity approved','Positioning, logo and guidelines are signed off and rolled out across channels.']},
 content:{g:'brand',n:'Content Production',d:'Photo, video and copy produced every month by our in-house studio.',setup:0,mo:500,lift:.05,ramp:3,
   tiers:['8 posts + 2 reels a month','16 posts + 6 reels a month','30 posts + 12 reels + monthly shoot day'],
   ao:[['shoot','Quarterly photo shoot',0,250,.01],['ugc','UGC creator videos',0,400,.02]],
   ms:[3,'Content engine running','A month of on-brand content is approved and publishing on schedule.']},
 social:{g:'mkt',n:'Social Media Marketing',d:'Strategy, content calendar, community management and reporting for each channel you choose.',setup:0,mo:150,lift:0,ramp:3,scale:1,
   tiers:['3 posts a week per channel','5 posts a week + stories','Daily posting + 7-day community care'],
   aoLabel:'Channels',
   ao:[['fb','Facebook',0,220,.03],['ig','Instagram',0,260,.04],['li','LinkedIn',0,300,.03],['wa','WhatsApp Business',0,200,.04],['tt','TikTok',0,300,.04],['yt','YouTube',0,350,.03],['x','X (Twitter)',0,160,.01]],
   ms:[3,'Social channels relaunched','Your selected channels go live with the new content system and a posting calendar.']},
 ads:{g:'mkt',n:'Performance Ads',d:'Campaign setup and daily optimisation. Ad spend is paid to the platforms and set in the summary.',setup:300,mo:200,lift:0,ramp:1.5,scale:1,ads:1,
   tiers:['Up to 3 campaigns','Up to 8 campaigns + creative testing','Unlimited campaigns + dedicated media buyer'],
   aoLabel:'Platforms',
   ao:[['g','Google Search & Maps',0,250,.10],['meta','Meta (Facebook + Instagram)',0,250,.09],['tta','TikTok Ads',0,220,.05],['lia','LinkedIn Ads',0,280,.05],['yta','YouTube Ads',0,220,.04]],
   ms:[2,'First campaigns live','Ads are running with conversion tracking and daily budget optimisation.']},
 email:{g:'mkt',n:'Email & WhatsApp Automation',d:'Automated journeys that bring customers back: welcome, reminders, win-back and broadcasts.',setup:400,mo:250,lift:.05,ramp:2,
   tiers:['3 automated journeys','8 journeys + monthly campaigns','Full lifecycle + segmentation'],
   ao:[['wab','WhatsApp broadcast API',0,120,.02],['crm','CRM integration',500,0,.01]],
   ms:[5,'Automations switched on','Welcome, reminder and win-back journeys start running automatically.']},
 bot:{g:'sol',n:'AI Chatbot',d:'An AI assistant trained on your business that answers, books and sells 24/7.',setup:900,mo:350,lift:.07,ramp:2,
   tiers:['1 channel · 500 chats a month','3 channels · 3,000 chats a month','Unlimited chats + custom actions'],
   ao:[['wabot','WhatsApp channel',300,60,.02],['lang','Urdu & Arabic',250,0,.01],['act','Booking & payment actions',600,0,.02]],
   ms:[4,'AI assistant live','Your chatbot starts answering customers on the web and messaging channels.']},
 reportal:{g:'sol',n:'Real Estate Management Portal',d:'Listings, lead CRM, bookings, installments and owner reporting in one branded portal.',setup:2500,mo:499,lift:.10,ramp:3,
   tiers:['Up to 20 agents','Up to 100 agents + mobile app','Unlimited agents + developer portal'],
   ao:[['ins','Installment plans module',400,0,.01],['tenant','Tenant & lease management',500,80,.01]],
   ms:[6,'Portal live','Agents work leads and inventory from one branded portal.']},
 fuel:{g:'sol',n:'Fuel Station Operation Portal',d:'Tank, shift, credit and multi-site reporting for fuel retailers.',setup:2000,mo:399,lift:.03,ramp:3,
   tiers:['Up to 10 stations','Up to 50 stations','Unlimited stations + ERP sync'],
   ao:[['tab','Shift handover tablet app',600,0,0],['fleet','Fleet & credit accounts',400,60,.01]],
   ms:[8,'Stations connected','Every station reports tanks, shifts and cash to head office in real time.']}
};

/* Industry-specific services, defaults and recommendations */
const IND = {
 hotel:{n:'Hotels & Hospitality',v:240,b:300,m:45,vl:'Average booking value',vh:'Room revenue per stay',bl:'Direct bookings per month',bh:'Bookings that come to you directly',u:'bookings',ad:1500,
  niche:{
   hbook:{n:'Booking Engine Integration',d:'Commission-free direct booking on your website, synced with your channel manager.',setup:900,mo:90,lift:.10,ramp:2,ao:[['upsell','Room upgrades & add-on upsells',300,0,.02]],ms:[5,'Direct booking live','Guests can book on your site without paying OTA commission.']},
   ota:{n:'OTA Listing Optimisation',d:'Booking.com, Expedia and Agoda listings optimised for ranking and conversion.',setup:0,mo:300,lift:.07,ramp:2,loc:1,ao:[['rate','Rate parity monitoring',0,80,.01]],ms:[3,'OTA listings optimised','Photos, copy and settings updated across every travel platform.']},
   rep:{n:'Reputation Management',d:'Review generation and responses on Google and TripAdvisor.',setup:0,mo:220,lift:.06,ramp:4,loc:1,ao:[],ms:[8,'Review rating improving','New guest reviews flow in and every review receives a response.']},
   tour:{n:'360° Virtual Tour',d:'Immersive room and property tours for your site and Google Maps.',setup:700,mo:0,lift:.03,ramp:2,ao:[],ms:[4,'Virtual tour published','Guests explore rooms and facilities before they book.']}},
  rec:[['web',1,['ml']],['hbook',0,['upsell']],['seo',1,['local']],['aiseo',0,[]],['social',1,['ig','fb','tt']],['ads',1,['g','meta']],['ota',0,[]],['rep',0,[]],['bot',0,['wabot']]],
  why:{web:'Most hotel guests compare on mobile before booking. A fast site lifts direct bookings.',hbook:'Every direct booking saves 15–25% OTA commission.',seo:'“Hotel near…” searches convert at the highest rate in travel.',aiseo:'Travellers increasingly ask AI assistants where to stay.',social:'Instagram and TikTok drive destination discovery.',ads:'Google Hotel and Meta ads capture guests at the decision moment.',ota:'Better OTA ranking fills rooms on low-demand dates.',rep:'A rating jump from 4.2 to 4.6 can lift bookings noticeably.',bot:'Answer room, price and availability questions at any hour.'}},
 restaurant:{n:'Restaurants & Cafés',v:28,b:3000,m:30,vl:'Average order value',vh:'Per dine-in bill or delivery order',bl:'Orders per month',bh:'Dine-in + takeaway + delivery',u:'orders',ad:800,
  niche:{
   order:{n:'Online Ordering & QR Menu',d:'Commission-free ordering on your site plus QR menus for tables.',setup:700,mo:60,lift:.10,ramp:2,ao:[['loyal','Loyalty & rewards',300,40,.03]],ms:[4,'Online ordering live','Customers order directly from you without delivery-app commission.']},
   delivery:{n:'Delivery App Optimisation',d:'Menus, photos and promotions tuned on Foodpanda, Careem and Talabat.',setup:0,mo:250,lift:.09,ramp:2,loc:1,ao:[],ms:[3,'Delivery listings optimised','Your listings rank higher and convert more browsers into orders.']},
   resv:{n:'Table Reservations',d:'Online booking with reminders that cut no-shows.',setup:400,mo:40,lift:.04,ramp:2,ao:[],ms:[4,'Reservations online','Guests book tables online and get automatic reminders.']},
   food:{n:'Food Photography & Reels',d:'Monthly shoots that make your menu impossible to scroll past.',setup:0,mo:400,lift:.05,ramp:2,ao:[],ms:[3,'New menu imagery live','Fresh photos and reels across menus, maps and social.']}},
  rec:[['web',0,[]],['order',0,['loyal']],['seo',0,['local']],['social',1,['ig','fb','tt','wa']],['ads',0,['meta']],['delivery',0,[]],['food',0,[]]],
  why:{web:'A simple, fast site with menu, location and ordering is all most diners need.',order:'Direct orders keep the 20–30% that delivery apps charge.',seo:'“Food near me” and Maps searches are your highest-intent traffic.',social:'Food is discovered on Instagram, TikTok and WhatsApp groups.',ads:'Location-targeted Meta ads fill tables on slow weekdays.',delivery:'Higher ranking inside delivery apps means more orders.',food:'Better photos are one of the fastest ways to lift menu conversion.'}},
 realestate:{n:'Real Estate',v:4500,b:12,m:60,vl:'Commission per deal',vh:'Average earned per closed sale or lease',bl:'Deals closed per month',bh:'Sales and leases combined',u:'deals',ad:2500,
  niche:{
   syn:{n:'Listing Syndication',d:'Automatic posting to Zameen, Bayut and Property Finder with lead tracking.',setup:300,mo:280,lift:.08,ramp:2,ao:[],ms:[3,'Listings syndicated','Every listing publishes to the major portals from one place.']},
   launch:{n:'Project Launch Pages',d:'High-converting landing pages for each new project or development.',setup:900,mo:0,lift:.06,ramp:1,ao:[['brochure','Digital brochure & price sheet',400,0,.01]],ms:[4,'Launch pages live','Each project gets its own page built to capture qualified leads.']},
   vtour:{n:'3D Virtual Tours',d:'Matterport-style tours for show units and premium listings.',setup:1200,mo:0,lift:.04,ramp:2,ao:[],ms:[5,'3D tours published','Buyers walk through units before booking a visit.']}},
  rec:[['web',1,[]],['reportal',0,['ins']],['seo',1,['local']],['social',1,['fb','ig','li','yt']],['ads',1,['g','meta']],['syn',0,[]],['launch',0,[]],['bot',0,['wabot']]],
  why:{web:'Buyers judge credibility by your website before they call.',reportal:'Our portal cut lead response time by 97% for Northline Realty.',seo:'“Flats for sale in…” searches bring buyers ready to visit.',social:'Video walkthroughs on Facebook, Instagram and YouTube sell off-plan units.',ads:'Google and Meta lead ads generate qualified buyer enquiries.',syn:'Portals are where most buyers start their search.',launch:'Dedicated pages convert launch traffic into site visits.',bot:'Qualify buyers on WhatsApp instantly, day or night.'}},
 health:{n:'Healthcare & Clinics',v:380,b:220,m:50,vl:'Value of a new patient',vh:'First-year revenue per new patient',bl:'New patients per month',bh:'First-time patients across clinics',u:'new patients',ad:1200,
  niche:{
   appt:{n:'Online Appointment Booking',d:'Real-time booking synced with your clinic software, with SMS reminders.',setup:800,mo:80,lift:.11,ramp:2,ao:[['tele','Telehealth video consults',600,60,.03]],ms:[5,'Online booking live','Patients book appointments 24/7 and receive automatic reminders.']},
   doc:{n:'Doctor Profiles & Local SEO',d:'Optimised profiles for every doctor and clinic on Google and health directories.',setup:0,mo:350,lift:.09,ramp:4,loc:1,ao:[],ms:[9,'Doctors ranking locally','Doctor and clinic profiles rank for specialty searches in your city.']},
   prev:{n:'Patient Review Programme',d:'Automated, compliant review requests after every visit.',setup:0,mo:200,lift:.05,ramp:4,loc:1,ao:[],ms:[8,'Reviews growing','A steady flow of genuine patient reviews builds trust.']},
   forms:{n:'Secure Patient Forms',d:'Encrypted intake and consent forms that replace paper.',setup:600,mo:0,lift:.02,ramp:1,ao:[],ms:[4,'Digital intake live','Patients complete forms before they arrive.']}},
  rec:[['web',1,[]],['appt',0,[]],['seo',1,['local']],['aiseo',0,[]],['doc',0,[]],['social',0,['fb','ig']],['ads',0,['g']],['prev',0,[]],['bot',0,['lang']]],
  why:{web:'Patients choose providers that look modern and trustworthy.',appt:'Online booking was the biggest driver of Marigold Dental’s 3.4× growth.',seo:'Most new patients start with a “near me” search.',aiseo:'Patients now ask AI assistants for symptom and provider advice.',doc:'Patients pick a doctor, not just a clinic.',social:'Educational content builds trust before the first visit.',ads:'Google search ads capture urgent, high-intent patients.',prev:'Reviews are the top deciding factor in choosing a clinic.',bot:'Answer timing, fee and insurance questions instantly.'}},
 ecommerce:{n:'E-commerce & Retail',v:65,b:1500,m:40,vl:'Average order value',vh:'Per online order',bl:'Online orders per month',bh:'Across your store and marketplaces',u:'orders',ad:3000,
  niche:{
   feed:{n:'Google Shopping & Product Feeds',d:'Optimised product feeds for Google Shopping, Meta catalogues and marketplaces.',setup:400,mo:300,lift:.10,ramp:2,ao:[],ms:[3,'Product feeds live','Your products appear in Google Shopping and social catalogues.']},
   cart:{n:'Abandoned Cart Recovery',d:'Email, SMS and WhatsApp flows that bring shoppers back to checkout.',setup:600,mo:150,lift:.07,ramp:1,ao:[],ms:[4,'Cart recovery running','Abandoned carts trigger automatic reminders across channels.']},
   cro:{n:'Conversion Rate Optimisation',d:'Monthly A/B tests on product pages, cart and checkout.',setup:0,mo:450,lift:.08,ramp:4,ao:[],ms:[10,'First A/B test winners','Winning variants ship and lift conversion rate.']},
   inf:{n:'Influencer Seeding',d:'Product seeding and paid partnerships with niche creators.',setup:0,mo:600,lift:.06,ramp:3,ao:[],ms:[6,'Creator content live','Creators publish reviews and unboxings of your products.']}},
  rec:[['ecom',1,['pay']],['brand',0,[]],['seo',1,[]],['social',1,['ig','tt','fb']],['ads',1,['g','meta','tta']],['feed',0,[]],['cart',0,[]],['cro',0,[]],['email',0,['wab']]],
  why:{ecom:'A two-step checkout lifted Sable & Co’s conversion by 48%.',brand:'A distinct brand lets you charge more than marketplace sellers.',seo:'Category and product searches bring buyers at low cost.',social:'Instagram and TikTok are where shoppers discover new brands.',ads:'Shopping and Meta ads scale profitably with a strong feed.',feed:'Product feeds are the engine behind Shopping ads.',cart:'Around 7 in 10 carts are abandoned; recovery wins some back.',cro:'Small conversion gains compound across all traffic.',email:'Repeat customers are the cheapest revenue you will ever earn.'}},
 education:{n:'Education & Training',v:1200,b:55,m:55,vl:'Revenue per enrolment',vh:'Average fee per student, first year',bl:'Enrolments per month',bh:'New students across programmes',u:'enrolments',ad:1500,
  niche:{
   adm:{n:'Admissions CRM & Funnel',d:'Track every enquiry from first click to enrolment with automated follow-up.',setup:1200,mo:150,lift:.10,ramp:2,ao:[],ms:[5,'Admissions funnel live','Every enquiry is tracked and followed up automatically.']},
   open:{n:'Open Day Campaigns',d:'Event pages, ads and reminders that fill open days and webinars.',setup:0,mo:400,lift:.06,ramp:2,ao:[],ms:[6,'First open day filled','Registrations and attendance tracked against enrolments.']},
   ctour:{n:'Virtual Campus Tour',d:'Interactive campus tour for prospective students and parents.',setup:900,mo:0,lift:.03,ramp:2,ao:[],ms:[5,'Campus tour live','Families explore your campus from anywhere.']}},
  rec:[['web',1,[]],['adm',0,[]],['seo',1,[]],['social',1,['ig','fb','tt','yt']],['ads',0,['g','meta']],['open',0,[]],['bot',0,['wabot']]],
  why:{web:'Parents and students research programmes online first.',adm:'Fast follow-up is the biggest factor in converting enquiries.',seo:'Course and fee searches peak before every intake.',social:'Student stories on video build trust with parents.',ads:'Targeted ads before intake deadlines fill seats.',open:'Open-day attendees enrol at several times the normal rate.',bot:'Answer fee, eligibility and deadline questions instantly.'}},
 services:{n:'Professional Services',v:4000,b:14,m:60,vl:'Value of a new client',vh:'First-year fees per client',bl:'New clients per month',bh:'Signed engagements',u:'clients',ad:1500,
  niche:{
   lit:{n:'LinkedIn Thought Leadership',d:'Ghost-written posts and articles for your partners and leadership.',setup:0,mo:450,lift:.07,ramp:4,ao:[],ms:[8,'Leaders building audience','Partners publish weekly and inbound conversations start.']},
   lead:{n:'Lead Magnets & Webinars',d:'Guides, calculators and webinars that turn visitors into qualified leads.',setup:700,mo:150,lift:.07,ramp:2,ao:[],ms:[6,'First lead magnet live','Gated content captures qualified leads every week.']},
   crmsetup:{n:'CRM Setup & Sales Automation',d:'HubSpot or Zoho pipeline with automated follow-ups and reporting.',setup:900,mo:0,lift:.05,ramp:2,ao:[],ms:[4,'Pipeline automated','Every lead is tracked, scored and followed up on time.']}},
  rec:[['web',1,[]],['brand',1,['strat']],['seo',0,[]],['aiseo',0,[]],['social',0,['li']],['ads',0,['lia','g']],['lit',0,[]],['lead',0,[]],['crmsetup',0,[]]],
  why:{web:'Your website is where prospects decide whether you are credible.',brand:'Clear positioning lets you win on expertise, not price.',seo:'Buyers research firms on Google before shortlisting.',aiseo:'Decision-makers ask AI assistants to recommend firms.',social:'LinkedIn is where B2B buyers find advisors.',ads:'LinkedIn and Google ads reach decision-makers directly.',lit:'Partners with visible expertise win more referrals.',lead:'Useful content generates leads while you sleep.',crmsetup:'Most lost deals are simply never followed up.'}},
 other:{n:'Other / General Business',v:350,b:200,m:45,vl:'Average customer value',vh:'Revenue per new customer',bl:'New customers per month',bh:'Your current monthly average',u:'customers',ad:1200,
  niche:{},
  rec:[['web',1,[]],['brand',0,[]],['seo',0,['local']],['social',0,['fb','ig','wa']],['ads',0,['g','meta']],['bot',0,[]]],
  why:{web:'Your website is the foundation every other channel points to.',brand:'A consistent identity makes every campaign work harder.',seo:'Search brings customers who are already looking for you.',social:'Stay visible where your customers spend their time.',ads:'Ads give predictable, measurable demand from week one.',bot:'Instant answers stop enquiries going to competitors.'}}
};
const GROUPS=[['niche',''],['build','Websites & apps'],['search','Search visibility'],['brand','Brand'],['mkt','Marketing'],['sol','Ready-made solutions']];
const HALF=.5, LIFT_K=.42;
const $m=n=>'$'+Math.round(n).toLocaleString('en-US');
const $k=n=>Math.abs(n)>=1e6?'$'+(n/1e6).toFixed(2)+'M':Math.abs(n)>=1e4?'$'+Math.round(n/1e3)+'K':$m(n);
const S={ind:'hotel',sel:{},v:0,b:0,m:0,ad:0,mode:'sub',plan:'grow',buySel:{}};
const catalogue=()=>{const o={}; Object.entries(IND[S.ind].niche).forEach(([k,s])=>o[k]={...s,g:'niche'}); Object.entries(CORE).forEach(([k,s])=>o[k]=s); return o;};
let CAT=catalogue();
const P=n=>Math.round(n*HALF/5)*5; // halved, rounded to $5

function cost(id){const s=CAT[id], st=S.sel[id]; let setup=P(s.setup), mo=P(s.mo);
  s.ao.forEach(a=>{if(st.includes(a[0])){setup+=P(a[2]);mo+=P(a[3]);}}); return {setup,mo};}
function lift(id){const s=CAT[id], st=S.sel[id]; let l=s.lift; s.ao.forEach(a=>{if(st.includes(a[0])) l+=a[4]});
  if(s.ads) l*=Math.min(2.2,Math.max(.4,Math.sqrt((S.ad||0)/1500))); return Math.min(l*LIFT_K,.35);}
function baseTotals(){const ids=Object.keys(S.sel); let setup=0,mo=0; const items=ids.map(id=>{const c=cost(id);setup+=c.setup;mo+=c.mo;return {id,...c}});
  const n=ids.length, d=n>=6?.15:n>=4?.10:n>=3?.05:0;
  const hasAds=ids.some(id=>CAT[id].ads);
  return {items,n,d,setup,mo,save:(mo+setup)*d,moNet:mo*(1-d),setupNet:setup*(1-d),hasAds};}
function totals(){const T=baseTotals(); if(S.mode!=='sub') return T; const pl=PLANS.find(p=>p.id===S.plan);
  return {...T,d:0,save:0,moNet:pl.price,setupNet:0,plan:pl};}
function project(T,H=12){const rows=[];let cc=0,cg=0,be=null;
  const sv=Object.keys(S.sel).map(id=>({l:lift(id),start:CAT[id].ms[0]/4.33,ramp:CAT[id].ramp}));
  for(let t=1;t<=H;t++){let keep=1; sv.forEach(s=>{keep*=1-s.l*Math.max(0,Math.min(1,(t-s.start)/s.ramp))});
    const L=Math.min(.6,1-keep), extra=S.b*L, rev=extra*S.v, gp=rev*S.m/100;
    const c=T.moNet+(T.hasAds?S.ad:0)+(t===1?T.setupNet:0); cc+=c; cg+=gp; if(be===null&&cc>0&&cg>=cc) be=t;
    rows.push({t,extra,rev,gp,cc,cg});}
  return {rows,be};}
const roi=R=>{const r=R[R.length-1]; return r.cc?Math.round((r.cg-r.cc)/r.cc*100):0};
function minMonthly(){let m=Infinity; Object.values(CAT).forEach(s=>{let v=P(s.mo); if(s.scale&&s.ao.length) v+=Math.min(...s.ao.map(a=>P(a[3]))); if(v>0) m=Math.min(m,v)}); return m;}

const el=id=>document.getElementById(id);
el('pz-ind').innerHTML=Object.entries(IND).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('');

function priceText(s){const mo=P(s.mo)+(s.scale&&s.ao.length?Math.min(...s.ao.map(a=>P(a[3]))):0), su=P(s.setup);
  if(mo&&su) return `${$m(mo)}/mo<small>+ ${$m(su)} one-time</small>`;
  if(mo) return `${s.scale?'from ':''}${$m(mo)}/mo`;
  return `${$m(su)}<small>one-time</small>`;}
function item(id){const s=CAT[id], I=IND[S.ind], rec=I.rec.some(r=>r[0]===id);
  return `<div class="pi" data-id="${id}">
    <label class="pi-row"><input type="checkbox" data-svc="${id}" id="pzs-${id}"><span class="box"></span>
      <span class="pi-t"><b>${s.n}</b>${rec?'<span class="rec">Recommended</span>':''}<p>${s.d.replace(/ Ad spend is paid.*$/,' Ad budget is paid to the platforms.')}</p></span>
      <span class="pi-p" data-pp>${priceText(s)}</span></label>
    ${s.ao.length||I.why[id]?`<div class="pi-subs">${I.why[id]?`<p class="why">${I.why[id]}</p>`:''}
      ${s.ao.length?`<p class="lbl">${s.aoLabel?'Choose '+s.aoLabel.toLowerCase():'Optional extras'}</p>`+s.ao.map(a=>{const pr=[a[2]?'+'+$m(P(a[2])):'',a[3]?'+'+$m(P(a[3]))+'/mo':''].filter(Boolean).join(' ');
        return `<label class="pi-sub"><input type="checkbox" data-ao="${a[0]}" id="ao-${id}-${a[0]}"><span class="box"></span><span>${a[1]}</span><span class="pp">${pr}</span></label>`}).join(''):''}
      ${s.scale?`<p class="pi-warn" data-warn hidden>Pick at least one ${s.aoLabel==='Channels'?'channel':'platform'}.</p>`:''}
    </div>`:''}</div>`;}
function render(){const I=IND[S.ind];
  el('pz-groups').innerHTML=GROUPS.map(([g,name])=>{const ids=Object.keys(CAT).filter(id=>CAT[id].g===g); if(!ids.length) return '';
    return `<div class="pz-group"><h3>${g==='niche'?`<span class="niche">Made for ${I.n}</span>`:name}</h3>${ids.map(item).join('')}</div>`}).join('');
  Object.keys(S.sel).forEach(sync);}
function sync(id){const c=document.querySelector(`.pi[data-id="${id}"]`); if(!c) return; const st=S.sel[id], on=!!st;
  c.classList.toggle('on',on); c.querySelector('[data-svc]').checked=on;
  $$('[data-ao]',c).forEach(i=>i.checked=on&&st.includes(i.dataset.ao));
  const w=c.querySelector('[data-warn]'); if(w) w.hidden=!(on&&!st.length);
  const pp=c.querySelector('[data-pp]'); if(on){const k=cost(id); pp.innerHTML=k.mo&&k.setup?`${$m(k.mo)}/mo<small>+ ${$m(k.setup)} one-time</small>`:k.mo?`${$m(k.mo)}/mo`:`${$m(k.setup)}<small>one-time</small>`;} else pp.innerHTML=priceText(CAT[id]);}

function setIndustry(k){S.ind=k; CAT=catalogue(); const I=IND[k]; S.v=I.v; S.b=I.b; S.m=I.m; S.ad=I.ad;
  Object.keys(S.sel).forEach(id=>{if(!CAT[id]) delete S.sel[id]});
  el('pz-ind').value=k; el('pz-vl').textContent=I.vl; el('pz-bl').textContent=I.bl;
  el('pz-v').value=S.v; el('pz-b').value=S.b; el('pz-m').value=S.m; el('pz-ad').value=S.ad;
  el('pz-pv-name').placeholder=(TH[k]||TH.other).name; buildPlans(); if(S.mode==='sub') S.sel=clonePlan(); render(); update();}

function update(){const T=totals(), Pj=project(T), I=IND[S.ind]; renderPlans();
  const recIds=I.rec.map(r=>r[0]);
  el('pz-hint').innerHTML=`Not sure where to start? <button type="button" data-rec>Select the ${recIds.length} services we recommend for ${I.n.toLowerCase()}</button> (core services only, no extras).`;
  const items=T.items.map(x=>`<div class="sum-row"><span>${CAT[x.id].n}</span><span>${x.mo?$m(x.mo)+'/mo':$m(x.setup)}</span></div>`).join('');
  const next=T.n<3?3:T.n<4?4:T.n<6?6:0, nextPct={3:'5%',4:'10%',6:'15%'}[next];
  el('pz-sum').innerHTML = T.n ? `
    <div class="sum-total"><span class="lab">Your monthly total</span><b>${$m(T.moNet)}</b><span>${T.setupNet?'+ '+$m(T.setupNet)+' one-time setup':'No setup fee'}</span></div>
    <hr><div class="sum-items">${items}</div>
    ${T.d?`<div class="sum-row save"><span>Bundle discount (${T.d*100}%)</span><span>−${$m(T.save)}</span></div>`:''}
    ${next?`<p class="note">Add ${next-T.n} more service${next-T.n>1?'s':''} to save ${nextPct}.</p>`:''}
    <div class="sum-row big"><span>First year, all in</span><span>${$m(T.moNet*12+T.setupNet)}</span></div>
    <div class="sum-pay">${Pj.be?`Pays for itself in about <b>${Pj.be} month${Pj.be>1?'s':''}</b>.`:`Pays for itself after <b>month 12</b>.`}<br><span class="muted" style="font-size:13px">12-month return: ${roi(Pj.rows)}%</span></div>
    <button type="button" class="btn" data-sendplan>Send my plan <span class="arr">→</span></button>
    <p class="note">USD, excluding taxes.${T.hasAds?' Ad budget is paid separately to the platforms.':''}</p>`
   : `<div class="sum-total"><span class="lab">Plans start from</span><b>${$m(minMonthly())}</b><span>per month</span></div>
    <p class="sum-empty">Tick any service to build your plan. Bundle 3 or more and save up to 15%.</p>
    <button type="button" class="btn" disabled>Send my plan <span class="arr">→</span></button>`;
  el('pz-bar-t').textContent=T.n?$m(T.moNet)+'/mo':'From '+$m(minMonthly())+'/mo';
  el('pz-bar-s').textContent=T.n?`${T.n} service${T.n>1?'s':''}${T.setupNet?' · '+$m(T.setupNet)+' setup':''}`:'Tick services to build your plan';
  // ROI
  const R=Pj.rows, last=R[11];
  el('pz-roi-h').textContent=T.n?(Pj.be?`Your plan pays for itself in about ${Pj.be} months.`:'Your plan pays for itself after the first year.'):'Tick a service to see your expected return.';
  el('pz-kpis').innerHTML=T.n?`<div><b>+${Math.round(last.extra).toLocaleString()}</b><span>Extra ${I.u} a month after one year</span></div>
    <div><b>${$k(last.rev)}</b><span>Extra revenue a month after one year</span></div>
    <div><b class="${roi(R)>0?'g':''}">${roi(R)}%</b><span>Return on your investment in year one</span></div>`:'';
  renderPreview();
  // milestones
  const ms=[[1,'Kickoff','We review your business, agree goals and start work.',0]];
  Object.keys(S.sel).forEach(id=>ms.push([CAT[id].ms[0],CAT[id].ms[1],CAT[id].ms[2],0]));
  if(Pj.be) ms.push([Math.round(Pj.be*4.33),'Break-even','Profit from new customers has covered everything you’ve paid.',1]);
  ms.push([26,'Six months in',`Around +${Math.round(R[5].extra).toLocaleString()} ${I.u} a month.`,0]);
  ms.push([52,'One year in',`Around ${$k(R.reduce((a,b)=>a+b.rev,0))} extra revenue over the year.`,roi(R)>0?1:0]);
  ms.sort((a,b)=>a[0]-b[0]);
  const when=w=>w<=10?`Week ${w}`:`Month ${Math.round(w/4.33)}`;
  el('pz-ms').innerHTML=T.n?ms.map(m=>`<div class="m ${m[3]?'key':''}"><span class="w">${when(m[0])}</span><div><h4>${m[1]}</h4><p>${m[2]}</p></div></div>`).join(''):'<p class="muted" style="padding-top:16px">Your timeline appears here once you tick a service.</p>';
}
function niceMax(v){const p=Math.pow(10,Math.floor(Math.log10(v||1))),f=v/p; return (f<=1?1:f<=1.5?1.5:f<=2?2:f<=2.5?2.5:f<=5?5:10)*p;}
function chart(Pj){const W=760,H=260,pl=60,pr=16,pt=16,pb=30,R=Pj.rows,n=R.length;
  const ym=niceMax(Math.max(...R.map(r=>Math.max(r.cc,r.cg)),1)), x=t=>pl+(t-1)/(n-1)*(W-pl-pr), y=v=>pt+(1-v/ym)*(H-pt-pb);
  const line=k=>R.map(r=>`${x(r.t).toFixed(1)},${y(r[k]).toFixed(1)}`).join(' ');
  let be=''; if(Pj.be){const r=R[Pj.be-1]; be=`<line x1="${x(Pj.be)}" x2="${x(Pj.be)}" y1="${pt}" y2="${H-pb}" stroke="var(--good)" stroke-dasharray="4 4"/><circle cx="${x(Pj.be)}" cy="${y(r.cg)}" r="5.5" fill="var(--good)" stroke="var(--paper)" stroke-width="2"/><text x="${x(Pj.be)+(Pj.be>8?-8:8)}" y="${pt+10}" text-anchor="${Pj.be>8?'end':'start'}" style="fill:var(--good);font-weight:600">Break-even</text>`;}
  el('pz-chart').innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Money spent versus profit earned over 12 months">
    ${[0,.5,1].map(f=>`<line x1="${pl}" x2="${W-pr}" y1="${y(f*ym)}" y2="${y(f*ym)}" stroke="var(--line)"/><text x="${pl-10}" y="${y(f*ym)+4}" text-anchor="end">${$k(f*ym)}</text>`).join('')}
    ${R.map(r=>`<text x="${x(r.t)}" y="${H-8}" text-anchor="middle">${r.t===1?'Month 1':r.t}</text>`).join('')}
    <polyline points="${line('cc')}" fill="none" stroke="var(--muted)" stroke-width="2"/>
    <polyline points="${line('cg')}" fill="none" stroke="var(--accent)" stroke-width="2.6"/>${be}</svg>`;}

el('pz-ind').addEventListener('change',e=>setIndustry(e.target.value));
el('pz-groups').addEventListener('change',e=>{const t=e.target, c=t.closest('.pi'); if(!c) return; const id=c.dataset.id;
  if(t.dataset.svc){ if(t.checked) S.sel[id]=[]; else delete S.sel[id]; }
  else if(t.dataset.ao){ if(!S.sel[id]) S.sel[id]=[]; S.sel[id]=t.checked?[...S.sel[id],t.dataset.ao]:S.sel[id].filter(x=>x!==t.dataset.ao); }
  sync(id); update();});
[['pz-v','v'],['pz-b','b'],['pz-m','m'],['pz-ad','ad']].forEach(([i,k])=>el(i).addEventListener('input',e=>{const n=parseFloat(e.target.value); if(!(n>=0)) return; S[k]=k==='m'?Math.min(95,n):n; update();}));
document.addEventListener('click',e=>{
  if(e.target.closest('[data-rec]')){ IND[S.ind].rec.forEach(([id])=>{ if(CAT[id]&&!S.sel[id]) S.sel[id]=[]; }); Object.keys(CAT).forEach(sync); update(); }
  if(e.target.closest('#pz-bar-go')){ e.preventDefault(); el('pz-sum').scrollIntoView({behavior:reduce?'auto':'smooth'}); }
  if(e.target.closest('[data-sendplan]')) sendPlan();
});
let sumVis=false; new IntersectionObserver(es=>{sumVis=es[0].isIntersecting; el('pz-bar').hidden=sumVis||S.mode==='sub'}).observe(el('pz-sum'));
const NEED_MAP={web:'Web Development',webapp:'Web Development',ecom:'Web Development',seo:'SEO',aiseo:'SEO',bot:'AI Chatbot',reportal:'Real Estate Portal',fuel:'Fuel Station Portal'};
function sendPlan(){const T=totals(), I=IND[S.ind]; if(!T.n){el('pz-groups').scrollIntoView({behavior:'smooth'});return}
  const needs=new Set(Object.keys(S.sel).map(id=>NEED_MAP[id]||'Brand & Marketing'));
  $$('#needChips input').forEach(i=>i.checked=needs.has(i.value));
  const bi=T.moNet<2000?0:T.moNet<5000?1:T.moNet<15000?2:3; const b=el('bud-'+bi); if(b) b.checked=true;
  if(T.plan){ el('f-msg').value=`I'd like the ${T.plan.name} subscription (${I.n}): ${$m(T.plan.price)}/month, $0 upfront, 12-month minimum.\nIncludes: ${T.plan.list.join(', ')}`; location.hash='contact'; return; }
  el('f-msg').value=`My plan (${I.n}):\n${Object.keys(S.sel).map(id=>'• '+CAT[id].n+(S.sel[id].length?' — '+CAT[id].ao.filter(a=>S.sel[id].includes(a[0])).map(a=>a[1]).join(', '):'')).join('\n')}\nMonthly: ${$m(T.moNet)}${T.setupNet?' + '+$m(T.setupNet)+' one-time':''}`;
  location.hash='contact';}


/* ======================= SERVICE PREVIEWS ======================= */
const TH={
 hotel:{name:'Azure Bay Resort',tag:'Wake up to the sea.',c:'#0E5E6F',c2:'#F2C46D',bg:'#F6F1E8',cat:'Beach resort',hero:'Your sea-view escape starts here.',sub:'42 rooms, a lagoon pool and sunsets you will talk about for years.',cta:'Book your stay',
  items:[['Deluxe Sea View','$180 / night',0],['Lagoon Suite','$260 / night',1],['Garden Room','$140 / night',2]],
  q:'best beach resort for families nearby',ans:'stands out for families: sea-view rooms, a shallow lagoon pool and free breakfast. Guests rate it 4.8 for cleanliness and staff.',
  ph:[{bg:'linear-gradient(180deg,#F7D29C 0%,#F2A36B 44%,#5AA6B8 45%,#0E5E6F 100%)',s:['left:62%;top:20%;width:16%;aspect-ratio:1;border-radius:50%;background:#FFF1CF;box-shadow:0 0 3em #FFE2A8','left:0;right:0;top:52%;height:3%;background:rgba(255,255,255,.35)','left:8%;bottom:0;width:6%;height:38%;background:#2B4A3A;border-radius:40% 40% 0 0']},
      {bg:'linear-gradient(165deg,#D9F1F2 0%,#7FCFD8 45%,#2A97AA 100%)',s:['left:10%;right:10%;bottom:12%;height:30%;border-radius:1em;background:rgba(255,255,255,.28)','left:16%;bottom:30%;width:18%;height:3%;background:#fff;opacity:.7;border-radius:1em','right:12%;top:12%;width:22%;height:36%;background:#F6F1E8;border-radius:.6em .6em 0 0']},
      {bg:'linear-gradient(180deg,#EFE6D7 0 58%,#CDB894 58% 72%,#9C845F 72%)',s:['left:14%;width:40%;bottom:28%;height:16%;background:#fff;border-radius:.6em','left:18%;width:12%;bottom:40%;height:8%;background:#F2C46D;border-radius:.4em','right:12%;top:14%;width:26%;height:34%;background:#9FD3DB;border:.5em solid #fff']}],
  book:{t:'Check availability',f:[['Check-in','Fri, 14 Nov'],['Check-out','Sun, 16 Nov'],['Guests','2 adults · 1 child']],b:'Search rooms'},
  rev:['Sunset from the balcony was unreal. Staff remembered our names by day two.','Kids loved the lagoon pool. Breakfast spread was excellent.','Spotless rooms and a really calm vibe. Booking direct was easy.'],
  posts:['Golden hour, every hour.','Your table by the sea is ready.','Weekend escape: 20% off direct bookings'],chat:['Do you have a sea-view room this weekend?','Yes! A Deluxe Sea View is free Fri–Sun at $180/night with breakfast. Shall I hold it for you?']},
 restaurant:{name:'Ember & Salt',tag:'Wood-fired, every day.',c:'#A63D24',c2:'#F4C95D',bg:'#FBF3EA',cat:'Wood-fired kitchen',hero:'Fire-kissed food, made to share.',sub:'Neapolitan pizza, slow-smoked meats and natural wines in the heart of the city.',cta:'Order online',
  items:[['Margherita','$12',0],['Smoked Brisket','$18',1],['Truffle Fries','$7',2]],
  q:'best wood-fired pizza near me',ans:'is a local favourite for wood-fired pizza. Diners praise the 90-second Neapolitan bake and the smoked brisket. Open till midnight.',
  ph:[{bg:'radial-gradient(circle at 50% 55%,#F6D27A 0 20%,#E39A3B 21% 27%,#7A3A1E 28% 31%,transparent 32%),linear-gradient(135deg,#3B1F14,#1C0E09)',s:['left:42%;top:42%;width:6%;aspect-ratio:1;border-radius:50%;background:#C8331F','left:54%;top:56%;width:5%;aspect-ratio:1;border-radius:50%;background:#C8331F','left:46%;top:60%;width:4%;aspect-ratio:1;border-radius:50%;background:#3E7A2E']},
      {bg:'radial-gradient(ellipse at 50% 60%,#8A4A2B 0 26%,transparent 27%),radial-gradient(circle at 30% 30%,#F0D9A8 0 10%,transparent 11%),linear-gradient(160deg,#5B2A1A,#21110B)',s:['left:30%;right:30%;top:52%;height:4%;background:#C9763F;border-radius:1em','left:34%;right:34%;top:60%;height:4%;background:#B0612F;border-radius:1em']},
      {bg:'linear-gradient(180deg,#2A140C 0 46%,#A63D24 46% 48%,#4A2617 48%)',s:['left:14%;top:8%;width:5%;aspect-ratio:1;border-radius:50%;background:#FFD27A;box-shadow:0 0 2em #FFB84D','left:46%;top:12%;width:5%;aspect-ratio:1;border-radius:50%;background:#FFD27A;box-shadow:0 0 2em #FFB84D','left:78%;top:8%;width:5%;aspect-ratio:1;border-radius:50%;background:#FFD27A;box-shadow:0 0 2em #FFB84D','left:20%;right:20%;bottom:16%;height:20%;background:#6B3A22;border-radius:.6em']}],
  book:{t:'Order for pickup or delivery',f:[['Deliver to','Home · 2.1 km'],['When','ASAP · 25–30 min'],['Basket','Margherita, Truffle Fries']],b:'Checkout · $19'},
  rev:['Best crust in town, hands down. The brisket melts.','Booked a table online in seconds. Service was warm and fast.','Truffle fries are dangerous. We order every Friday now.'],
  posts:['90 seconds. 485°C. Perfection.','Friday night = pizza night','New: smoked brisket pizza'],chat:['Can I book a table for 4 tonight at 8?','Done! Table for 4 at 8:00 pm is confirmed. Want me to pre-order our sharing platter?']},
 realestate:{name:'Skyline Estates',tag:'Homes that move you.',c:'#1F3A5F',c2:'#C9A86A',bg:'#F4F2ED',cat:'Real estate agency',hero:'Find the home that fits your next chapter.',sub:'Verified listings, honest pricing and agents who answer within 15 minutes.',cta:'Book a viewing',
  items:[['3-bed apartment','$240,000',0],['Garden villa','$610,000',1],['Sky penthouse','$890,000',2]],
  q:'trusted real estate agency for new apartments',ans:'is highly rated for new-build apartments, with verified listings, transparent pricing and installment plans. Agents typically reply within 15 minutes.',
  ph:[{bg:'linear-gradient(180deg,#BFD6EA 0%,#E8EEF4 70%,#C9D3DC 70%)',s:['left:12%;width:20%;bottom:30%;height:52%;background:#1F3A5F','left:36%;width:16%;bottom:30%;height:66%;background:#2E5684','left:56%;width:24%;bottom:30%;height:40%;background:#C9A86A','left:14%;width:16%;bottom:40%;height:36%;background:repeating-linear-gradient(180deg,#9EC1E0 0 6%,transparent 6% 14%)']},
      {bg:'linear-gradient(180deg,#CFE3EE 0 55%,#8DB36B 55%)',s:['left:22%;right:22%;bottom:38%;height:26%;background:#F4F2ED;border-radius:.3em','left:18%;right:18%;bottom:62%;height:14%;background:#1F3A5F;clip-path:polygon(0 100%,50% 0,100% 100%)','left:44%;width:12%;bottom:38%;height:14%;background:#C9A86A']},
      {bg:'linear-gradient(180deg,#1F3A5F 0%,#3C6390 60%,#F4C67A 100%)',s:['left:10%;right:10%;bottom:0;height:34%;background:#0F1F33','left:16%;width:30%;bottom:34%;height:22%;background:rgba(255,255,255,.12);border:.3em solid rgba(255,255,255,.4)']}],
  book:{t:'Book a viewing',f:[['Property','Garden villa · 4 bed'],['Date','Sat, 15 Nov · 11:00 am'],['Agent','Assigned instantly']],b:'Confirm viewing'},
  rev:['They found us a villa in two weeks. Zero pressure, total honesty.','Viewing booked online and an agent called within minutes.','The installment plan was explained clearly. Smooth handover.'],
  posts:['Just listed: garden villa','Your weekend open house','5 questions to ask before buying'],chat:['Any 3-bed apartments under $250K?','Yes, 6 match. The best value is a 3-bed corner unit at $240K with a 3-year plan. Want to see it Saturday?']},
 health:{name:'Bloom Family Clinic',tag:'Care that listens.',c:'#2E7D6B',c2:'#F4A99A',bg:'#F1F7F4',cat:'Family clinic',hero:'Unhurried care for every age.',sub:'GPs, dentists and paediatricians under one roof. Same-day appointments, transparent fees.',cta:'Book appointment',
  items:[['General check-up','$40',0],['Dental cleaning','$60',1],['Child wellness visit','$45',2]],
  q:'family doctor with same-day appointments',ans:'offers same-day appointments with GPs, dentists and paediatricians. Patients highlight short waits and clear fees. Rated 4.9.',
  ph:[{bg:'linear-gradient(160deg,#E3F2EC,#BFE0D3)',s:['left:42%;top:26%;width:16%;height:48%;background:#2E7D6B;border-radius:.6em','left:26%;top:42%;width:48%;height:16%;background:#2E7D6B;border-radius:.6em']},
      {bg:'linear-gradient(180deg,#F7F3EE 0 62%,#DCE9E3 62%)',s:['left:16%;width:30%;bottom:20%;height:30%;background:#2E7D6B;border-radius:1em 1em .3em .3em','right:16%;width:22%;top:16%;height:30%;background:#fff;border-radius:.5em;box-shadow:0 .5em 1.5em rgba(0,0,0,.08)','right:22%;width:10%;top:24%;height:3%;background:#F4A99A;border-radius:1em']},
      {bg:'radial-gradient(circle at 70% 35%,#F4A99A 0 14%,transparent 15%),linear-gradient(160deg,#FDF6F2,#EAF4EF)',s:['left:20%;top:30%;width:26%;aspect-ratio:1;border-radius:50%;background:#2E7D6B;opacity:.9','left:24%;bottom:14%;width:18%;height:22%;background:#2E7D6B;border-radius:2em 2em .4em .4em;opacity:.7']}],
  book:{t:'Book an appointment',f:[['Service','General check-up'],['Doctor','Dr. Ayesha · GP'],['Time','Today · 4:30 pm']],b:'Confirm booking'},
  rev:['Dr. Ayesha actually listened. Booked online, seen in 10 minutes.','Clear fees up front and the kids love the paediatric room.','Reminder texts are so helpful. Best clinic experience we have had.'],
  posts:['Same-day appointments, every day','5 signs your child needs a check-up','Meet our new dental suite'],chat:['Can I see a GP today?','Yes. Dr. Ayesha has 4:30 pm free today. The check-up fee is $40. Shall I book it?']},
 ecommerce:{name:'Nook Living',tag:'Everyday things, beautifully made.',c:'#2D2A26',c2:'#E07A5F',bg:'#F6F1EA',cat:'Home goods store',hero:'Slow-made pieces for a calmer home.',sub:'Linen, ceramics and oak, made by small studios. Free delivery over $60.',cta:'Shop now',
  items:[['Linen throw','$59',0],['Ceramic vase','$34',1],['Oak serving tray','$42',2]],
  q:'handmade ceramic vase online',ans:'is a well-reviewed shop for handmade ceramics and linen. Customers mention careful packaging and fast delivery.',
  ph:[{bg:'linear-gradient(180deg,#E9DFD2 0 70%,#D4C3AE 70%)',s:['left:20%;right:20%;bottom:26%;height:34%;background:#C9B79F;border-radius:.6em','left:24%;right:24%;bottom:52%;height:10%;background:#E07A5F;border-radius:.4em']},
      {bg:'linear-gradient(180deg,#EFE8DF,#E2D7C8)',s:['left:38%;width:24%;bottom:16%;height:50%;background:#E07A5F;border-radius:40% 40% 30% 30%','left:44%;width:12%;bottom:62%;height:10%;background:#C9634A;border-radius:.4em']},
      {bg:'linear-gradient(180deg,#F3EEE7 0 64%,#CDBFA9 64%)',s:['left:18%;right:18%;bottom:30%;height:10%;background:#8B6B4A;border-radius:.6em','left:28%;width:10%;bottom:40%;height:14%;background:#fff;border-radius:.3em','left:46%;width:10%;bottom:40%;height:10%;background:#E07A5F;border-radius:50%']}],
  book:{t:'Your basket',f:[['Ceramic vase · Terracotta','$34'],['Linen throw · Sand','$59'],['Delivery','Free']],b:'Checkout · $93'},
  rev:['Packaging was beautiful and the vase is even better in person.','Arrived in two days. The linen throw is so soft.','Lovely small-batch pieces. Already ordered again.'],
  posts:['Made slowly, loved for years','New in: terracotta collection','Styled by you: #NookAtHome'],chat:['Is the linen throw machine washable?','Yes, wash cold on a gentle cycle. It softens with every wash. Want it in Sand or Olive?']},
 education:{name:'Brightpath Academy',tag:'Learn what is next.',c:'#3B3C9C',c2:'#FFC857',bg:'#F4F4FB',cat:'Training academy',hero:'Career-ready skills in 16 weeks.',sub:'Live classes, real projects and mentors from top companies. Weekend and evening batches.',cta:'Apply now',
  items:[['Data Science','$900',0],['UX Design','$750',1],['Digital Marketing','$600',2]],
  q:'best data science course with job support',ans:'runs a 16-week data science programme with live mentors and placement support. Alumni report strong job outcomes.',
  ph:[{bg:'linear-gradient(160deg,#3B3C9C,#6A6CE0)',s:['left:14%;top:20%;width:40%;height:46%;background:#fff;border-radius:.6em','left:18%;top:28%;width:28%;height:4%;background:#FFC857;border-radius:1em','left:18%;top:38%;width:20%;height:3%;background:#C9CAF0;border-radius:1em','right:14%;bottom:16%;width:22%;aspect-ratio:1;border-radius:50%;background:#FFC857']},
      {bg:'linear-gradient(180deg,#F4F4FB 0 60%,#DADBF4 60%)',s:['left:20%;width:22%;bottom:30%;height:28%;background:#3B3C9C;border-radius:1em 1em .3em .3em','left:50%;width:22%;bottom:30%;height:24%;background:#FFC857;border-radius:1em 1em .3em .3em']},
      {bg:'radial-gradient(circle at 30% 40%,#FFC857 0 16%,transparent 17%),linear-gradient(160deg,#EDEDFA,#CFD0F3)',s:['left:52%;top:24%;width:30%;height:44%;background:#3B3C9C;border-radius:.6em']}],
  book:{t:'Apply in 3 steps',f:[['Programme','Data Science · Jan intake'],['Batch','Weekend · Sat & Sun'],['Scholarship','Up to 30% available']],b:'Start application'},
  rev:['Landed a data analyst role two weeks after graduating.','Mentors were from real companies. The projects made my portfolio.','Weekend batch worked perfectly with my job.'],
  posts:['From zero to data analyst','Meet our mentors','Open day this Saturday'],chat:['Is there a weekend batch for UX Design?','Yes! The next weekend batch starts 10 Jan. Fee is $750 with a 20% early-bird scholarship. Want the brochure?']},
 services:{name:'Northstar Advisory',tag:'Clear advice. Better decisions.',c:'#16324F',c2:'#7FB7BE',bg:'#F2F4F6',cat:'Advisory firm',hero:'Financial clarity for growing businesses.',sub:'Tax, audit and growth advisory from senior partners who answer their phone.',cta:'Book a consultation',
  items:[['Tax planning','From $400',0],['Audit & assurance','From $1,200',1],['Growth advisory','From $900',2]],
  q:'business tax advisor for startups',ans:'is recommended for startup tax and audit work. Clients value partner-level attention and fixed-fee pricing.',
  ph:[{bg:'linear-gradient(160deg,#16324F,#2C5A86)',s:['left:16%;right:16%;bottom:18%;height:40%;background:rgba(255,255,255,.08);border-radius:.6em','left:22%;width:8%;bottom:22%;height:16%;background:#7FB7BE','left:34%;width:8%;bottom:22%;height:24%;background:#7FB7BE','left:46%;width:8%;bottom:22%;height:30%;background:#7FB7BE','left:58%;width:8%;bottom:22%;height:20%;background:#7FB7BE']},
      {bg:'linear-gradient(180deg,#E9EEF2 0 64%,#C8D3DC 64%)',s:['left:20%;right:20%;bottom:30%;height:12%;background:#16324F;border-radius:.4em','left:30%;width:12%;bottom:42%;height:22%;background:#fff;border-radius:.3em','left:58%;width:14%;bottom:42%;height:12%;background:#7FB7BE;border-radius:.3em']},
      {bg:'radial-gradient(circle at 70% 30%,#7FB7BE 0 14%,transparent 15%),linear-gradient(160deg,#F2F4F6,#DCE3E9)',s:['left:18%;top:26%;width:34%;height:46%;background:#16324F;border-radius:.6em']}],
  book:{t:'Book a consultation',f:[['Topic','Tax planning'],['Partner','Senior partner'],['Time','Tue · 10:00 am · 30 min']],b:'Confirm consultation'},
  rev:['Saved us more in tax than their fee. Clear and fast.','A partner actually returns your call. Rare and valuable.','Fixed fees, no surprises. Highly recommend.'],
  posts:['3 tax moves before year-end','Why fixed fees beat hourly','Client story: scaling to 50 staff'],chat:['Do you work with early-stage startups?','Yes, around half our clients are startups. A first 30-minute consultation is free. Shall I book one?']},
 other:{name:'Your Brand Co.',tag:'Made for you.',c:'#2F6FEB',c2:'#FFB21E',bg:'#F3F4F6',cat:'Local business',hero:'Everything you need, done properly.',sub:'Friendly service, fair prices and a team that shows up on time.',cta:'Get started',
  items:[['Signature service','$49',0],['Premium package','$129',1],['Membership','$19 / month',2]],
  q:'trusted local business near me',ans:'is well reviewed for reliable service and fair pricing. Customers highlight quick responses.',
  ph:[{bg:'linear-gradient(160deg,#2F6FEB,#6EA2FB)',s:['left:30%;top:24%;width:40%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.18)','left:42%;top:38%;width:16%;aspect-ratio:1;border-radius:50%;background:#FFB21E']},
      {bg:'linear-gradient(180deg,#F3F4F6 0 60%,#DADDE4 60%)',s:['left:20%;right:20%;bottom:28%;height:26%;background:#2F6FEB;border-radius:.6em']},
      {bg:'radial-gradient(circle at 30% 40%,#FFB21E 0 16%,transparent 17%),linear-gradient(160deg,#E2ECFD,#C6D9FB)',s:['left:50%;top:24%;width:30%;height:44%;background:#2F6FEB;border-radius:.6em']}],
  book:{t:'Book a slot',f:[['Service','Signature service'],['Date','Thu, 13 Nov'],['Time','2:00 pm']],b:'Confirm'},
  rev:['Quick, friendly and exactly what they promised.','Booking online took a minute. Great experience.','Fair prices and real people. Will be back.'],
  posts:['Meet the team','What our customers say','This week only: free consultation'],chat:['Are you open on Sunday?','Yes, 10 am to 6 pm. Would you like to book a slot?']}
};
const KIND={brand:'brand',social:'social',web:'web',ecom:'shop',webapp:'portal',reportal:'portal',fuel:'portal',crmsetup:'portal',seo:'search',doc:'search',aiseo:'ai',ads:'ads',content:'content',food:'content',inf:'content',email:'email',cart:'email',bot:'bot',
  hbook:'booking',resv:'booking',appt:'booking',order:'booking',adm:'booking',lead:'booking',forms:'booking',rep:'reviews',prev:'reviews',ota:'listing',syn:'listing',delivery:'listing',feed:'listing',tour:'tour',vtour:'tour',ctour:'tour',launch:'web',open:'web',cro:'shop',lit:'social'};
const KNAME={brand:['Brand identity','Your logo, colours and type, and how they show up in the real world.'],social:['Social media','Your managed pages, posting on-brand content every week.'],web:['Website','Your new website, built to turn visitors into customers.'],shop:['Online store','Your storefront with a fast, two-step checkout.'],portal:['Customer portal','A branded app where customers and staff manage everything.'],search:['Google search','Where customers find you when they search on Google.'],ai:['AI search','How AI assistants like ChatGPT and Gemini recommend you.'],ads:['Ads','Your ads, in front of the right people at the right moment.'],content:['Content','Reels and posts produced by our studio every month.'],email:['Email & WhatsApp','Automatic messages that bring customers back.'],bot:['AI chatbot','Your assistant answering customers instantly, 24/7.'],booking:['Online booking','Customers book or order with you directly, in seconds.'],reviews:['Reviews','A steady flow of 5-star reviews on Google.'],listing:['Marketplace listings','Your listings, optimised to win on the platforms customers use.'],tour:['Virtual tour','Let customers walk around before they visit.']};
const ORDER=['brand','web','shop','social','content','ads','search','ai','booking','listing','reviews','bot','email','portal','tour'];
let pvKind=null, pvName='';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T0=()=>{const t=TH[S.ind]||TH.other; const name=pvName.trim()||t.name; const ini=name.split(/\s+/).filter(w=>/[A-Za-z0-9]/.test(w[0])&&!/^(&|and|the|of)$/i.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join('')||'B'; return {...t,name:esc(name),ini,handle:name.toLowerCase().replace(/[^a-z0-9]+/g,'')||'yourbrand'};};
const photo=(t,i,extra='')=>{const p=t.ph[i%3]; return `<div style="position:relative;overflow:hidden;background:${p.bg};${extra}">${p.s.map(s=>`<i style="position:absolute;${s}"></i>`).join('')}</div>`;};
const logo=(t,size,inv)=>`<span style="display:inline-grid;place-items:center;width:${size}em;height:${size}em;border-radius:30%;background:${inv?'#fff':t.c};color:${inv?t.c:'#fff'};flex:none;box-shadow:inset 0 0 0 ${size*.06}em ${inv?t.c:t.c2}"><span style="font:700 ${size*.4}em/1 var(--f-display);font-stretch:118%;letter-spacing:-.04em">${t.ini}</span></span>`;
const word=(t,sz,col)=>`<span style="font:650 ${sz}em/1 var(--f-display);font-stretch:118%;letter-spacing:-.035em;color:${col||'#111'}">${t.name}</span>`;
const phone=(inner,w=27)=>`<div style="width:${w}em;aspect-ratio:9/19;border-radius:3.6em;background:#0E0F12;padding:.7em;box-shadow:0 2.4em 4em -1.6em rgba(0,0,0,.45);flex:none"><div style="position:relative;width:100%;height:100%;border-radius:3em;overflow:hidden;background:#fff;color:#111">${inner}<i style="position:absolute;left:50%;top:.8em;width:28%;height:1.9em;border-radius:1em;background:#0E0F12;transform:translateX(-50%)"></i></div></div>`;
const browser=(url,inner,bg='#fff')=>`<div style="border-radius:1.4em;overflow:hidden;background:${bg};box-shadow:0 3em 6em -2.4em rgba(0,0,0,.35)"><div style="display:flex;align-items:center;gap:.5em;padding:.9em 1.2em;background:#ECEEF1"><i style="width:.9em;height:.9em;border-radius:50%;background:#FF6159"></i><i style="width:.9em;height:.9em;border-radius:50%;background:#FFBD2E"></i><i style="width:.9em;height:.9em;border-radius:50%;background:#28C941"></i><span style="margin-left:1.4em;flex:1;max-width:48%;background:#fff;border-radius:.5em;padding:.35em .9em;font:500 1em/1.2 var(--f-mono);color:#777">${url}</span></div>${inner}</div>`;
const star=n=>'<span style="color:#F5A524;letter-spacing:.05em">'+'★'.repeat(n)+'</span>';

const PV={
 brand:t=>`<div style="display:grid;grid-template-columns:1.25fr 1fr 1fr;grid-template-rows:22em 17em;gap:1.4em">
   <div style="grid-row:1/3;background:${t.c};border-radius:1.6em;color:#fff;padding:3em;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden">
     <i style="position:absolute;right:-12em;top:-12em;width:32em;height:32em;border-radius:50%;border:3em solid ${t.c2};opacity:.25"></i>
     <span style="font:500 1.1em/1 var(--f-mono);letter-spacing:.16em;opacity:.7">PRIMARY LOGO</span>
     <div style="display:flex;align-items:center;gap:1.4em">${logo(t,8,1)}<div>${word(t,3.6,'#fff')}<div style="margin-top:.6em;font-size:1.5em;opacity:.8">${t.tag}</div></div></div>
     <div style="display:flex;gap:2em;font:500 1.05em/1 var(--f-mono);opacity:.75"><span>${t.cat.toUpperCase()}</span><span>EST. 2026</span></div>
   </div>
   <div style="background:#fff;border-radius:1.6em;padding:2.2em;display:flex;flex-direction:column;gap:1.2em">
     <span style="font:500 1.05em/1 var(--f-mono);letter-spacing:.14em;color:#888">COLOUR PALETTE</span>
     <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.7em;flex:1">${[t.c,t.c2,t.bg,'#141414'].map(h=>`<div style="display:flex;flex-direction:column;gap:.5em"><i style="flex:1;border-radius:.8em;background:${h};box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)"></i><span style="font:500 .95em/1 var(--f-mono);color:#666">${h.toUpperCase()}</span></div>`).join('')}</div>
   </div>
   <div style="background:${t.bg};border-radius:1.6em;padding:2.2em;display:flex;flex-direction:column;justify-content:space-between">
     <span style="font:500 1.05em/1 var(--f-mono);letter-spacing:.14em;color:#888">TYPOGRAPHY</span>
     <div style="font:650 7em/1 var(--f-display);font-stretch:120%;letter-spacing:-.05em;color:${t.c}">Aa</div>
     <div style="font-size:1.2em;color:#555">Archivo Expanded · headlines<br>Instrument Sans · body</div>
   </div>
   <div style="background:#E7E3DC;border-radius:1.6em;display:grid;place-items:center;overflow:hidden;position:relative">
     <div style="width:66%;aspect-ratio:1.75;background:#fff;border-radius:.8em;box-shadow:0 1.4em 2.4em -1em rgba(0,0,0,.35);transform:rotate(-7deg) translate(-8%,6%);padding:1.4em;display:flex;flex-direction:column;justify-content:space-between">${logo(t,3)}<div><b style="font-size:1.2em">Sara Malik</b><div style="font-size:.95em;color:#777">Guest Experience · ${t.name}</div></div></div>
     <div style="position:absolute;width:66%;aspect-ratio:1.75;background:${t.c};border-radius:.8em;box-shadow:0 1.4em 2.4em -1em rgba(0,0,0,.35);transform:rotate(5deg) translate(22%,-22%);display:grid;place-items:center">${word(t,1.7,'#fff')}</div>
   </div>
   <div style="background:${t.c2};border-radius:1.6em;display:flex;align-items:center;justify-content:center;gap:2em;overflow:hidden">
     <div style="width:12em;height:15em;background:${t.bg};border-radius:.4em 0 .4em .4em;position:relative;box-shadow:0 1.4em 2em -1em rgba(0,0,0,.3);display:grid;place-items:center"><i style="position:absolute;top:-3em;left:3em;width:6em;height:4em;border:.5em solid ${t.c};border-bottom:0;border-radius:3em 3em 0 0"></i>${logo(t,4.4)}</div>
     <div style="display:flex;flex-direction:column;gap:1em;align-items:center">${logo(t,5.4)}<span style="font:600 1em/1 var(--f-mono);color:#222">APP ICON</span></div>
   </div>
 </div>`,

 social:(t,chs)=>{
  const sel=chs||(S.sel.social||[]).concat(S.sel.lit?['li']:[]); const ch=(sel.length?sel:['ig','fb','li']).filter((v,i,a)=>a.indexOf(v)===i).slice(0,3);
  const ig=()=>phone(`<div style="padding:3.6em 1.4em 1em;display:flex;justify-content:space-between;align-items:center"><b style="font-size:1.4em">${t.handle}</b><span style="font-size:1.4em">☰</span></div>
    <div style="display:flex;align-items:center;gap:1.4em;padding:0 1.4em"><span style="padding:.25em;border-radius:50%;background:conic-gradient(${t.c2},${t.c},${t.c2})"><span style="display:block;padding:.2em;border-radius:50%;background:#fff">${logo(t,6)}</span></span>
      <div style="display:flex;gap:1.6em;text-align:center">${[['486','posts'],[t.fol||'48.2K','followers'],['312','following']].map(s=>`<div><b style="font-size:1.3em">${s[0]}</b><div style="font-size:1em;color:#666">${s[1]}</div></div>`).join('')}</div></div>
    <div style="padding:1em 1.4em 0;font-size:1.1em;line-height:1.35"><b>${t.name}</b><div style="color:#555">${t.cat} · ${t.tag}</div><div style="color:${t.c};font-weight:600">${t.cta} ↓</div></div>
    <div style="display:flex;gap:.6em;padding:1em 1.4em"><span style="flex:1;text-align:center;background:${t.c};color:#fff;border-radius:.6em;padding:.6em;font-weight:600">Follow</span><span style="flex:1;text-align:center;background:#EFEFEF;border-radius:.6em;padding:.6em;font-weight:600">Message</span></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.2em">${[0,'p0',1,2,'p1',0,'p2',1,2].map((x,i)=>typeof x==='number'?photo(t,x,'aspect-ratio:1'):`<div style="aspect-ratio:1;background:${i%2?t.c2:t.c};color:${i%2?'#111':'#fff'};padding:.8em;display:flex;align-items:flex-end;font:650 1.15em/1.05 var(--f-display);font-stretch:112%">${t.posts[+x[1]]}</div>`).join('')}</div>`);
  const fb=()=>phone(`<div style="height:13em;position:relative">${photo(t,0,'position:absolute;inset:0')}</div>
    <div style="padding:0 1.4em;margin-top:-3.4em;position:relative"><span style="display:inline-block;padding:.35em;background:#fff;border-radius:34%">${logo(t,6.4)}</span>
      <div style="font:700 1.6em/1.1 var(--f-body);margin-top:.4em">${t.name}</div><div style="color:#65676B;font-size:1.05em">${t.cat} · 4.9 ${star(5)} (2.1K)</div>
      <div style="display:flex;gap:.6em;margin-top:1em"><span style="flex:1.4;text-align:center;background:#1877F2;color:#fff;border-radius:.6em;padding:.65em;font-weight:600">${t.cta}</span><span style="flex:1;text-align:center;background:#E4E6EB;border-radius:.6em;padding:.65em;font-weight:600">Message</span></div></div>
    <div style="margin:1.2em .8em 0;border-top:.6em solid #F0F2F5;padding-top:1em"><div style="display:flex;gap:.7em;align-items:center;padding:0 .6em">${logo(t,3)}<div><b style="font-size:1.05em">${t.name}</b><div style="font-size:.9em;color:#65676B">2 h · 🌐</div></div></div>
      <div style="padding:.8em .6em;font-size:1.1em">${t.posts[2]} ✨</div>${photo(t,1,'aspect-ratio:1.4;border-radius:.4em')}
      <div style="display:flex;justify-content:space-between;color:#65676B;padding:.8em .6em;font-size:1em"><span>👍❤️ 1.4K</span><span>212 comments</span></div></div>`);
  const li=()=>phone(`<div style="background:#F4F2EE;height:100%"><div style="height:9em;position:relative;background:${t.c}"><i style="position:absolute;right:-4em;top:-4em;width:14em;height:14em;border-radius:50%;border:2em solid ${t.c2};opacity:.35"></i></div>
    <div style="background:#fff;padding:0 1.4em 1.2em;margin-bottom:.6em"><span style="display:inline-block;margin-top:-3em;padding:.3em;background:#fff;border-radius:.6em">${logo(t,6)}</span>
      <div style="font:700 1.5em/1.15 var(--f-body);margin-top:.4em">${t.name}</div><div style="font-size:1.05em;color:#555">${t.tag}</div><div style="font-size:.95em;color:#777;margin-top:.3em">${t.cat} · 18.6K followers</div>
      <div style="display:flex;gap:.6em;margin-top:1em"><span style="background:#0A66C2;color:#fff;border-radius:2em;padding:.5em 1.2em;font-weight:600">+ Follow</span><span style="border:1px solid #0A66C2;color:#0A66C2;border-radius:2em;padding:.5em 1.2em;font-weight:600">Visit website</span></div></div>
    <div style="background:#fff;padding:1.2em 1.4em"><div style="display:flex;gap:.7em;align-items:center">${logo(t,3)}<div><b style="font-size:1.05em">${t.name}</b><div style="font-size:.9em;color:#777">18,604 followers · 1d</div></div></div>
      <p style="font-size:1.1em;margin:.8em 0;line-height:1.4">We are proud to share our latest milestone. ${t.posts[1]} 🎉</p>${photo(t,2,'aspect-ratio:1.6;border-radius:.4em')}
      <div style="font-size:.95em;color:#777;margin-top:.7em">👍💡 846 · 64 comments</div></div></div>`);
  const wa=()=>phone(`<div style="background:#075E54;color:#fff;padding:3.4em 1.2em 1em;display:flex;align-items:center;gap:.8em">${logo(t,3.2,1)}<div><b style="font-size:1.2em">${t.name}</b><div style="font-size:.9em;opacity:.8">Business account · online</div></div></div>
    <div style="background:#ECE5DD;height:100%;padding:1.2em;display:flex;flex-direction:column;gap:.8em;font-size:1.1em">
      <div style="align-self:center;background:#FFF5C4;font-size:.85em;padding:.4em .8em;border-radius:.5em;color:#555">Messages are end-to-end encrypted</div>
      <div style="background:#fff;border-radius:.2em 1em 1em 1em;padding:.5em;max-width:88%">${photo(t,0,'aspect-ratio:1.6;border-radius:.6em')}<div style="padding:.5em .3em">Hi! 👋 ${t.posts[2]}. Reply <b>YES</b> to reserve.</div></div>
      <div style="align-self:flex-end;background:#DCF8C6;border-radius:1em .2em 1em 1em;padding:.6em .8em;max-width:80%">${t.chat[0]}</div>
      <div style="background:#fff;border-radius:.2em 1em 1em 1em;padding:.6em .8em;max-width:85%">${t.chat[1]}</div>
      <div style="display:flex;gap:.5em;flex-wrap:wrap">${['View catalogue','Book now'].map(x=>`<span style="background:#fff;color:#128C7E;border-radius:2em;padding:.5em 1em;font-weight:600">${x}</span>`).join('')}</div></div>`);
  const tt=()=>phone(`<div style="position:absolute;inset:0">${photo(t,0,'position:absolute;inset:0')}<div style="position:absolute;inset:0;background:linear-gradient(transparent 50%,rgba(0,0,0,.7))"></div></div>
    <div style="position:absolute;top:3.6em;left:0;right:0;text-align:center;color:#fff;font-weight:600;font-size:1.15em">Following &nbsp; <u>For You</u></div>
    <div style="position:absolute;left:1.4em;right:5em;top:38%;color:#fff;font:700 2.4em/1.05 var(--f-display);font-stretch:112%;text-shadow:0 .1em .4em rgba(0,0,0,.4)">${t.posts[0]}</div>
    <div style="position:absolute;right:1em;bottom:9em;display:flex;flex-direction:column;gap:1.4em;align-items:center;color:#fff;font-size:1em;text-align:center">${logo(t,3.6)}<div>❤️<br>128K</div><div>💬<br>2,410</div><div>↗<br>9,880</div></div>
    <div style="position:absolute;left:1.4em;right:5em;bottom:3em;color:#fff;font-size:1.05em"><b>@${t.handle}</b><div>${t.tag} #${t.cat.replace(/\s/g,'').toLowerCase()} ✨</div><div style="opacity:.8">♫ original sound · ${t.name}</div></div>`);
  const yt=()=>phone(`<div style="padding:3.4em 1.2em 1em;display:flex;align-items:center;gap:.4em"><span style="background:#FF0000;color:#fff;border-radius:.4em;padding:.1em .5em;font-weight:700">▶</span><b style="font-size:1.3em">YouTube</b></div>
    <div style="height:8em;background:${t.c}"></div><div style="padding:1em 1.2em;display:flex;gap:1em;align-items:center">${logo(t,5)}<div><b style="font-size:1.4em">${t.name}</b><div style="color:#666;font-size:1em">@${t.handle} · 24.3K subscribers</div></div></div>
    <div style="margin:0 1.2em;background:#111;color:#fff;border-radius:2em;text-align:center;padding:.6em;font-weight:600">Subscribe</div>
    ${[0,1,2].map(i=>`<div style="display:flex;gap:.8em;padding:1em 1.2em 0">${photo(t,i,'width:44%;aspect-ratio:16/9;border-radius:.6em;flex:none')}<div><b style="font-size:1.05em;line-height:1.2;display:block">${t.posts[i]}</b><span style="color:#777;font-size:.9em">${['42K','18K','96K'][i]} views</span></div></div>`).join('')}`);
  const x=()=>phone(`<div style="padding:3.6em 1.4em 1em;font-weight:800;font-size:1.6em;text-align:center">𝕏</div>${[0,1].map(i=>`<div style="display:flex;gap:.8em;padding:1em 1.4em;border-top:1px solid #eee">${logo(t,3.4)}<div style="flex:1"><b>${t.name}</b> <span style="color:#777">@${t.handle} · ${i?'5h':'1h'}</span><p style="margin:.4em 0;font-size:1.1em">${t.posts[i]}</p>${photo(t,i,'aspect-ratio:1.7;border-radius:1em')}<div style="display:flex;justify-content:space-between;color:#777;margin-top:.6em;font-size:.95em"><span>💬 48</span><span>🔁 210</span><span>♥ 1.8K</span></div></div></div>`).join('')}`);
  const map={ig,fb,li,wa,tt,yt,x};
  return `<div style="display:flex;justify-content:center;gap:3em;flex-wrap:nowrap">${ch.map(c=>map[c]()).join('')}</div>`;},

 web:t=>browser(t.handle+'.com',`<div style="background:${t.bg};padding:2em 3.4em 3em">
   <div style="display:flex;justify-content:space-between;align-items:center"><div style="display:flex;align-items:center;gap:.8em">${logo(t,3.4)}${word(t,1.6)}</div><div style="display:flex;gap:2.4em;color:#555;font-size:1.15em"><span>About</span><span>${t.items[0][0].split(' ')[0]}s</span><span>Gallery</span><span>Contact</span></div><span style="background:${t.c};color:#fff;padding:.8em 1.6em;border-radius:2em;font-weight:600;font-size:1.1em">${t.cta}</span></div>
   <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:3.4em;margin-top:2.6em;align-items:center">
     <div><span style="font:500 1em/1 var(--f-mono);letter-spacing:.16em;color:${t.c}">${t.cat.toUpperCase()}</span>
       <div style="font:650 4.6em/.98 var(--f-display);font-stretch:118%;letter-spacing:-.045em;margin-top:.3em;color:#111">${t.hero}</div>
       <p style="font-size:1.35em;color:#555;margin-top:1em;line-height:1.45">${t.sub}</p>
       <div style="display:flex;gap:1em;margin-top:1.8em"><span style="background:#111;color:#fff;padding:1em 1.8em;border-radius:2em;font-weight:600;font-size:1.15em">${t.cta} →</span><span style="border:1px solid #ccc;padding:1em 1.8em;border-radius:2em;font-size:1.15em">Learn more</span></div>
       <div style="display:flex;gap:1em;align-items:center;margin-top:2em;font-size:1.1em;color:#555">${star(5)} <b style="color:#111">4.9</b> from 2,100+ reviews</div></div>
     <div style="position:relative;height:30em">${photo(t,0,'position:absolute;inset:0;border-radius:1.6em')}
       <div style="position:absolute;left:-3em;bottom:2em;background:#fff;border-radius:1.2em;padding:1.4em 1.6em;box-shadow:0 1.6em 3em -1.4em rgba(0,0,0,.35);width:58%">
         <b style="font-size:1.25em">${t.book.t}</b>${t.book.f.slice(0,2).map(f=>`<div style="display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding:.6em 0;font-size:1.05em"><span style="color:#888">${f[0]}</span><b>${f[1]}</b></div>`).join('')}
         <div style="margin-top:.8em;background:${t.c};color:#fff;border-radius:.8em;text-align:center;padding:.7em;font-weight:600">${t.book.b}</div></div></div>
   </div>
   <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.6em;margin-top:3em">${t.items.map(it=>`<div style="background:#fff;border-radius:1.2em;overflow:hidden">${photo(t,it[2],'aspect-ratio:1.9')}<div style="padding:1em 1.2em;display:flex;justify-content:space-between;font-size:1.15em"><b>${it[0]}</b><span style="color:${t.c};font-weight:600">${it[1]}</span></div></div>`).join('')}</div>
 </div>`,t.bg),

 shop:t=>browser(t.handle+'.com/shop',`<div style="background:${t.bg};padding:2em 3em 3em">
   <div style="display:flex;justify-content:space-between;align-items:center"><div style="display:flex;align-items:center;gap:.8em">${logo(t,3.2)}${word(t,1.5)}</div><div style="display:flex;gap:2em;color:#555;font-size:1.1em"><span style="color:#111;font-weight:600">New in</span><span>Bestsellers</span><span>Gifts</span><span>Sale</span></div><span style="background:#111;color:#fff;padding:.7em 1.3em;border-radius:2em;font-size:1.05em">Cart · 2</span></div>
   <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:2em;margin-top:2em"><div style="position:relative;height:20em;border-radius:1.4em;overflow:hidden">${photo(t,0,'position:absolute;inset:0')}<div style="position:absolute;left:2em;bottom:2em;color:#fff;text-shadow:0 .1em .6em rgba(0,0,0,.4)"><div style="font:650 3.4em/1 var(--f-display);font-stretch:118%;letter-spacing:-.04em">${t.hero}</div><span style="display:inline-block;margin-top:1em;background:#fff;color:#111;padding:.8em 1.4em;border-radius:2em;font-weight:600;text-shadow:none">${t.cta} →</span></div></div>
   <div style="display:grid;grid-template-rows:1fr 1fr;gap:1.4em">${[1,2].map(i=>`<div style="position:relative;border-radius:1.4em;overflow:hidden">${photo(t,i,'position:absolute;inset:0')}<span style="position:absolute;left:1.2em;bottom:1.2em;background:#fff;padding:.5em 1em;border-radius:2em;font-weight:600">${t.items[i][0]} · ${t.items[i][1]}</span></div>`).join('')}</div></div>
   <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.4em;margin-top:2em">${[0,1,2,0].map((i,k)=>`<div>${photo(t,(i+k)%3,'aspect-ratio:1;border-radius:1em')}<div style="display:flex;justify-content:space-between;margin-top:.7em;font-size:1.1em"><b>${t.items[i][0]}</b><span>${t.items[i][1].split(' ')[0]}</span></div><div style="color:#888;font-size:.95em">${star(5)} 4.8 · Free delivery</div></div>`).join('')}</div>
 </div>`,t.bg),

 portal:t=>browser('app.'+t.handle+'.com',`<div style="display:grid;grid-template-columns:20% 1fr;min-height:46em;background:#F6F7F9">
   <div style="background:${t.c};color:#fff;padding:2em 1.4em;display:flex;flex-direction:column;gap:.5em"><div style="display:flex;align-items:center;gap:.7em;margin-bottom:1.6em">${logo(t,3,1)}<b style="font-size:1.2em">${t.name}</b></div>${['Overview','Bookings','Customers','Payments','Reports','Settings'].map((n,i)=>`<div style="padding:.8em 1em;border-radius:.6em;font-size:1.1em;${i===0?'background:rgba(255,255,255,.16)':'opacity:.7'}">${n}</div>`).join('')}</div>
   <div style="padding:2em 2.4em;display:flex;flex-direction:column;gap:1.4em"><div style="display:flex;justify-content:space-between;align-items:center"><div><div style="color:#888;font-size:1.05em">Good morning, Sara</div><b style="font:650 2.2em/1.1 var(--f-display);font-stretch:112%">Today at a glance</b></div><span style="background:${t.c};color:#fff;padding:.7em 1.3em;border-radius:.7em;font-weight:600">+ New</span></div>
   <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1em">${[['Bookings today','48','+12%'],['Revenue','$6,420','+18%'],['New customers','31','+9%'],['Rating','4.9','★']].map(k=>`<div style="background:#fff;border-radius:1em;padding:1.2em;border:1px solid #E7E9EE"><div style="color:#888;font-size:1em">${k[0]}</div><b style="font:650 2em/1.1 var(--f-display);display:block;margin-top:.3em">${k[1]}</b><span style="color:#0E9F6E;font-weight:600">${k[2]}</span></div>`).join('')}</div>
   <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:1em;flex:1"><div style="background:#fff;border-radius:1em;border:1px solid #E7E9EE;padding:1.2em;display:flex;flex-direction:column"><b style="font-size:1.15em">Weekly bookings</b><div style="flex:1;display:flex;align-items:flex-end;gap:4%;padding-top:1.4em">${[40,55,48,70,62,84,92].map((h,i)=>`<i style="flex:1;height:${h}%;border-radius:.5em .5em 0 0;background:${i===6?t.c:t.c+'55'}"></i>`).join('')}</div></div>
   <div style="background:#fff;border-radius:1em;border:1px solid #E7E9EE;padding:1.2em"><b style="font-size:1.15em">Upcoming</b>${t.items.map((it,i)=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:.8em 0;border-bottom:1px solid #F0F1F4;font-size:1.05em"><span>${it[0]}</span><span style="padding:.25em .7em;border-radius:2em;font-size:.9em;font-weight:600;background:${[t.c,'#0E9F6E','#B45309'][i]}1f;color:${[t.c,'#0E9F6E','#B45309'][i]}">${['Confirmed','Paid','Pending'][i]}</span></div>`).join('')}</div></div></div></div>`,'#F6F7F9'),

 search:t=>browser('google.com/search',`<div style="background:#fff;padding:2em 3em 3em;font-family:Arial,Helvetica,sans-serif;color:#202124">
   <div style="display:flex;align-items:center;gap:2em"><b style="font:700 2.4em/1 Arial;letter-spacing:-.04em"><span style="color:#4285F4">G</span><span style="color:#EA4335">o</span><span style="color:#FBBC05">o</span><span style="color:#4285F4">g</span><span style="color:#34A853">l</span><span style="color:#EA4335">e</span></b><div style="flex:1;max-width:60%;border-radius:3em;box-shadow:0 .1em .6em rgba(0,0,0,.18);padding:1em 1.6em;font-size:1.25em">${t.q}</div></div>
   <div style="display:flex;gap:2em;color:#5f6368;font-size:1.1em;margin:1.4em 0 0 9em"><span style="color:#1a73e8;border-bottom:.2em solid #1a73e8;padding-bottom:.5em">All</span><span>Maps</span><span>Images</span><span>Reviews</span></div>
   <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:3em;margin-top:1.6em;margin-left:9em">
    <div>
     <div style="font-size:1.05em;color:#202124;display:flex;align-items:center;gap:.6em">${logo(t,2.2)}<div><div>${t.name}</div><div style="color:#4d5156;font-size:.9em">https://${t.handle}.com</div></div></div>
     <div style="color:#1a0dab;font-size:1.7em;margin-top:.4em">${t.name} | ${t.hero}</div>
     <div style="color:#4d5156;font-size:1.15em;margin-top:.3em;line-height:1.45">${star(5)} Rating 4.9 · 2,148 reviews · ${t.sub}</div>
     <div style="display:grid;grid-template-columns:1fr 1fr;gap:.8em 2em;margin-top:1em;font-size:1.15em">${[t.cta,t.items[0][0],t.items[1][0],'Contact us'].map(x=>`<div style="color:#1a0dab">${x}<div style="color:#4d5156;font-size:.85em">Visit ${t.name} →</div></div>`).join('')}</div>
     <div style="margin-top:2em;border:1px solid #dadce0;border-radius:1em;overflow:hidden"><div style="height:12em;background:linear-gradient(135deg,#E8F0E5,#DCE7F2);position:relative">${[[30,40,'#EA4335'],[60,30,'#9aa0a6'],[74,64,'#9aa0a6']].map(([x,y,c],i)=>`<span style="position:absolute;left:${x}%;top:${y}%;width:${i?1.4:2}em;height:${i?1.4:2}em;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${c};box-shadow:0 .2em .4em rgba(0,0,0,.3)"></span>`).join('')}<i style="position:absolute;left:0;right:0;top:55%;height:.5em;background:#fff"></i><i style="position:absolute;top:0;bottom:0;left:45%;width:.5em;background:#fff"></i></div>
       ${[[t.name,'4.9','Open now · '+t.cat,1],['Competitor A','4.2','Closes soon',0],['Competitor B','3.9','Open now',0]].map(r=>`<div style="padding:1em 1.4em;border-top:1px solid #eee;font-size:1.1em;${r[3]?'background:#F4F8FF':''}"><b style="color:${r[3]?'#1a0dab':'#202124'}">${r[0]}</b><div style="color:#4d5156">${r[1]} ${star(r[1]>4.5?5:4)} · ${r[2]}</div></div>`).join('')}</div>
    </div>
    <div style="border:1px solid #dadce0;border-radius:1em;overflow:hidden;align-self:start">${photo(t,0,'height:12em')}<div style="padding:1.4em"><b style="font-size:1.6em">${t.name}</b><div style="color:#4d5156;font-size:1.1em;margin-top:.3em">4.9 ${star(5)} 2,148 Google reviews</div><div style="color:#4d5156;font-size:1.05em">${t.cat}</div>
      <div style="display:flex;gap:.6em;margin-top:1em">${['Website','Directions','Call',t.cta.split(' ')[0]].map(x=>`<span style="border:1px solid #dadce0;border-radius:2em;padding:.4em .9em;color:#1a73e8;font-size:1em">${x}</span>`).join('')}</div>
      <div style="margin-top:1em;font-size:1.05em;color:#202124"><b>Hours:</b> <span style="color:#188038">Open</span> · Closes 11 pm</div></div></div>
   </div></div>`),

 ai:t=>browser('chat.assistant.ai',`<div style="background:#fff;padding:3em 6em 3em;min-height:44em;display:flex;flex-direction:column;gap:2em">
   <div style="align-self:flex-end;background:#F2F2F2;border-radius:1.6em;padding:1em 1.6em;font-size:1.35em;max-width:60%">What is the ${t.q}?</div>
   <div style="display:flex;gap:1.4em"><span style="flex:none;width:3.2em;height:3.2em;border-radius:50%;background:conic-gradient(#7C5CFF,#22D3EE,#7C5CFF);display:grid;place-items:center;color:#fff;font-weight:700">✦</span>
    <div style="font-size:1.3em;line-height:1.55;color:#222"><p>Based on reviews, ratings and recent coverage, <b>${t.name}</b> ${t.ans}</p>
     <div style="margin:1.2em 0;border:1px solid #eee;border-radius:1.2em;display:flex;overflow:hidden;max-width:46em">${photo(t,0,'width:36%;flex:none')}<div style="padding:1.2em 1.4em"><div style="display:flex;align-items:center;gap:.6em">${logo(t,2.4)}<b>${t.name}</b></div><div style="color:#666;font-size:.9em;margin-top:.4em">${t.cat} · 4.9 ${star(5)}</div><div style="margin-top:.6em;display:inline-block;background:${t.c};color:#fff;border-radius:2em;padding:.4em 1em;font-size:.9em;font-weight:600">${t.cta}</div></div></div>
     <p><b>Why it is recommended:</b></p><ul style="margin:.4em 0 0 1.2em;padding:0">${['Consistently rated 4.9 across Google and review sites','Clear pricing, starting at '+t.items[2][1],'Fast replies on WhatsApp and online booking'].map(x=>`<li>${x}</li>`).join('')}</ul>
     <div style="display:flex;gap:.6em;margin-top:1.2em;flex-wrap:wrap">${[t.handle+'.com','Google reviews','Local guide'].map((x,i)=>`<span style="background:#F4F4F6;border-radius:2em;padding:.4em .9em;font-size:.85em;color:#555">${i+1} · ${x}</span>`).join('')}</div></div></div>
   <div style="margin-top:auto;border:1px solid #e5e5e5;border-radius:2em;padding:1em 1.6em;color:#aaa;font-size:1.15em">Ask anything…</div></div>`),

 ads:t=>`<div style="display:flex;gap:3em;justify-content:center;align-items:center">
   ${phone(`<div style="padding:3.6em 1.2em .8em;display:flex;align-items:center;gap:.7em">${logo(t,3)}<div><b style="font-size:1.1em">${t.handle}</b><div style="font-size:.9em;color:#666">Sponsored</div></div><span style="margin-left:auto">⋯</span></div>
     <div style="position:relative">${photo(t,0,'aspect-ratio:1')}<div style="position:absolute;left:1.2em;right:1.2em;top:1.4em;color:#fff;font:700 2.4em/1.02 var(--f-display);font-stretch:112%;text-shadow:0 .1em .5em rgba(0,0,0,.4)">${t.posts[2]}</div></div>
     <div style="background:${t.c};color:#fff;padding:1em 1.2em;display:flex;justify-content:space-between;font-weight:600;font-size:1.1em"><span>${t.cta}</span><span>›</span></div>
     <div style="padding:1em 1.2em;font-size:1.05em"><div>♡ 💬 ↗</div><b>3,482 likes</b><div><b>${t.handle}</b> ${t.tag} Limited availability.</div></div>`)}
   <div style="display:flex;flex-direction:column;gap:2em;width:46em">
    <div style="background:#fff;border-radius:1.4em;padding:2em;box-shadow:0 2em 4em -2em rgba(0,0,0,.3);font-family:Arial,sans-serif"><div style="font-size:1.05em;color:#202124"><b>Sponsored</b></div><div style="display:flex;align-items:center;gap:.6em;margin-top:.6em">${logo(t,2.2)}<div style="font-size:1em">${t.name}<div style="color:#4d5156;font-size:.9em">https://${t.handle}.com</div></div></div><div style="color:#1a0dab;font-size:1.6em;margin-top:.5em">${t.name} — ${t.cta} | Official Site</div><div style="color:#4d5156;font-size:1.1em;margin-top:.3em">${t.sub} ${star(5)} 4.9 (2.1K)</div></div>
    <div style="background:#fff;border-radius:1.4em;padding:1.6em 2em;box-shadow:0 2em 4em -2em rgba(0,0,0,.3)"><b style="font-size:1.2em">Campaign this month</b><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1em;margin-top:1em">${[['Reach','412K'],['Clicks','9,860'],['Cost / lead','$3.40']].map(k=>`<div><div style="color:#888">${k[0]}</div><b style="font:650 2em/1.1 var(--f-display);color:${t.c}">${k[1]}</b></div>`).join('')}</div></div>
   </div></div>`,

 content:t=>`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.6em">${[0,1,2,0].map((p,i)=>`<div style="position:relative;aspect-ratio:9/16;border-radius:1.6em;overflow:hidden;box-shadow:0 2em 3em -1.6em rgba(0,0,0,.45)">${photo(t,(p+i)%3,'position:absolute;inset:0')}<div style="position:absolute;inset:0;background:linear-gradient(transparent 45%,rgba(0,0,0,.65))"></div>
   <span style="position:absolute;left:1em;top:1em;background:rgba(255,255,255,.9);border-radius:2em;padding:.3em .8em;font:600 .95em/1.3 var(--f-mono)">${['REEL','CAROUSEL','REEL','STORY'][i]}</span>
   <div style="position:absolute;left:1.2em;right:1.2em;bottom:3.4em;color:#fff;font:700 1.9em/1.05 var(--f-display);font-stretch:112%">${[t.posts[0],'Behind the scenes',t.posts[1],t.tag][i]}</div>
   <div style="position:absolute;left:1.2em;bottom:1.2em;color:#fff;font-size:1.05em;display:flex;align-items:center;gap:.5em">${logo(t,1.8)} ▶ ${['184K','62K','248K','31K'][i]}</div></div>`).join('')}</div>`,

 email:t=>`<div style="display:flex;gap:3em;justify-content:center">${phone(`<div style="padding:3.6em 1.4em 1em;font-size:1em;color:#666;display:flex;justify-content:space-between"><span>‹ Inbox</span><span>☆</span></div>
   <div style="padding:0 1.4em;font-size:1em"><b style="font-size:1.25em;display:block">We saved your spot, Sara</b><div style="display:flex;align-items:center;gap:.6em;margin-top:.6em">${logo(t,2.4)}<div><b>${t.name}</b><div style="color:#888;font-size:.9em">to me · 9:41</div></div></div></div>
   <div style="margin:1.2em;border:1px solid #eee;border-radius:1em;overflow:hidden"><div style="background:${t.c};padding:1.4em;text-align:center">${word(t,1.6,'#fff')}</div>${photo(t,0,'aspect-ratio:1.5')}
    <div style="padding:1.4em;text-align:center"><div style="font:650 1.8em/1.1 var(--f-display);font-stretch:112%">Come back for 15% off</div><p style="color:#666;font-size:1.05em;margin:.6em 0 1em">${t.items[0][0]} is waiting for you. Use code WELCOME15 this week.</p><span style="display:inline-block;background:${t.c};color:#fff;border-radius:2em;padding:.8em 1.6em;font-weight:600">${t.cta}</span></div></div>`)}
   ${phone(`<div style="background:#075E54;color:#fff;padding:3.4em 1.2em 1em;display:flex;align-items:center;gap:.8em">${logo(t,3.2,1)}<div><b style="font-size:1.2em">${t.name}</b><div style="font-size:.9em;opacity:.8">Business account</div></div></div><div style="background:#ECE5DD;height:100%;padding:1.2em;display:flex;flex-direction:column;gap:.8em;font-size:1.1em"><div style="background:#fff;border-radius:.2em 1em 1em 1em;padding:.7em .9em;max-width:88%">Hi Sara 👋 Your ${t.items[1][0]} reminder: we have a slot for you this week. Reply <b>1</b> to book.</div><div style="align-self:flex-end;background:#DCF8C6;border-radius:1em .2em 1em 1em;padding:.6em .8em">1</div><div style="background:#fff;border-radius:.2em 1em 1em 1em;padding:.7em .9em;max-width:88%">Booked ✅ See you Thursday! We will send a reminder the day before.</div></div>`)}</div>`,

 bot:t=>browser(t.handle+'.com',`<div style="position:relative;height:46em;background:${t.bg}">${photo(t,0,'position:absolute;inset:0;opacity:.35')}
   <div style="position:absolute;left:3em;top:3em;max-width:44%"><div style="display:flex;align-items:center;gap:.8em">${logo(t,3.4)}${word(t,1.8)}</div><div style="font:650 4em/1 var(--f-display);font-stretch:118%;letter-spacing:-.04em;margin-top:1em">${t.hero}</div></div>
   <div style="position:absolute;right:3em;bottom:2.4em;width:38%;background:#fff;border-radius:1.6em;box-shadow:0 2em 4em -1em rgba(0,0,0,.35);overflow:hidden;display:flex;flex-direction:column">
    <div style="background:${t.c};color:#fff;padding:1.2em 1.4em;display:flex;align-items:center;gap:.8em">${logo(t,3,1)}<div><b style="font-size:1.15em">${t.name} assistant</b><div style="font-size:.9em;opacity:.85">● Replies instantly</div></div></div>
    <div style="padding:1.4em;display:flex;flex-direction:column;gap:.9em;font-size:1.1em">
     <div style="background:${t.c}14;border-radius:1em 1em 1em .2em;padding:.8em 1em;max-width:88%">Hi! I can answer questions, check availability and book for you. 👋</div>
     <div style="align-self:flex-end;background:#F0F1F4;border-radius:1em 1em .2em 1em;padding:.8em 1em;max-width:82%">${t.chat[0]}</div>
     <div style="background:${t.c}14;border-radius:1em 1em 1em .2em;padding:.8em 1em;max-width:88%">${t.chat[1]}</div>
     <div style="display:flex;gap:.5em;flex-wrap:wrap">${['Yes, book it','Other options','Talk to a person'].map((x,i)=>`<span style="border:1px solid ${t.c};${i===0?`background:${t.c};color:#fff`:`color:${t.c}`};border-radius:2em;padding:.45em .9em;font-size:.95em">${x}</span>`).join('')}</div></div>
    <div style="border-top:1px solid #eee;padding:1em 1.4em;color:#aaa;display:flex;justify-content:space-between">Type a message… <b style="color:${t.c}">➤</b></div></div></div>`),

 booking:t=>`<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:3em;align-items:center">
   <div style="position:relative;height:44em;border-radius:2em;overflow:hidden">${photo(t,1,'position:absolute;inset:0')}<div style="position:absolute;left:2.4em;top:2.4em;display:flex;align-items:center;gap:.8em;background:#fff;border-radius:2em;padding:.5em 1.2em .5em .5em">${logo(t,2.6)}<b>${t.name}</b></div></div>
   <div style="background:#fff;border-radius:2em;padding:2.6em;box-shadow:0 2.4em 5em -2.4em rgba(0,0,0,.35)">
    <div style="font:500 1em/1 var(--f-mono);letter-spacing:.14em;color:${t.c}">BOOK DIRECT · NO FEES</div>
    <div style="font:650 2.8em/1.05 var(--f-display);font-stretch:116%;letter-spacing:-.04em;margin-top:.5em">${t.book.t}</div>
    <div style="display:grid;gap:1em;margin-top:1.8em">${t.book.f.map(f=>`<div style="border:1px solid #E5E7EB;border-radius:1em;padding:1em 1.2em"><div style="font:500 .95em/1 var(--f-mono);letter-spacing:.08em;color:#888;text-transform:uppercase">${f[0]}</div><b style="font-size:1.4em;display:block;margin-top:.4em">${f[1]}</b></div>`).join('')}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.6em;margin-top:1.4em">${['10:00','11:30','2:00','4:30'].map((x,i)=>`<span style="text-align:center;border-radius:.8em;padding:.7em 0;font-weight:600;font-size:1.1em;${i===3?`background:${t.c};color:#fff`:'background:#F3F4F6'}">${x}</span>`).join('')}</div>
    <div style="margin-top:1.6em;background:${t.c};color:#fff;border-radius:1.2em;text-align:center;padding:1.1em;font-weight:600;font-size:1.3em">${t.book.b} →</div>
    <div style="margin-top:1em;color:#0E9F6E;font-size:1.1em;text-align:center">✓ Instant confirmation by SMS & WhatsApp</div></div></div>`,

 reviews:t=>`<div style="display:grid;grid-template-columns:1fr 1.4fr;gap:3em;align-items:start">
   <div style="background:#fff;border-radius:2em;padding:2.6em;box-shadow:0 2em 4em -2em rgba(0,0,0,.3);font-family:Arial,sans-serif">
    <div style="display:flex;align-items:center;gap:1em">${logo(t,4)}<div><b style="font-size:1.5em">${t.name}</b><div style="color:#666">${t.cat}</div></div></div>
    <div style="display:flex;align-items:center;gap:1.4em;margin-top:2em"><b style="font:700 5.6em/1 Arial">4.9</b><div>${star(5).replace('letter-spacing:.05em','letter-spacing:.05em;font-size:1.8em')}<div style="color:#666;font-size:1.1em">2,148 Google reviews</div></div></div>
    <div style="display:grid;gap:.5em;margin-top:1.8em">${[[5,88],[4,9],[3,2],[2,1],[1,0]].map(r=>`<div style="display:grid;grid-template-columns:1.6em 1fr;gap:.6em;align-items:center;font-size:1.05em;color:#666"><span>${r[0]}</span><i style="height:.8em;border-radius:1em;background:linear-gradient(90deg,#F5A524 ${r[1]}%,#EEE ${r[1]}%)"></i></div>`).join('')}</div>
    <div style="margin-top:2em;background:${t.c}12;color:${t.c};border-radius:1em;padding:1em 1.2em;font-weight:600">↑ From 4.2 to 4.9 in 6 months</div></div>
   <div style="display:grid;gap:1.4em">${t.rev.map((r,i)=>`<div style="background:#fff;border-radius:1.6em;padding:1.8em 2em;box-shadow:0 1.4em 3em -2em rgba(0,0,0,.3)"><div style="display:flex;align-items:center;gap:.8em"><span style="width:3em;height:3em;border-radius:50%;background:${['#F4C95D','#9AD1D4','#F4A99A'][i]};display:grid;place-items:center;font-weight:700">${['S','A','M'][i]}</span><div><b>${['Sara K.','Ahmed R.','Maria L.'][i]}</b><div style="font-size:.95em;color:#888">${['2 days ago','1 week ago','3 weeks ago'][i]}</div></div><span style="margin-left:auto">${star(5)}</span></div>
     <p style="font-size:1.25em;margin-top:.9em;line-height:1.45">${r}</p>
     <div style="margin-top:1em;border-left:.3em solid ${t.c};padding:.4em 1em;background:#F7F7F8;border-radius:0 .6em .6em 0;font-size:1.05em;color:#444"><b>Response from the owner:</b> Thank you so much! We cannot wait to welcome you back.</div></div>`).join('')}</div></div>`,

 listing:t=>`<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2em">${[[1,0],[0,1],[0,2]].map(([you,i],k)=>`<div style="background:#fff;border-radius:1.6em;overflow:hidden;box-shadow:0 2em 4em -2.4em rgba(0,0,0,.35);${you?`outline:.3em solid ${t.c};transform:translateY(-1.4em)`:'opacity:.6;filter:saturate(.4)'}">
   <div style="position:relative">${photo(t,you?0:i,'aspect-ratio:1.35')}${you?`<span style="position:absolute;left:1em;top:1em;background:${t.c};color:#fff;border-radius:.6em;padding:.4em .8em;font-weight:600">#1 in your area</span>`:''}</div>
   <div style="padding:1.4em 1.6em"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:1.4em">${you?t.name:['Competitor A','Competitor B'][k-1]}</b><span style="background:${you?'#0E9F6E':'#888'};color:#fff;border-radius:.5em;padding:.2em .6em;font-weight:700">${you?'9.4':['7.8','7.2'][k-1]}</span></div>
    <div style="color:#666;font-size:1.05em;margin-top:.3em">${t.cat} · ${you?'2,148':['412','268'][k-1]} reviews</div>
    <div style="display:flex;gap:.5em;flex-wrap:wrap;margin-top:1em">${(you?['Top rated','Fast reply','Great value']:['Standard']).map(x=>`<span style="background:#F3F4F6;border-radius:2em;padding:.35em .8em;font-size:.95em">${x}</span>`).join('')}</div>
    <div style="display:flex;justify-content:space-between;align-items:end;margin-top:1.4em"><div><b style="font-size:1.6em">${t.items[k][1]}</b></div>${you?`<span style="background:${t.c};color:#fff;border-radius:.8em;padding:.6em 1.2em;font-weight:600">${t.cta}</span>`:''}</div></div></div>`).join('')}</div>`,

 tour:t=>`<div style="position:relative;height:50em;border-radius:2em;overflow:hidden">${photo(t,2,'position:absolute;inset:0')}<div style="position:absolute;inset:0;background:linear-gradient(transparent 60%,rgba(0,0,0,.55))"></div>
   ${[[30,46],[62,38],[78,62]].map(([x,y],i)=>`<span style="position:absolute;left:${x}%;top:${y}%;width:3.4em;height:3.4em;border-radius:50%;background:rgba(255,255,255,.9);box-shadow:0 0 0 .8em rgba(255,255,255,.3);display:grid;place-items:center;font-weight:700;color:${t.c}">${i+1}</span>`).join('')}
   <div style="position:absolute;left:2.4em;top:2.4em;display:flex;align-items:center;gap:.8em;background:#fff;border-radius:2em;padding:.5em 1.2em .5em .5em">${logo(t,2.6)}<b>${t.name}</b></div>
   <span style="position:absolute;right:2.4em;top:2.4em;background:rgba(0,0,0,.6);color:#fff;border-radius:2em;padding:.6em 1.2em;font-weight:600">360° · Drag to look around</span>
   <div style="position:absolute;left:2.4em;right:2.4em;bottom:2.4em;display:flex;gap:1em">${t.items.map((it,i)=>`<div style="flex:1;background:${i===0?'#fff':'rgba(255,255,255,.75)'};border-radius:1.2em;padding:.6em;display:flex;gap:.8em;align-items:center">${photo(t,it[2],'width:6em;height:4em;border-radius:.8em;flex:none')}<b style="font-size:1.1em">${it[0]}</b></div>`).join('')}</div></div>`
};

function renderPreview(){
  const box=el('pz-pv'); if(!box) return;
  const kinds=[]; Object.keys(S.sel).forEach(id=>{const k=KIND[id]||'web'; if(!kinds.includes(k)) kinds.push(k)});
  kinds.sort((a,b)=>ORDER.indexOf(a)-ORDER.indexOf(b));
  const show = kinds.length?kinds:['brand','web','social'];
  if(!show.includes(pvKind)) pvKind=show[0];
  el('pz-pv-tabs').innerHTML=show.map(k=>`<button type="button" role="tab" aria-selected="${k===pvKind}" class="${k===pvKind?'on':''}" data-pv="${k}">${KNAME[k][0]}</button>`).join('');
  el('pz-pv-note').textContent = kinds.length ? KNAME[pvKind][1] : 'Tick services above to preview them. Here is a taste of what we could create for you.';
  const t=T0();
  el('pz-pv-stage').style.background=`linear-gradient(160deg, ${t.bg}, ${t.c2}55)`;
  box.innerHTML=`<div class="pvx">${PV[pvKind](t)}</div>`;
  box.classList.remove('pv-in'); void box.offsetWidth; box.classList.add('pv-in');
}
el('pz-pv-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-pv]'); if(!b) return; pvKind=b.dataset.pv; renderPreview();});
el('pz-pv-name').addEventListener('input',e=>{pvName=e.target.value.slice(0,40); renderPreview();});

window.PVX={social:(t,ch)=>PV.social(t,ch),theme:(k,o)=>{const t={...(TH[k]||TH.other),...o}; const name=t.name; t.ini=name.split(/\s+/).filter(w=>/[A-Za-z0-9]/.test(w[0])&&!/^(&|and|the|of)$/i.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join(''); t.handle=name.toLowerCase().replace(/[^a-z0-9]+/g,''); return t;}};

/* ======================= SUBSCRIPTION PLANS ======================= */
let PLANS=[];
const clonePlan=()=>{const p=PLANS.find(x=>x.id===S.plan); const o={}; Object.entries(p.sel).forEach(([k,v])=>o[k]=[...v]); return o;};
function sepTotals(sel){const keep=S.sel; S.sel=sel; const T=baseTotals(); S.sel=keep; return T;}
function buildPlans(){
  const I=IND[S.ind], niche=I.rec.map(r=>r[0]).filter(id=>I.niche[id]);
  const base=[
   {id:'launch',name:'Launch',tag:'Get online and look the part.',sel:{web:['care'],social:['ig']},
    list:['Website designed & built','Hosting, security & updates','Instagram management','Google Business Profile setup','Monthly results report']},
   {id:'grow',name:'Grow',tag:'Start winning customers every month.',pop:1,sel:{web:['care'],social:['ig','fb'],seo:[],bot:[]},
    list:['Everything in Launch','SEO: rank on Google','AI chatbot, 24/7','Facebook + Instagram management']},
   {id:'scale',name:'Scale',tag:'Dominate your market.',sel:{web:['care'],social:['ig','fb'],seo:[],bot:[],ads:['g','meta'],aiseo:[],content:[]},
    list:['Everything in Grow','Google & Meta ads management','AI search (ChatGPT, Gemini)','Monthly photo & video content']}];
  if(niche[0]){base[1].sel[niche[0]]=[]; base[1].list.push(CAT[niche[0]].n); base[2].sel[niche[0]]=[]; }
  if(niche[1]){base[2].sel[niche[1]]=[]; base[2].list.push(CAT[niche[1]].n);}
  PLANS=base.map(p=>{const T=sepTotals(p.sel); const yr=T.setupNet+T.moNet*12; const price=Math.max(99,Math.round(yr*.85/12/10)*10-1);
    return {...p,price,sepSetup:T.setupNet,sepMo:T.moNet,yr,save:yr-price*12};});
}
function renderPlans(){
  if(!el('pz-plans')) return;
  const I=IND[S.ind];
  el('pz-plans').innerHTML=PLANS.map(p=>`<div class="plan ${p.pop?'pop':''} ${p.id===S.plan?'on':''}" data-plan="${p.id}" role="radio" aria-checked="${p.id===S.plan}" tabindex="0">
    ${p.pop?'<span class="plan-badge">Most popular</span>':''}
    <h3>${p.name}</h3><p class="plan-tag">${p.tag}</p>
    <div class="plan-price"><b>${$m(p.price)}</b><span>/month</span></div>
    <p class="plan-terms">$0 upfront · 12-month minimum</p>
    <div class="plan-vs">Buying separately: <s>${$m(p.yr)}</s> in year one.<br><b>You save ${$m(p.save)}</b> and pay nothing upfront.</div>
    <ul>${p.list.map((x,i)=>`<li class="${i===0&&p.id!=='launch'?'inc':''}">${x}</li>`).join('')}</ul>
    <div class="plan-acts"><button type="button" class="btn ${p.id===S.plan?'':'ghost'}" data-start="${p.id}">Start with ${p.name} <span class="arr">→</span></button>
    <button type="button" class="link-arrow plan-pv" data-pvplan="${p.id}">Preview it for ${I.n.split(' ')[0].toLowerCase()}</button></div>
  </div>`).join('');
  const p=PLANS.find(x=>x.id===S.plan);
  const rows=[['Upfront cost','$0',$m(p.sepSetup)],['Monthly',$m(p.price),$m(p.sepMo)],['Year-one total',$m(p.price*12),$m(p.yr)],
   ['Hosting, security & updates','Included','Included with care plan'],['Website ownership','Yours after 24 months, or buy out any time','Yours from day one'],
   ['Minimum term','12 months','None for monthly services'],['Best for','Starting without a big upfront cost','Owning everything from day one']];
  el('pz-cmp').innerHTML=`<table class="cmp"><thead><tr><th>${p.name} plan</th><th class="us">Subscription</th><th>Pay per service</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td class="us">${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;
}
function setMode(m){
  if(m===S.mode) return;
  if(m==='sub'){S.buySel=S.sel; S.sel=clonePlan();} else {S.sel=S.buySel||{};}
  S.mode=m; $$('[data-mode]').forEach(b=>{const on=b.dataset.mode===m; b.classList.toggle('on',on); b.setAttribute('aria-selected',on)});
  el('pz-subwrap').hidden=m!=='sub'; el('pz-buywrap').hidden=m==='sub'; el('pz-bar').hidden=m==='sub'||sumVis;
  Object.keys(CAT).forEach(sync); update();
}
function pickPlan(id,scroll){S.plan=id; S.sel=clonePlan(); update(); if(scroll) el('pz-pv-sec').scrollIntoView({behavior:reduce?'auto':'smooth'});}
document.addEventListener('click',e=>{
  const md=e.target.closest('[data-mode]'); if(md){setMode(md.dataset.mode);return}
  const st=e.target.closest('[data-start]'); if(st){S.plan=st.dataset.start; S.sel=clonePlan(); sendPlan(); return}
  const pv=e.target.closest('[data-pvplan]'); if(pv){pickPlan(pv.dataset.pvplan,true); return}
  const pc=e.target.closest('[data-plan]'); if(pc && S.plan!==pc.dataset.plan) pickPlan(pc.dataset.plan);
});
document.addEventListener('keydown',e=>{const pc=e.target.closest&&e.target.closest('[data-plan]'); if(pc&&(e.key==='Enter'||e.key===' ')&&e.target===pc){e.preventDefault(); pickPlan(pc.dataset.plan);}});
setIndustry('hotel');
})();
if(location.hash.startsWith('#case-')) route();
