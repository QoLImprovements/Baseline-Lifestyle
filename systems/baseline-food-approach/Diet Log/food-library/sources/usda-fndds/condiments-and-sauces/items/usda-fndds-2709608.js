/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mustard greens, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 3.1,
    "energy_kcal": 19.0,
    "fat_g": 0.25,
    "fibre_g": 2.8,
    "folate_ug": 70.0,
    "iron_mg": 1.12,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 139.0,
    "protein_g": 2.26,
    "salt_g": 0.3525,
    "sat_fat_g": 0.013,
    "sodium_mg": 141.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 353.0,
    "vitamin_c_mg": 13.8,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 334.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709608",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "condiments-and-sauces",
    "frozen",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
