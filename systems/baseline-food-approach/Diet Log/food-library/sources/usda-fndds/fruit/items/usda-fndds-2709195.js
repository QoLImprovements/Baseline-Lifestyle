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
  "id": "usda-fndds-2709195",
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
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dried, fruit, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 78.6,
    "energy_kcal": 298.0,
    "fat_g": 0.62,
    "fibre_g": 4.8,
    "folate_ug": 10.0,
    "iron_mg": 1.3,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 531.0,
    "protein_g": 2.28,
    "salt_g": 0.08,
    "sat_fat_g": 0.104,
    "sodium_mg": 32.0,
    "sugar_g": 66.3,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709195",
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
