"use client";
import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Stack, 
  Typography, 
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Faqs = ({ faqa }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const handleToggle = (itemId) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isExpanded = (itemId) => expandedItems.has(itemId);

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Stack spacing={6} alignItems="center">
        {/* Header */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            color: "text.primary",
            mb: 2,
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* FAQ Accordion */}
        <Box sx={{ width: "100%", maxWidth: "900px" }}>
          <Stack spacing={2}>
            {faqa.map((item, index) => {
              const expanded = isExpanded(item.id || index);
              
              return (
                <Box
                  key={item.id || index}
                  sx={{
                    borderRadius: 3,
                    border: "1px solid #e0e0e0",
                    backgroundColor: "white",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      borderColor: "primary.main",
                    },
                    ...(expanded && {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      borderColor: "primary.main",
                    }),
                  }}
                >
                  {/* Question Header */}
                  <Box
                    onClick={() => handleToggle(item.id || index)}
                    sx={{
                      p: 3,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "background-color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                      ...(expanded && {
                        backgroundColor: "primary.light",
                        color: "primary.contrastText",
                      }),
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.3,
                        pr: 2,
                      }}
                    >
                      {item.question}
                    </Typography>
                    
                    <IconButton
                      sx={{
                        transition: "transform 0.3s ease, color 0.2s ease",
                        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                        color: expanded ? "primary.contrastText" : "text.secondary",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>

                  {/* Answer Content */}
                  <Collapse 
                    in={expanded} 
                    timeout={400}
                    sx={{
                      "& .MuiCollapse-wrapper": {
                        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                    }}
                  >
                    <Box>
                      <Divider />
                      <Box sx={{ p: 3, pt: 2 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.6,
                            color: "text.secondary",
                            fontSize: "1rem",
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Stack>
        </Box>

        {/* Expand/Collapse All Button */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="button"
            onClick={() => {
              if (expandedItems.size === faqa.length) {
                setExpandedItems(new Set());
              } else {
                setExpandedItems(new Set(faqa.map((item, index) => item.id || index)));
              }
            }}
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "primary.main",
              fontWeight: 600,
              "&:hover": {
                color: "primary.dark",
              },
            }}
          >
            {expandedItems.size === faqa.length ? "Collapse All" : "Expand All"}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Faqs;