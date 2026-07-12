/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172689",
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
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, whole-wheat, commercially prepared, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 51.2,
    "energy_kcal": 1280.0,
    "fat_g": 4.07,
    "fibre_g": 7.5,
    "folate_ug": 52.0,
    "iron_mg": 2.96,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 326.0,
    "protein_g": 16.3,
    "salt_g": 1.4125,
    "sat_fat_g": 0.922,
    "sodium_mg": 565.0,
    "sugar_g": 5.77,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172689",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
