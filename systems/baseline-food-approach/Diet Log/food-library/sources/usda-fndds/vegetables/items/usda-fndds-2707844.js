/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-bite-size",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Muffin, zucchini",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 42.6,
    "energy_kcal": 306.0,
    "fat_g": 13.1,
    "fibre_g": 0.9,
    "folate_ug": 38.0,
    "iron_mg": 1.93,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 164.0,
    "protein_g": 5.05,
    "salt_g": 0.725,
    "sat_fat_g": 2.17,
    "sodium_mg": 290.0,
    "sugar_g": 22.7,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.28,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707844",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
