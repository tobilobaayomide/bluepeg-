import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #007BFF 0%, #0056B3 50%, #003D82 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            width: '20px',
            height: '16px',
            background: 'white',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '2px',
          }}
        >
          <div style={{ width: '16px', height: '2px', background: '#007BFF' }} />
          <div style={{ width: '16px', height: '2px', background: '#007BFF' }} />
          <div style={{ width: '12px', height: '2px', background: '#007BFF' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '6px',
            height: '6px',
            background: '#00FF87',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
