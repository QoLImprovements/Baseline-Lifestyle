/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cucumber salad made with cucumber and vinegar",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.79,
    "energy_kcal": 34.0,
    "fat_g": 0.13,
    "fibre_g": 0.5,
    "folate_ug": 6.0,
    "iron_mg": 0.07,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 137.0,
    "protein_g": 0.5,
    "salt_g": 0.59,
    "sat_fat_g": 0.027,
    "sodium_mg": 236.0,
    "sugar_g": 5.33,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 14.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709821",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "condiments-and-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
