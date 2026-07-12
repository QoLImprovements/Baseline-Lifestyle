/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, banana (Navajo)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 4.06,
    "energy_kcal": 90.0,
    "fat_g": 0.2,
    "fibre_g": 0.3,
    "folate_ug": 20.0,
    "iron_mg": 0.21,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 140.0,
    "protein_g": 0.84,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 3.36,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167629",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
