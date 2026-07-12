/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn pone, fried",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 37.8,
    "energy_kcal": 254.0,
    "fat_g": 9.78,
    "fibre_g": 1.8,
    "folate_ug": 69.0,
    "iron_mg": 2.25,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 68.0,
    "protein_g": 3.34,
    "salt_g": 1.0425,
    "sat_fat_g": 2.34,
    "sodium_mg": 417.0,
    "sugar_g": 0.76,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707817",
  "state": "Fried",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "fried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
