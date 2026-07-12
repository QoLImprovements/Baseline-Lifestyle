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
  "id": "usda-sr-legacy-168085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "OLIVE GARDEN, spaghetti with meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 17.2,
    "energy_kcal": 508.0,
    "fat_g": 3.28,
    "fibre_g": 1.7,
    "folate_ug": 30.0,
    "iron_mg": 1.03,
    "magnesium_mg": 18.0,
    "omega3_g": 0.042,
    "phosphorus_mg": 60.0,
    "potassium_mg": 164.0,
    "protein_g": 5.8,
    "salt_g": 0.5225,
    "sat_fat_g": 1.02,
    "sodium_mg": 209.0,
    "sugar_g": 1.67,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168085",
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
