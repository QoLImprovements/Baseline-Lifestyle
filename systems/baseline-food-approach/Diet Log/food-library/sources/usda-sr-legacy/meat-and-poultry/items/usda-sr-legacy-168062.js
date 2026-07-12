/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 301.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Italian, chicken parmesan without pasta",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 10.9,
    "energy_kcal": 854.0,
    "fat_g": 10.6,
    "fibre_g": 0.9,
    "folate_ug": 19.0,
    "iron_mg": 0.68,
    "magnesium_mg": 26.0,
    "omega3_g": 0.224,
    "phosphorus_mg": 227.0,
    "potassium_mg": 293.0,
    "protein_g": 16.2,
    "salt_g": 1.34,
    "sat_fat_g": 2.55,
    "sodium_mg": 536.0,
    "sugar_g": 2.79,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168062",
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
