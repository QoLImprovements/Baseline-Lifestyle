/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, brown, with peas and carrots, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 22.0,
    "energy_kcal": 123.0,
    "fat_g": 2.66,
    "fibre_g": 2.0,
    "folate_ug": 14.0,
    "iron_mg": 0.64,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 99.0,
    "protein_g": 2.73,
    "salt_g": 0.4875,
    "sat_fat_g": 0.451,
    "sodium_mg": 195.0,
    "sugar_g": 1.08,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709048",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
