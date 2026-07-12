/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "ON THE BORDER, Mexican rice",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 34.2,
    "energy_kcal": 814.0,
    "fat_g": 4.86,
    "fibre_g": 1.1,
    "folate_ug": 52.0,
    "iron_mg": 1.18,
    "magnesium_mg": 15.0,
    "omega3_g": 0.233,
    "phosphorus_mg": 74.0,
    "potassium_mg": 131.0,
    "protein_g": 3.56,
    "salt_g": 1.6925,
    "sat_fat_g": 0.886,
    "sodium_mg": 677.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169031",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "grains-bread-and-pasta",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
