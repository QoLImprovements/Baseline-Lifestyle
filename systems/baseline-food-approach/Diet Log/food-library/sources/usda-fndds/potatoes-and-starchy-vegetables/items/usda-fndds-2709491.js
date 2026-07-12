/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "skin-from-1-medium",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709491",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "skin-from-1-medium",
      "kind": "unit",
      "label": "Skin from 1 medium"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "skin-from-1-large",
      "kind": "unit",
      "label": "Skin from 1 large"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "skin-from-1-small",
      "kind": "unit",
      "label": "Skin from 1 small"
    }
  ],
  "name": "Potato skins, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 16.3,
    "energy_kcal": 199.0,
    "fat_g": 12.4,
    "fibre_g": 1.5,
    "folate_ug": 19.0,
    "iron_mg": 0.66,
    "magnesium_mg": 25.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 132.0,
    "potassium_mg": 376.0,
    "protein_g": 6.07,
    "salt_g": 1.0425,
    "sat_fat_g": 4.4,
    "sodium_mg": 417.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709491",
  "state": "Unspecified",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "french-fries-and-other-fried-white-potatoes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
