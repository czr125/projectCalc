<h1 align="center"> Cientific Calculator Project </h1>

<p align="center">
Site feito para simular uma calculadora científica, o qual foi realizado por mim, Cezar Augusto.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🐳 Inicializando o Docker
  ### Primeiro
  - Instale Docker Desktop: https://www.docker.com/products/docker-desktop/ 
  ### Segundo
  - Use esse comando no seu terminal:
                  
        docker pull nginx

  ### Terceiro 
  - Use esse comando no seu terminal para iniciar a aplicação no seu localhost 
        
        docker run --hostname=3a082c4a33b6 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NGINX_VERSION=1.25.3 --env=PKG_RELEASE=1 --env=NJS_VERSION=0.8.2 --network=projectcalc_calc-page -p 30001:80 --label='com.docker.compose.config-hash=cc5bef5201fd2575c6771fa0218926756eb463860f78c19b44693483f2df329a' --label='com.docker.compose.container-number=1' --label='com.docker.compose.depends_on=' --label='com.docker.compose.image=sha256:c6b499f6f8492a65eb171d9b893a417ffb0c4eab6d120dd0deeb04459643592e' --label='com.docker.compose.oneoff=False' --label='com.docker.compose.project=projectcalc' --label='com.docker.compose.project.config_files=C:\development\projectCalc\compose.yaml' --label='com.docker.compose.project.working_dir=C:\development\projectCalc' --label='com.docker.compose.replace=a305653959fcab2246b8cd797647d31be64792260ef223ee158eab0e5fea8114' --label='com.docker.compose.service=proxy' --label='com.docker.compose.version=2.23.0' --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' --runtime=runc -d calc-page-nginx
        

    http://localhost:30001

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Docker
- Git e Github

## :memo: Licença

Esse projeto está sob a licença MIT.

---

Made by ⚡ @czr_mutran :wave: 
