/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Onions",
  "id": "usda-fndds-2709953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Onions, green, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 8.37,
    "energy_kcal": 63.0,
    "fat_g": 3.21,
    "fibre_g": 3.0,
    "folate_ug": 62.0,
    "iron_mg": 1.69,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 315.0,
    "protein_g": 2.09,
    "salt_g": 0.4025,
    "sat_fat_g": 0.82,
    "sodium_mg": 161.0,
    "sugar_g": 2.66,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 238.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709953",
  "state": "Cooked",
  "subcategory": "Onions",
  "tags": [
    "cooked",
    "onions",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
