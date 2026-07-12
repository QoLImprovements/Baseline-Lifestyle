/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Smelt, dried (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 1600.0,
    "carbs_g": 0.0,
    "energy_kcal": 386.0,
    "fat_g": 17.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.4,
    "magnesium_mg": 89.0,
    "omega3_g": 2.27,
    "phosphorus_mg": 1400.0,
    "potassium_mg": 1000.0,
    "protein_g": 56.2,
    "salt_g": 1.05,
    "sat_fat_g": 3.59,
    "sodium_mg": 420.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 139.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167654",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
