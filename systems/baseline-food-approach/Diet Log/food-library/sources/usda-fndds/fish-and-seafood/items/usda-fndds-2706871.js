/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706871",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Codfish salad, Puerto Rican style, Serenata",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.81,
    "energy_kcal": 183.0,
    "fat_g": 15.9,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.36,
    "magnesium_mg": 17.0,
    "omega3_g": 0.046,
    "phosphorus_mg": 83.0,
    "potassium_mg": 245.0,
    "protein_g": 6.61,
    "salt_g": 1.0375,
    "sat_fat_g": 2.48,
    "sodium_mg": 415.0,
    "sugar_g": 1.51,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 3.67,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706871",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
