'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Star, Heart, Sparkles, RotateCcw, Minus, Plus, Sun, Calendar, ArrowRight, X, Wifi, WifiOff } from 'lucide-react';

const TasbihCounter = () => {
  const [mounted, setMounted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    // Check online status
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (mounted) {
      const saved = localStorage.getItem('darkMode');
      if (saved) {
        setDarkMode(JSON.parse(saved));
      }
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Scheherazade+New:wght@400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400..700&display=swap';
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, [mounted]);

  const dhikrList = [
  { id: 1, text: 'صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ', icon: Heart },
  { id: 2, text: 'دُعَاءُ إِبْرَاهِيمَ (الصَّلَاةُ الإِبْرَاهِيمِيَّةُ)', icon: Star },
  { id: 3, text: 'أَسْتَغْفِرُ اللَّهَ', icon: Sparkles },
  { id: 4, text: 'سُبْحَانَ اللَّهِ', icon: Moon },
  { id: 5, text: 'الْحَمْدُ لِلَّهِ', icon: Heart },
  { id: 6, text: 'اللَّهُ أَكْبَرُ', icon: Star },
  { id: 7, text: 'اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ', icon: Sparkles },
  { id: 8, text: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ', icon: Moon },
  { id: 9, text: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', icon: Heart },
  { id: 10, text: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', icon: Star }
];


  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  };

  const getPreviousDayCounts = () => {
    if (!mounted) return {};
    const yesterday = getYesterdayDate();
    const yesterdayCounts = {};
    dhikrList.forEach(dhikr => {
      const key = `dhikr_${dhikr.id}_${yesterday}`;
      const value = parseInt(localStorage.getItem(key)) || 0;
      yesterdayCounts[dhikr.id] = value;
    });
    return yesterdayCounts;
  };

  const addPreviousDayCount = () => {
    const yesterday = getYesterdayDate();
    const yesterdayCounts = getPreviousDayCounts();
    const today = getTodayDate();
    
    setCounts(prev => {
      const newCounts = { ...prev };
      dhikrList.forEach(dhikr => {
        newCounts[dhikr.id] = prev[dhikr.id] + yesterdayCounts[dhikr.id];
      });
      return newCounts;
    });
  };

  const removePreviousDayCount = () => {
    const yesterdayCounts = getPreviousDayCounts();
    
    setCounts(prev => {
      const newCounts = { ...prev };
      dhikrList.forEach(dhikr => {
        newCounts[dhikr.id] = Math.max(0, prev[dhikr.id] - yesterdayCounts[dhikr.id]);
      });
      return newCounts;
    });
  };

  const [counts, setCounts] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [lastDate, setLastDate] = useState('');

  useEffect(() => {
    if (!mounted) return;

    const today = getTodayDate();
    const saved = {};
    dhikrList.forEach(dhikr => {
      const key = `dhikr_${dhikr.id}_${today}`;
      const value = parseInt(localStorage.getItem(key)) || 0;
      saved[dhikr.id] = value;
    });
    setCounts(saved);
    setSelectedDate(today);
    
    const savedLastDate = localStorage.getItem('lastAccessDate') || today;
    setLastDate(savedLastDate);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const today = getTodayDate();
    
    if (lastDate !== today && lastDate !== '') {
      const newCounts = {};
      dhikrList.forEach(dhikr => {
        const key = `dhikr_${dhikr.id}_${today}`;
        const value = parseInt(localStorage.getItem(key)) || 0;
        newCounts[dhikr.id] = value;
      });
      setCounts(newCounts);
      setLastDate(today);
      localStorage.setItem('lastAccessDate', today);
    }
  }, [mounted, lastDate]);

  useEffect(() => {
    if (!mounted) return;

    const today = showHistory ? selectedDate : getTodayDate();
    Object.keys(counts).forEach(id => {
      const key = `dhikr_${id}_${today}`;
      localStorage.setItem(key, counts[id].toString());
    });
  }, [counts, showHistory, selectedDate, mounted]);

  const loadHistoryData = (date) => {
    if (!mounted) return;

    const historyCounts = {};
    dhikrList.forEach(dhikr => {
      const key = `dhikr_${dhikr.id}_${date}`;
      const value = parseInt(localStorage.getItem(key)) || 0;
      historyCounts[dhikr.id] = value;
    });
    setCounts(historyCounts);
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    loadHistoryData(date);
  };

  const toggleHistory = () => {
    if (!showHistory) {
      setShowHistory(true);
      setSelectedDate(getTodayDate());
    } else {
      setShowHistory(false);
      const today = getTodayDate();
      setSelectedDate(today);
      loadHistoryData(today);
    }
  };

  const increment = (id) => {
    if (!showHistory || selectedDate === getTodayDate()) {
      setCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const decrement = (id) => {
    if (!showHistory || selectedDate === getTodayDate()) {
      setCounts(prev => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
    }
  };

  const reset = (id) => {
    if (!showHistory || selectedDate === getTodayDate()) {
      setCounts(prev => ({ ...prev, [id]: 0 }));
    }
  };

  const resetAll = () => {
    if (!showHistory || selectedDate === getTodayDate()) {
      const newCounts = {};
      dhikrList.forEach(dhikr => {
        newCounts[dhikr.id] = 0;
      });
      setCounts(newCounts);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <Moon className="w-16 h-16 text-emerald-600 animate-pulse mx-auto mb-4" />
          <p className="text-emerald-700 text-xl font-semibold">Loading Tasbih Counter...</p>
        </div>
      </div>
    );
  }

  const isToday = selectedDate === getTodayDate();
  const isHistoryView = showHistory && !isToday;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900' 
        : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
    } p-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Online/Offline Status Banner */}
        {!isOnline && (
          <div className="mb-4 p-3 bg-orange-500 text-white rounded-lg flex items-center gap-2 justify-center">
            <WifiOff className="w-5 h-5" />
            <span className="font-semibold">You're offline - App works without internet!</span>
          </div>
        )}

        <div className="text-center mb-8 pt-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Moon className={`w-10 h-10 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-emerald-300' : 'text-emerald-800'}`}>
              Tasbih Counter
            </h1>
            <Star className={`w-10 h-10 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
          </div>
          <p className={`text-lg ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
            Track your daily dhikr and worship
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
                  : 'bg-slate-700 hover:bg-slate-800 text-white'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {darkMode ? 'Light' : 'Dark'}
            </button>

            <button
              onClick={toggleHistory}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 ${
                showHistory
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : darkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Calendar className="w-5 h-5" />
              {showHistory ? 'Today' : 'History'}
            </button>

            {!showHistory && (
              <>
                <button
                  onClick={addPreviousDayCount}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                  title="Add yesterday's count to today"
                >
                  +Prev Day
                </button>

                <button
                  onClick={removePreviousDayCount}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-pink-600 hover:bg-pink-700 text-white'
                      : 'bg-pink-500 hover:bg-pink-600 text-white'
                  }`}
                  title="Remove yesterday's count from today"
                >
                  -Prev Day
                </button>
              </>
            )}
          </div>
          
          <button
            onClick={resetAll}
            disabled={isHistoryView}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all ${
              isHistoryView 
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-red-500 hover:bg-red-600 text-white transform hover:scale-105'
            }`}
          >
            <RotateCcw className="w-5 h-5" />
            Reset All
          </button>
        </div>

        {showHistory && (
          <div className={`mb-6 p-4 rounded-xl ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-center gap-4 justify-center flex-wrap">
              <label className={`font-semibold ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
                Select Date:
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                max={getTodayDate()}
                className={`px-4 py-2 rounded-lg border-2 font-semibold ${
                  darkMode 
                    ? 'bg-slate-700 border-emerald-500 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-800'
                }`}
              />
              {isHistoryView && (
                <span className={`text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                  (View Only - Past Date)
                </span>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dhikrList.map((dhikr) => {
            const Icon = dhikr.icon;
            return (
              <div
                key={dhikr.id}
                className={`rounded-2xl shadow-xl p-6 border-2 transition-all ${
                  darkMode 
                    ? 'bg-slate-800 border-emerald-600 hover:border-emerald-400' 
                    : 'bg-white border-emerald-100 hover:border-emerald-300'
                } ${isHistoryView ? 'opacity-75' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    darkMode 
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                      : 'bg-gradient-to-br from-emerald-400 to-teal-500'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-right text-2xl font-bold leading-relaxed ${
                      darkMode ? 'text-emerald-100' : 'text-gray-800'
                    }`} dir="rtl" style={{ fontFamily: "'Amiri Quran', 'Scheherazade New', 'Noto Nastaliq Urdu', serif", fontWeight: 700 }}>
                      {dhikr.text}
                    </p>
                  </div>
                </div>

                <div className={`rounded-xl p-4 mb-4 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-slate-700 to-slate-600' 
                    : 'bg-gradient-to-r from-emerald-50 to-teal-50'
                }`}>
                  <div className="text-center">
                    <p className={`text-6xl font-bold mb-1 ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      {counts[dhikr.id] || 0}
                    </p>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-emerald-300' : 'text-emerald-600'
                    }`}>Count</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => decrement(dhikr.id)}
                    disabled={isHistoryView}
                    className={`flex-1 flex items-center justify-center gap-1 md:gap-2 px-[6px] md:px-4 py-3 rounded-lg font-semibold shadow-md transition-all ${
                      isHistoryView
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105'
                    }`}
                  >
                    <Minus className="w-5 h-5" />
                    Minus
                  </button>
                  
                  <button
                    onClick={() => increment(dhikr.id)}
                    disabled={isHistoryView}
                    className={`flex-1 flex items-center justify-center gap-1 md:gap-2 px-[6px] md:px-4 py-3 rounded-lg font-semibold shadow-md transition-all ${
                      isHistoryView
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transform hover:scale-105'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                    Count
                  </button>
                  
                  <button
                    onClick={() => reset(dhikr.id)}
                    disabled={isHistoryView}
                    className={`flex items-center justify-center px-3 md:px-4 py-3 rounded-lg font-semibold shadow-md transition-all ${
                      isHistoryView
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gray-500 hover:bg-gray-600 text-white transform hover:scale-105'
                    }`}
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 pb-6">
          <p className={`font-medium ${darkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
            May Allah accept your dhikr
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            {isOnline ? (
              <Wifi className={`w-4 h-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            ) : (
              <WifiOff className={`w-4 h-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
            )}
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {isOnline ? 'Online - Data synced' : 'Offline - Works without internet'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasbihCounter;