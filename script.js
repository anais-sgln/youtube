"use strict";

document.querySelector('.hero button').addEventListener('click', function () {
    this.classList.toggle('clicked');
});

/* ── MODALE ÉQUIPE ── */
const MEMBERS = {
    joseph:  { initials: 'OJ', name: 'Onya Joseph',    role: 'Youtubeur & Monteur',    bio: 'La voix et le visage de la chaîne. Il scénarise, tourne et monte les dossiers de fond.',          tags: ['Script', 'Tournage', 'Montage'] },
    yoan:    { initials: 'MY', name: 'Malet Yoann',    role: 'DA & Ingé Son',           bio: 'Il construit l\'identité visuelle et soigne chaque piste audio pour l\'ambiance des vidéos.',      tags: ['Direction artistique', 'Mixage', 'Sound design'] },
    nbombe:  { initials: 'SN', name: "Seck N'boumbé",  role: 'Stratégie Marketing',     bio: 'Elle développe la visibilité de la chaîne, gère les partenariats et booste l\'audience.',          tags: ['Réseaux sociaux', 'Partenariats', 'Growth'] },
    lucas:   { initials: 'ML', name: 'Marvillet Lucas', role: 'Monteur Cadreur',        bio: 'Cadrage, prises de vue et montage des formats courts. L\'œil derrière la caméra.',               tags: ['Cadrage', 'Montage', 'Shorts'] },
    thomas:  { initials: 'BT', name: 'Bonnin Thomas',  role: 'Stratégie Marketing',     bio: 'Analytics, stratégie de contenu et optimisation de la croissance de la chaîne.',                 tags: ['Analytics', 'SEO YouTube', 'Contenu'] },
    aurelie: { initials: 'MA', name: 'Marchel Aurélie', role: 'Supervision Générale',   bio: 'Elle coordonne l\'ensemble du projet, valide chaque sortie et assure la cohérence globale.',      tags: ['Coordination', 'Validation', 'Pilotage'] },
    anais:   { initials: 'AS', name: 'Anais Seghilani', role: 'Développement Web',      bio: 'Elle conçoit et développe le site de la chaîne, de l\'interface à l\'intégration.',              tags: ['HTML / CSS', 'JavaScript', 'Tailwind'] },
};

const modal   = document.getElementById('team-modal');
const avatar  = document.getElementById('modal-avatar');
const name    = document.getElementById('modal-name');
const role    = document.getElementById('modal-role');
const bio     = document.getElementById('modal-bio');
const tagsEl  = document.getElementById('modal-tags');

function openModal(key) {
    const m = MEMBERS[key];
    if (!m) return;
    avatar.textContent = m.initials;
    name.textContent   = m.name;
    role.textContent   = m.role;
    bio.textContent    = m.bio;
    tagsEl.innerHTML   = m.tags.map(t => `<span>${t}</span>`).join('');
    modal.hidden = false;
    modal.querySelector('.team-modal-card').focus?.();
}

function closeModal() {
    modal.hidden = true;
}

document.querySelectorAll('.team-item').forEach(li => {
    li.addEventListener('click', () => openModal(li.dataset.member));
});

modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

modal.querySelector('.team-modal-close').addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
});
