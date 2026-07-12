/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "strip",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "filet",
      "kind": "unit",
      "label": "filet"
    }
  ],
  "name": "Salmon, red (sockeye), filets with skin, smoked (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 0.0,
    "energy_kcal": 1440.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.06,
    "magnesium_mg": 58.0,
    "omega3_g": 2.735,
    "phosphorus_mg": 650.0,
    "potassium_mg": 960.0,
    "protein_g": 60.6,
    "salt_g": 0.1275,
    "sat_fat_g": 2.59,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169813",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
