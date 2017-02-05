export default function validateContact(data, props) {
  const errors = {};
  if(!data.name) {
    errors.name = '称呼不能为空!';
  }
  if(!data.info) {
    errors.info = '需求不能为空!';
  }
  if(!data.phone) {
    errors.phone = '联系方式不能为空!';
  } else if(!/^13[0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$/.test(data.phone)) {
    errors.phone = '手机号码格式不对'
  }
  return errors;
}
