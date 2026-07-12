/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2706711",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Paella with seafood",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 16.4,
    "energy_kcal": 143.0,
    "fat_g": 4.76,
    "fibre_g": 0.7,
    "folate_ug": 33.0,
    "iron_mg": 1.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 87.0,
    "potassium_mg": 112.0,
    "protein_g": 8.03,
    "salt_g": 1.5225,
    "sat_fat_g": 1.0,
    "sodium_mg": 609.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 10.6,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706711",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "fish-and-seafood",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
