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
  "id": "usda-fndds-2706719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Codfish with starchy vegetables, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 18.5,
    "energy_kcal": 135.0,
    "fat_g": 5.43,
    "fibre_g": 2.7,
    "folate_ug": 13.0,
    "iron_mg": 0.51,
    "magnesium_mg": 27.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 74.0,
    "potassium_mg": 419.0,
    "protein_g": 3.53,
    "salt_g": 0.135,
    "sat_fat_g": 0.852,
    "sodium_mg": 54.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706719",
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
