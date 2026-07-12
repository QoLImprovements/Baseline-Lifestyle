/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-bean",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fried green beans",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 22.9,
    "energy_kcal": 223.0,
    "fat_g": 12.9,
    "fibre_g": 2.0,
    "folate_ug": 52.0,
    "iron_mg": 1.76,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 156.0,
    "protein_g": 4.04,
    "salt_g": 0.785,
    "sat_fat_g": 1.78,
    "sodium_mg": 314.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 29.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709869",
  "state": "Fried",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried",
    "fried-vegetables",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
