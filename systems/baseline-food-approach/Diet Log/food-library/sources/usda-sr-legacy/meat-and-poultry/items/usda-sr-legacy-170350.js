/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Skin and Breading",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 21.5,
    "energy_kcal": 1810.0,
    "fat_g": 32.3,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 1.73,
    "magnesium_mg": 19.0,
    "omega3_g": 0.157,
    "phosphorus_mg": 119.0,
    "potassium_mg": 192.0,
    "protein_g": 14.0,
    "salt_g": 1.9225,
    "sat_fat_g": 11.8,
    "sodium_mg": 769.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170350",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
