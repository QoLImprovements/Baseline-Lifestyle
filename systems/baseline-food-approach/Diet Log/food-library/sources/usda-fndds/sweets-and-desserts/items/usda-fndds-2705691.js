/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705691",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pudding, chocolate, made from dry mix, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 10.5,
    "energy_kcal": 76.0,
    "fat_g": 2.16,
    "fibre_g": 0.5,
    "folate_ug": 2.0,
    "iron_mg": 0.24,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 222.0,
    "potassium_mg": 242.0,
    "protein_g": 3.48,
    "salt_g": 0.635,
    "sat_fat_g": 1.23,
    "sodium_mg": 254.0,
    "sugar_g": 4.56,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705691",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
