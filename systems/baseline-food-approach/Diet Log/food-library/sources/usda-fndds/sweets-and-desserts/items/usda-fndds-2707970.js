/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-miniature-bite-size",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-2-1-4-dia-include-snickerdoodles",
      "kind": "unit",
      "label": "1 2-1/4\" dia (include Snickerdoodles)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-lemon-cooler",
      "kind": "unit",
      "label": "1 Lemon Cooler"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cup-crushed",
      "kind": "unit",
      "label": "1 cup, crushed"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Cookie, butter or sugar",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 67.3,
    "energy_kcal": 464.0,
    "fat_g": 19.6,
    "fibre_g": 1.3,
    "folate_ug": 72.0,
    "iron_mg": 2.24,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 99.0,
    "potassium_mg": 87.0,
    "protein_g": 5.35,
    "salt_g": 0.9625,
    "sat_fat_g": 7.67,
    "sodium_mg": 385.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.07,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707970",
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
