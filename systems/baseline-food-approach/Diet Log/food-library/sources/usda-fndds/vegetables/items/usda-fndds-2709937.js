/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mushrooms, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.15,
    "energy_kcal": 39.0,
    "fat_g": 0.43,
    "fibre_g": 2.2,
    "folate_ug": 37.0,
    "iron_mg": 0.28,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 463.0,
    "protein_g": 3.61,
    "salt_g": 0.38,
    "sat_fat_g": 0.062,
    "sodium_mg": 152.0,
    "sugar_g": 2.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709937",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
