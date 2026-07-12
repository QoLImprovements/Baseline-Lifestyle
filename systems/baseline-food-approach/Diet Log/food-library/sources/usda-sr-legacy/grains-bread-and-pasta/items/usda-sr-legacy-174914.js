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
  "id": "usda-sr-legacy-174914",
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
      "gramsPerUnit": 24.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice regular"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice large"
    }
  ],
  "name": "Bread, multi-grain, toasted (includes whole-grain)",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 47.1,
    "energy_kcal": 1200.0,
    "fat_g": 4.6,
    "fibre_g": 8.1,
    "folate_ug": 70.0,
    "iron_mg": 2.72,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 247.0,
    "potassium_mg": 250.0,
    "protein_g": 14.5,
    "salt_g": 1.035,
    "sat_fat_g": 0.948,
    "sodium_mg": 414.0,
    "sugar_g": 6.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174914",
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
