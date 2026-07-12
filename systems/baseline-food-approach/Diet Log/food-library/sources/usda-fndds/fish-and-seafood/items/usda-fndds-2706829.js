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
  "id": "usda-fndds-2706829",
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
  "name": "Tuna salad, made with light mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.75,
    "energy_kcal": 106.0,
    "fat_g": 5.4,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 15.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 78.0,
    "potassium_mg": 155.0,
    "protein_g": 9.78,
    "salt_g": 1.16,
    "sat_fat_g": 0.879,
    "sodium_mg": 464.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 23.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706829",
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
