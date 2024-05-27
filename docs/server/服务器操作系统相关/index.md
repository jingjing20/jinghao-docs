# 服务器操作系统相关

## 系统包管理工具 dnf

DNF（Dandified Yum）是 Fedora、Red Hat Enterprise Linux（RHEL）以及其衍生版本（如 CentOS、AlmaLinux 等）上的包管理工具。DNF 是 YUM（Yellowdog Updater, Modified）的继任者，旨在解决 YUM 的一些性能和依赖性处理问题。

### DNF 的特点

- **性能改进**：相比 YUM，DNF 的依赖性解析速度更快，并且使用了更少的内存。
- **更好的依赖性处理**：DNF 使用 libsolv 库来处理依赖性，能够更好地解决复杂的依赖性问题。
- **增强的插件系统**：DNF 提供了一套灵活的插件系统，允许用户扩展其功能。
- **更友好的命令行界面**：DNF 改进了命令行输出，使其更易于阅读和理解。

### 常用的 DNF 命令

以下是一些常用的 DNF 命令及其功能：

**安装软件包**

```sh
dnf install <package_name>
```

例如，安装`httpd`（Apache HTTP Server）：

```sh
dnf install httpd
```

**更新系统**

```sh
dnf update
```

更新所有安装的包到最新版本。

**仅更新特定的软件包**

```sh
dnf update <package_name>
```

例如，仅更新`httpd`包：

```sh
dnf update httpd
```

**删除软件包**

```sh
dnf remove <package_name>
```

例如，删除`httpd`包：

```sh
dnf remove httpd
```

**列出可用的软件包**

```sh
dnf list available
```

**列出已安装的软件包**

```sh
dnf list installed
```

**搜索软件包**

```sh
dnf search <keyword>
```

例如，搜索包含`httpd`的包：

```sh
dnf search httpd
```

**显示软件包的信息**

```sh
dnf info <package_name>
```

例如，显示`httpd`包的信息：

```sh
dnf info httpd
```

**清理缓存**

```sh
dnf clean all
```

清理 DNF 的缓存，以释放磁盘空间。

### 其他常见操作

- **启用/禁用软件库（仓库）**

```sh
dnf config-manager --set-enabled <repo_id>
dnf config-manager --set-disabled <repo_id>
```

例如，启用`epel`库：

```sh
dnf config-manager --set-enabled epel
```

- **查看历史记录**

```sh
dnf history
```

这会列出所有的安装、更新和删除操作的历史记录。

- **回滚到特定的事务**

```sh
dnf history undo <transaction_id>
```

例如，回滚事务 ID 为 5 的操作：

```sh
dnf history undo 5
```

### 总结

DNF 是一个功能强大且高效的包管理工具，为用户提供了许多方便的命令来管理系统上的软件包。通过熟悉这些常用命令，用户可以更好地维护和操作基于 RPM 的软件包管理系统。

## systemctl 命令

`systemctl` 是一个用于管理 `systemd` 服务和单元（units）的命令行工具。`systemd` 是现代 `Linux` 系统中广泛使用的初始化系统和服务管理器，负责启动和管理系统服务、挂载文件系统、管理设备和系统状态等。

### 常用的 `systemctl` 命令

### 服务管理

- 启动服务

```sh
  systemctl start <service_name>
```

例如，启动 `httpd` 服务：

```sh
  systemctl start httpd
```

- 停止服务

```sh
  systemctl stop <service_name>
```

例如，停止 `httpd` 服务：

```sh
  systemctl stop httpd
```

- 重启服务

```sh
  systemctl restart <service_name>
```

例如，重启 `httpd` 服务：

```sh
  systemctl restart httpd
```

- 重新加载服务配置

```sh
  systemctl reload <service_name>
```

例如，重新加载 `httpd` 服务的配置：

```sh
  systemctl reload httpd
```

- 查看服务状态

```sh
  systemctl status <service_name>
```

例如，查看 `httpd` 服务的状态：

```sh
  systemctl status httpd
```

- 启用服务（开机自启动）

```sh
  systemctl enable <service_name>
```

例如，启用 `httpd` 服务：

```sh
  systemctl enable httpd
```

- 禁用服务（取消开机自启动）

```sh
  systemctl disable <service_name>
```

例如，禁用 `httpd` 服务：

```sh
  systemctl disable httpd
```

- 查看服务是否启用

```sh
  systemctl is-enabled <service_name>
```

例如，查看 `httpd` 服务是否启用：

```sh
  systemctl is-enabled httpd
```

- 查看服务是否运行

```sh
  systemctl is-active <service_name>
```

例如，查看 `httpd` 服务是否正在运行：

```sh
  systemctl is-active httpd
```

### 系统状态

- 查看系统整体状态

```sh
  systemctl status
```

这会显示系统的整体状态，包括已启动的服务和失败的服务。

- 查看系统日志

```sh
  journalctl
```

这会显示系统的日志。您可以使用各种选项过滤日志，例如查看某个服务的日志：

```sh
  journalctl -u <service_name>
```

例如，查看 `httpd` 服务的日志：

```sh
  journalctl -u httpd
```

- 查看引导日志

```sh
  journalctl -b
```

这会显示当前引导过程的日志。

### 挂载管理

- 挂载文件系统

```sh
  systemctl start <mount_name>.mount
```

例如，挂载 `/data`：

```sh
  systemctl start data.mount
```

- 卸载文件系统

```sh
  systemctl stop <mount_name>.mount
```

例如，卸载 `/data`：

```sh
  systemctl stop data.mount
```

### 总结

`systemctl` 是管理 Linux 系统服务和单元的强大工具。通过熟悉上述命令，用户可以有效地控制和管理系统服务、查看系统状态和日志、以及管理挂载点和其他系统资源。
