FROM node:14.17.3
RUN apt update && apt install libaio1

# x86
# RUN wget https://download.oracle.com/otn_software/linux/instantclient/211000/instantclient-basic-linux.x64-21.1.0.0.0.zip
# RUN unzip instantclient-basic-linux.x64-21.1.0.0.0.zip && rm instantclient-basic-linux.x64-21.1.0.0.0.zip
# RUN mkdir /opt/oracle
# RUN mv instantclient* /opt/oracle/
# RUN sh -c "echo /opt/oracle/instantclient_21_1 > /etc/ld.so.conf.d/oracle-instantclient.conf"

# arm
RUN wget https://download.oracle.com/otn_software/linux/instantclient/191000/instantclient-basic-linux.arm64-19.10.0.0.0dbru.zip
RUN unzip instantclient-basic-linux.arm64-19.10.0.0.0dbru.zip && rm instantclient-basic-linux.arm64-19.10.0.0.0dbru.zip
RUN mkdir /opt/oracle
RUN mv instantclient* /opt/oracle
RUN sh -c "echo /opt/oracle/instantclient_19_10 > /etc/ld.so.conf.d/oracle-instantclient.conf"

RUN ldconfig
RUN export LD_LIBRARY_PATH=/opt/oracle/instantclient_19_10:$LD_LIBRARY_PATH
WORKDIR /konnect
ADD . /konnect

RUN wget $(cat /run/secrets/wallet_url)
RUN unzip Wallet_konnect.zip && rm Wallet_konnect.zip

RUN npm i
EXPOSE 8081
RUN npm run build
CMD ["npm","start"]