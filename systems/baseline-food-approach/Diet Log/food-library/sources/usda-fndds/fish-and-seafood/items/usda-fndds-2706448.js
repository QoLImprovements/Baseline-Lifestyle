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
  "id": "usda-fndds-2706448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fish timbale or mousse",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 1.96,
    "energy_kcal": 149.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.176,
    "phosphorus_mg": 200.0,
    "potassium_mg": 147.0,
    "protein_g": 10.1,
    "salt_g": 0.6175,
    "sat_fat_g": 5.48,
    "sodium_mg": 247.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706448",
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
