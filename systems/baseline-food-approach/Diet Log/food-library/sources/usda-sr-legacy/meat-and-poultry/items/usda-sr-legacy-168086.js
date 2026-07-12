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
  "id": "usda-sr-legacy-168086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 537.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CARRABBA'S ITALIAN GRILL, spaghetti with meat sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 15.7,
    "energy_kcal": 122.0,
    "fat_g": 3.92,
    "fibre_g": 1.5,
    "folate_ug": 30.0,
    "iron_mg": 0.89,
    "magnesium_mg": 15.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 58.0,
    "potassium_mg": 187.0,
    "protein_g": 5.87,
    "salt_g": 0.675,
    "sat_fat_g": 1.1,
    "sodium_mg": 270.0,
    "sugar_g": 1.96,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168086",
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
