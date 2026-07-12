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
  "id": "usda-fndds-2707821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spoonbread",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 18.6,
    "energy_kcal": 166.0,
    "fat_g": 7.06,
    "fibre_g": 0.7,
    "folate_ug": 37.0,
    "iron_mg": 1.08,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 147.0,
    "potassium_mg": 195.0,
    "protein_g": 6.68,
    "salt_g": 0.955,
    "sat_fat_g": 2.34,
    "sodium_mg": 382.0,
    "sugar_g": 4.84,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707821",
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
