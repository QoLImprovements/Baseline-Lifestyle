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
  "id": "usda-sr-legacy-172806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
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
  "name": "Bread, crumbs, dry, grated, seasoned",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 68.5,
    "energy_kcal": 383.0,
    "fat_g": 5.48,
    "fibre_g": 4.9,
    "folate_ug": 119.0,
    "iron_mg": 4.92,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 231.0,
    "protein_g": 14.1,
    "salt_g": 5.25,
    "sat_fat_g": 1.39,
    "sodium_mg": 2100.0,
    "sugar_g": 5.74,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 46.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172806",
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
