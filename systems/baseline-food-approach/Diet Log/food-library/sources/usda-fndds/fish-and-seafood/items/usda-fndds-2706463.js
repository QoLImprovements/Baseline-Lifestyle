/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ceviche",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 3.58,
    "energy_kcal": 63.0,
    "fat_g": 0.76,
    "fibre_g": 0.5,
    "folate_ug": 11.0,
    "iron_mg": 0.16,
    "magnesium_mg": 20.0,
    "omega3_g": 0.187,
    "phosphorus_mg": 107.0,
    "potassium_mg": 282.0,
    "protein_g": 10.5,
    "salt_g": 0.3725,
    "sat_fat_g": 0.159,
    "sodium_mg": 149.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 18.6,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706463",
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
