/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "4-cubes",
      "kind": "unit",
      "label": "4 cubes"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "package-fast-food",
      "kind": "unit",
      "label": "package, fast food"
    }
  ],
  "name": "Croutons, seasoned",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 63.5,
    "energy_kcal": 1950.0,
    "fat_g": 18.3,
    "fibre_g": 5.0,
    "folate_ug": 105.0,
    "iron_mg": 2.82,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 181.0,
    "protein_g": 10.8,
    "salt_g": 3.325,
    "sat_fat_g": 5.25,
    "sodium_mg": 1330.0,
    "sugar_g": 4.41,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172752",
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
