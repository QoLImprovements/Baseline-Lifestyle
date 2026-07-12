/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-small",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
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
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, plain",
  "nutritionPerBasis": {
    "calcium_mg": 165.0,
    "carbs_g": 52.0,
    "energy_kcal": 374.0,
    "fat_g": 16.2,
    "fibre_g": 0.8,
    "folate_ug": 42.0,
    "iron_mg": 2.29,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 130.0,
    "protein_g": 5.93,
    "salt_g": 0.895,
    "sat_fat_g": 2.67,
    "sodium_mg": 358.0,
    "sugar_g": 27.5,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.79,
    "vitamin_k_ug": 14.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707841",
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
