/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "shell",
      "kind": "unit",
      "label": "shell"
    }
  ],
  "name": "Puff pastry, frozen, ready-to-bake",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 45.1,
    "energy_kcal": 2300.0,
    "fat_g": 38.1,
    "fibre_g": 1.5,
    "folate_ug": 78.0,
    "iron_mg": 2.56,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 61.0,
    "protein_g": 7.3,
    "salt_g": 0.6225,
    "sat_fat_g": 9.64,
    "sodium_mg": 249.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172790",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
