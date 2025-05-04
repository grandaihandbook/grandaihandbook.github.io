<!-- <html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>June 16th</title>
    <style>
        /* --- Refined Styles for the Story Card Page --- */
        :root {
            /* Enhanced color scheme with variables */
            --bg-color: #ffffff;
            --bg-alt: #f5f7fa;
            --text-color: #2c3e50;
            --text-secondary: #546e7a;
            --primary-light: #6574cd;
            --primary-dark: #5a67d8;
            --accent-color: #d53f8c;
            --border-color: rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05);
            --card-padding: 3.5rem;
            --card-border-radius: 18px;
        }

        /* Base page styles with subtle gradient background */
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, var(--bg-alt) 0%, #e6eeff 100%);
            font-family: "Google Sans", "Noto Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            color: var(--text-color);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem 1rem;
        }

        /* Enhanced Card element with subtle animations */
        .story-card {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: var(--card-border-radius);
            box-shadow: var(--shadow-lg);
            padding: var(--card-padding);
            max-width: 95ch;
            width: 100%;
            border-left: 5px solid var(--primary-light);
            opacity: 0;
            transform: translateY(10px);
            animation: cardFadeIn 1.2s ease-out 0.3s forwards;
            position: relative;
            overflow: hidden;
        }

        /* Subtle background pattern */
        .story-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
                radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.01) 2%, transparent 0%),
                radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.01) 2%, transparent 0%);
            background-size: 100px 100px;
            pointer-events: none;
            opacity: 0.6;
            z-index: -1;
        }

        /* Decorative elements */
        .story-card::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle at top right, rgba(101, 116, 205, 0.08), transparent 70%);
            border-top-right-radius: var(--card-border-radius);
            pointer-events: none;
        }

        /* Enhanced animation */
        @keyframes cardFadeIn {
            0% {
                opacity: 0;
                transform: translateY(10px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Refined typography */
        .story-card p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--text-color);
            margin-bottom: 1.8rem;
            text-align: left;
            hyphens: auto;
            opacity: 0;
            animation: textFadeIn 0.8s ease-out forwards;
            animation-delay: calc(0.6s + var(--paragraph-index) * 0.1s);
            position: relative;
        }

        /* First paragraph special styling */
        .story-card p:first-of-type {
            font-size: 1.15rem;
            font-weight: 500;
        }

        /* First paragraph drop cap */
        .story-card p:first-of-type::first-letter {
            font-size: 3.2em;
            float: left;
            line-height: 0.8;
            margin-right: 10px;
            margin-top: 5px;
            color: var(--primary-dark);
            font-weight: 600;
        }

        /* Key emotional paragraphs */
        .story-card p.highlight {
            border-left: 2px solid var(--accent-color);
            padding-left: 1rem;
            margin-left: -1rem;
        }

        /* Remove margin from last paragraph */
        .story-card p:last-of-type {
            margin-bottom: 0;
        }

        /* Text animation */
        @keyframes textFadeIn {
            to {
                opacity: 1;
            }
        }

        /* Elegant styling for emphasized text */
        .story-card em {
            font-style: italic;
            color: var(--text-secondary);
            position: relative;
        }

        /* Special hover effect for song names */
        .story-card em.song {
            cursor: default;
            transition: all 0.3s ease;
            padding: 0 2px 2px;
            border-bottom: 1px dotted rgba(84, 110, 122, 0.5);
            color: var(--accent-color);
            font-weight: 500;
        }

        .story-card em.song:hover {
            color: var(--primary-dark);
            background-color: rgba(101, 116, 205, 0.05);
            border-radius: 3px;
            border-bottom-color: var(--primary-dark);
        }

        /* Enhanced separator */
        .story-card hr {
            border: none;
            height: 1px;
            background: linear-gradient(to right, transparent, var(--primary-light) 20%, var(--primary-light) 80%, transparent);
            margin: 3rem 0;
            opacity: 0.3;
            position: relative;
        }

        .story-card hr::before {
            content: "♦";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 0 20px;
            color: var(--accent-color);
            font-size: 14px;
        }

        /* Enhanced final words styling */
        .story-card .final-words {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            position: relative;
        }

        .story-card .final-words::before,
        .story-card .final-words::after {
            content: "";
            position: absolute;
            width: 40px;
            height: 1px;
            background-color: var(--primary-light);
            opacity: 0.4;
        }

        .story-card .final-words::before {
            top: -10px;
            left: 50%;
            transform: translateX(-130%);
        }

        .story-card .final-words::after {
            bottom: -10px;
            left: 50%;
            transform: translateX(30%);
        }

        .story-card .final-words p {
            font-style: italic;
            color: var(--text-secondary);
            text-align: center;
            margin-bottom: 0.7rem;
            font-size: 1.1rem;
            opacity: 0;
            animation: finalWordsFadeIn 1.5s ease-out forwards;
            animation-delay: 3s;
            letter-spacing: 0.5px;
        }

        .story-card .final-words p:last-of-type {
            margin-bottom: 0;
        }

        @keyframes finalWordsFadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 0.9;
            }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            :root {
                --card-padding: 2rem;
            }

            .story-card {
                border-radius: 12px;
                border-left-width: 4px;
            }

            .story-card p {
                font-size: 1rem;
                line-height: 1.7;
            }
        }


    </style>

</head>
<body>
    <div class="story-card">
        <p style="--paragraph-index: 0">On June 16, 2023, I lost a part of my soul. Not in a dramatic way, not loudly, but in a way so quiet it still echoes in everything I do. A piece of me was taken, and nothing has filled that space since—maybe nothing ever will.</p>

        <p style="--paragraph-index: 1">I built this in the hope that, if she ever finds it, she'll remember—remember me... remember us. Her name was Ree; that's what I called her.</p>

        <p style="--paragraph-index: 2">People come and go, but no one ever stayed inside me like she did. I remember her smile had this quiet kind of magic, like the sun slipping through curtains in the morning. Her voice was like a melody I never wanted to stop. She was the kind of beautiful you didn't just see—you felt.</p>

        <p style="--paragraph-index: 3">We spent two years together, but only nine days face to face. Just nine. And somehow, it was enough to make me believe in forever.</p>

        <p style="--paragraph-index: 4" class="highlight">Smiling, laughing, or just sitting in silence with her head on my shoulder. And that silence? I miss that the most. The kind of silence where two people don't need words to feel understood.</p>

        <p style="--paragraph-index: 5">She gave me a feeling I can't describe, like I was home, like I was enough. But things began to fade: the bond, the words, the rhythm we once had. We were left holding onto something that was already slipping away.</p>

        <p style="--paragraph-index: 6">I made mistakes, big ones. In trying to show her how much I needed her, I ended up pushing her further. And in that moment of pain, we both said things we shouldn't have.</p>

        <p style="--paragraph-index: 7">I don't think she thinks of me anymore. Maybe I'm just a passing chapter in her story, but she's the whole book in mine.</p>

        <p style="--paragraph-index: 8">I remember our first kiss, our last hug, the way she waved goodbye at the airport—and the way I knew, deep inside, that it was the last time I was seeing her.</p>

        <p style="--paragraph-index: 9" class="highlight">She was beautiful. She is beautiful. The most beautiful person I've ever known. You won't understand, and she won't either, how much she meant to me.</p>

        <p style="--paragraph-index: 10">And now... she's gone. Every door closed, every bridge burned. Blocked from everywhere. No way to reach her. No closure. Maybe she didn't need it, but I did.</p>

        <p style="--paragraph-index: 11">I was just trying to grow, to learn. But I learned too late.</p>

        <p style="--paragraph-index: 12">I don't know if I'll ever see her again. Maybe it's better if I don't. Maybe some stories aren't meant to go on forever. Still, I wish things were different. I wish time had been kinder. I wish we had more time. I wish I could've held her longer—just a little longer.</p>

        <p style="--paragraph-index: 13" class="highlight">And when <em class="song">Just You and I</em>, or <em class="song">Make You Mine</em> comes on at night, I close my eyes, and for a moment, I pretend she's still here. But silence always follows. And in that silence, I remember everything.</p>

        <p style="--paragraph-index: 14">I don't know if I'm still in love with her, or just in love with the way she made me feel. But I think about her every day, and I would give anything to do things differently.</p>

        <p style="--paragraph-index: 15">In the end, all a man really wants is to be loved, to be respected, and to be understood.</p>

        <hr>

        <div class="final-words">
            <p>And if you're reading this… and you want to end the story in a different way,</p>
            <p>you know where to find me.</p>
        </div>
    </div>

    <script>
        // Add staggered animation to paragraphs
        document.addEventListener('DOMContentLoaded', function() {
            const paragraphs = document.querySelectorAll('.story-card p');
            paragraphs.forEach((p, index) => {
                p.style.setProperty('--paragraph-index', index);
            });
        });
    </script>

</body>
</html> -->
