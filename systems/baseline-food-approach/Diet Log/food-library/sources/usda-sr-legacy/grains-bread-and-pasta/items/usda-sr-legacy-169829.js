/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Tortilla, blue corn, Sakwavikaviki (Hopi)",
  "nutritionPerBasis": {
    "calcium_mg": 174.0,
    "carbs_g": 58.1,
    "energy_kcal": 276.0,
    "fat_g": 1.4,
    "fibre_g": 3.4,
    "folate_ug": 0.0,
    "iron_mg": 2.89,
    "magnesium_mg": 32.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 339.0,
    "potassium_mg": 132.0,
    "protein_g": 7.83,
    "salt_g": 1.6575,
    "sat_fat_g": 0.287,
    "sodium_mg": 663.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169829",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
