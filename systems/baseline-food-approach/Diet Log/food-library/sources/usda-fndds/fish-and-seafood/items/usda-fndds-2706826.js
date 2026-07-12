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
  "id": "usda-fndds-2706826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Salmon salad",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 2.73,
    "energy_kcal": 213.0,
    "fat_g": 17.4,
    "fibre_g": 0.4,
    "folate_ug": 17.0,
    "iron_mg": 0.43,
    "magnesium_mg": 19.0,
    "omega3_g": 0.576,
    "phosphorus_mg": 189.0,
    "potassium_mg": 245.0,
    "protein_g": 10.8,
    "salt_g": 1.2675,
    "sat_fat_g": 2.76,
    "sodium_mg": 507.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706826",
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
