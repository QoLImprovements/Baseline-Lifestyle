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
  "id": "usda-sr-legacy-169842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, chicken tenderloin platter, fried",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 20.3,
    "energy_kcal": 1220.0,
    "fat_g": 15.5,
    "fibre_g": 0.7,
    "folate_ug": 7.0,
    "iron_mg": 0.59,
    "magnesium_mg": 28.0,
    "omega3_g": 0.834,
    "phosphorus_mg": 268.0,
    "potassium_mg": 319.0,
    "protein_g": 18.1,
    "salt_g": 2.185,
    "sat_fat_g": 2.76,
    "sodium_mg": 874.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169842",
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
