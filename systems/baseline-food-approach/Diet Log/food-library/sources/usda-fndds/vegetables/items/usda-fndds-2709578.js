/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Collards, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 210.0,
    "carbs_g": 7.08,
    "energy_kcal": 36.0,
    "fat_g": 0.41,
    "fibre_g": 2.8,
    "folate_ug": 76.0,
    "iron_mg": 1.12,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 250.0,
    "protein_g": 2.96,
    "salt_g": 0.415,
    "sat_fat_g": 0.06,
    "sodium_mg": 166.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 573.0,
    "vitamin_c_mg": 26.3,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 621.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709578",
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
