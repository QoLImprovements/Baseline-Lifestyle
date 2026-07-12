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
  "id": "usda-sr-legacy-169005",
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
  "name": "Wocas, tuber, cooked, Oregon, yellow pond lily (Klamath)",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 7.06,
    "energy_kcal": 34.0,
    "fat_g": 0.35,
    "fibre_g": 2.3,
    "folate_ug": 5.0,
    "iron_mg": 1.21,
    "magnesium_mg": 3.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 13.0,
    "potassium_mg": 187.0,
    "protein_g": 0.69,
    "salt_g": 0.025,
    "sat_fat_g": 0.041,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169005",
  "state": "Cooked",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "cooked",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
