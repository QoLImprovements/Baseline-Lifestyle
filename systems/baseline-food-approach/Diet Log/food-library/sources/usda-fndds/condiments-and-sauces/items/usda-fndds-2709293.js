/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709293",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Apple salad with dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 12.2,
    "energy_kcal": 180.0,
    "fat_g": 14.2,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 0.28,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 39.0,
    "potassium_mg": 148.0,
    "protein_g": 1.45,
    "salt_g": 0.2175,
    "sat_fat_g": 1.9,
    "sodium_mg": 87.0,
    "sugar_g": 9.1,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 26.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709293",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "condiments-and-sauces",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
