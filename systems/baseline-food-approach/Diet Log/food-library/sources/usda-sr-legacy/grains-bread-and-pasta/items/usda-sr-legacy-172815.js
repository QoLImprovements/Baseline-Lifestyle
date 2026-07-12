/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "package-8-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "package-8-5-oz",
      "kind": "unit",
      "label": "package (8.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, cornbread, dry mix, unenriched (includes corn muffin mix)",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 69.5,
    "energy_kcal": 1750.0,
    "fat_g": 12.2,
    "fibre_g": 6.5,
    "folate_ug": 11.0,
    "iron_mg": 0.59,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 489.0,
    "potassium_mg": 113.0,
    "protein_g": 7.0,
    "salt_g": 2.775,
    "sat_fat_g": 3.09,
    "sodium_mg": 1110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172815",
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
