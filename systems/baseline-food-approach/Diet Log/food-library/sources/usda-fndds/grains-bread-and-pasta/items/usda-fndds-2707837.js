/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707837",
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
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
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
      "gramsPerUnit": 25.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Muffin, wheat bran",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 38.7,
    "energy_kcal": 208.0,
    "fat_g": 5.01,
    "fibre_g": 2.2,
    "folate_ug": 44.0,
    "iron_mg": 2.54,
    "magnesium_mg": 70.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 153.0,
    "potassium_mg": 369.0,
    "protein_g": 6.26,
    "salt_g": 0.52,
    "sat_fat_g": 2.23,
    "sodium_mg": 208.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707837",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
