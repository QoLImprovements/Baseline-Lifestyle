/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, farm raised catfish platter",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 5.31,
    "energy_kcal": 1120.0,
    "fat_g": 17.0,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 0.71,
    "magnesium_mg": 34.0,
    "omega3_g": 0.772,
    "phosphorus_mg": 470.0,
    "potassium_mg": 434.0,
    "protein_g": 22.9,
    "salt_g": 1.035,
    "sat_fat_g": 3.25,
    "sodium_mg": 414.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 24.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168075",
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
