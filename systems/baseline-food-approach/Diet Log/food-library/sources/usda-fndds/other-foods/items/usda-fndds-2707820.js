/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cubic-inch",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707820",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Johnnycake",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 43.8,
    "energy_kcal": 277.0,
    "fat_g": 7.46,
    "fibre_g": 1.8,
    "folate_ug": 106.0,
    "iron_mg": 2.25,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 211.0,
    "protein_g": 7.98,
    "salt_g": 2.1775,
    "sat_fat_g": 2.1,
    "sodium_mg": 871.0,
    "sugar_g": 9.1,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707820",
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
