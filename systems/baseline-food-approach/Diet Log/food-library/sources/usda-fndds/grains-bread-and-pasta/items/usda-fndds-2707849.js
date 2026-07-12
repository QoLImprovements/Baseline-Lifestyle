/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cubic-inch",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, pumpkin",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 43.2,
    "energy_kcal": 305.0,
    "fat_g": 12.9,
    "fibre_g": 1.4,
    "folate_ug": 35.0,
    "iron_mg": 2.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 153.0,
    "protein_g": 4.97,
    "salt_g": 0.7125,
    "sat_fat_g": 2.15,
    "sodium_mg": 285.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 209.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707849",
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
