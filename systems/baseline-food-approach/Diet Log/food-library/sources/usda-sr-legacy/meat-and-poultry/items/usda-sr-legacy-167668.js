/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Chinese, fried rice, without meat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 32.8,
    "energy_kcal": 174.0,
    "fat_g": 2.96,
    "fibre_g": 1.1,
    "folate_ug": 6.0,
    "iron_mg": 0.66,
    "magnesium_mg": 10.0,
    "omega3_g": 0.113,
    "phosphorus_mg": 51.0,
    "potassium_mg": 76.0,
    "protein_g": 4.05,
    "salt_g": 0.9675,
    "sat_fat_g": 0.54,
    "sodium_mg": 387.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167668",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "meat-and-poultry",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
