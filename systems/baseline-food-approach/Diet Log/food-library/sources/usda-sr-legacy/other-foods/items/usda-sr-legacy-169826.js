/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169826",
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
  "name": "Wocas, dried seeds, Oregon, yellow pond lily (Klamath)",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 80.0,
    "energy_kcal": 361.0,
    "fat_g": 1.07,
    "fibre_g": 19.2,
    "folate_ug": 5.0,
    "iron_mg": 1.47,
    "magnesium_mg": 86.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 229.0,
    "potassium_mg": 553.0,
    "protein_g": 7.9,
    "salt_g": 0.0625,
    "sat_fat_g": 0.147,
    "sodium_mg": 25.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 35.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169826",
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
