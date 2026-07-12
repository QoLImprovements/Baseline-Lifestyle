/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Latino, tripe soup",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 4.07,
    "energy_kcal": 309.0,
    "fat_g": 2.58,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.68,
    "magnesium_mg": 10.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 42.0,
    "potassium_mg": 81.0,
    "protein_g": 8.61,
    "salt_g": 1.0275,
    "sat_fat_g": 1.04,
    "sodium_mg": 411.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168069",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
