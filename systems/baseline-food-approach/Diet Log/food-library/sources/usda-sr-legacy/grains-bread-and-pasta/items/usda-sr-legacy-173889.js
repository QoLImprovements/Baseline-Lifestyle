/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, Honeycomb Cereal",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 86.6,
    "energy_kcal": 1650.0,
    "fat_g": 2.93,
    "fibre_g": 3.2,
    "folate_ug": 313.0,
    "iron_mg": 8.44,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 142.0,
    "protein_g": 6.01,
    "salt_g": 1.3825,
    "sat_fat_g": 1.29,
    "sodium_mg": 553.0,
    "sugar_g": 31.5,
    "vitamin_a_ug": 678.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173889",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
