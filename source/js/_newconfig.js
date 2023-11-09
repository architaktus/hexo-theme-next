/**
 * 点击非有效内容则退出菜单
 * 在js/schemes/muse中设置
document.querySelector('.sidebar').addEventListener('click', event => {
    if (
        event.target === document.querySelector('main') ||
        event.target === document.querySelector('aside')
        ) {
      onPopupClose();
    }
  });
   */