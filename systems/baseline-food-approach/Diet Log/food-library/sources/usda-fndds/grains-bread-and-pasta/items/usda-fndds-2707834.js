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
  "id": "usda-fndds-2707834",
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
      "gramsPerUnit": 180.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 173.0,
    "carbs_g": 44.0,
    "energy_kcal": 372.0,
    "fat_g": 18.4,
    "fibre_g": 3.5,
    "folate_ug": 17.0,
    "iron_mg": 1.75,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 217.0,
    "potassium_mg": 195.0,
    "protein_g": 7.8,
    "salt_g": 0.9825,
    "sat_fat_g": 3.06,
    "sodium_mg": 393.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.31,
    "vitamin_k_ug": 16.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707834",
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
