import styles from "./styles/Form.module.css";

function Step1Input({ label, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{label}</div>
      <input type="tel" placeholder={placeholder} />
    </div>
  );
}

export default function Step1() {
  const cities = [
    {
      name: "基隆市",
      value: "KLU",
    },
    {
      name: "新北市",
      value: "TPH",
    },
    {
      name: "臺北市",
      value: "TPE",
    },
    {
      name: "桃園市",
      value: "TYC",
    },
    {
      name: "新竹縣",
      value: "HSH",
    },
    {
      name: "新竹市",
      value: "HSC",
    },
    {
      name: "苗栗市",
      value: "MAC",
    },
    {
      name: "苗栗縣",
      value: "MAL",
    },
    {
      name: "臺中市",
      value: "TXG",
    },
    {
      name: "彰化縣",
      value: "CWH",
    },
    {
      name: "彰化市",
      value: "CWS",
    },
    {
      name: "南投市",
      value: "NTC",
    },
    {
      name: "南投縣",
      value: "NTO",
    },
    {
      name: "雲林縣",
      value: "YLH",
    },
    {
      name: "嘉義縣",
      value: "CHY",
    },
    {
      name: "嘉義市",
      value: "CYI",
    },
    {
      name: "臺南市",
      value: "TNN",
    },
    {
      name: "高雄市",
      value: "KHH",
    },
    {
      name: "屏東縣",
      value: "IUH",
    },
    {
      name: "屏東市",
      value: "PTS",
    },
    {
      name: "宜蘭縣",
      value: "ILN",
    },
    {
      name: "宜蘭市",
      value: "ILC",
    },
    {
      name: "花蓮縣",
      value: "HWA",
    },
    {
      name: "花蓮市",
      value: "HWC",
    },
    {
      name: "臺東市",
      value: "TTC",
    },
    {
      name: "臺東縣",
      value: "TTT",
    },
    {
      name: "澎湖縣",
      value: "PEH",
    },
    {
      name: "金門縣",
      value: "KMN",
    },
    {
      name: "連江縣",
      value: "LNN",
    },
  ];

  return (
    <form className={styles.address} data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={styles.formBody1}>
        <div className={styles.formRow}>
          <div className={styles.inputGroupSelect}>
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select>
                <option value="mr" selected>
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <Step1Input label={"姓名"} placeholder={"請輸入姓名"} />
        </div>
        <div className={styles.formRow}>
          <Step1Input label={"電話"} placeholder={"請輸入行動電話"} />
          <Step1Input label={"Email"} placeholder={"請輸入電子郵件"} />
        </div>
        <div className={styles.formRow}>
          <div className={styles.inputGroupSelect}>
            <div className={styles.inputLabel}>縣市</div>
            <div className={styles.selectContainer}>
              <select required>
                <option value="">請選擇縣市</option>
                {cities.map((city) => (
                  <option value={city.value} key={city.value}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Step1Input label={"地址"} placeholder={"請輸入地址"} />
        </div>
      </section>
    </form>
  );
}
