/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 3 brands, chilled and frozen",
  "id": "cofid-current-19-490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, 98-99% beef, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.1,
    "energy_kcal": 329.0,
    "fat_g": 23.9,
    "fibre_g": 0.7,
    "folate_ug": 8.0,
    "iron_mg": 2.8,
    "magnesium_mg": 26.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 240.0,
    "potassium_mg": 420.0,
    "protein_g": 28.5,
    "salt_g": 1.175,
    "sat_fat_g": 10.7,
    "sodium_mg": 470.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-490",
  "state": "Fried",
  "subcategory": "MBG",
  "tags": [
    "fried",
    "mbg",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
