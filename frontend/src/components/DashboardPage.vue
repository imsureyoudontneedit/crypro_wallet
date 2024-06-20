<template>

  <div class="profile-content w-100">

    <div class="profile-card main-card">

      <div class="container-stats d-flex justify-content-between">
        <div class="stats-block d-flex aling-items-center">
          <div
            class="stats-container-icon d-flex justify-content-center align-items-center"
          >
            <img src="../assets/icons/total.png" alt="" class="stats-icon" />
          </div>

          <div class="stats-content d-flex flex-column justify-content-center">
            <h3 class="stats-title">Total assets</h3>
            <div class="stats-text">$ 90.000</div>
          </div>
        </div>

        <div class="stats-block d-flex aling-items-center">
          <div
            class="stats-container-icon d-flex justify-content-center align-items-center"
          >
            <img src="../assets/icons/total.png" alt="" class="stats-icon" />
          </div>

          <div class="stats-content d-flex flex-column justify-content-center">
            <h3 class="stats-title">Total assets</h3>
            <div class="stats-text">$ 90.000</div>
          </div>
        </div>

        <div class="stats-block d-flex aling-items-center">
          <div
            class="stats-container-icon d-flex justify-content-center align-items-center"
          >
            <img src="../assets/icons/apy.png" alt="" class="stats-icon" />
          </div>

          <div class="stats-content d-flex flex-column justify-content-center">
            <h3 class="stats-title">Total assets</h3>
            <div class="stats-text">$ 90.000</div>
          </div>
        </div>
      </div>

      <div class="container-stats-crypto d-flex align-items-center">
        <div class="container-crypto-select d-flex align-items-center">
          <div class="container-crypto-image">
            <img
              src="../assets/icons/ethereum.png"
              style="width: 22px"
              alt=""
              class="crypto-image"
            />
          </div>

          <div class="crypto-name">ETH</div>
        </div>
        <div class="stats-text">$ 90.000</div>
      </div>

      <div class="container-crypto-chart">
        <img src="../assets/icons/chart.png" alt="" />
        <eth-chart/>
      </div>
    </div>

    <div class="profile-card main-card">
      <div class="container-tokens">
        <h2 class="tokens-title title">Tokens</h2>

        <div class="container-tokens-list d-flex flex-column">
          <div class="row align-items-center">
            <div class="col-8 col-lg-5">
              <h5 class="list-title">Name</h5>
            </div>
            <div class="col-8 col-lg-2">
              <h5 class="list-title text-center">Balance</h5>
            </div>
            <div class="col-8 col-lg-3">
              <h5 class="list-title text-center">Profit</h5>
            </div>
            <div class="col-8 col-lg-2">
              <h5 class="list-title text-center">Action</h5>
            </div>
          </div>
          

            <div class="row align-items-center">
              <div class="col-8 col-lg-5">
                <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
            <img
              src="../assets/icons/btc.png"
              style="width: 32px"
              alt=""
              class="crypto-image"
            />
                    
          </div>
          <span>Bitcoin</span>
            </div>
              </div>
              <div class="col-8 col-lg-2">
                <div class="list-text text-center">1</div>
              </div>
              <div class="col-8 col-lg-3">
                <div class="list-text text-center">0.003 BTC</div>
              </div>
              <div class="col-8 col-lg-2">
                <div class="list-text list-btn text-center">Add</div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-8 col-lg-5">
                <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
            <img
              src="../assets/icons/ethereum.png"
              style="width: 32px"
              alt=""
              class="crypto-image"
            />
                    
          </div>
          <span>Ethereum</span>
            </div>
              </div>
              <div class="col-8 col-lg-2">
                <div class="list-text text-center">1</div>
              </div>
              <div class="col-8 col-lg-3">
                <div class="list-text text-center">0.003 BTC</div>
              </div>
              <div class="col-8 col-lg-2">
                <div class="list-text list-btn text-center">Add</div>
              </div>
            </div>



          </div>
      </div>
    </div>


    <div class="profile-card sub-card">
        <div class="container-assets">

            <h2 class="assets-title title">Assets</h2>

            <div class="container-assets-list">
               
               
               
                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
                                <img
                                src="../assets/icons/btc.png"
                                style="width: 32px"
                                alt=""
                                class="crypto-image"
                                />
                                        
                            </div>
                            <span>Bitcoin</span>
                        </div>
                
                    </div>


                    <div class="col-6 text-end">
                    $ 23.3B
                    </div>

                        
                        <div class="col-9 mt-2 d-flex align-items-center">
                            <div class="progress w-100">
                                <div class="progress-bar" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div class="col-3 mt-2">
                            <span class="progress-text">

                                75%
                            </span>

                    </div>
                </div>



                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
                                <img
                                src="../assets/icons/eth.png"
                                style="width: 32px"
                                alt=""
                                class="crypto-image"
                                />
                                        
                            </div>
                            <span>Ethereum</span>
                        </div>
                
                    </div>


                    <div class="col-6 text-end">
                    $ 23.3B
                    </div>

                        
                        <div class="col-9 mt-2 d-flex align-items-center">
                            <div class="progress w-100">
                                <div class="progress-bar" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div class="col-3 mt-2">
                            <span class="progress-text">

                                75.5%
                            </span>

                    </div>
                </div>


                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
                                <img
                                src="../assets/icons/shiba.png"
                                style="width: 32px"
                                alt=""
                                class="crypto-image"
                                />
                                        
                            </div>
                            <span>Shiba</span>
                        </div>
                
                    </div>


                    <div class="col-6 text-end">
                    $ 23.3B
                    </div>

                        
                        <div class="col-9 mt-2 d-flex align-items-center">
                            <div class="progress w-100">
                                <div class="progress-bar" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div class="col-3 mt-2">
                            <span class="progress-text">

                                75.5%
                            </span>

                    </div>
                </div>


                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
                                <img
                                src="../assets/icons/solana.png"
                                style="width: 32px"
                                alt=""
                                class="crypto-image"
                                />
                                        
                            </div>
                            <span>Solana</span>
                        </div>
                
                    </div>


                    <div class="col-6 text-end">
                    $ 23.3B
                    </div>

                        
                        <div class="col-9 mt-2 d-flex align-items-center">
                            <div class="progress w-100">
                                <div class="progress-bar" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div class="col-3 mt-2">
                            <span class="progress-text">

                                75.5%
                            </span>

                    </div>
                </div>


                <div class="row align-items-center">
                    <div class="col-6">
                        <div class="list-text list-text-name d-flex align-items-center"><div class="container-list-image">
                                <img
                                src="../assets/icons/tether.png"
                                style="width: 32px"
                                alt=""
                                class="crypto-image"
                                />
                                        
                            </div>
                            <span>Tether</span>
                        </div>
                
                    </div>


                    <div class="col-6 text-end">
                    $ 23.3B
                    </div>

                        
                        <div class="col-9 mt-2 d-flex align-items-center">
                            <div class="progress w-100">
                                <div class="progress-bar" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                        </div>
                        <div class="col-3 mt-2">
                            <span class="progress-text">

                                75.5%
                            </span>

                    </div>
                </div>


            </div>
        </div>

        
    </div>
    <div class="profile-card sub-card">

<div class="container-community text-center d-flex align-items-center flex-column">
    <div class="container-community-image">
        <img
        src="../assets/image/community/community.png"
        alt=""
        class="crypto-image"
        />
    </div>
    <h2 class="community-title title">Join Our Community</h2>
    <p class="community-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button class="community-btn">Join Now</button>
</div>
</div>
  </div>

</template>

<script>
import EthChart from './Eth.vue'
export default {
    components: { EthChart },
}
</script>

<style>
@import "../assets/css/profile.css";
.stats-block {
  gap: 15px;
}

.stats-title {
  font-size: 14px;
  margin: 0;
}

.stats-text {
  font-size: 24px;
}
.stats-container-icon {
  padding: 14px;
  border-radius: 13.75px;
  background: #b0b0b01a;
}

.container-stats-crypto {
  margin-top: 55px;
  gap: 20px;
}

.container-crypto-select {
  padding: 5px 10px;
  border-radius: 25px;
  gap: 5px;
  background: #00000066;
}
.crypto-name {
  font-size: 12px;
}

.list-title {
  font-size: 14px;
  color: #878787;
}

.container-tokens-list{
    gap:25px;
    margin-top: 20px;
}

.list-text {
    font-size: 16px;
}
.list-text-name{
    gap: 12px;
}

.list-btn{
    padding: 5px 20px;
    background-color: #FFFFFF1A;
    border-radius: 6px;
}

.container-assets-list{
    display:flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}
.progress{
    height: 8px;
}
.progress-bar{
    background: linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%);

}
.progress-text{
    font-size: 14px;
}


.container-community{
    gap: 15px;
}

.community-text{
    font-size: 12px;
}

.community-btn{

    padding: 10px 0;
    width: 100%;
    border-radius: 12px;
    background-color: #2B2B2B;
    outline: none;
    border: none;
    color: white;
}

</style>