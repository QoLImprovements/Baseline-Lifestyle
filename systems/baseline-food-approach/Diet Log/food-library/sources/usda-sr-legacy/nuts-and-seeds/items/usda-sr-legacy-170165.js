/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170165",
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
    }
  ],
  "name": "Nuts, chestnuts, chinese, dried",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 79.8,
    "energy_kcal": 1520.0,
    "fat_g": 1.81,
    "fibre_g": 0.0,
    "folate_ug": 110.0,
    "iron_mg": 2.29,
    "magnesium_mg": 137.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 726.0,
    "protein_g": 6.82,
    "salt_g": 0.0125,
    "sat_fat_g": 0.266,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 58.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170165",
  "state": "Dried",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "dried",
    "nut-and-seed-products",
    "nuts-and-seeds"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
