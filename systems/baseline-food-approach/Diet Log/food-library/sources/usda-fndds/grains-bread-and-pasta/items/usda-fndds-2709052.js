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
  "id": "usda-fndds-2709052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, brown, with dark green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 21.1,
    "energy_kcal": 120.0,
    "fat_g": 2.67,
    "fibre_g": 1.7,
    "folate_ug": 19.0,
    "iron_mg": 0.58,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 131.0,
    "protein_g": 2.67,
    "salt_g": 0.41,
    "sat_fat_g": 0.456,
    "sodium_mg": 164.0,
    "sugar_g": 0.48,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 23.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709052",
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
