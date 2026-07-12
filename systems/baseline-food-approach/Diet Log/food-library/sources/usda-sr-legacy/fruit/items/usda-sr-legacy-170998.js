/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "bottle",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    }
  ],
  "name": "Babyfood, fruit, banana and strawberry, junior",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 25.8,
    "energy_kcal": 457.0,
    "fat_g": 0.37,
    "fibre_g": 1.4,
    "folate_ug": 22.0,
    "iron_mg": 0.14,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 395.0,
    "protein_g": 0.71,
    "salt_g": 0.0025,
    "sat_fat_g": 0.121,
    "sodium_mg": 1.0,
    "sugar_g": 19.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170998",
  "state": "Raw",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
