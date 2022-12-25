#http
gcloud functions deploy {{name}} --timeout=540 --runtime nodejs16 --trigger-http --allow-unauthenticated --entry-point=start --source=./

#pubsub
gcloud functions deploy {{name}} --runtime nodejs16 --memory=2GB --timeout=540s --trigger-topic={{topic}} --entry-point=start --source=./

#files
gcloud functions deploy {{name}} --timeout=540 --memory 8GB --runtime nodejs16 --trigger-resource {{bucket}} --trigger-event google.storage.object.finalize --retry --max-instances 4 --entry-point=start --source=./