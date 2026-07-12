/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2710047",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-fritter",
      "kind": "unit",
      "label": "1 fritter"
    }
  ],
  "name": "Fritter, corn",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 33.6,
    "energy_kcal": 404.0,
    "fat_g": 27.1,
    "fibre_g": 1.6,
    "folate_ug": 55.0,
    "iron_mg": 2.25,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 126.0,
    "potassium_mg": 198.0,
    "protein_g": 7.37,
    "salt_g": 0.8475,
    "sat_fat_g": 5.61,
    "sodium_mg": 339.0,
    "sugar_g": 3.03,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 4.19,
    "vitamin_k_ug": 21.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710047",
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
