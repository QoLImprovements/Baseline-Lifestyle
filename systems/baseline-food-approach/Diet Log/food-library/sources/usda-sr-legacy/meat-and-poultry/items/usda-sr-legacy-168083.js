/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "order",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 604.0,
      "key": "order",
      "kind": "unit",
      "label": "order"
    }
  ],
  "name": "Restaurant, Chinese, chicken chow mein",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.29,
    "energy_kcal": 85.0,
    "fat_g": 2.8,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.67,
    "magnesium_mg": 11.0,
    "omega3_g": 0.134,
    "phosphorus_mg": 54.0,
    "potassium_mg": 124.0,
    "protein_g": 6.76,
    "salt_g": 0.7775,
    "sat_fat_g": 0.49,
    "sodium_mg": 311.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 22.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168083",
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
