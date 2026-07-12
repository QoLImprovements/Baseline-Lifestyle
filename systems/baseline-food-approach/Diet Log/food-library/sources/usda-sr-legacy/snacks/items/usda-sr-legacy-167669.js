/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, steak fries",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 30.9,
    "energy_kcal": 255.0,
    "fat_g": 13.2,
    "fibre_g": 3.5,
    "folate_ug": 29.0,
    "iron_mg": 0.69,
    "magnesium_mg": 32.0,
    "omega3_g": 0.754,
    "phosphorus_mg": 117.0,
    "potassium_mg": 551.0,
    "protein_g": 3.26,
    "salt_g": 0.1075,
    "sat_fat_g": 2.37,
    "sodium_mg": 43.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 32.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167669",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
