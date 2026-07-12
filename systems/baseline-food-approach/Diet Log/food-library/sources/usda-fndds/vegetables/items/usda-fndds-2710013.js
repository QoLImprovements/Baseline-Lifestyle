/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Classic mixed vegetables, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.0,
    "energy_kcal": 65.0,
    "fat_g": 0.15,
    "fibre_g": 4.4,
    "folate_ug": 19.0,
    "iron_mg": 0.82,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 168.0,
    "protein_g": 2.85,
    "salt_g": 0.3775,
    "sat_fat_g": 0.031,
    "sodium_mg": 151.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 213.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 23.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710013",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
