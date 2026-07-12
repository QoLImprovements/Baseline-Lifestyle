/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Spinach",
  "id": "usda-fndds-2709618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach, fresh, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 3.01,
    "energy_kcal": 63.0,
    "fat_g": 4.1,
    "fibre_g": 1.8,
    "folate_ug": 97.0,
    "iron_mg": 1.2,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 524.0,
    "protein_g": 3.31,
    "salt_g": 0.635,
    "sat_fat_g": 0.528,
    "sodium_mg": 254.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 331.0,
    "vitamin_c_mg": 24.2,
    "vitamin_e_mg": 2.96,
    "vitamin_k_ug": 553.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709618",
  "state": "Cooked",
  "subcategory": "Spinach",
  "tags": [
    "cooked",
    "oils-and-fats",
    "spinach"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
