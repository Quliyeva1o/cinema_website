import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import controller from '../../../API/requests';

const UserInfo = () => {
  const user = useSelector((state) => state.user); // Redux store'dan user bilgisini al
  const [userr, setUser] = useState(null); // Kullanıcı bilgilerini tutacak state

  useEffect(() => {
    if (user.id) {
      // Eğer Redux store'dan gelen user.id varsa API isteği yap
      controller.getOne('/api/users', user.id)
        .then((res) => {
          setUser(res.data); // API'den gelen veriyi state'e kaydet
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]); // useEffect, user state'i değiştiğinde tetiklenecek

  console.log(userr); // Konsola userr state'ini yazdır

  return (
    <div>
      {userr && ( // userr state'i doluysa bilgileri ekrana yazdır
        <div>
          <h2>User Information</h2>
          <p><strong>Username:</strong> {userr.username}</p>
          <p><strong>Email:</strong> {userr.email}</p>
          <p><strong>Role:</strong> {userr.role}</p>
          <p><strong>Registration Date:</strong> {new Date(userr.createdAt).toLocaleDateString()}</p>
          <p><strong>Receive Offers:</strong> {userr.receiveOffers ? 'Yes' : 'No'}</p>
          {/* Diğer bilgileri buraya ekleyebilirsiniz */}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
