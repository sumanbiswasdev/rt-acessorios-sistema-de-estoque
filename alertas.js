function verificarAlertas() {
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

            const emAlerta = produtos.filter(p => p.quantidade <= p.estoqueMinimo);
            const criticos  = emAlerta.filter(p => p.quantidade <= 0);

            // Atualiza cards
            document.getElementById('totalAlertas').textContent = emAlerta.length;
            document.getElementById('totalCriticos').textContent = criticos.length;
            document.getElementById('ultimaVerificacao').textContent =
                new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            const tbody = document.getElementById('tabelaAlertas');
            const semAlertas = document.getElementById('semAlertas');
            tbody.innerHTML = '';

            if (emAlerta.length === 0) {
                semAlertas.style.display = 'flex';
                return;
            }

            semAlertas.style.display = 'none';

            emAlerta.forEach(p => {
                const critico = p.quantidade <= 0;
                const badge = critico
                    ? `<span class="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">Crítico</span>`
                    : `<span class="bg-orange-100 text-orange-500 text-xs font-medium px-2 py-1 rounded-full">Baixo</span>`;

                tbody.innerHTML += `
                    <tr class="border-b border-gray-100 hover:bg-gray-50">
                        <td class="py-3 font-medium">${p.nome || p.name || '—'}</td>
                        <td class="py-3 text-gray-500">${p.categoria || p.category || '—'}</td>
                        <td class="py-3 ${critico ? 'text-red-600 font-bold' : 'text-orange-500 font-medium'}">${p.quantidade ?? p.quantity ?? 0}</td>
                        <td class="py-3 text-gray-500">${p.estoqueMinimo ?? p.minStock ?? '—'}</td>
                        <td class="py-3">${badge}</td>
                    </tr>`;
            });
        }

        // Roda ao carregar a página
        verificarAlertas();