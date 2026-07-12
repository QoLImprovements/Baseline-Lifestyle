/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, blue corn, somiviki (Hopi)",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 39.8,
    "energy_kcal": 186.0,
    "fat_g": 1.53,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 1.58,
    "magnesium_mg": 43.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 94.0,
    "potassium_mg": 114.0,
    "protein_g": 3.1,
    "salt_g": 0.0225,
    "sat_fat_g": 0.289,
    "sodium_mg": 9.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169830",
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
