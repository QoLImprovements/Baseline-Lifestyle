/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "12-oz-serving-2-7-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "12-oz-serving-2-7-oz",
      "kind": "unit",
      "label": "12 oz serving 2.7 oz"
    }
  ],
  "name": "Sausage, pork and beef, with cheddar cheese, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 2.13,
    "energy_kcal": 1240.0,
    "fat_g": 25.8,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.73,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 206.0,
    "protein_g": 12.9,
    "salt_g": 2.12,
    "sat_fat_g": 9.48,
    "sodium_mg": 848.0,
    "sugar_g": 0.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172955",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
