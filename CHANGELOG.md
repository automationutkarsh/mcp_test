# Changelog

## 0.1.0-alpha.1 (2025-07-18)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/automationutkarsh/mcp_test/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([c26f0d6](https://github.com/automationutkarsh/mcp_test/commit/c26f0d649e324c6a796a6eddecc951d600abcda2))
* **mcp:** implement support for binary responses ([de3cd29](https://github.com/automationutkarsh/mcp_test/commit/de3cd2959ee26cb74791c2b25bcccd6c9b49fef0))
* **mcp:** include http information in tools ([b726ec0](https://github.com/automationutkarsh/mcp_test/commit/b726ec0fc372d16faf95ac2dc7eef4a8fac838ff))
* **mcp:** set X-Stainless-MCP header ([a5096c3](https://github.com/automationutkarsh/mcp_test/commit/a5096c3e486b25b982eeebd18ad8adb86acccf0c))
* **mcp:** support filtering tool results by a jq expression ([5ad92c5](https://github.com/automationutkarsh/mcp_test/commit/5ad92c5601d6e553fcf74440469d63fdc982a11c))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([61cb2b6](https://github.com/automationutkarsh/mcp_test/commit/61cb2b6f058e32a7c361b3a47a1bb8e24e831733))
* **client:** get fetchOptions type more reliably ([eecdf92](https://github.com/automationutkarsh/mcp_test/commit/eecdf928da1da9cbd09bb651367fd89e8c3a0318))
* compat with more runtimes ([7c2225a](https://github.com/automationutkarsh/mcp_test/commit/7c2225a80c5441a911f718159cd00f6eb7f836b4))
* **mcp:** fix cursor schema transformation issue with recursive references ([6c2b868](https://github.com/automationutkarsh/mcp_test/commit/6c2b868c61da92ee9224a2b6f5f4750db3a387f5))
* **mcp:** include description in dynamic tool search ([4667585](https://github.com/automationutkarsh/mcp_test/commit/4667585f65bb8fd60c0eea716b2774776f04ae39))
* **mcp:** include required section for top-level properties and support naming transformations ([0a40fff](https://github.com/automationutkarsh/mcp_test/commit/0a40ffffa5ced842678477e8d27ae9cd9a8a5687))
* **mcp:** relax input type for asTextContextResult ([12592be](https://github.com/automationutkarsh/mcp_test/commit/12592be928437edab58822f67c2fb20d800b3ff7))
* **mcp:** support jq filtering on cloudflare workers ([932ee8c](https://github.com/automationutkarsh/mcp_test/commit/932ee8cc39a14325dbdfdfe85ab7b013dfa4cb9f))
* publish script — handle NPM errors correctly ([39c44e7](https://github.com/automationutkarsh/mcp_test/commit/39c44e78a1e69e739e688fd2ddbb2abc2c0dd459))


### Chores

* add docs to RequestOptions type ([d4c83c2](https://github.com/automationutkarsh/mcp_test/commit/d4c83c2e9ea381d93e13346b0271c974a5c554f5))
* adjust eslint.config.mjs ignore pattern ([3d24dbe](https://github.com/automationutkarsh/mcp_test/commit/3d24dbeec1a9391d37658b2a851ec48967197f87))
* avoid type error in certain environments ([13a94fd](https://github.com/automationutkarsh/mcp_test/commit/13a94fda57a360975fedc347d9a29d9bfb566604))
* change publish docs url ([a42cdf9](https://github.com/automationutkarsh/mcp_test/commit/a42cdf9848de6f417f95cb916f6980b1ffcd223d))
* **ci:** enable for pull requests ([3835171](https://github.com/automationutkarsh/mcp_test/commit/3835171839ab8503567fb1744c8a1c43c0edb198))
* **ci:** only run for pushes and fork pull requests ([b08bc9e](https://github.com/automationutkarsh/mcp_test/commit/b08bc9e7ef95ea7e0fa3268adf09bc996b3b04c2))
* **client:** improve path param validation ([2d8f601](https://github.com/automationutkarsh/mcp_test/commit/2d8f6012756bed81cbc81b2191ee2a05c360a5f1))
* **client:** refactor imports ([eefab8c](https://github.com/automationutkarsh/mcp_test/commit/eefab8c796ec5127f393e80efc2f1be3ba05e79d))
* configure new SDK language ([62d71ae](https://github.com/automationutkarsh/mcp_test/commit/62d71aecd918ed8f09017404079d1d406ac727b0))
* **deps:** bump eslint-plugin-prettier ([16bd6ca](https://github.com/automationutkarsh/mcp_test/commit/16bd6ca2e9dd9bad16bc70a4b6e9d27c9f877876))
* **docs:** grammar improvements ([7ce23a1](https://github.com/automationutkarsh/mcp_test/commit/7ce23a1459575768162b29e1aa80017ebe0f9c37))
* **docs:** use top-level-await in example snippets ([e551f2b](https://github.com/automationutkarsh/mcp_test/commit/e551f2bd275557c98d658c3df37847020d9db2f3))
* improve publish-npm script --latest tag logic ([3482e9f](https://github.com/automationutkarsh/mcp_test/commit/3482e9fe9d570fe6fc00ee5b8d8f79391fcb479a))
* **internal:** add pure annotations, make base APIResource abstract ([1375a45](https://github.com/automationutkarsh/mcp_test/commit/1375a45312c9e81e80cf9bd61a94c499d2a896cf))
* **internal:** codegen related update ([1900993](https://github.com/automationutkarsh/mcp_test/commit/1900993b57a09e629ec61b66c025859bd96e73d6))
* **internal:** fix readablestream types in node 20 ([9fd6aba](https://github.com/automationutkarsh/mcp_test/commit/9fd6aba7b2a6f7f69014c71dc4be6e26c8b1228a))
* **internal:** update jest config ([64b8234](https://github.com/automationutkarsh/mcp_test/commit/64b82346a41ea0521f22e98f725163006c5308b8))
* make some internal functions async ([877f69d](https://github.com/automationutkarsh/mcp_test/commit/877f69d41053cb01956b17db3d8d25843cfb739b))
* **mcp:** formatting ([8bf95de](https://github.com/automationutkarsh/mcp_test/commit/8bf95de65523f201eb5a1dfcf95863eaa4be8073))
* **mcp:** provides high-level initMcpServer function and exports known clients ([2ae164c](https://github.com/automationutkarsh/mcp_test/commit/2ae164c558e313f207da5e2067df248b51b44fb9))
* **mcp:** remove duplicate assignment ([8ba6b9a](https://github.com/automationutkarsh/mcp_test/commit/8ba6b9a3aa269f22aedd4128d7f2ddfea1f2d728))
* **mcp:** rework imports in tools ([dbca709](https://github.com/automationutkarsh/mcp_test/commit/dbca70974e3c6e6d258f4001ff7638fb0d7a4550))
* **readme:** update badges ([9b74d33](https://github.com/automationutkarsh/mcp_test/commit/9b74d3341301f5dc33462d51d4133b4964375137))
* **readme:** use better example snippet for undocumented params ([bfe6c17](https://github.com/automationutkarsh/mcp_test/commit/bfe6c1720cfda8a93969da57303ddc2886537b4f))
* **ts:** reorder package.json imports ([5e59e06](https://github.com/automationutkarsh/mcp_test/commit/5e59e069a5481dbaae35a78471a919d15843b051))
* update SDK settings ([082536c](https://github.com/automationutkarsh/mcp_test/commit/082536c2b0862857651aa5f637eab9a5f5211330))
