# GUIA COMPLETO: DEPLOY NEXT.JS NO PLESK

## PASSO 1: PREPARAR O PROJETO LOCALMENTE

### 1.1 - Criar arquivo .env.production
Crie o arquivo `.env.production` na raiz do projeto com:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://dsicredito.pt
```

### 1.2 - Criar arquivo ecosystem.config.js (PM2)
Crie o arquivo `ecosystem.config.js` na raiz:
```javascript
module.exports = {
  apps: [{
    name: 'dsicredito',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: './',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### 1.3 - Build do projeto
Execute no terminal local:
```powershell
npm run build
```

Aguarde até finalizar (pode demorar alguns minutos).

---

## PASSO 2: PREPARAR ARQUIVOS PARA UPLOAD

### 2.1 - Arquivos e pastas NECESSÁRIOS para upload:
✅ `.next/` (pasta gerada pelo build)
✅ `public/`
✅ `node_modules/` (ou instalar no servidor)
✅ `package.json`
✅ `package-lock.json`
✅ `next.config.ts`
✅ `ecosystem.config.js`
✅ `.env.production`

### 2.2 - Arquivos NÃO necessários:
❌ `app/` (já está compilado em .next)
❌ `components/` (já está compilado em .next)
❌ `.git/`
❌ `node_modules/` (se for instalar no servidor)

### 2.3 - Comprimir arquivos
Opção 1: Upload direto via FTP (pode demorar)
Opção 2: Comprimir em .zip e fazer upload (RECOMENDADO)

**Para comprimir:**
- Selecione as pastas/arquivos necessários
- Clique direito > Enviar para > Pasta compactada
- Nome sugerido: `dsicredito-deploy.zip`

---

## PASSO 3: CONFIGURAR NO PLESK

### 3.1 - Acesso ao Plesk
1. Acesse: `https://seu-servidor.com:8443`
2. Faça login com suas credenciais

### 3.2 - Criar/Selecionar Domínio
1. No menu lateral: **Websites & Domains**
2. Se o domínio `dsicredito.pt` já existe, clique nele
3. Se não existe: **Add Domain** > Preencha `dsicredito.pt`

### 3.3 - Ativar Node.js
1. No domínio, procure: **Node.js**
2. Clique em **Enable Node.js**
3. Configurações:
   - **Node.js version**: Selecione a mais recente (v18 ou v20)
   - **Application mode**: Production
   - **Application root**: `/httpdocs`
   - **Application URL**: deixe vazio ou `/`
   - **Application startup file**: `ecosystem.config.js`
4. Clique em **Enable**

---

## PASSO 4: UPLOAD DOS ARQUIVOS

### 4.1 - Via File Manager (Plesk)
1. No domínio: **Files** > **File Manager**
2. Entre na pasta `httpdocs`
3. **Delete** todos arquivos antigos (se houver)
4. Clique em **Upload**
5. Selecione o arquivo `dsicredito-deploy.zip`
6. Aguarde upload completar
7. Selecione o arquivo .zip > **Extract Files**
8. Delete o arquivo .zip após extrair

### 4.2 - Via FTP (Alternativa)
1. Use FileZilla ou WinSCP
2. Host: `seu-servidor.com`
3. Protocolo: SFTP (porta 22) ou FTP
4. Usuário/Senha: do Plesk
5. Navegue até `/httpdocs`
6. Arraste os arquivos/pastas

---

## PASSO 5: INSTALAR DEPENDÊNCIAS NO SERVIDOR

### 5.1 - Via SSH (RECOMENDADO)
1. No Plesk: **Tools & Settings** > **SSH Access**
2. Ou use PuTTY/terminal:
```bash
ssh usuario@seu-servidor.com
```

3. Navegue até a pasta do projeto:
```bash
cd /var/www/vhosts/dsicredito.pt/httpdocs
```

4. Instale as dependências:
```bash
npm install --production
```

### 5.2 - Via Plesk Node.js Manager (Alternativa)
1. Volte em **Node.js**
2. Seção **NPM**
3. Clique em **NPM install**
4. Aguarde instalação

---

## PASSO 6: CONFIGURAR VARIÁVEIS DE AMBIENTE

1. No Plesk Node.js settings
2. Seção **Environment Variables**
3. Adicione:
   - `NODE_ENV` = `production`
   - `PORT` = `3000`
   - `NEXT_PUBLIC_SITE_URL` = `https://dsicredito.pt`

---

## PASSO 7: INICIAR A APLICAÇÃO

### 7.1 - Via Node.js Manager
1. No Plesk: **Node.js**
2. Clique em **Restart App** ou **Enable Node.js**
3. Status deve ficar **Running**

### 7.2 - Via SSH com PM2 (Alternativa Avançada)
```bash
cd /var/www/vhosts/dsicredito.pt/httpdocs
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## PASSO 8: CONFIGURAR PROXY REVERSO (NGINX/APACHE)

### 8.1 - No Plesk
1. **Apache & nginx Settings**
2. Aba **Additional nginx directives**
3. Cole:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

4. Clique em **OK**

---

## PASSO 9: CONFIGURAR SSL/HTTPS

1. No domínio: **SSL/TLS Certificates**
2. Clique em **Install** em Let's Encrypt
3. Marque: `dsicredito.pt` e `www.dsicredito.pt`
4. Email: `info@dsicredito.pt`
5. Clique em **Install**
6. Aguarde emissão (1-2 minutos)

---

## PASSO 10: VERIFICAR E TESTAR

### 10.1 - Verificar Status
1. No Plesk Node.js: Status deve estar **Running**
2. Verifique logs se houver erro

### 10.2 - Testar no Navegador
1. Acesse: `https://dsicredito.pt`
2. Verifique se está funcionando
3. Teste o simulador
4. Teste os links

### 10.3 - Verificar Logs (se houver erro)
Via SSH:
```bash
cd /var/www/vhosts/dsicredito.pt/httpdocs
cat logs/error.log
```

Ou no Plesk:
**Logs** > **Error Log**

---

## PASSO 11: CONFIGURAÇÕES ADICIONAIS (OPCIONAL)

### 11.1 - Redirecionar www para não-www
No Plesk Apache & nginx Settings:
```nginx
if ($host = 'www.dsicredito.pt') {
    return 301 https://dsicredito.pt$request_uri;
}
```

### 11.2 - Cache e Compressão
Já configurado no Next.js, mas pode adicionar:
```nginx
# Cache para assets estáticos
location /_next/static {
    proxy_pass http://localhost:3000;
    proxy_cache_valid 200 60m;
    add_header Cache-Control "public, immutable";
}
```

---

## TROUBLESHOOTING COMUM

### Erro: "Application failed to start"
**Solução:**
```bash
cd /var/www/vhosts/dsicredito.pt/httpdocs
npm install
npm run build
```

### Erro: "Port 3000 already in use"
**Solução:**
```bash
lsof -i :3000
kill -9 [PID]
```
Ou no Plesk: **Restart App**

### Erro: "Module not found"
**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Site não carrega CSS/Imagens
**Solução:**
1. Verifique permissões:
```bash
chmod -R 755 public
chmod -R 755 .next
```

2. Verifique proxy reverso no nginx

### SSL não funciona
**Solução:**
1. Certifique-se que o domínio aponta para o IP do servidor
2. Aguarde propagação DNS (até 24h)
3. Reinstale certificado Let's Encrypt

---

## CHECKLIST FINAL

✅ Projeto buildado localmente
✅ Arquivos enviados para o servidor
✅ Node.js habilitado no Plesk
✅ Dependências instaladas (npm install)
✅ Variáveis de ambiente configuradas
✅ Aplicação iniciada e Running
✅ Proxy reverso configurado (nginx)
✅ SSL instalado e funcionando
✅ Site acessível via https://dsicredito.pt
✅ Simulador funcionando
✅ Footer com dados corretos
✅ Redes sociais funcionando

---

## MANUTENÇÃO FUTURA

### Para atualizar o site:
1. Faça as alterações localmente
2. Execute: `npm run build`
3. Envie apenas a pasta `.next` via FTP
4. No Plesk: **Restart App**

### Backup:
Configure backup automático no Plesk:
**Tools & Settings** > **Backup Manager** > **Schedule**

---

**IMPORTANTE:**
- Anote as credenciais SSH
- Guarde o arquivo `.env.production`
- Mantenha backup do código-fonte
- Monitore os logs nas primeiras 24h

**Suporte:**
Se precisar de ajuda durante o processo, me chame em cada etapa!
