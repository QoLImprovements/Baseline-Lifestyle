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
  "id": "usda-fndds-2707972",
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
      "gramsPerUnit": 19.0,
      "key": "1-pepperidge-farm-distinctive-chantilly-about-2-dia",
      "kind": "unit",
      "label": "1 Pepperidge Farm Distinctive Chantilly (about 2\" dia)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-pepperidge-farm-cappucino",
      "kind": "unit",
      "label": "1 Pepperidge Farm Cappucino"
    }
  ],
  "name": "Cookie, butter or sugar, with fruit and/or nuts",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 65.0,
    "energy_kcal": 470.0,
    "fat_g": 21.1,
    "fibre_g": 1.6,
    "folate_ug": 68.0,
    "iron_mg": 2.17,
    "magnesium_mg": 26.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 125.0,
    "potassium_mg": 204.0,
    "protein_g": 6.52,
    "salt_g": 0.5675,
    "sat_fat_g": 9.32,
    "sodium_mg": 227.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707972",
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
