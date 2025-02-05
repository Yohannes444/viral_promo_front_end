import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of history

const InfluencerList = () => {
    const [influencers, setInfluencers] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();  // Initialize useNavigate for redirection

    useEffect(() => {
        const fetchInfluencers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/influencers`);
                setInfluencers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching influencers:', error);
                setLoading(false);
            }
        };

        fetchInfluencers();
    }, []);

    const calculateTotalFollowers = (platforms) => {
        return platforms.reduce((total, platform) => total + platform.followers, 0);
    };

    const handleLoadMoreClick = () => {
        // Redirect to the "more influencers" page using navigate
        navigate('/more-influencers');  // Adjust the URL as needed
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h2" gutterBottom>
            Meet Our Top Influencers
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <Grid container spacing={2} className='flex'>
                    {influencers.map((influencer) => (
                        <Grid item xs={12} sm={6} md={4} key={influencer._id}>
                            <Box sx={{ border: '1px solid #ddd', p: 2, borderRadius: '8px' }}>
                                {/* Image at the top of the card with fixed size */}
                                {influencer.photos.length > 0 && (
                                    <img
                                        src={influencer.photos[0]}  // Display first image
                                        alt="Influencer"
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                )}
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {influencer.userId.firstName} {influencer.userId.lastName}
                                </Typography>
                                <Typography variant="body2">
                                    Total Followers: {calculateTotalFollowers(influencer.platforms)}
                                </Typography>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    Platforms: {influencer.platforms.map(p => p.name).join(', ')}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
   <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant="contained" onClick={handleLoadMoreClick}>
                    More Influencers
                </Button>
            </Box>
        </Box>
    );
};

export default InfluencerList;
