/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "strip",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "strip",
      "kind": "unit",
      "label": "strip"
    }
  ],
  "name": "Whale, beluga, meat, dried (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 1370.0,
    "fat_g": 5.34,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 72.4,
    "magnesium_mg": 63.0,
    "omega3_g": 0.186,
    "phosphorus_mg": 549.0,
    "potassium_mg": 800.0,
    "protein_g": 69.9,
    "salt_g": 0.55,
    "sat_fat_g": 1.2,
    "sodium_mg": 220.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169795",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
