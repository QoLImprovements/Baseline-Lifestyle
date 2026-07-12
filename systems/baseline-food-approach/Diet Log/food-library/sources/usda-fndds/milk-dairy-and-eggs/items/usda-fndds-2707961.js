/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-sandwich",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707961",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Cookie, raisin sandwich, cream-filled",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 55.6,
    "energy_kcal": 398.0,
    "fat_g": 18.3,
    "fibre_g": 2.6,
    "folate_ug": 38.0,
    "iron_mg": 1.88,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 136.0,
    "protein_g": 2.61,
    "salt_g": 1.25,
    "sat_fat_g": 5.23,
    "sodium_mg": 500.0,
    "sugar_g": 31.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.21,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707961",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
