/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "12-inch-sub",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 418.0,
      "key": "12-inch-sub",
      "kind": "unit",
      "label": "12 inch sub"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "6-inch-sub",
      "kind": "unit",
      "label": "6 inch sub"
    }
  ],
  "name": "Fast foods, submarine sandwich, meatball marinara on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 26.0,
    "energy_kcal": 917.0,
    "fat_g": 8.45,
    "fibre_g": 2.1,
    "folate_ug": 79.0,
    "iron_mg": 2.32,
    "magnesium_mg": 29.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 97.0,
    "potassium_mg": 275.0,
    "protein_g": 9.77,
    "salt_g": 1.0925,
    "sat_fat_g": 3.12,
    "sodium_mg": 437.0,
    "sugar_g": 4.98,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170709",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
