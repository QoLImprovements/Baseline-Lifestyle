/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Fried vegetables",
  "id": "usda-fndds-2710065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fritter",
      "kind": "unit",
      "label": "1 fritter"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetable tempura",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 20.4,
    "energy_kcal": 239.0,
    "fat_g": 15.8,
    "fibre_g": 1.6,
    "folate_ug": 40.0,
    "iron_mg": 1.54,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 62.0,
    "potassium_mg": 179.0,
    "protein_g": 3.81,
    "salt_g": 0.03,
    "sat_fat_g": 2.32,
    "sodium_mg": 12.0,
    "sugar_g": 1.49,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 3.03,
    "vitamin_k_ug": 26.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710065",
  "state": "Unspecified",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
