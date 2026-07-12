/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-miniature",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
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
      "gramsPerUnit": 70.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Muffin, oat bran",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 48.3,
    "energy_kcal": 270.0,
    "fat_g": 7.4,
    "fibre_g": 4.6,
    "folate_ug": 89.0,
    "iron_mg": 4.2,
    "magnesium_mg": 157.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 376.0,
    "potassium_mg": 507.0,
    "protein_g": 7.0,
    "salt_g": 0.9825,
    "sat_fat_g": 1.09,
    "sodium_mg": 393.0,
    "sugar_g": 8.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707840",
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
