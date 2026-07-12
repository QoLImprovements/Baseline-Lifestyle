/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, crumbs, dry, grated, plain",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 72.0,
    "energy_kcal": 395.0,
    "fat_g": 5.3,
    "fibre_g": 4.5,
    "folate_ug": 107.0,
    "iron_mg": 4.83,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 196.0,
    "protein_g": 13.4,
    "salt_g": 1.83,
    "sat_fat_g": 1.2,
    "sodium_mg": 732.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 6.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174928",
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
