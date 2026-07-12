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
  "id": "usda-fndds-2706834",
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
  "name": "Tuna salad, made with Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 5.35,
    "energy_kcal": 106.0,
    "fat_g": 5.08,
    "fibre_g": 0.4,
    "folate_ug": 10.0,
    "iron_mg": 0.95,
    "magnesium_mg": 15.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 78.0,
    "potassium_mg": 167.0,
    "protein_g": 9.83,
    "salt_g": 1.245,
    "sat_fat_g": 0.76,
    "sodium_mg": 498.0,
    "sugar_g": 4.25,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 23.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706834",
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
