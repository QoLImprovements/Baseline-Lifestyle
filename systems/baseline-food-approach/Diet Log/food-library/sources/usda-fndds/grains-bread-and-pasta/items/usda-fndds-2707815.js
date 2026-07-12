/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-patty",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn flour patty or tart, fried",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 41.2,
    "energy_kcal": 218.0,
    "fat_g": 4.64,
    "fibre_g": 3.0,
    "folate_ug": 29.0,
    "iron_mg": 2.35,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 124.0,
    "protein_g": 3.98,
    "salt_g": 1.2075,
    "sat_fat_g": 0.638,
    "sodium_mg": 483.0,
    "sugar_g": 5.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707815",
  "state": "Fried",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "fried",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
