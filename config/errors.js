
var errors = {



  // 通用
  10000: 'IP不能为空',
  10001: '未知错误',
  10002: '储存数据失败',
  10003: '更新数据失败',
  10004: '查询数据失败',
  10005: '参数不完整',
  10006: '无效的access_token',
  10007: '访问被拒绝',
  10008: '您被禁言，{days}天{hours}小时{mintues}分钟后解除禁言',

  // 帖子
  11000: '帖子不存在',
  11001: '帖子类型错误',
  11002: '标题不能为空',
  11003: '标题不能大于120字符',
  11004: '内容不能大于20000个字符',
  11005: '帖子更新失败',

  // 评论
  12000: '评论不存在',
  12001: '回复的评论不属于该帖子',
  12002: '回复的评论不存在',
  12003: '每个帖子，只能评论一次',
  12004: '评论内容不能为空',
  12005: '更新评论失败',
  12006: '不能评论自己的帖子',

  // 用户
  13000: '用户不存在',
  13001: '性别格式错误',
  13002: '个性签名长度不能大于80个字符',
  13003: '名字格式错误',
  13004: '{days}天{hours}小时{mintues}分钟后，才能修改名字',
  13005: '邮箱地址不能为空',
  13006: '密码不能为空',
  13007: '登录失败，账号或密码错误',
  13008: '头像不能为空',

  // 注册
  // 13008: '注册失败',
  13009: '邮箱已经被注册',
  13010: '验证码无效',
  13011: '名字长度不能为空，或大于了20个字符',
  13012: '邮箱格式错误或长度大于了30个字符',
  13013: '密码长度需6-30个字符范围',
  13014: '性别格式错误',
  13015: '邮箱已经验证',
  13016: '发送邮件失败',
  13017: '当前密码与新密码不能相同',
  13018: '当前密码错误',
  13019: '设置验证码失败',
  13020: '发送验证码失败',
  13021: '图片文件不能大于{size}',
  13022: '图片类型错误，请上传jpg、png、jepg、gif格式的文件',
  13023: '账号不能为空',

  // 关注
  14000: '必须有一个关注对象',
  14001: '已经关注了',
  14002: '没有关注该对象',

  // 话题
  15000: '话题不存在',
  15001: '不能关注该话题',
  15002: '不能关注自己的帖子',
  15003: '话题已经存在',
  15004: '父话题不存在',
  
  // 赞
  16000: '点赞类别不存在',
  16001: '点赞目标对象不存在',
  16002: '已经点赞',
  16003: '点赞失败',
  16004: '点赞记录不存在',
  16005: '不能点赞自己',

  // 七牛
  17000: '获取七牛token失败',

  // 第三方社交账号，绑定，创建，等等
  20000: '绑定成功',
  20001: '绑定失败',
  20002: '创建用户失败',
  20003: '创建账户失败',
  20004: '绑定失败，已被其他账户绑定',

  // 手机绑定
  30000: '短信发送失败',
  30001: '无效的手机号码',
  30002: '该手机号码已经被注册',
  30003: '该手机号码不存在',
  30004: '手机区号不存在',

  // 验证码
  40000: '验证码无效',
  40001: '验证码与邮箱不匹配',
  40002: '验证码与手机号不匹配',

  // 举报
  50000: '您已提交过了',



  90000: '参数类型必须是{type}',
  90001: '不合法的参数{params}'
}


module.exports = errors
