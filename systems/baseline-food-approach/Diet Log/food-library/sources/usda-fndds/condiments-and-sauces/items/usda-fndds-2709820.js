/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cucumber salad, made with Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.19,
    "energy_kcal": 120.0,
    "fat_g": 9.96,
    "fibre_g": 0.5,
    "folate_ug": 6.0,
    "iron_mg": 0.09,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 123.0,
    "protein_g": 0.46,
    "salt_g": 0.5175,
    "sat_fat_g": 1.34,
    "sodium_mg": 207.0,
    "sugar_g": 4.78,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 22.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709820",
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
