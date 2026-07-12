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
  "id": "usda-fndds-2709601",
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
  "name": "Kale, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 5.28,
    "energy_kcal": 44.0,
    "fat_g": 1.21,
    "fibre_g": 2.3,
    "folate_ug": 65.0,
    "iron_mg": 0.84,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 144.0,
    "protein_g": 2.93,
    "salt_g": 0.33,
    "sat_fat_g": 0.158,
    "sodium_mg": 132.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 17.7,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 417.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709601",
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
