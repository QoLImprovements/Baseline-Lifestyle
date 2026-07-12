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
  "id": "usda-fndds-2706832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna salad, made with creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 4.02,
    "energy_kcal": 148.0,
    "fat_g": 10.3,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.96,
    "magnesium_mg": 15.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 115.0,
    "potassium_mg": 162.0,
    "protein_g": 9.98,
    "salt_g": 1.15,
    "sat_fat_g": 1.65,
    "sodium_mg": 460.0,
    "sugar_g": 2.95,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 40.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706832",
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
