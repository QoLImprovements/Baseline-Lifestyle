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
  "id": "usda-fndds-2706713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 304.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Shrimp creole, with rice",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 11.9,
    "energy_kcal": 123.0,
    "fat_g": 3.64,
    "fibre_g": 0.8,
    "folate_ug": 27.0,
    "iron_mg": 1.58,
    "magnesium_mg": 22.0,
    "omega3_g": 0.257,
    "phosphorus_mg": 106.0,
    "potassium_mg": 114.0,
    "protein_g": 10.1,
    "salt_g": 1.09,
    "sat_fat_g": 0.659,
    "sodium_mg": 436.0,
    "sugar_g": 0.96,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706713",
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
