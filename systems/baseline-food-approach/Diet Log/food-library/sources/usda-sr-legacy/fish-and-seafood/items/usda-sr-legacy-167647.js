/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167647",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, salmon, king, with skin, kippered, (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 0.0,
    "energy_kcal": 876.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.55,
    "magnesium_mg": 29.0,
    "omega3_g": 1.36,
    "phosphorus_mg": 270.0,
    "potassium_mg": 390.0,
    "protein_g": 23.2,
    "salt_g": 2.175,
    "sat_fat_g": 2.44,
    "sodium_mg": 870.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167647",
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
