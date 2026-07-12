/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "serving-4-pieces-in-serving",
      "kind": "unit",
      "label": "serving 4 pieces in serving"
    }
  ],
  "name": "DENNY'S, chicken nuggets, star shaped, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.6,
    "energy_kcal": 377.0,
    "fat_g": 28.6,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 1.34,
    "magnesium_mg": 22.0,
    "omega3_g": 1.301,
    "phosphorus_mg": 254.0,
    "potassium_mg": 244.0,
    "protein_g": 16.3,
    "salt_g": 1.61,
    "sat_fat_g": 5.61,
    "sodium_mg": 644.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.91,
    "vitamin_k_ug": 36.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168079",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
