/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "slice-regular-crust-not-eaten",
      "kind": "unit",
      "label": "slice regular, crust not eaten"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 9.4,
      "key": "slice-thin-crust-not-eaten",
      "kind": "unit",
      "label": "slice thin, crust not eaten"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice, regular"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "slice-large-or-thick",
      "kind": "unit",
      "label": "slice, large or thick"
    }
  ],
  "name": "Bread, cracked-wheat",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 49.5,
    "energy_kcal": 1090.0,
    "fat_g": 3.9,
    "fibre_g": 5.5,
    "folate_ug": 61.0,
    "iron_mg": 2.81,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 177.0,
    "protein_g": 8.7,
    "salt_g": 1.345,
    "sat_fat_g": 0.916,
    "sodium_mg": 538.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172672",
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
