/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-girl-scout-cookie",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707966",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-girl-scout-cookie",
      "kind": "unit",
      "label": "1 Girl Scout cookie"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-keebler-middle",
      "kind": "unit",
      "label": "1 Keebler Middle"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    }
  ],
  "name": "Cookie, shortbread, with icing or filling",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 62.6,
    "energy_kcal": 515.0,
    "fat_g": 28.3,
    "fibre_g": 2.1,
    "folate_ug": 67.0,
    "iron_mg": 2.95,
    "magnesium_mg": 32.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 77.0,
    "potassium_mg": 138.0,
    "protein_g": 5.05,
    "salt_g": 0.7075,
    "sat_fat_g": 10.2,
    "sodium_mg": 283.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707966",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
