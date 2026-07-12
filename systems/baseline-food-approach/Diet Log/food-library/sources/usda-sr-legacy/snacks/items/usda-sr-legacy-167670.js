/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "steak",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167670",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "CRACKER BARREL, grilled sirloin steak",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 848.0,
    "fat_g": 8.52,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.75,
    "magnesium_mg": 28.0,
    "omega3_g": 0.068,
    "phosphorus_mg": 249.0,
    "potassium_mg": 408.0,
    "protein_g": 31.5,
    "salt_g": 0.45,
    "sat_fat_g": 3.04,
    "sodium_mg": 180.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167670",
  "state": "Grilled",
  "subcategory": "Restaurant Foods",
  "tags": [
    "grilled",
    "restaurant-foods",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
