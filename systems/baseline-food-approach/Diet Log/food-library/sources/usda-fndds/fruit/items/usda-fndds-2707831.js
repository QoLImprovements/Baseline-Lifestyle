/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-bite-size",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707831",
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
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
    }
  ],
  "name": "Muffin, fruit, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 50.0,
    "energy_kcal": 255.0,
    "fat_g": 4.22,
    "fibre_g": 4.2,
    "folate_ug": 48.0,
    "iron_mg": 2.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 125.0,
    "potassium_mg": 96.0,
    "protein_g": 4.23,
    "salt_g": 1.0325,
    "sat_fat_g": 1.55,
    "sodium_mg": 413.0,
    "sugar_g": 27.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707831",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
