/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cubic-inch-cornbread",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.1,
      "key": "1-cubic-inch-cornbread",
      "kind": "unit",
      "label": "1 cubic inch cornbread"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-hush-puppy",
      "kind": "unit",
      "label": "1 hush puppy"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hush puppy",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 40.2,
    "energy_kcal": 296.0,
    "fat_g": 13.2,
    "fibre_g": 2.9,
    "folate_ug": 143.0,
    "iron_mg": 2.55,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 256.0,
    "protein_g": 6.16,
    "salt_g": 2.0325,
    "sat_fat_g": 2.62,
    "sodium_mg": 813.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707819",
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
