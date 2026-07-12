/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-little-debbie-fudge-crispy-bar",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-little-debbie-fudge-crispy-bar",
      "kind": "unit",
      "label": "1 Little Debbie Fudge Crispy Bar"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-little-debbie-cookie-bar",
      "kind": "unit",
      "label": "1 Little Debbie Cookie Bar"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-fudge-stick",
      "kind": "unit",
      "label": "1 fudge stick"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-wafer",
      "kind": "unit",
      "label": "1 wafer"
    }
  ],
  "name": "Cookie, sugar wafer, chocolate-covered",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 66.0,
    "energy_kcal": 526.0,
    "fat_g": 27.6,
    "fibre_g": 3.4,
    "folate_ug": 15.0,
    "iron_mg": 1.24,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 311.0,
    "protein_g": 3.45,
    "salt_g": 0.345,
    "sat_fat_g": 17.2,
    "sodium_mg": 138.0,
    "sugar_g": 51.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707919",
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
