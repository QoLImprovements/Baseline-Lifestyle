/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with carrots, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 22.6,
    "energy_kcal": 123.0,
    "fat_g": 2.42,
    "fibre_g": 1.0,
    "folate_ug": 46.0,
    "iron_mg": 0.96,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 82.0,
    "protein_g": 2.16,
    "salt_g": 0.4875,
    "sat_fat_g": 0.353,
    "sodium_mg": 195.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 205.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709002",
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
