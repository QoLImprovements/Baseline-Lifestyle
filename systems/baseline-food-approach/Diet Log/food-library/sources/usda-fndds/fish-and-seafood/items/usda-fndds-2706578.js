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
  "id": "usda-fndds-2706578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed salmon, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 8.47,
    "energy_kcal": 146.0,
    "fat_g": 7.02,
    "fibre_g": 1.3,
    "folate_ug": 15.0,
    "iron_mg": 0.84,
    "magnesium_mg": 29.0,
    "omega3_g": 0.6,
    "phosphorus_mg": 215.0,
    "potassium_mg": 401.0,
    "protein_g": 12.0,
    "salt_g": 1.12,
    "sat_fat_g": 1.06,
    "sodium_mg": 448.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706578",
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
