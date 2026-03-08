"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeSegment, setActiveSegment] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('opacity-100', 'translate-y-0'), i * 50);
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500', 'ease-out');
      observer.observe(el);
    });

    const sectionIds = ['menu', 'projects', 'trending', 'archive', 'links'];
    const handleScroll = () => {
      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSegment(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="border-b border-border-light bg-white sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none group">
            <div className="w-10 h-10 border-2 border-brand-bucks rounded-lg flex items-center justify-center text-brand-bucks transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-[24px]">local_cafe</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">
              <span className="text-brand-t">T</span>
              <span className="text-brand-bucks">bucks</span>
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['menu', 'projects', 'trending', 'archive', 'links'].map((id, idx) => (
              <a 
                key={id}
                href={`#${id}`}
                className={`text-sm font-bold transition-all px-4 py-2 rounded-lg ${activeSegment === id ? 'bg-brand-bucks/10 text-brand-bucks' : 'hover:bg-brand-bucks/10 hover:text-brand-bucks text-text-sub'}`}
              >
                {['소개', '프로젝트', '트렌드', '아카이브', '연결'][idx]}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@tbucks.xyz" className="h-10 flex items-center justify-center px-6 bg-brand-bucks hover:bg-opacity-90 text-white text-sm font-bold rounded-lg transition-colors shadow-soft">
              연락하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full border-b border-border-light overflow-hidden bg-background-subtle">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0d1c17 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6 md:pr-12 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border-light rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-t"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Education Evolved</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              선생님들의<br/>
              편안한 <span className="text-brand-t inline-block relative">
                휴식
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>을 위하여
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-lg">
              커피 한 잔의 여유처럼, 편하게 배우고 나누고 만들어가는 공간. Tbucks 커뮤니티에서 성공적인 교육을 브루잉하세요.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#menu" className="flex h-12 items-center px-8 border-2 border-brand-bucks text-brand-bucks hover:bg-brand-bucks hover:text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-soft">
                둘러보기
              </a>
              <a href="https://edu-v6-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex h-12 items-center px-8 bg-white border border-border-light text-text-main hover:border-brand-t hover:text-brand-t font-bold rounded-lg transition-all">
                원격 연수원
              </a>
            </div>
          </div>
          <div className="relative h-full flex justify-center items-center min-h-[400px] reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-t/5 to-brand-bucks/5 rounded-2xl -rotate-3 transform scale-95 border border-brand-t/10"></div>
            <div className="absolute inset-0 bg-white border border-border-light rounded-2xl rotate-3 shadow-lg transform scale-95"></div>
            <div className="relative z-10 floating-icon">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-3xl flex items-center justify-center shadow-2xl rotate-6 border-[6px] border-brand-bucks relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-brand-bucks) 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute inset-4 border-2 border-dashed border-brand-bucks/30 rounded-2xl"></div>
                <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-brand-t"></div>
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand-t"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-brand-t"></div>
                <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-brand-t"></div>
                <div className="text-center relative z-10 flex flex-col items-center justify-center w-full">
                  <div className="relative mt-[10px] flex justify-center">
                    <span 
                      className="material-symbols-outlined text-brand-bucks drop-shadow-sm leading-none relative z-10"
                      style={{ fontSize: '100px' }}
                    >
                      local_cafe
                    </span>
                  </div>
                  <div className="mt-1 flex flex-col items-center justify-center md:flex-row md:items-baseline">
                    <span className="text-brand-t text-6xl md:text-7xl font-black tracking-tighter leading-none">T</span>
                    <span className="text-brand-bucks text-3xl md:text-4xl font-extrabold tracking-tight ml-1 leading-none mt-2 md:mt-0" style={{fontFamily: "'Inter', sans-serif"}}>bucks</span>
                  </div>
                  <div className="mt-6 text-[10px] md:text-xs font-bold text-text-muted tracking-[0.2em] uppercase border-t w-[60%] mx-auto pt-2 border-brand-bucks/20">
                    EST. 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu / Services Section */}
      <section id="menu" className="border-b border-border-light bg-white py-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-brand-t uppercase tracking-wider mb-2">What We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-text-main tracking-tight">
                <span className="text-brand-t font-black">T</span>
                <span className="text-brand-bucks font-extrabold" style={{fontFamily: "'Inter', sans-serif"}}>bucks</span>
                에서는 이런 걸 해요
              </h3>
              <p className="mt-4 text-text-muted text-lg whitespace-nowrap">
                스타벅스에서 커피를 마시며 편하게 이야기 나누듯, 여기서도 편하게 즐겨보세요!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hover-card-accent p-8 rounded-xl border border-border-light bg-white group cursor-pointer relative overflow-hidden transition-all duration-300">
              <div className="w-12 h-12 border-2 border-brand-t/30 rounded-lg flex items-center justify-center text-brand-t mb-6 group-hover:border-brand-t group-hover:bg-brand-t/5 transition-colors">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <h4 className="text-lg font-bold text-text-main mb-3">든든 강의 & 클래스</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                AI, 에듀테크, 실무 도구 사용법 등 선생님들에게 꼭 필요한 이야기를 나눕니다.
              </p>
            </div>
            <div className="hover-card-accent p-8 rounded-xl border border-border-light bg-white group cursor-pointer relative overflow-hidden transition-all duration-300">
              <div className="w-12 h-12 border-2 border-brand-bucks/30 rounded-lg flex items-center justify-center text-brand-bucks mb-6 group-hover:border-brand-bucks group-hover:bg-brand-bucks/5 transition-colors">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h4 className="text-lg font-bold text-text-main mb-3">뻔뻔 활동 & 프로젝트</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                해커톤, 커뮤니티 참여, 발표 등 현재 진행중인 활동들을 모아둡니다.
              </p>
            </div>
            <div className="hover-card-accent p-8 rounded-xl border border-border-light bg-white group cursor-pointer relative overflow-hidden transition-all duration-300">
              <div className="w-12 h-12 border-2 border-primary-dark/30 rounded-lg flex items-center justify-center text-primary-dark mb-6 group-hover:border-primary-dark group-hover:bg-primary-dark/5 transition-colors">
                <span className="material-symbols-outlined">local_fire_department</span>
              </div>
              <h4 className="text-lg font-bold text-text-main mb-3">요즘 핫한 것들</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                교육 트렌드, AI 도구, 유용한 리소스 등 요즘 이야기를 큐레이션합니다.
              </p>
            </div>
            <div className="hover-card-accent p-8 rounded-xl border border-border-light bg-white group cursor-pointer relative overflow-hidden transition-all duration-300">
              <div className="w-12 h-12 border-2 border-accent/30 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h4 className="text-lg font-bold text-text-main mb-3">앱 서비스 & 도구</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                선생님들의 일상을 조금 더 편하게, 수업을 조금 더 빛나게.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b border-border-light bg-background-subtle py-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm font-bold text-brand-t uppercase tracking-wider mb-2">Projects</h2>
            <h3 className="text-3xl font-bold text-text-main tracking-tight">만든 것들</h3>
            <p className="mt-4 text-text-muted">Tbucks.xyz 아래에서 살아가는 서비스들.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://script.google.com/macros/s/AKfycbxrxOBnlO4j2ee01OHPLS0tHPP50JUieJEjH_og58Kenkmc11nhR1xj2L_g3s44XyPn/exec" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white border border-border-light rounded-xl hover:shadow-lg transition-all group">
              <div>
                <h4 className="font-bold text-text-main group-hover:text-brand-t transition-colors">생활기록부 자동 작성 (WIP)</h4>
                <p className="text-sm text-text-muted mt-1">학생들의 생활기록부를 손쉽게 작성하는 도구</p>
              </div>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">WIP</span>
            </a>
            <a href="https://edu-v6-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white border border-border-light rounded-xl hover:shadow-lg transition-all group">
              <div>
                <h4 className="font-bold text-text-main group-hover:text-brand-bucks transition-colors">원격 연수원 플랫폼</h4>
                <p className="text-sm text-text-muted mt-1">교원 대상 원격 직무 연수 시스템 (Next.js)</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending" className="border-b border-border-light bg-white py-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm font-bold text-brand-t uppercase tracking-wider mb-2">What's Hot</h2>
            <h3 className="text-3xl font-bold text-text-main tracking-tight">요즘 핫한 것들</h3>
            <p className="mt-4 text-text-muted">알아두면 좋은 트렌드와 리소스를 큐레이션합니다.</p>
          </div>
          <div className="flex flex-col">
            {[
              { num: "01", category: "AI", title: "교실에서 바로 쓰는 AI 도구 TOP 5" },
              { num: "02", category: "EDU", title: "2025 에듀테크 트렌드 정리" },
              { num: "03", category: "TECH", title: "선생님도 알면 좋은 노코드 툴" },
              { num: "04", category: "LIFE", title: "번아웃 없이 사이드 프로젝트 하는 법" }
            ].map((item, idx) => (
              <a key={idx} href="#" className="flex items-center gap-6 py-5 border-b border-border-light hover:bg-background-subtle transition-colors group px-4 rounded-lg">
                <span className="text-lg font-bold text-brand-bucks w-8">{item.num}</span>
                <span className="flex-1 font-medium text-text-main group-hover:text-brand-t transition-colors">{item.title}</span>
                <span className="px-2 py-1 bg-gray-100 text-text-muted text-xs font-bold rounded border border-border-light">{item.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section id="archive" className="py-20 bg-background-subtle reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-10 border-b border-border-light pb-4">
            <div>
              <h2 className="text-sm font-bold text-brand-t uppercase tracking-wider mb-1">Archive</h2>
              <h3 className="text-2xl font-bold text-text-main">기록들</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: "2025.02", title: "tbucks.xyz 랜딩 페이지를 만들었다", tag: "LOG" },
              { date: "2025.02", title: "첫 번째 서비스 기획기", tag: "DEV" },
              { date: "2025.01", title: "왜 개인 브랜드가 필요한가", tag: "ESSAY" }
            ].map((item, idx) => (
              <article key={idx} className="group bg-white rounded-lg p-6 border border-border-light hover:shadow-lg hover:border-brand-bucks transition-all duration-300">
                <div className="flex items-center gap-2 text-xs text-brand-t font-bold mb-3">
                  <span>{item.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-border-light mx-1"></span>
                  <span className="text-text-muted font-normal">{item.date}</span>
                </div>
                <h4 className="text-lg font-bold text-text-main mb-2 group-hover:text-brand-bucks transition-colors">
                  {item.title}
                </h4>
                <a href="#" className="text-sm font-bold text-brand-t hover:underline decoration-2 underline-offset-4 mt-4 inline-block">Read Article</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Links / Connect Section */}
      <section id="links" className="border-t border-border-light bg-white py-20 reveal">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-t uppercase tracking-wider mb-2">Connect</h2>
            <h3 className="text-3xl font-bold text-text-main tracking-tight">연결하기</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="flex flex-col items-center justify-center p-8 border border-border-light rounded-2xl hover:bg-white hover:shadow-lg hover:border-brand-bucks transition-all group">
               <span className="material-symbols-outlined text-[32px] mb-3 text-text-muted transition-colors group-hover:text-brand-bucks">code</span>
               <span className="font-bold text-text-main">GitHub</span>
               <span className="text-xs text-text-muted mt-1">@tbucks</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center p-8 border border-border-light rounded-2xl hover:bg-white hover:shadow-lg hover:border-[#FF0000] transition-all group">
               <span className="material-symbols-outlined text-[32px] mb-3 text-text-muted transition-colors group-hover:text-[#FF0000]">play_circle</span>
               <span className="font-bold text-text-main">YouTube</span>
               <span className="text-xs text-text-muted mt-1">@tbucks</span>
            </a>
            <a href="#" className="flex flex-col items-center justify-center p-8 border border-border-light rounded-2xl hover:bg-white hover:shadow-lg hover:border-[#E1306C] transition-all group">
               <span className="material-symbols-outlined text-[32px] mb-3 text-text-muted transition-colors group-hover:text-[#E1306C]">photo_camera</span>
               <span className="font-bold text-text-main">Instagram</span>
               <span className="text-xs text-text-muted mt-1">@tbucks</span>
            </a>
            <a href="mailto:hello@tbucks.xyz" className="flex flex-col items-center justify-center p-8 border border-border-light rounded-2xl hover:bg-white hover:shadow-lg hover:border-brand-t transition-all group">
               <span className="material-symbols-outlined text-[32px] mb-3 text-text-muted transition-colors group-hover:text-brand-t">mail</span>
               <span className="font-bold text-text-main">Email</span>
               <span className="text-xs text-text-muted mt-1">hello@tbucks.xyz</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border-light py-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-brand-bucks rounded-lg flex items-center justify-center text-brand-bucks">
              <span className="material-symbols-outlined text-[24px]">local_cafe</span>
            </div>
            <p className="text-sm text-text-muted">
              © 2025 <span className="font-extrabold tracking-tight"><span className="text-brand-t">T</span><span className="text-brand-bucks">bucks</span></span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
