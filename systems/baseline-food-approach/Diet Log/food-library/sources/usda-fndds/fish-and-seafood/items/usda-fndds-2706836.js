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
  "id": "usda-fndds-2706836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 238.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Tuna salad, made with any type of fat free dressing",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 6.25,
    "energy_kcal": 72.0,
    "fat_g": 1.15,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.9,
    "magnesium_mg": 15.0,
    "omega3_g": 0.112,
    "phosphorus_mg": 75.0,
    "potassium_mg": 157.0,
    "protein_g": 9.6,
    "salt_g": 1.15,
    "sat_fat_g": 0.261,
    "sodium_mg": 460.0,
    "sugar_g": 4.26,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 16.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706836",
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
