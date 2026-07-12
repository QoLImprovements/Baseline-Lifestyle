/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dried fruits",
  "id": "usda-fndds-2709204",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-fig",
      "kind": "unit",
      "label": "1 fig"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fig, dried",
  "nutritionPerBasis": {
    "calcium_mg": 162.0,
    "carbs_g": 63.9,
    "energy_kcal": 277.0,
    "fat_g": 0.92,
    "fibre_g": 9.8,
    "folate_ug": 9.0,
    "iron_mg": 2.03,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 680.0,
    "protein_g": 3.3,
    "salt_g": 0.025,
    "sat_fat_g": 0.144,
    "sodium_mg": 10.0,
    "sugar_g": 47.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 15.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709204",
  "state": "Dried",
  "subcategory": "Dried fruits",
  "tags": [
    "dried",
    "dried-fruits",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
