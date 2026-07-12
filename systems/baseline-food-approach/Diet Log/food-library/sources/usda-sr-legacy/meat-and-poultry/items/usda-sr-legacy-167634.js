/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Mutton, cooked, roasted (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.08,
    "energy_kcal": 234.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.76,
    "magnesium_mg": 31.0,
    "omega3_g": 0.147,
    "phosphorus_mg": 272.0,
    "potassium_mg": 409.0,
    "protein_g": 33.4,
    "salt_g": 0.3375,
    "sat_fat_g": 5.14,
    "sodium_mg": 135.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167634",
  "state": "Roasted",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
