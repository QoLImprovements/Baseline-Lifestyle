/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707846",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-popover",
      "kind": "unit",
      "label": "1 popover"
    }
  ],
  "name": "Popover",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 35.3,
    "energy_kcal": 268.0,
    "fat_g": 9.2,
    "fibre_g": 1.1,
    "folate_ug": 63.0,
    "iron_mg": 2.81,
    "magnesium_mg": 24.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 185.0,
    "potassium_mg": 221.0,
    "protein_g": 11.0,
    "salt_g": 0.71,
    "sat_fat_g": 4.14,
    "sodium_mg": 284.0,
    "sugar_g": 4.04,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707846",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
