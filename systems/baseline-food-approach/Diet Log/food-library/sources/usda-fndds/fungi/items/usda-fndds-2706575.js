/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish and rice with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 16.1,
    "energy_kcal": 135.0,
    "fat_g": 5.16,
    "fibre_g": 0.4,
    "folate_ug": 30.0,
    "iron_mg": 0.71,
    "magnesium_mg": 14.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 58.0,
    "potassium_mg": 86.0,
    "protein_g": 5.34,
    "salt_g": 0.7675,
    "sat_fat_g": 0.885,
    "sodium_mg": 307.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 8.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706575",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fungi",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
