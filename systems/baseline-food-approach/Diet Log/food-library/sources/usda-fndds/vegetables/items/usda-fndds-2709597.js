/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709597",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Greens, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 164.0,
    "carbs_g": 5.59,
    "energy_kcal": 59.0,
    "fat_g": 3.24,
    "fibre_g": 2.6,
    "folate_ug": 65.0,
    "iron_mg": 1.06,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 188.0,
    "protein_g": 2.84,
    "salt_g": 0.375,
    "sat_fat_g": 0.761,
    "sodium_mg": 150.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 377.0,
    "vitamin_c_mg": 20.6,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 488.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709597",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "frozen",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
