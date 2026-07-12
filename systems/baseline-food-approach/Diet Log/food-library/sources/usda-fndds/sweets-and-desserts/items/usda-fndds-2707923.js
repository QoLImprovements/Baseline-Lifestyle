/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Cookie, chocolate and vanilla sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 71.0,
    "energy_kcal": 464.0,
    "fat_g": 19.1,
    "fibre_g": 2.9,
    "folate_ug": 61.0,
    "iron_mg": 12.1,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 234.0,
    "protein_g": 5.21,
    "salt_g": 0.97,
    "sat_fat_g": 5.65,
    "sodium_mg": 388.0,
    "sugar_g": 40.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 27.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707923",
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
