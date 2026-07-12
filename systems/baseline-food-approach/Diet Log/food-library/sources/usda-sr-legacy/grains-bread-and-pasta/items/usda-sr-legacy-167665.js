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
  "id": "usda-sr-legacy-167665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Restaurant, Mexican, spanish rice",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 31.2,
    "energy_kcal": 776.0,
    "fat_g": 5.29,
    "fibre_g": 1.2,
    "folate_ug": 50.0,
    "iron_mg": 1.15,
    "magnesium_mg": 13.0,
    "omega3_g": 0.238,
    "phosphorus_mg": 57.0,
    "potassium_mg": 116.0,
    "protein_g": 3.28,
    "salt_g": 1.32,
    "sat_fat_g": 1.0,
    "sodium_mg": 528.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167665",
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
