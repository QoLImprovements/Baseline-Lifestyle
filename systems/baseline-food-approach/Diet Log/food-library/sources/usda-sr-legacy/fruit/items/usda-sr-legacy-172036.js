/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "sundae",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "sundae",
      "kind": "unit",
      "label": "sundae"
    }
  ],
  "name": "Fast foods, sundae, strawberry",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 29.2,
    "energy_kcal": 732.0,
    "fat_g": 5.13,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.21,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 177.0,
    "protein_g": 4.09,
    "salt_g": 0.15,
    "sat_fat_g": 2.44,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172036",
  "state": "Raw",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
