# k8s를 활용한 Infra 구성 테스트

## Proc

### Build & Push Image Nestjs-app

In the nestjs-app folder

```bash
docker build -t alexhkhan/nestjs-app .
docker push alexhkhan/nestjs-app
```

### Create Cluster With KIND

In the root folder

```bash
kind create cluster --config=kind.config.yaml
```

### Apply Infra

1. configure k8s (`nestjs-app/infra`)

```bash
k apply -f .
k port-forward svc/kibana 5601:5601
k port-forward svc/nestjs-app 3000:3000
```

