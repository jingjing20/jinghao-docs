# typeorm 基础

## TypeOrmModule 中的 forRoot、forFeature、forRootAsync

`TypeOrmModule` 是 `Nest.js` 中用于集成 `TypeORM` 的模块，它提供了不同的静态方法来配置 `TypeORM` 并将其集成到你的 `Nest.js` 应用程序中。这些方法包括 `forRoot`、`forFeature` 和 `forRootAsync`，它们各自用于不同的目的：

### `forRoot(options?: TypeOrmModuleOptions)`

- `forRoot` 方法用于全局配置 `TypeORM`，通常在应用程序的主模块中使用。它接受一个配置对象 `TypeOrmModuleOptions`，用于配置 `TypeORM` 的连接和其他全局设置。这个方法应该只在应用程序的主模块中调用一次。

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })
  ]
  // ...
})
export class AppModule {}
```

### `forFeature(entities: EntityTarget<any>[], connection?: Connection | string)`

- `forFeature` 方法用于在特定模块中导入实体类以便在该模块中使用 `TypeORM` 的 `repository` 进行数据库操作。你可以将实体类传递给 `forFeature` 方法，以便在该模块的上下文中使用这些实体类。

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])]
  // ...
})
export class UserModule {}
```

### `forRootAsync(options: TypeOrmModuleAsyncOptions)`

- `forRootAsync` 方法用于在异步设置下配置 `TypeORM`。这对于需要动态加载配置的情况非常有用，例如从配置文件中加载数据库连接配置。

- `forRootAsync` 方法接受一个配置对象 `TypeOrmModuleAsyncOptions`，你可以使用其中的 `useFactory`、`useClass` 或 `useExisting` 来提供一个异步工厂函数、类或提供者以生成配置对象。

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE')
      }),
      inject: [ConfigService]
    })
  ]
  // ...
})
export class AppModule {}
```

## typeorm 中的自动化

```js
TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('db.host'),
    port: configService.get('db.port'),
    username: configService.get('db.username'),
    password: configService.get('db.password'),
    database: configService.get('db.database'),
    synchronize: configService.get('typeOrm.synchronize'),
    autoLoadEntities: configService.get('typeOrm.autoLoadEntities'),
  }),
}),
```

### `synchronize`

- `synchronize` 属性是 `TypeORM` 中的一个配置选项，用于指定在应用程序启动时是否自动同步数据库结构。该属性用于配置数据库模式自动更新的行为。

- 当 `synchronize` 设置为 `true` 时，`TypeORM` 会在应用程序启动时自动检查实体 `Entities` 的定义与数据库表的结构是否一致。如果存在差异，`TypeORM` 将尝试更新数据库表以与实体定义保持一致。

- 这种自动同步的机制适用于开发和测试环境，可以简化开发人员的工作流程。每当你更改实体的定义时，`TypeORM` 将自动更新数据库表的结构，无需手动执行数据库迁移或手动更新表结构。

- 但需要注意的是，在生产环境中，将 `synchronize` 设置为 `true` 是不推荐的。在生产环境中，建议使用数据库迁移工具（如 `TypeORM` 的迁移功能）来管理数据库结构的变更，以确保数据的完整性和一致性。

- 默认情况下，`synchronize` 属性为 `false`，即禁用自动同步功能。要启用自动同步，你可以在 `TypeORM` 的配置文件中将 `synchronize` 设置为 `true`，或者在 `TypeOrmModule.forRoot()` 方法中将其配置为 `synchronize: true`。

示例配置：

```typescript
TypeOrmModule.forRoot({
  // 其他配置项...
  synchronize: true,
}),
```

- 需要注意的是，自动同步功能可能会导致数据丢失或不可逆的表结构更改，因此在生产环境中使用时要非常谨慎，并在必要时备份数据。

### `autoLoadEntities`

- `autoLoadEntities` 是 `TypeORM` 中的一个配置选项，用于指定是否自动加载实体 `Entities`。

- 当 `autoLoadEntities` 设置为 `true` 时，`TypeORM` 会自动加载应用程序中定义的所有实体。这意味着你不需要手动在 `TypeORM` 配置中指定每个实体的路径，`TypeORM` 将会自动扫描并加载你的实体。

- 使用 `autoLoadEntities` 的好处是，它使实体的管理更加方便。你只需要在你的项目中创建实体类，<span style="color:#8470FF">并确保这些类被正确导入【实体还是需要在对应的模块用 TypeOrmModule.forFeature 引入的】</span>。`TypeORM` 将根据这些导入的实体类自动加载和管理数据库表结构。

- 默认情况下，`autoLoadEntities` 的值为 `false`，即禁用自动加载实体功能。要启用自动加载实体，你可以在 `TypeORM` 的配置文件中将 `autoLoadEntities` 设置为 `true`，或者在 `TypeOrmModule.forRoot()` 方法中将其配置为 `autoLoadEntities: true`。

示例配置：

```typescript
TypeOrmModule.forRoot({
  // 其他配置项...
  autoLoadEntities: true,
}),
```

::: info 注意

需要注意的是，启用自动加载实体功能时，`TypeORM` 将会扫描整个项目并加载所有符合要求的实体类。这可能会导致性能上的一些影响，特别是当项目中存在大量实体类时。如果你的项目中只有少量实体类，或者你希望手动控制要加载的实体，可以将 `autoLoadEntities` 设置为 `false`，并手动指定要加载的实体路径。通过明确指定要加载的实体路径，你可以更精确地控制哪些实体将被加载和管理。

:::

```typescript
TypeOrmModule.forRoot({
  // 其他配置项...
  autoLoadEntities: false,
  entities: [Entity1, Entity2, ...],
}),
```
