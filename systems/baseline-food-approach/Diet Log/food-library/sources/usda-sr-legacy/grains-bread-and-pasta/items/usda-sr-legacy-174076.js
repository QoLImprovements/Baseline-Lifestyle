/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, paratha, whole wheat, commercially prepared, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 45.4,
    "energy_kcal": 326.0,
    "fat_g": 13.2,
    "fibre_g": 9.6,
    "folate_ug": 10.0,
    "iron_mg": 1.61,
    "magnesium_mg": 37.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 120.0,
    "potassium_mg": 139.0,
    "protein_g": 6.36,
    "salt_g": 1.13,
    "sat_fat_g": 5.83,
    "sodium_mg": 452.0,
    "sugar_g": 4.15,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174076",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
