// next.config.ts
const nextConfig = {
        "compilerOptions": {
          "target": "esnext",
          "module": "commonjs",
          "lib": ["dom", "esnext"],
          "skipLibCheck": true,
          "forceConsistentCasingInFileNames": true,
          "esModuleInterop": true,
          "allowJs": true,
          "noEmit": true,
          "isolatedModules": true,
          "strict": true,
          "jsx": "preserve",
          "moduleResolution": "node",
          "resolveJsonModule": true,
          "baseUrl": ".",
          "paths": {
            "*": ["types/*"]
          }
        },
        "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
        "exclude": ["node_modules"]
      }
      
  
  export default nextConfig;
  